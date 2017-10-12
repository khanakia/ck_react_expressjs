var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var Account = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchSummaryModel = require('../model/MatchSummaryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var JournalModel = require('../model/JournalModel')
var JournalEntryModel = require('../model/JournalEntryModel')
var Constant = require('../Constant')
const ObjectId1 = mongoose.Types.ObjectId;
module.exports = {

    async cleanSummaryTypeTeam(matchId) {
        var matchTeams = await MatchTeamModel.find({match_id: matchId, is_declared: false})
        matchTeams.forEach( async (matchTeam,i) => {
            await this.cLeanTeamJournal(matchId, matchTeam.team_id)
            await MatchSummaryModel.remove({"team_id": matchTeam.team_id, "entry_type": Constant.MATCH_SUMMARY_ENTRYTYPE.TEAM});
            await MatchEntryModel.updateMany({"team_id": matchTeam.team_id, match_id: matchId}, {"is_declared": false});
        })
    },

    async buildMatchSummary(matchId) {
        var self = this;
        await this.cleanSummaryTypeTeam(matchId)
        var matchTeams = await MatchTeamModel.find({match_id: matchId, is_declared: true})
        matchTeams.forEach( async (matchTeam,i) => {

          async.waterfall([
              function(next) {
                    self.buildByMatchEntries(matchId, matchTeam.team_id, matchTeam.status)
                    next(null)
              },
              function(modelAResult, next) {
                 self.buildMatchEntryJournal(matchId, matchTeam.team_id)
              }
          ]);

          
            
        })
    },

    async buildByMatchEntries(matchId, team_id, status) {
        var matchEntries = await MatchEntryModel.find({match_id: matchId, team_id: team_id, is_declared: true})
        matchEntries.map( async (matchEntry, i) => {
            await this.buildSummaryByMatchEntry(matchEntry, status)
        })
    },

    async buildSummaryByMatchEntry(matchEntry, match_team_status, cb) {
        await MatchSummaryModel.remove({"entry_id": matchEntry._id, "entry_type": Constant.MATCH_SUMMARY_ENTRYTYPE.TEAM});
        // var matchEntry = await MatchEntryModel.findOne({"_id": matchEntry._id});

        var mentry1 = await MatchEntryModel.aggregate([
                    {
                        $match: {
                            "_id" : ObjectId1(matchEntry._id)
                        }
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
                           from: "matches",
                           localField: "match_id",
                           foreignField: "_id",
                           as: "match"
                        }
                    },
                    {
                        $unwind:"$match"
                    },
                    { 
                        $project : {
                            "match_name": "$match.match_name",
                            "team_name": "$team.team_name",
                        }
                    } 
            ])
        
        var msItem_Default = {
            match_id: matchEntry.match_id,
            entry_type: "Team",
            entry_id: matchEntry._id,
            entry_account_id: matchEntry.account_id,
            team_id: matchEntry.team_id,
            account_id: null,
            dr_amt: 0,
            cr_amt: 0,
            bal: 0,

            narration: ` (Match: ${mentry1[0].match_name}) (Team: ${mentry1[0].team_name})`
        }


        // Distribute Profit
        var msItem1 = new MatchSummaryModel(msItem_Default);
        msItem1.account_id = matchEntry.account_id
        if(match_team_status == "Winner") {
            msItem1.cr_amt = matchEntry.win_amt
        }
        if(match_team_status == "Loser") {
            msItem1.dr_amt = matchEntry.loose_amt
        }
        msItem1.bal = msItem1.dr_amt - msItem1.cr_amt
        msItem1.summary_type = "Match"

        msItem1.narration = msItem1.summary_type + msItem1.narration
        // console.log(msItem1)
        if(msItem1.bal!==0) {
            await msItem1.save()
        }


        // Distribute Commission
        var msItem2 = new MatchSummaryModel(msItem_Default);
        msItem2.account_id = matchEntry.match_comm_to ? matchEntry.match_comm_to : matchEntry.account_id
        if(matchEntry.match_comm > 0) {
            msItem2.cr_amt = matchEntry.loose_comm_amt
        } else {
            msItem2.dr_amt = matchEntry.win_comm_amt
        }
        msItem2.bal = msItem2.dr_amt - msItem2.cr_amt
        msItem2.summary_type = "Commission"
        msItem2.narration = msItem2.summary_type + msItem2.narration
        // console.log(msItem2)
        if(msItem2.bal!==0) {
            await msItem2.save()            
        }

  

        // console.log(matchEntry)
        matchEntry.patti.forEach( async (item,i) => {
            var msItem3 = new MatchSummaryModel(msItem_Default);
            msItem3.account_id = item.account_id
            var match_patti = item.match
            
            if(match_team_status== "Winner") {
                var patti_amt = matchEntry.win_amt_subtotal * match_patti/100
                 msItem3.dr_amt = patti_amt
            }

            if(match_team_status== "Loser") {
                var patti_amt = matchEntry.loose_amt_subtotal * match_patti/100
                 msItem3.cr_amt = patti_amt
            }

            msItem3.summary_type = "Patti"
            msItem3.narration = msItem3.summary_type + msItem3.narration

            if(msItem3.bal!==0) {
                await msItem3.save()
            }
            
        });


        await MatchEntryModel.update({_id: matchEntry._id}, {is_declared:true})

    },


     async cLeanTeamJournal(match_id, team_id) {
        var journalItems = await JournalModel.find({
            match_id : ObjectId1(match_id),
            ref_id : ObjectId1(team_id),
            ref_type: "Team"
        })

        console.log(match_id, team_id)
        journalItems.forEach( async (item, i) => {

                await JournalEntryModel.remove({"journal_id": item._id});
                await item.remove()
        })


    },

    async buildMatchEntryJournal(match_id, team_id) {
        // var matchTeam = await MatchTeamModel.findOne({_id: matchTeamId})
        var project = {
            "match_id" : 1,
            "team_id" : 1,
            "account_id" : 1,
            "summary_type" : 1,
            "narration" : 1,
            "dr_amt" : 1,
            "cr_amt" : 1,
            "bal" : 1,
        }
        var aggregate = [
            {
               $match: {
                    match_id : ObjectId1(match_id),
                    team_id : ObjectId1(team_id)
               }
           },
           {
               $group: {
                 _id: {
                    "match_id" : "$match_id",
                    "team_id" : "$team_id",
                    "account_id" : "$account_id",
                    "summary_type" : "$summary_type"
                },
                "match_id" : { $first: "$match_id"  },
                "team_id" : { $first: "$team_id"  },
                "account_id" : { $first: "$account_id"  },
                "summary_type" : { $first: "$summary_type"  },
                "narration" : { $first: "$narration"  },
                "dr_amt" : { $sum: "$dr_amt" },
                "cr_amt" : { $sum: "$cr_amt" },
                "bal" : { $sum: "$bal" }

               }
           },
            {
                $project: project
            }

       ];

       // return (aggregate)

       var matchSummaries = await MatchSummaryModel.aggregate(aggregate);

       await this.cLeanTeamJournal(match_id, team_id)

       var journalItem = new JournalModel({
            match_id : match_id,
            ref_id : team_id,
            ref_type: "Team"
       })

       await journalItem.save()

        matchSummaries.forEach( async (item, i) => {
            var jentryItem = new JournalEntryModel({
                journal_id : journalItem._id,
                account_id: item.account_id,
                dr_amt: item.dr_amt,
                cr_amt: item.cr_amt,
                bal: item.bal,
                narration: item.narration
            })

            await jentryItem.save()
        })

        console.log(matchSummaries)

        return matchSummaries

    },

};