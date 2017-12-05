var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var round = require('mongo-round');

const ObjectId1 = mongoose.Types.ObjectId;
var AccountModel = require('../model/AccountModel')
var MatchModel = require('../model/MatchModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var AccountClass = require('./AccountClass')
var MatchTeamClass = require('./MatchTeamClass')
var ActivityLogClass = require('../class/ActivityLogClass')
// var ResponseHelper = require('../class/ResponseHelper')

module.exports = {

    async save(item, id=null) {

        // var canbidItem = await AccountClass.canBid(item.account_id, item.amount)

        // // return canbidItem;
        // if(!canbidItem.canBid) {
        //     throw(ResponseHelper.error(400, 'Limit Exceeded.', 'can_bid', canbidItem))
        // }

        // return item;
        var match = await MatchModel.findOne({_id: item.match_id})
        if(match.is_declared) {
            throw(ResponseHelper.error(400, 'Match is declared already.'))
        }

        if(match.is_abandoned) {
            throw(ResponseHelper.error(400, 'Match is abandoned already.'))
        }

        if(id) {
             try {
                item.updated_at = Date.now()
                let matchEntry = await MatchEntryModel.findOneAndUpdate({_id: id}, item);
                await this.updateEntryAfterInsert(id)
                await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH_ENTRY, action: Constant.ACTIVITY_ACTION.UPDATED, id: matchEntry._id })
                return matchEntry
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        } else {
            try {
                let matchEntry = new MatchEntryModel(item)
                await matchEntry.save();
                await this.updateEntryAfterInsert(matchEntry._id)
                await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH_ENTRY, action: Constant.ACTIVITY_ACTION.CREATED, id: matchEntry._id })
                return matchEntry
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        }

        return ResponseHelper.ok(200, 'Successfully saved.','',{item})
    },

    

    // Run this function whenever any account is updateds
    async updateEntriesByAccount(accountId) {
        var matchEntries = await MatchEntryModel.find({account_id: accountId, is_summarized: {$in: [null, false]}})
        matchEntries.map( async (matchEntry, i) => {
            // console.log(matchEntry._id)
            await this.updateEntryAfterInsert(matchEntry.id)
        })
    },


    async updateEntryAfterInsert(id, cb) {
        var item = await MatchEntryModel.findOne({"_id": id});

    
        var account = await AccountModel.findOne({_id: item.account_id})
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
            book_no : 1,
            is_summarized: 1,
            "team_name": "$team.team_name",
            "account_name": "$account.account_name",
            created_at: 1,
            updated_at: 1,
            comm_yn: 1,
        };

        matchTeams.forEach(function(item,i) {
            // project[item.team_name] = "$teams_data."+item.team_id;
            // project[item.team_name] = { $multiply: [ "$teams_data."+item.team_id, -1 ] }
            project[item.team_name] = round({ $multiply: [ "$teams."+item.team_name, -1 ] }, 2)
            
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

    async beforeDeclarationList(args = { match_id: null}){
        var match = {};
        if(args.match_id) {
            match['match_id'] = parseInt(args.match_id)
        }

        var matchTeams = await MatchTeamClass.list({match_id:args.match_id});
   
        // var project = {
        //     _id: 1,
        //     match_id: 1,
        //     match_name: 1,
        //     account_id: 1,
        //     "account_name": "$account_name",
        //     team_id: 1,
        //     "team_name": "$team_name",
        // };

        // matchTeams.forEach(function(item,i) {
        //     project[item.team_name] = { $multiply: [ "$teams."+item.team_name, -1 ] }
        // });



        var group = {
           _id: {
                match_id: "$match_id",
                account_id: "$account_id",
           },

            "match_id": { $first: "$match_id" },
            "account_id": { $first: "$account_id" },
            "account_name": { $first: "$account.account_name" },
        }

         matchTeams.forEach(function(item,i) {
            group[item.team_name] = { $sum: "$teams."+item.team_name }
        });

         // return group;


        return MatchEntryModel.aggregate( [ 
            {
               $match: match
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
               $group: group
            },

            // { 
            //     $project : project
            // } 
        ])
    },

    async teamsWinLossList(args = { match_id: null, book_no: null, account_id: null}, cb) {
        var matchTeams = await MatchTeamClass.list({match_id:args.match_id});

        var match = {};
        if(args.match_id) {
            match['match_id'] = parseInt(args.match_id)
        }
        if(args.book_no) {
            match['book_no'] = parseInt(args.book_no)
        }

        if(args.account_id) {
            match['account_id'] = parseInt(args.account_id)
        }

        var group = {
           _id: "$match_id",
           // total: { $sum: "$teams_data.59dc80039857c85e8d6d94a9" },
        }

        matchTeams.forEach(function(item,i) {
             // group[item.team_name] = { $sum: `$teams.${item.team_name}` }
             group[item.team_id] = { $sum: `$teams.${item.team_name}` } 
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
        var entries = await MatchEntryModel.aggregate(aggregate);
        // console.log(entries)

        var teamArray = []
        matchTeams.map((item, i) => {
            var amount = entries[0] ? entries[0][item.team_id] : 0
            teamArray.push({
                '_id' : item._id,
                'team_id' : item.team_id,
                'team_name' : item.team_name,
                'status' : item.status,
                'is_declared' : item.is_declared,
                'amount' : amount
            })
        })
       return cb(null, teamArray)

    },

    async lastEntryAccountTeamsWinLossList(args = { match_id: null, book_no: null, account_id: null}, cb) {
        var matchEntry = await MatchEntryModel.find({match_id: args.match_id, book_no: args.book_no}).limit(1).sort({$natural:-1})
        args.account_id = matchEntry[0] ? matchEntry[0].account_id : null
        
        // return cb(null, matchEntry)
        this.teamsWinLossList(args, cb)
    },


    async remove(id, cb) {
        var matchEntry = await MatchEntryModel.findOne({"_id": id});

        var match = await MatchModel.findOne({_id: matchEntry.match_id})
        if(match.is_declared) {
            throw(ResponseHelper.error(400, 'Match is declared already.'))
        }

        if(match.is_abandoned) {
            throw(ResponseHelper.error(400, 'Match is abandoned already.'))
        }

        if(matchEntry && matchEntry.is_summarized==false) {
            try {
                await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH_ENTRY, action: Constant.ACTIVITY_ACTION.REMOVED, id: matchEntry._id })
                matchEntry.remove(cb)
            }
            catch (e) {
               throw(ResponseHelper.error(400, 'Cannot remove.'))
            }
        } else {
            throw(ResponseHelper.error(400, 'Match Entry is declared already.'))
        }
    },


    async getLossAmountByAccountId(acccountId) {
         var matchEntry = await MatchEntryModel.aggregate([

            {
                $match:  {
                    account_id: parseInt(acccountId),
                    is_summarized: false
                }
            },
            { 
                $group: { 
                    _id: null, 
                    favteam_amt_grandtotal: { $sum: "$calcs.favteam_amt_grandtotal" } ,
                    otherteam_amt_grandtotal: { $sum: "$calcs.otherteam_amt_grandtotal" } 
                } 
            }
        ]);
       return matchEntry[0] ? matchEntry[0]['favteam_amt_grandtotal'] + matchEntry[0]['otherteam_amt_grandtotal'] : 0
    }

    // HOW TO USE
    // DbClass.sayHelloInSpanish1().then(function(data){
    //     res.send(data)
    // })
    // async sayHelloInSpanish1() {
    //   var obj = await new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //       resolve({a:42});
    //     },100);
    //   });
    //   return obj;
    // },

};