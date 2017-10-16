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


    async updateEntryAfterInsert(id, cb) {
        var item = await MatchEntryModel.findOne({"_id": id});
    
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


        item.set("calcs.win_amt", win_amt)
        item.set("calcs.loose_amt", loose_amt)
        item.set("calcs.match_comm", match_comm)
        item.set("calcs.match_comm_type", account.match_comm_type)
        item.set("calcs.match_comm_to", match_comm_to)
        item.set("calcs.win_comm_amt", win_comm_amt)
        item.set("calcs.loose_comm_amt", loose_comm_amt)
        item.set("calcs.win_amt_subtotal", win_amt_subtotal)
        item.set("calcs.loose_amt_subtotal", loose_amt_subtotal)
        item.set("calcs.match_patti_total_per", match_patti_total_per)
        item.set("calcs.win_patti_amt", win_patti_amt)
        item.set("calcs.loose_patti_amt", loose_patti_amt)
        item.set("calcs.win_amt_grandtotal", win_amt_grandtotal)
        item.set("calcs.loose_amt_grandtotal", loose_amt_grandtotal)
        item.set("calcs.patti", account.patti)

        var matchTeams = await MatchTeamClass.list({match_id:item.match_id});

        var teams = {};
        await matchTeams.forEach(function(matchTeamitem, i1) {
            var amt = item.team_id == matchTeamitem.team_id ? item.get("calcs.win_amt_grandtotal") : -1 * item.get("calcs.loose_amt_grandtotal")
            teams[matchTeamitem.team_name] =  amt
        });

        item.set("teams", teams)
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



    async getMatchEntryGridList(args = { match_id: null, book_no: null}, cb){
        var match = {};
        if(args.match_id) {
            match['match_id'] = parseInt(args.match_id)
        }
        if(args.book_no) {
            match['book_no'] = parseInt(args.book_no)
        }

        var matchTeams = await MatchTeamClass.list({match_id:args.match_id});
   
        var project = {
            _id: 1,
            rate: 1,
            amount: 1,
            lk: 1,
            team_id: 1,
            account_id: 1,
            match_id: 1,
            match_team_id: 1,
            is_declared: 1,
            "team_name": "$team.team_name",
            "account_name": "$account.account_name",
        };

        matchTeams.forEach(function(item,i) {
            // project[item.team_name] = "$teams_data."+item.team_id;
            // project[item.team_name] = { $multiply: [ "$teams_data."+item.team_id, -1 ] }
            project[item.team_name] = { $multiply: [ "$teams."+item.team_name, -1 ] }
            
        });

        MatchEntryModel.aggregate( [ 
             {
               $match: match
           },
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

    async teamsWinLossList(args = { match_id: null, book_no: null}, cb) {
        var matchTeams = await MatchTeamClass.list({match_id:args.match_id});

        var match = {};
        if(args.match_id) {
            match['match_id'] = parseInt(args.match_id)
        }
        if(args.book_no) {
            match['book_no'] = parseInt(args.book_no)
        }

        var group = {
           _id: "$match_id",
           // total: { $sum: "$teams_data.59dc80039857c85e8d6d94a9" },
        }

         matchTeams.forEach(function(item,i) {
            // project[item.team_name] = "$teams_data."+item.team_id;
            // group[item.team_name] = { $sum: "$teams_data."+item.team_id }
             group[item.team_name] = { $sum: `$teams.${item.team_name}` }
            
        });

       var aggregate = [
            {
               $match: match
           },
           {
               $group: group
           }
       ];

       // console.log(aggregate);

       return MatchEntryModel.aggregate(aggregate).exec(cb);

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