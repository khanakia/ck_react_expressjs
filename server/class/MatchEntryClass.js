var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var Account = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var AccountClass = require('./AccountClass')
var MatchTeamClass = require('./MatchTeamClass')
const ObjectId1 = mongoose.Types.ObjectId;
module.exports = {


    async updateMatchEntryAfterInsert(id, cb) {
        var item = await MatchEntryModel.findOne({"_id": id});
        // item = item.toObject()
        

        var account = await Account.findOne({_id: item.account_id})
        var patti_aggregate = await AccountClass.getPattiAggregate(item.account_id)

        var win_amt = win_amt_subtotal= this.winAmtByLK(item.rate, item.amount, item.lk)
        var loose_amt = loose_amt_subtotal = this.looseAmtByLK(item.rate, item.amount, item.lk)
        
        var match_comm = account.match_comm;
        var match_comm_to = account.match_comm_to==null ? item.account_id : account.match_comm_to;
        var win_comm_amt = loose_comm_amt = 0
        if(item.comm_yn==true && account.match_comm_type=='entrywise') {
            // if less then book will get comm on funters winning amount else it will be zero
            win_comm_amt = match_comm < 0 ? win_amt * match_comm/100 : 0;
            // if greater then boook will pay comm on funters loss amount else it will be zero
            loose_comm_amt = (match_comm >=0) ? loose_amt * match_comm/100 : 0;

            // if it is same accoutn id then add or subtract commission and display on frontend otherwise we will add commision for third parties directly in match summary
            // so in match summary win amt or loss amt will be always without commissino we will add new entry for commission in match summary always
            if(match_comm_to == item.account_id) {
                win_amt_subtotal = win_amt_subtotal + win_comm_amt
                loose_amt_subtotal = loose_amt_subtotal - loose_comm_amt
            }
        }
        

        // Patti will be calculated on final amount after commission
        var match_patti_total_per = patti_aggregate.match;
        var win_patti_amt = (win_amt_subtotal *  match_patti_total_per / 100)
        var loose_patti_amt = (loose_amt_subtotal *  match_patti_total_per / 100)

        var win_amt_grandtotal = win_amt_subtotal - win_patti_amt
        var loose_amt_grandtotal = loose_amt_subtotal - loose_patti_amt


        item.set("win_amt", win_amt)
        item.set("loose_amt", loose_amt)
        item.set("win_amt_subtotal", win_amt_subtotal)
        item.set("loose_amt_subtotal", loose_amt_subtotal)
        item.set("match_comm", match_comm)
        item.set("match_comm_type", account.match_comm_type)
        item.set("match_comm_to", match_comm_to)
        item.set("win_comm_amt", win_comm_amt)
        item.set("loose_comm_amt", loose_comm_amt)
        item.set("match_patti_total_per", match_patti_total_per)
        item.set("win_patti_amt", win_patti_amt)
        item.set("loose_patti_amt", loose_patti_amt)
        item.set("win_amt_grandtotal", win_amt_grandtotal)
        item.set("loose_amt_grandtotal", loose_amt_grandtotal)
        item.set("patti", account.patti)

        var matchTeams = await MatchTeamClass.list({match_id:item.match_id});

        await matchTeams.forEach(function(matchTeamitem, i1) {
            // console.log(matchTeamitem.team_name)
            var amt = item.team_id == matchTeamitem.team_id ? item.get("win_amt_grandtotal") : -1 * item.get("loose_amt_grandtotal")
            // item[matchTeamitem.team_name] = item.team_id.equals(matchTeamitem.team_id) ? item.win_amt : item.loose_amt
            // console.log(amt)

            item.set(matchTeamitem.team_name, amt)
            // console.log(item)
        });

        // console.log(item)

        item.save(cb)
    },


    // async buildNetComm(args = { match_id: null, book_no: null}) {
    //     var matchTeams = await MatchTeamClass.list({match_id:args.match_id});

    //     var match = {};
    //     if(args.match_id) {
    //         match['match_id'] = ObjectId1(args.match_id)
    //     }
    //     if(args.book_no) {
    //         match['book_no'] = args.book_no
    //     }

    //     var group = {
    //         _id: {
    //             "match_id" : "$match_id",
    //             "account_id" : "$account_id"
    //         },
    //         "account_id" : { $first: "$account_id"  }
    //     }

    //     var project = {
    //          "match_comm": "$account.match_comm"
    //     }

    //    var aggregate = [
    //         {
    //            $match: match
    //        },
    //        {
    //            $group: group
    //        },
    //          {
    //             $lookup:
    //             {
    //                from: "accounts",
    //                localField: "account_id",
    //                foreignField: "_id",
    //                as: "account"
    //             }
    //         },
    //         {
    //             $unwind:"$account"
    //         },
    //         {
    //             $project: project
    //         }

    //    ];

    //    console.log(aggregate);

    //     return MatchEntryModel.aggregate(aggregate);
    // },



    // updateMatchEntry1: function(id, cb) {
    //     var _this = this;
    //     async.waterfall([
    //         function(next){
    //             MatchEntryModel.findOne({"_id": id}).exec(next);
    //         },
    //         function(matchEntry, next){
    //             // Account.findOne({_id: matchEntry.account_id}).exec(function(err, account){
    //             //   next(null, matchEntry, account)  
    //             // })
    //             // next(null, matchEntry.account_id)
    //             async.parallel({
    //                 // await _this.sayHelloInSpanish()
    //                 modelAFind: function (cb){ Account.findOne({_id: matchEntry.account_id}).exec(cb); },
    //                 modelBFind: function (cb){ AccountClass.getPattiTotalPercentage("59da24d61ae1d43d7373744c", cb); }
    //             }, function(err, result){
    //                 var account = result.modelAFind;
    //                 account.dataB = result.modelBFind;
    //                 next(null, matchEntry, account)
    //             });
    //         },
    //         function(matchEntry, account, next){
    //             var win_amt = _this.winAmtByLK(matchEntry.rate, matchEntry.amount, matchEntry.lk)
    //             var loose_amt = _this.looseAmtByLK(matchEntry.rate, matchEntry.amount, matchEntry.lk)
    //             var match_comm_amt = _this.matchCommAmt(account.match_comm, win_amt, loose_amt)
    //             var lk_comm_amt = _this.lkCommAmt(account.lk_comm, win_amt, loose_amt)
    //             var tfr_match_comm_amt = _this.matchCommAmt(account.tfr_match_comm, win_amt, loose_amt)
    //             var tfr_lk_comm_amt = _this.lkCommAmt(account.tfr_lk_comm, win_amt, loose_amt)

    //             matchEntry.set("win_amt", win_amt)
    //             matchEntry.set("loose_amt", loose_amt)
    //             matchEntry.set("match_comm", account.match_comm);
    //             matchEntry.set("lk_comm", account.lk_comm);
    //             matchEntry.set("match_comm_amt", match_comm_amt);
    //             matchEntry.set("lk_comm_amt", lk_comm_amt);
    //             matchEntry.set("tfr_comm_to", account.tfr_comm_to);
    //             matchEntry.set("tfr_match_comm_amt", tfr_match_comm_amt);
    //             matchEntry.set("tfr_lk_comm_amt", tfr_lk_comm_amt);


    //             var win_amt_after_comm = account.match_comm<0 ? win_amt + match_comm_amt : win_amt;
    //                 win_amt_after_comm = account.lk_comm<0 ? win_amt_after_comm + lk_comm_amt : win_amt_after_comm;
                
    //             var loose_amt_after_comm = account.match_comm>0 ? loose_amt + match_comm_amt : loose_amt;
    //                 loose_amt_after_comm = account.lk_comm>0 ? loose_amt_after_comm + match_comm : loose_amt_after_comm;
                
    //             matchEntry.set("win_amt_after_comm", win_amt_after_comm  );
    //             matchEntry.set("loose_amt_after_comm", loose_amt_after_comm  );

    //             matchEntry.aman = "dsfsd"
    //             next(null, matchEntry)
    //         }
          
    //     ], cb);
    // },

    winAmtByLK(rate, amount, mode) {
        if(mode == "L") {
            return amount * rate;
        } else {
            return amount;
        }
    },

    looseAmtByLK(rate, amount, mode) {
        if(mode == "L") {
            return amount;
        } else {
            return amount * rate;
        }
    },

    // matchCommAmt(comm, win_amt, loose_amt) {
    //     if ( comm >= 0 ) {
    //         // Yeah, it's positive
    //         return loose_amt * comm/100;
    //     } else {
    //         return  win_amt * comm/100;
    //     }
    // },

    // lkCommAmt(comm, win_amt, loose_amt) {
    //     if ( comm > 0 ) {
    //         // Yeah, it's positive
    //         return loose_amt * comm/100;
    //     } else {
    //         return win_amt * comm/100;
    //     }
    // },



    async getMatchEntryGridList(match_id, cb){
        
        var matchTeams = await MatchTeamClass.list({match_id:match_id});
   
        var project = {
            _id: 1,
            rate: 1,
            amount: 1,
            lk: 1,
            team_id: 1,
            account_id: 1,
            match_id: 1,
            is_declared: 1,
            "team_name": "$team.team_name",
            "account_name": "$account.account_name",
        };

        matchTeams.forEach(function(item,i) {
            // project[item.team_name] = "$teams_data."+item.team_id;
            // project[item.team_name] = { $multiply: [ "$teams_data."+item.team_id, -1 ] }
            project[item.team_name] = { $multiply: [ "$"+item.team_name, -1 ] }
            
        });

        MatchEntryModel.aggregate( [ 
            {
                $lookup:
                {
                   from: "teams",
                   localField: "team_id",
                   foreignField: "_id",
                   as: "team"
                }
            },
            {
                $unwind:"$team"
            },
            {
                $lookup:
                {
                   from: "accounts",
                   localField: "account_id",
                   foreignField: "_id",
                   as: "account"
                }
            },
            {
                $unwind:"$account"
            },
            { 
                $project : project
            } 
        ], cb )
    },

    async getTeamsWinLossList(args = { match_id: null, book_no: null}) {
        var matchTeams = await MatchTeamClass.list({match_id:args.match_id});

        var match = {};
        if(args.match_id) {
        match['match_id'] = ObjectId1(args.match_id)
        }
        if(args.book_no) {
        match['book_no'] = args.book_no
        }

        var group = {
           _id: "$match_id",
           // total: { $sum: "$teams_data.59dc80039857c85e8d6d94a9" },
        }

         matchTeams.forEach(function(item,i) {
            // project[item.team_name] = "$teams_data."+item.team_id;
            // group[item.team_name] = { $sum: "$teams_data."+item.team_id }
             group[item.team_name] = { $sum: `$${item.team_name}` }
            
        });

       var aggregate = [
            {
               $match: match
           },
           {
               $group: group
           }
       ];

       console.log(aggregate);

        return MatchEntryModel.aggregate(aggregate);

    },


    async remove(id, cb) {
        try {
            var matchEntry = await MatchEntryModel.findOne({"_id": id});
            if(matchEntry && matchEntry.is_declared==false) {
                matchEntry.remove(cb)
            } else {
                cb(new Error('Cannot remove item.'), null)
            }
        }
        catch (e) {
           cb(new Error('Cannot remove item.'), null)
        }
        
    },

    // HOW TO USE
    // DbClass.sayHelloInSpanish1().then(function(data){
    //     res.send(data)
    // })
    async sayHelloInSpanish1() {
      var obj = await new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve({a:42});
        },100);
      });
      return obj;
    },

};