var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var Constant = require('../Constant')
const ObjectId1 = mongoose.Types.ObjectId;

var Account = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchSummaryModel = require('../model/MatchSummaryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var JournalModel = require('../model/JournalModel')
var JournalEntryModel = require('../model/JournalEntryModel')

var SessionModel = require('../model/SessionModel')
var SessionEntryModel = require('../model/SessionEntryModel')
module.exports = {

    //  SESSION DECLARE FUNCTIONS ======================================================

    async session_declare(sessionId) {
        await this.session_updateFinalWinLossAmt_bySession(sessionId)
        await this.session_buildJournal(sessionId)
    },

    // This will fire if session updates in Member Account while session is not declared if session declared then it will not affect that entry
    async session_updateFinalWinLossAmt_onAccountUpdate(accounId) {
        var sessionEntries = await SessionEntryModel.find({account_id:accountId, is_declared: {$in: [null, false]}})
        sessionEntries.map( async (item,i) => {
            await this.session_updateFinalWinLossAmt(item._id)
        })
    },


    async session_updateFinalWinLossAmt_bySession(sessionId) {
        var sessionEntries = await SessionEntryModel.find({session_id:sessionId})
        sessionEntries.map( async (item,i) => {
            await this.session_updateFinalWinLossAmt(item._id)
        })
    },

    /* this will get session result and then update the win or loss amt in the final column which we will sum and group by account later 
        and create journal from that final amount column */
    async session_updateFinalWinLossAmt(sessionEntryId) {

        var sessionEntry = await SessionEntryModel.findOne({_id: parseInt(sessionEntryId)})
        var session = await SessionModel.findOne({_id: parseInt(sessionEntry.session_id)})
            
        if(session.is_declared && session.declared_runs!==null) {

            var declared_runs = parseInt(session.declared_runs);

            // Assume Deafult is looser
            var final_amount = -1 * sessionEntry.amount

            // if yes then funter is winner else looser
            if((sessionEntry.yn=="Y" && sessionEntry.runs<=declared_runs) || (sessionEntry.yn=="N" && sessionEntry.runs > declared_runs)){
                final_amount = sessionEntry.rate * sessionEntry.amount
            } 

            sessionEntry.final_amount = final_amount
            sessionEntry.is_declared = true
            return sessionEntry.save()
        }

        return false;
    },



    async session_buildJournal(sessionId, cb) {      
        var session = await SessionModel.findOne({_id: parseInt(sessionId)})
        
        var project = {
            "match_id" : 1,
            "account_id" : 1,
            "amount" : 1,
            "final_amount" : 1,
            "match_name": 1,
        }
  
        var sessionEntries = await SessionEntryModel.aggregate([
            {
                 $match: {
                     "session_id" : parseInt(sessionId),
                 }
            },
             {
                 $lookup: {
                     from: "matches",
                     localField: "match_id",
                     foreignField: "_id",
                     as: "match"
                 }
             },
             {
                 $unwind: "$match"
             },
            {
               $group: {
                 _id: {
                    "account_id" : "$account_id",
                },
                "match_name" : { $first: "$match.match_name" },
                "match_id" : { $first: "$match_id"  },
                "account_id" : { $first: "$account_id"  },
                "final_amount" : { $sum: "$final_amount" },
                "amount" : { $sum: "$amount" },
                

               }
            },
            {
                $project: project
            }
        ])



        // cb(null, matchEntries)

        var journalItem = new JournalModel({
            match_id : session.match_id,
            ref_id : session._id,
            ref_type: "Session"
        })

        await journalItem.save()
        
        sessionEntries.map( async (sessionEntry, i) => {
            console.log(sessionEntry)
            var final_amount = sessionEntry.final_amount
            
            var narration = ` (Match: ${sessionEntry.match_id} - ${sessionEntry.match_name}) (Session: ${session._id} - ${session.session_name})`

            // Distribute Profit
            var jentryItem = new JournalEntryModel({
                journal_id : journalItem._id,
                account_id: sessionEntry.account_id,
                dr_amt: 0,
                cr_amt: 0,
                bal: 0,
            })

            if(final_amount >0) {
                jentryItem.cr_amt = Math.abs(final_amount);
            } else {
                jentryItem.dr_amt = Math.abs(final_amount);
            }
            jentryItem.bal = jentryItem.dr_amt - jentryItem.cr_amt
            jentryItem.narration = "PL -" + narration
            await jentryItem.save()


            // Distribute Commission
            var account = await Account.findOne({_id: parseInt(sessionEntry.account_id)})

            var jentryItem1 = new JournalEntryModel({
                journal_id : journalItem._id,
                account_id: account.match_comm_to,
                dr_amt: 0,
                cr_amt: 0,
                bal: 0
            }) 

            var comm_amt = Math.abs(sessionEntry.amount * account.sess_comm/100);
            if(account.sess_comm > 0) {
                jentryItem1.cr_amt = comm_amt
            }
            if(account.sess_comm < 0) {
                jentryItem1.cr_amt = comm_amt
            }
            jentryItem1.narration = "Commission -" + narration
            jentryItem1.bal = jentryItem1.dr_amt - jentryItem1.cr_amt
            await jentryItem1.save()


            // Distribute Patti
            var patti_final_amount = jentryItem.bal + jentryItem1.bal
            Promise.all(account.patti.map(async (item) => {
                var jentryItem2 = new JournalEntryModel({
                    journal_id : journalItem._id,
                    account_id: item.account_id,
                    dr_amt: 0,
                    cr_amt: 0,
                    bal: 0
                })
                var patti_amt = patti_final_amount * item.match/100
                jentryItem2.dr_amt = patti_amt < 0 ? patti_amt : 0;
                jentryItem2.cr_amt = patti_amt > 0 ? patti_amt : 0;
                jentryItem2.bal = jentryItem2.dr_amt - jentryItem2.cr_amt
                jentryItem2.narration = "Patti -" + narration
                return await jentryItem2.save();
            }))
            
            
        })

        // console.log('matchTeamId', matchTeamId)
        await SessionEntryModel.updateMany({session_id: parseInt(sessionId)}, {is_summarized:true}) 
        // return cb(null, 'done')
    },


    //  MATCH DECLARE FUNCTIONS ======================================================

    async cleanUndeclaredData(matchId) {
        var matchTeams = await MatchTeamModel.find({match_id: matchId, is_declared: false})
        matchTeams.map( async (matchTeam,i) => {
            // await this.cLeanTeamJournal(matchId, matchTeam.team_id)
            // await MatchSummaryModel.remove({"ref_id": matchTeam._id, "ref_type": Constant.MATCH_SUMMARY_REFTYPE.MATCH_TEAM});


            var journalItems = await JournalModel.find({
                ref_id : parseInt(matchTeam._id),
                ref_type: "Match Team"
            })
            journalItems.map( async (item, i) => {
                await JournalEntryModel.remove({"journal_id": item._id});
                await item.remove()
            })

            await MatchEntryModel.updateMany({"match_team_id": matchTeam._id}, {"is_summarized": false});
        })
    },

    async buildMatchJournal(matchId, cb) {
        var self = this;
        await this.cleanUndeclaredData(matchId)
        var matchTeams = await MatchTeamModel.find({match_id: matchId, is_declared: true})
        matchTeams.map( async (matchTeam,i) => {
            await this.buildByMatchTeam(matchTeam._id, matchTeam.status,()=>null)
        })

        cb(null, 'done')
    },


    async buildByMatchTeam(matchTeamId, matchTeamStatus, cb) {

        var matchTeam = await MatchTeamModel.findOne({_id: parseInt(matchTeamId)})
        // await JournalModel.remove({});
        // await JournalEntryModel.remove({});
        var project = {
            "match_id" : 1,
            "team_id" : 1,
            "account_id" : 1,
            "favteam_subtotal" : 1,
            "otherteam_subtotal" : 1,
            "favteam_pos" : 1,
            "favteam_neg" : 1,
            "otherteam_pos" : 1,
            "otherteam_neg" : 1,
            "match_name": 1,
            "team_name": 1,
            // "favteam_pos": {$cond: [{$gt: ['$calcs.favteam_subtotal', 20000]}, '$calcs.favteam_subtotal', 0]},
            // "favteam_neg": {$cond: [{$lt: ['$calcs.favteam_subtotal', 0]}, '$calcs.favteam_subtotal', 0]},
            // "otherteam_pos": {$cond: [{$gt: ['$calcs.otherteam_subtotal', 0]}, '$calcs.otherteam_subtotal', 0]},
            // "otherteam_neg": {$cond: [{$lt: ['$calcs.otherteam_subtotal', 0]}, '$calcs.otherteam_subtotal', 0]}

        }
  

        var matchEntries = await MatchEntryModel.aggregate([
            {
                 $match: {
                     "match_team_id" : parseInt(matchTeamId),
                     // "is_summarized": {$in: [null, false]}
                 }
            },
            {
                 $lookup: {
                     from: "teams",
                     localField: "team_id",
                     foreignField: "_id",
                     as: "team"
                 }
             },
             {
                 $unwind: "$team"
             },
             {
                 $lookup: {
                     from: "matches",
                     localField: "match_id",
                     foreignField: "_id",
                     as: "match"
                 }
             },
             {
                 $unwind: "$match"
             },
            {
               $group: {
                 _id: {
                    "match_team_id" : "$match_team_id",
                    "account_id" : "$account_id",
                },
                "team_name" : { $first: "$team.team_name" },
                "match_name" : { $first: "$match.match_name" },
                "match_id" : { $first: "$match_id"  },
                "team_id" : { $first: "$team_id"  },
                "account_id" : { $first: "$account_id"  },
                "favteam_subtotal" : { $sum: "$calcs.favteam_subtotal" },
                "otherteam_subtotal" : { $sum: "$calcs.otherteam_subtotal" },
                'favteam_pos': { 
                        '$sum': {
                            '$cond': [
                                { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                '$calcs.favteam_subtotal', 
                                0
                            ]
                        }
                    },
                'favteam_neg': { 
                        '$sum': {
                            '$cond': [
                                { '$lt': ['$calcs.favteam_subtotal', 0]}, 
                                '$calcs.favteam_subtotal', 
                                0
                            ]
                        }
                    },  
                'otherteam_pos': { 
                        '$sum': {
                            '$cond': [
                                { '$gt': ['$calcs.otherteam_subtotal', 0]}, 
                                '$calcs.otherteam_subtotal', 
                                0
                            ]
                        }
                    },
                'otherteam_neg': { 
                        '$sum': {
                            '$cond': [
                                { '$lt': ['$calcs.otherteam_subtotal', 0]}, 
                                '$calcs.otherteam_subtotal', 
                                0
                            ]
                        }
                    },        
                // "favteam_pos" : { $sum: "$favteam_pos" },
                // "favteam_neg" : { $sum: "$favteam_neg" },
                // "otherteam_pos" : { $sum: "$otherteam_pos" },
                // "otherteam_neg" : { $sum: "$otherteam_neg" },

               }
            },
            {
                $project: project
            }
        ])


        // cb(null, matchEntries)

        var journalItem = new JournalModel({
            match_id : matchTeam.match_id,
            ref_id : matchTeamId,
            ref_type: "Match Team"
        })

        await journalItem.save()
        
        matchEntries.map( async (matchEntry, i) => {
            var amount = matchTeamStatus=="Winner" ? matchEntry.favteam_subtotal : matchEntry.otherteam_subtotal;
            var amount_pos = matchTeamStatus=="Winner" ? matchEntry.favteam_pos : matchEntry.otherteam_pos;
            var amount_neg = matchTeamStatus=="Winner" ? matchEntry.favteam_neg : matchEntry.otherteam_neg;

            var narration = ` (Match: ${matchEntry.match_name}) (Team: ${matchEntry.team_name})`

            // Distribute Profit
            var jentryItem = new JournalEntryModel({
                journal_id : journalItem._id,
                account_id: matchEntry.account_id,
                dr_amt: 0,
                cr_amt: 0,
                bal: 0,
            })
            if(amount >0) {
                jentryItem.cr_amt = Math.abs(amount);
            } else {
                jentryItem.dr_amt = Math.abs(amount);
            }
            jentryItem.bal = jentryItem.dr_amt - jentryItem.cr_amt
            jentryItem.narration = "PL -" + narration
            await jentryItem.save()


            // Distribute Commission
            var account = await Account.findOne({_id: parseInt(matchEntry.account_id)})

            var jentryItem1 = new JournalEntryModel({
                journal_id : journalItem._id,
                account_id: account.match_comm_to,
                dr_amt: 0,
                cr_amt: 0,
                bal: 0
            })
            
            if(account.match_comm_type=="entrywise") {
                console.log("ENTRY")
                if(account.match_comm > 0) {
                    jentryItem1.cr_amt = Math.abs(amount_neg) * account.match_comm/100;
                }
                if(account.match_comm < 0) {
                    jentryItem1.cr_amt = Math.abs(amount_pos) * account.match_comm/100;
                }
                jentryItem1.narration = "Commission - Entrywise" + narration

            } else {
                if(account.match_comm > 0 && amount < 0) {
                    jentryItem1.cr_amt = Math.abs(amount) * account.match_comm/100;
                }

                if(account.match_comm < 0 && amount > 0) {
                    jentryItem1.dr_amt = Math.abs(amount) * account.match_comm/100;
                }
                jentryItem1.narration = "Commission - NET" + narration
            }
            
            jentryItem1.bal = jentryItem1.dr_amt - jentryItem1.cr_amt
            await jentryItem1.save()


            // Distribute Patti

            var final_amount = jentryItem.bal + jentryItem1.bal
            Promise.all(account.patti.map(async (item) => {
                console.log(item._id)
                var jentryItem2 = new JournalEntryModel({
                    journal_id : journalItem._id,
                    account_id: item.account_id,
                    dr_amt: 0,
                    cr_amt: 0,
                    bal: 0
                })
                
                
                var patti_amt = final_amount * item.match/100
                jentryItem2.dr_amt = patti_amt < 0 ? patti_amt : 0;
                jentryItem2.cr_amt = patti_amt > 0 ? patti_amt : 0;
                jentryItem2.bal = jentryItem2.dr_amt - jentryItem2.cr_amt
                jentryItem2.narration = "Patti -" + narration
                return await jentryItem2.save();
            }))
            
            
        })


        // console.log('matchTeamId', matchTeamId)
        await MatchEntryModel.updateMany({match_team_id: parseInt(matchTeamId)}, {is_summarized:true})
 

       return cb(null, 'done')
    },





    // async buildMatchSummary(matchId) {
    //     var self = this;
    //     await this.cleanSummaryTypeTeam(matchId)
    //     var matchTeams = await MatchTeamModel.find({match_id: matchId, is_declared: true})
    //     matchTeams.forEach( async (matchTeam,i) => {

    //       async.waterfall([
    //           function(next) {
    //                 self.buildByMatchTeam(matchTeam._id, matchTeam.status)
    //                 next(null)
    //           },
    //           // function(modelAResult, next) {
    //           //    // self.buildMatchEntryJournal(matchId, matchTeam.team_id)
    //           // }
    //       ]);

          
            
    //     })
    // },


    


    // async buildByMatchTeam(matchTeamId, matchTeamStatus) {
    //     var matchEntries = await MatchEntryModel.find({match_team_id: matchTeamId, is_declared: false})
    //     matchEntries.map( async (matchEntry, i) => {
    //         await this.buildSummaryByMatchEntry(matchEntry.id, matchTeamStatus)
    //     })
    // },

    // buildNet(matchTeamId) {


    // },

    // buildSummaryByMatchEntry(matchEntryId, MatchTeamStatus, cb) {
    //     async.waterfall([
    //         function(next) {
    //             MatchSummaryModel.remove({"entry_id": matchEntryId, "ref_type": Constant.MATCH_SUMMARY_REFTYPE.MATCH_TEAM}).exec(next)
    //              // next(null)
    //         },
    //         function(matchSummary, next) {
    //             try {
    //                 MatchEntryModel.aggregate([
    //                      {
    //                          $match: {
    //                              "_id" : parseInt(matchEntryId)
    //                          }
    //                      },
    //                      {
    //                          $lookup: {
    //                              from: "teams",
    //                              localField: "team_id",
    //                              foreignField: "_id",
    //                              as: "team"
    //                          }
    //                      },
    //                      {
    //                          $unwind: "$team"
    //                      },
    //                      {
    //                          $lookup: {
    //                              from: "matches",
    //                              localField: "match_id",
    //                              foreignField: "_id",
    //                              as: "match"
    //                          }
    //                      },
    //                      {
    //                          $unwind: "$match"
    //                      },
    //                      {
    //                          $project: {
    //                             "_id" : "$_id",
    //                             "match_id" : "$match_id",
    //                             "match_team_id" : "$match_team_id",
    //                             "account_id" : "$account_id",
    //                             "team_id" : "$team_id",
    //                             "match_name": "$match.match_name",
    //                             "team_name": "$team.team_name",
    //                             "calcs" : "$calcs",
    //                          }
    //                      }
    //                 ]).exec(next)

    //             } catch(err) {
    //                 next({error: err.message})
    //             }

    //         },
    //         function(matchEntry, next) {
    //             var matchEntry = matchEntry[0]
    //             try {
    //                 var msItem_Default = {
    //                     match_id: matchEntry.match_id,
    //                     ref_type: "Match Team",
    //                     ref_id: matchEntry.match_team_id,
    //                     // entry_type: "Team",
    //                     entry_id: matchEntry._id,
    //                     entry_account_id: matchEntry.account_id,
    //                     team_id: matchEntry.team_id,
    //                     account_id: null,
    //                     dr_amt: 0,
    //                     cr_amt: 0,
    //                     bal: 0,

    //                     narration: ` (Match: ${matchEntry.match_name}) (Team: ${matchEntry.team_name})`
    //                 }
    //                 next(null, matchEntry, msItem_Default);

    //             } catch(err) {
    //                 next({error: err.message})
    //             }
    //         }, 
    //         function(matchEntry, msItem_Default, next) {
    //                 try {

    //                     // Distribute Profit
    //                     let {calcs} = matchEntry
    //                     // next(msItem_Default)
    //                     var msItem1 = new MatchSummaryModel(msItem_Default);
    //                     msItem1.account_id = matchEntry.account_id
    //                     msItem1.cr_amt = MatchTeamStatus == Constant.MATCH_TEAM_STATUS.WINNER ? calcs.win_amt : 0;
    //                     msItem1.dr_amt = MatchTeamStatus == Constant.MATCH_TEAM_STATUS.LOSER ? calcs.loose_amt : 0
    //                     msItem1.bal = msItem1.dr_amt - msItem1.cr_amt
    //                     msItem1.summary_type = "Match"
    //                     msItem1.narration = "PL -" + msItem1.narration
                        
    //                     msItem1.save(function (err, result) {
    //                         next(err, matchEntry, msItem_Default, msItem1);
    //                     });
    //                 } catch(err) {
    //                     next({error: err.message})
    //                 }
    //         },

    //         function(matchEntry, msItem_Default, msItem1, next) {
    //             try {

    //                 // Distribute Commission
    //                 let {calcs} = matchEntry
    //                 var msItem2 = new MatchSummaryModel(msItem_Default);
    //                 msItem2.account_id = calcs.match_comm_to ? calcs.match_comm_to : matchEntry.account_id

    //                 //  If >0 and Funter is loosing the book will give comm
    //                 msItem2.cr_amt = (calcs.match_comm > 0 && MatchTeamStatus == Constant.MATCH_TEAM_STATUS.LOSER)  ? calcs.loose_comm_amt : 0

    //                 //  If <0 and Funter is Winning the book will get comm
    //                 msItem2.dr_amt = (calcs.match_comm < 0 && MatchTeamStatus == Constant.MATCH_TEAM_STATUS.WINNER) ? calcs.win_comm_amt : 0
                    
    //                 msItem2.bal = msItem2.dr_amt - msItem2.cr_amt
    //                 msItem2.summary_type = "Commission"
    //                 msItem2.narration = msItem2.summary_type + msItem2.narration
    //                 // console.log(msItem2)
    //                 msItem2.save(function (err, result) {
    //                     next(err, matchEntry, msItem_Default, msItem1, msItem2);
    //                 });
    //             } catch(err) {
    //                 next({error: err.message})
    //             }
                           

    //         },

    //         function(matchEntry, msItem_Default, msItem1, msItem2, next) {
    //             let {calcs} = matchEntry
    //             let amount = msItem1.bal + msItem2.bal
    //             Promise.all(matchEntry.calcs.patti.map(async (item) => {

    //                 var msItem3 = new MatchSummaryModel(msItem_Default);
    //                 msItem3.account_id = item.account_id

    //                 var match_patti = item.match
    //                 var patti_amt = amount * match_patti/100
    //                 msItem3.dr_amt = patti_amt < 0 ? patti_amt : 0;
    //                 msItem3.cr_amt = patti_amt > 0 ? patti_amt : 0;
    //                 msItem3.bal = msItem3.dr_amt - msItem3.cr_amt
    //                 msItem3.summary_type = "Patti"
    //                 msItem3.narration = msItem3.summary_type + msItem3.narration
    //                 return await msItem3.save();
    //             }))
    //             .then( (result) => {
    //                 next(null, matchEntry);
    //             })
    //             .catch( (err) => {
    //                  next({error: err.message})
    //             });
    //         },

    //         function(matchEntry, next) {
    //             try {
    //                 MatchEntryModel.update({_id: parseInt(1)}, {is_summarized:false}).exec(next)
                    
    //             } catch(err) {
    //                 next({error: err.message})
    //             }
    //         }
    //     ], cb);
    // },


    //  async cLeanTeamJournal(match_id, team_id) {
    //         var journalItems = await JournalModel.find({
    //             match_id : ObjectId1(match_id),
    //             ref_id : ObjectId1(team_id),
    //             ref_type: "Team"
    //         })

    //         console.log(match_id, team_id)
    //         journalItems.forEach( async (item, i) => {

    //                 await JournalEntryModel.remove({"journal_id": item._id});
    //                 await item.remove()
    //         })
    // },

    // async buildMatchEntryJournal(match_id, team_id) {
    //     // var matchTeam = await MatchTeamModel.findOne({_id: matchTeamId})
    //     var project = {
    //         "match_id" : 1,
    //         "team_id" : 1,
    //         "account_id" : 1,
    //         "summary_type" : 1,
    //         "narration" : 1,
    //         "dr_amt" : 1,
    //         "cr_amt" : 1,
    //         "bal" : 1,
    //     }
    //     var aggregate = [
    //         {
    //            $match: {
    //                 match_id : ObjectId1(match_id),
    //                 team_id : ObjectId1(team_id)
    //            }
    //        },
    //        {
    //            $group: {
    //              _id: {
    //                 "match_id" : "$match_id",
    //                 "team_id" : "$team_id",
    //                 "account_id" : "$account_id",
    //                 "summary_type" : "$summary_type"
    //             },
    //             "match_id" : { $first: "$match_id"  },
    //             "team_id" : { $first: "$team_id"  },
    //             "account_id" : { $first: "$account_id"  },
    //             "summary_type" : { $first: "$summary_type"  },
    //             "narration" : { $first: "$narration"  },
    //             "dr_amt" : { $sum: "$dr_amt" },
    //             "cr_amt" : { $sum: "$cr_amt" },
    //             "bal" : { $sum: "$bal" }

    //            }
    //        },
    //         {
    //             $project: project
    //         }

    //    ];

    //    // return (aggregate)

    //    var matchSummaries = await MatchSummaryModel.aggregate(aggregate);

    //    await this.cLeanTeamJournal(match_id, team_id)

    //    var journalItem = new JournalModel({
    //         match_id : match_id,
    //         ref_id : team_id,
    //         ref_type: "Team"
    //    })

    //    await journalItem.save()

    //     matchSummaries.forEach( async (item, i) => {
    //         var jentryItem = new JournalEntryModel({
    //             journal_id : journalItem._id,
    //             account_id: item.account_id,
    //             dr_amt: item.dr_amt,
    //             cr_amt: item.cr_amt,
    //             bal: item.bal,
    //             narration: item.narration
    //         })

    //         await jentryItem.save()
    //     })

    //     console.log(matchSummaries)

    //     return matchSummaries

    // },

};