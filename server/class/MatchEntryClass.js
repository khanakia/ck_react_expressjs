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

    // Run this function whenever any account is updateds
    async updateEntriesByAccount(accountId) {
        var matchEntries = await MatchEntryModel.find({account_id: accountId, is_summarized: {$in: [null, false]}})
        matchEntries.map( async (matchEntry, i) => {
            console.log(matchEntry._id)
            await this.updateEntryAfterInsert(matchEntry.id)
        })
    },


    async updateEntryAfterInsert(id, cb) {
        var item = await MatchEntryModel.findOne({"_id": id});
    
        var account = await Account.findOne({_id: item.account_id})
        var patti_aggregate = await AccountClass.getPattiAggregate(item.account_id)

        // We assume fav team will always win so if fav team wins then we are calculating that funter will get or loose money if fav wins
        var favteam_amt = favteam_subtotal = item.lk=="L" ? item.rate * item.amount : -1 * item.rate * item.amount

        // We assum that if other teams wins that will futner win or loose other than Fav team
        var otherteam_amt = otherteam_subtotal = item.lk=="L" ? -1 * item.amount : item.amount


        var match_comm = account.match_comm;
        var fav_comm_amt = otherteam_comm_amt = 0
        var match_comm_to = account.match_comm_to==null ? item.account_id : account.match_comm_to;
        if(item.comm_yn==true && account.match_comm_type=='entrywise') {

            // Funter will get commission if he has lose
            if(match_comm>0 && favteam_amt<0) {
                fav_comm_amt = Math.abs(favteam_amt * match_comm/100)
            }

            // Funter will pay commission if he has profit
            if(match_comm<0 && favteam_amt>0) {
                fav_comm_amt = -1 * (favteam_amt * match_comm/100)
            }

            // Commissin Calculation if other teams wins and if funter is in profit or loss for particular entry
            // Funter will get commission if he has lose
            if(match_comm>0 && otherteam_amt<0) {
                otherteam_comm_amt = Math.abs(otherteam_amt * match_comm/100)
            }

            // Funter will pay commission if he has profit
            if(match_comm<0 && otherteam_amt>0) {
                otherteam_comm_amt = -1* (otherteam_amt * match_comm/100)
            }

            // if it is same accoutn id then add or subtract commission and display on frontend otherwise we will add commision for third parties directly in match summary
            // so in match summary win amt or loss amt will be always without commissino we will add new entry for commission in match summary always
            if(match_comm_to == item.account_id) {
                favteam_subtotal = favteam_subtotal + fav_comm_amt
                otherteam_subtotal = otherteam_subtotal + otherteam_comm_amt
            }
        }


         // // Patti will be calculated on final amount after commission
        var match_patti_total_per = patti_aggregate.match;
        var favteam_patti_amt = (favteam_subtotal *  match_patti_total_per / 100)
        var otherteam_patti_amt = (otherteam_subtotal *  match_patti_total_per / 100)

        var favteam_amt_grandtotal = favteam_subtotal - favteam_patti_amt
        var otherteam_amt_grandtotal = otherteam_subtotal - otherteam_patti_amt

        item.set("calcs.favteam_amt", favteam_amt)
        item.set("calcs.otherteam_amt", otherteam_amt)
        item.set("calcs.match_comm", match_comm)
        item.set("calcs.match_comm_type", account.match_comm_type)
        item.set("calcs.match_comm_to", match_comm_to)
        item.set("calcs.fav_comm_amt", fav_comm_amt)
        item.set("calcs.otherteam_comm_amt", otherteam_comm_amt)
        item.set("calcs.favteam_subtotal", favteam_subtotal)
        item.set("calcs.otherteam_subtotal", otherteam_subtotal)
        item.set("calcs.match_patti_total_per", match_patti_total_per)
        item.set("calcs.favteam_patti_amt", favteam_patti_amt)
        item.set("calcs.otherteam_patti_amt", otherteam_patti_amt)
        item.set("calcs.favteam_amt_grandtotal", favteam_amt_grandtotal)
        item.set("calcs.otherteam_amt_grandtotal", otherteam_amt_grandtotal)



        var matchTeams = await MatchTeamClass.list({match_id:item.match_id});

        var teams = {};
        await matchTeams.forEach(function(matchTeamitem, i1) {
            // var amt = item.team_id == matchTeamitem.team_id ? item.get("calcs.win_amt_grandtotal") : -1 * item.get("calcs.loose_amt_grandtotal")
            var amt = item.team_id == matchTeamitem.team_id ? favteam_amt_grandtotal : otherteam_amt_grandtotal
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