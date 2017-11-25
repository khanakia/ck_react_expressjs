// var async = require("async");
// var await = require("async").await;
// var mongoose = require('mongoose');
// const ObjectId1 = mongoose.Types.ObjectId;
// var Constant = require('../Constant')

var Account = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchSummaryModel = require('../model/MatchSummaryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var SessionModel = require('../model/SessionModel')
var SessionEntryModel = require('../model/SessionEntryModel')
var MeterModel = require('../model/MeterModel')
var MeterEntryModel = require('../model/MeterEntryModel')
var JournalModel = require('../model/JournalModel')
var JournalEntryModel = require('../model/JournalEntryModel')
var AccountClass = require('./AccountClass')
var JournalEntryClass = require('./JournalEntryClass')

// var MatchEntryClass = require('./MatchEntryClass')
// var SessionEntryClass = require('./SessionEntryClass')
// var MeterEntryClass = require('./MeterEntryClass')

module.exports = {

    // async updateAllOnAccountUpdate(accountId) {
    //     await MatchEntryClass.updateEntriesByAccount(accountId)
    //     await SessionEntryClass.session_updateEntries_onAccountUpdate(accountId)
    //     await MeterEntryClass.meter_updateEntries_onAccountUpdate(accountId)
    // },

    //  SESSION DECLARE FUNCTIONS ======================================================
    async session_deleteJournal(sessionId) {
        var journalItems = await JournalModel.find({
            ref_id : parseInt(sessionId),
            ref_type: Constant.MATCH_SUMMARY_REFTYPE.SESSION
        })
        journalItems.map( async (item, i) => {
            await JournalEntryModel.remove({"journal_id": item._id});
            await item.remove()
        })

        await SessionEntryModel.updateMany({session_id: parseInt(sessionId)}, {final_amount:null, is_declared:false, is_summarized:false}) 
    },

    // async session_declare(sessionId) {
    //     await this.session_updateFinalWinLossAmt_bySession(sessionId)
    //     await this.session_buildJournal(sessionId)
    // },

    // This will fire if session updates in Member Account while session is not declared if session declared then it will not affect that entry
    // async session_updateFinalWinLossAmt_onAccountUpdate(accountId) {
    //     var sessionEntries = await SessionEntryModel.find({account_id:accountId, is_declared: {$in: [null, false]}})
    //     sessionEntries.map( async (item,i) => {
    //         await this.session_updateFinalWinLossAmt_byEntry(item._id)
    //     })
    // },


    async session_updateFinalWinLossAmt_bySession(sessionId) {
        var sessionEntries = await SessionEntryModel.find({session_id:sessionId})
        await Promise.all(
        sessionEntries.map( async (item,i) => {
           return  await this.session_updateFinalWinLossAmt_byEntry(item._id)
        }))
    },

    /* this will get session result and then update the win or loss amt in the final column which we will sum and group by account later 
        and create journal from that final amount column 
        I did this step becuase each session entry can have different run so i cannot group session entries based on result
    */
    async session_updateFinalWinLossAmt_byEntry(sessionEntryId) {

        var sessionEntry = await SessionEntryModel.findOne({_id: parseInt(sessionEntryId)})
        var session = await SessionModel.findOne({_id: parseInt(sessionEntry.session_id)})
            
        // if(session.is_declared && session.declared_runs!==null) {

        var declared_runs = parseInt(session.declared_runs);

        // Assume Deafult is looser
        var final_amount = -1 * sessionEntry.amount

        // if yes then funter is winner else looser
        if((sessionEntry.yn=="Y" && sessionEntry.runs<=declared_runs) || (sessionEntry.yn=="N" && sessionEntry.runs > declared_runs)){
            final_amount = sessionEntry.rate * sessionEntry.amount
        } 

        sessionEntry.final_amount = final_amount
        sessionEntry.is_declared = true
        return await sessionEntry.save()
        // }

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
                    "session_id": parseInt(sessionId),
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
                        "account_id": "$account_id",
                    },
                    "match_name": { $first: "$match.match_name" },
                    "match_id": { $first: "$match_id" },
                    "account_id": { $first: "$account_id" },
                    "final_amount": { $sum: "$final_amount" },
                    "amount": { $sum: "$amount" },


                }
            },
            {
                $project: project
            }
        ])

        if(sessionEntries.length == 0) {
            return false;
        }

        // console.log(sessionEntries)

        var journalItem = new JournalModel({
            match_id : session.match_id,
            ref_id : session._id,
            ref_type: Constant.MATCH_SUMMARY_REFTYPE.SESSION
        })

        await journalItem.save()

        var companyAccountId = await AccountClass.getCompanyAccounId()
        var narration = null
        
        await Promise.all(sessionEntries.map( async (sessionEntry, i) => {
            
            var account = await Account.findOne({_id: parseInt(sessionEntry.account_id)})
            narration = ` (Match: ${sessionEntry.match_id} - ${sessionEntry.match_name}) (Session: ${session._id} - ${session.session_name})`
            var narration_party = ` (Party: ${account._id} - ${account.account_name}) ${narration}`

            // Distribute Profit
            var final_amount = sessionEntry.final_amount
            // var jeitem1 = await this.createJournalEntryItem(journalItem._id, companyAccountId, sessionEntry.account_id, final_amount, 'PL', false, "PL -" + narration)
            

            // Distribute Commission
            // var comm_amt = Math.abs(sessionEntry.amount) * account.sess_comm/100;
            // var jeitem2 = await this.createJournalEntryItem(journalItem._id, companyAccountId, account.sess_comm_to, comm_amt, "Commission", false, "Comm -" + narration)
            var com_amt_total = 0
            await Promise.all(account.sess_comm_accounts.map(async (item) => {
                if(!item.account_id) return null
                var comm_amt = Math.abs(sessionEntry.amount) * item.sess_comm/100
                com_amt_total += comm_amt
                var n = `Comm (${item.sess_comm}%) - ${narration_party}`
                // var jeitem2 = await this.createJournalEntryItem(journalItem._id, companyAccountId, item.account_id, comm_amt, "Commission", false, n)
                var jeitem2 = await JournalEntryClass.createJournalEntryItem1({
                    journal_id: journalItem._id, 
                    by_account_id: companyAccountId, 
                    account_id: item.account_id, 
                    amount: comm_amt, 
                    type: Constant.JOURNAL_ENTRY_TYPE.COMMISSION, 
                    narration: n
                })
                // return await jeitem.save()
            }))


            // Distribute Patti
            var final_amount_with_comm = final_amount + com_amt_total
            var patti_distributed_total = 0 
            await Promise.all(account.patti.map(async (item) => {
                var patti_amt = -1 * final_amount_with_comm * item.session/100
                patti_distributed_total += patti_amt
                // patti_amt = -1 * patti_amt
                var n = `Patti (${item.session}%) - ${narration_party}`
                // var jeitem = await this.createJournalEntryItem(journalItem._id, companyAccountId, item.account_id, patti_amt, "Patti", false, n)
                var jeitem = await JournalEntryClass.createJournalEntryItem1({
                    journal_id: journalItem._id, 
                    by_account_id: companyAccountId, 
                    account_id: item.account_id, 
                    amount: patti_amt, 
                    type: Constant.JOURNAL_ENTRY_TYPE.PATTI, 
                    narration: n
                })
                // return await jeitem.save()
            }))

            var jeitem1 = await JournalEntryClass.createJournalEntryItem1({
                journal_id: journalItem._id, 
                by_account_id: companyAccountId, 
                account_id: sessionEntry.account_id, 
                amount: final_amount, 
                type: Constant.JOURNAL_ENTRY_TYPE.PL, 
                narration: "PL -" + narration_party,
                patti_amt: patti_distributed_total
            })
        }))

        // Distribute PL to Book Account
        var pl_bal = await JournalEntryClass.getBalanceTotal_byJournalId(journalItem._id)
        console.log(pl_bal)
        if(pl_bal!==0) {
            // var jeitemBook = await this.createJournalEntryItem(journalItem._id, companyAccountId, companyAccountId, pl_bal, "PL", true, "PL -" + narration)
            var jeitemBook = await JournalEntryClass.createJournalEntryItem1({
                    journal_id: journalItem._id, 
                    by_account_id: companyAccountId, 
                    account_id: companyAccountId, 
                    amount: pl_bal, 
                    type: Constant.JOURNAL_ENTRY_TYPE.PL, 
                    narration: "PL -" + narration,
                    is_company: true
                })
        }

        await SessionEntryModel.updateMany({session_id: parseInt(sessionId)}, {is_summarized:true})  
    },



    //  METER DECLARE FUNCTIONS ======================================================   
    async meter_deleteJournal(meterId) {
        var journalItems = await JournalModel.find({
            ref_id : parseInt(meterId),
            ref_type: Constant.MATCH_SUMMARY_REFTYPE.METER
        })
        journalItems.map( async (item, i) => {
            await JournalEntryModel.remove({"journal_id": item._id});
            await item.remove()
        })

        await MeterEntryModel.updateMany({meter_id: parseInt(meterId)}, {final_amount:null, is_declared:false, is_summarized:false}) 
    },

     async meter_updateFinalWinLossAmt_byMeter(meterId) {
        var meterEntries = await MeterEntryModel.find({meter_id:meterId})
        await Promise.all(
        meterEntries.map( async (item,i) => {
           return  await this.meter_updateFinalWinLossAmt_byEntry(item._id)
        }))
    },

    /* this will get session result and then update the win or loss amt in the final column which we will sum and group by account later 
        and create journal from that final amount column 
        I did this step becuase each session entry can have different run so i cannot group session entries based on result
    */
    async meter_updateFinalWinLossAmt_byEntry(meterEntryId) {

        var meterEntry = await MeterEntryModel.findOne({_id: parseInt(meterEntryId)})
        var meter = await MeterModel.findOne({_id: parseInt(meterEntry.meter_id)})
            
        if(meter.is_declared && meter.declared_runs!==null) {

            var declared_runs = parseInt(meter.declared_runs);

            // return meter;
            var diff = meterEntry.runs - declared_runs
            diff = meterEntry.yn=="Y" ? -1 * diff : diff
            // console.log(diff)
            var final_amount = parseFloat(diff * meterEntry.rate)

            meterEntry.final_amount = final_amount
            meterEntry.is_declared = true
            return await meterEntry.save()
        }

    },

    async meter_buildJournal(meterId, cb) {      
        var meter = await MeterModel.findOne({_id: parseInt(meterId)})
        
        var project = {
            "match_id" : 1,
            "account_id" : 1,
            "rate" : 1,
            "final_amount" : 1,
            "match_name": 1,
            "comm_amt_final" : 1
        }
  
        var meterEntries = await MeterEntryModel.aggregate([
            {
                $match: {
                    "meter_id": parseInt(meterId),
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
                        "account_id": "$account_id",
                    },
                    "match_name": { $first: "$match.match_name" },
                    "match_id": { $first: "$match_id" },
                    "account_id": { $first: "$account_id" },
                    "final_amount": { $sum: "$final_amount" },
                    "comm_amt_final": { $sum: "$calcs.comm_amt" },
                    "rate": { $sum: "$rate" },


                }
            },
            {
                $project: project
            }
        ])

        if(meterEntries.length == 0) {
            return false;
        }

        // console.log(meterEntries)

        var journalItem = new JournalModel({
            match_id : meter.match_id,
            ref_id : meter._id,
            ref_type: Constant.MATCH_SUMMARY_REFTYPE.METER
        })

        await journalItem.save()

        var companyAccountId = await AccountClass.getCompanyAccounId()
        var narration = null
        
        await Promise.all(meterEntries.map( async (meterEntry, i) => {
            
            var account = await Account.findOne({_id: parseInt(meterEntry.account_id)})
            // narration = ` (Party: ${account._id} - ${account.account_name}) (Match: ${meterEntry.match_id} - ${meterEntry.match_name}) (Meter: ${meter._id} - ${meter.meter_name})`
            narration = ` (Match: ${meterEntry.match_id} - ${meterEntry.match_name}) (Meter: ${meter._id} - ${meter.meter_name})`
            var narration_party = ` (Party: ${account._id} - ${account.account_name}) ${narration}`

            // Distribute Profit
            var final_amount = meterEntry.final_amount
            
            // Distribute Commission
            var com_amt_total = 0
            await Promise.all(account.meter_comm_accounts.map(async (item) => {
                if(!item.account_id && !meterEntry.comm_yn) return null
                var comm_amt = -1 * meterEntry.comm_amt_final
                com_amt_total += comm_amt
                var n = `Comm (${comm_amt}) - ${narration_party}`
                var jeitem2 = await JournalEntryClass.createJournalEntryItem1({
                    journal_id: journalItem._id, 
                    by_account_id: companyAccountId, 
                    account_id: item.account_id, 
                    amount: comm_amt, 
                    type: Constant.JOURNAL_ENTRY_TYPE.COMMISSION, 
                    narration: n
                })
                // return await jeitem.save()
            }))


            // Distribute Patti
            // var final_amount_with_comm = final_amount + com_amt_total
            var patti_distributed_total = 0 
            await Promise.all(account.patti.map(async (item) => {
                var patti_amt = -1 * final_amount * item.meter/100
                patti_distributed_total += patti_amt

                var n = `Patti (${item.meter}%) - ${narration_party}`
                
                var jeitem = await JournalEntryClass.createJournalEntryItem1({
                    journal_id: journalItem._id, 
                    by_account_id: companyAccountId, 
                    account_id: item.account_id, 
                    amount: patti_amt, 
                    type: Constant.JOURNAL_ENTRY_TYPE.PATTI, 
                    narration: n
                })
                // return await jeitem.save()
            }))

            var jeitem1 = await JournalEntryClass.createJournalEntryItem1({
                journal_id: journalItem._id, 
                by_account_id: companyAccountId, 
                account_id: meterEntry.account_id, 
                amount: final_amount, 
                type: Constant.JOURNAL_ENTRY_TYPE.PL, 
                narration: "PL -" + narration_party,
                patti_amt: patti_distributed_total
            })
        }))

        // Distribute PL to Book Account
        var pl_bal = await JournalEntryClass.getBalanceTotal_byJournalId(journalItem._id)
        console.log(pl_bal)
        if(pl_bal!==0) {
            var jeitemBook = await JournalEntryClass.createJournalEntryItem1({
                    journal_id: journalItem._id, 
                    by_account_id: companyAccountId, 
                    account_id: companyAccountId, 
                    amount: pl_bal, 
                    type: Constant.JOURNAL_ENTRY_TYPE.PL, 
                    narration: "PL -" + narration,
                    is_company: true
                })
        }

        await MeterEntryModel.updateMany({meter_id: parseInt(meterId)}, {is_summarized:true})  
    },




    //  MATCH DECLARE FUNCTIONS ======================================================   
    async cleanUndeclaredData(matchId) {
        var matchTeams = await MatchTeamModel.find({match_id: matchId, is_declared: false})
        matchTeams.map( async (matchTeam,i) => {
            // await this.cLeanTeamJournal(matchId, matchTeam.team_id)
            // await MatchSummaryModel.remove({"ref_id": matchTeam._id, "ref_type": Constant.MATCH_SUMMARY_REFTYPE.MATCH_TEAM});


            var journalItems = await JournalModel.find({
                ref_id : parseInt(matchTeam._id),
                ref_type: Constant.MATCH_SUMMARY_REFTYPE.MATCH_TEAM
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
        await Promise.all(matchTeams.map( async (matchTeam,i) => {
            await this.buildByMatchTeam(matchTeam._id, matchTeam.status,()=>null)
        }))

        // cb(null, 'done')
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
                     // "comm_yn" : true
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
                                // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                { "$and" : [
                                       { "$eq": [ "$comm_yn", true ] },
                                       {"$gt": ["$calcs.favteam_subtotal", 0]}
                                   ]
                                },
                                '$calcs.favteam_subtotal', 
                                0
                            ]
                        }
                    },
                'favteam_neg': { 
                        '$sum': {
                            '$cond': [
                                // { '$lt': ['$calcs.favteam_subtotal', 0]}, 
                                { "$and" : [
                                       { "$eq": [ "$comm_yn", true ] },
                                       {"$lt": ["$calcs.favteam_subtotal", 0]}
                                   ]
                                },
                                '$calcs.favteam_subtotal', 
                                0
                            ]
                        }
                    },  
                'otherteam_pos': { 
                        '$sum': {
                            '$cond': [
                                // { '$gt': ['$calcs.otherteam_subtotal', 0]}, 
                                { "$and" : [
                                       { "$eq": [ "$comm_yn", true ] },
                                       {"$gt": ["$calcs.otherteam_subtotal", 0]}
                                   ]
                                },
                                '$calcs.otherteam_subtotal', 
                                0
                            ]
                        }
                    },
                'otherteam_neg': { 
                        '$sum': {
                            '$cond': [
                                // { '$lt': ['$calcs.otherteam_subtotal', 0]}, 
                                { "$and" : [
                                       { "$eq": [ "$comm_yn", true ] },
                                       {"$lt": ["$calcs.otherteam_subtotal", 0]}
                                   ]
                                },
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
            ref_type: Constant.MATCH_SUMMARY_REFTYPE.MATCH_TEAM
        })

        await journalItem.save()

        var companyAccountId = await AccountClass.getCompanyAccounId()
        var narration = null
        
        await Promise.all(matchEntries.map( async (matchEntry, i) => {
            var account = await Account.findOne({_id: parseInt(matchEntry.account_id)})

            var amount = matchTeamStatus==Constant.MATCH_TEAM_STATUS.WINNER ? matchEntry.favteam_subtotal : matchEntry.otherteam_subtotal;
            var amount_pos = matchTeamStatus==Constant.MATCH_TEAM_STATUS.WINNER ? matchEntry.favteam_pos : matchEntry.otherteam_pos;
            var amount_neg = matchTeamStatus==Constant.MATCH_TEAM_STATUS.WINNER ? matchEntry.favteam_neg : matchEntry.otherteam_neg;

            narration = ` (Match: ${matchEntry.match_id} - ${matchEntry.match_name}) (Team: ${matchEntry.team_name})`

            

            // Distribute Commission
            var narration1 = narration
            var amountForComm = 0
            if(account.match_comm_type=="entrywise") {
                amountForComm = amount_neg
                narration1 = `Comm Entrywise (${account.match_comm}%) - (Party: ${account._id} - ${account.account_name}) ` + narration

            } else {
                amountForComm = amount;
                narration1 = `Comm Net (${account.match_comm}%) - (Party: ${account._id} - ${account.account_name}) ` + narration
            }

            var comm_amt = Math.abs(amountForComm * account.match_comm/100);
            // var jeitem2 = await this.createJournalEntryItem(journalItem._id, companyAccountId, account.match_comm_to, comm_amt, "Commission", false, narration1)
            var jeitem2 = await JournalEntryClass.createJournalEntryItem1({
                journal_id: journalItem._id, 
                by_account_id: companyAccountId, 
                account_id: account.match_comm_to, 
                amount: comm_amt, 
                type: Constant.JOURNAL_ENTRY_TYPE.COMMISSION, 
                narration: narration1
            })

            // Distribute Patti
            var final_amount = amount + comm_amt
            var patti_distributed_total = 0
            await Promise.all(account.patti.map(async (item) => {
                // i added -1 bcause final_amount is Funter PL so if Funter is in profit then book will have losss and vice versa so we are reversing the amount
                var patti_amt = -1 * final_amount * item.match/100
                patti_distributed_total += patti_amt
                // patti_amt = -1 * patti_amt
                var n = `Patti (${item.match}%) - (Party: ${account._id} - ${account.account_name}) ` + narration
                // var jeitem = await this.createJournalEntryItem(journalItem._id, companyAccountId, item.account_id, patti_amt, "Patti", false, n)
                var jeitem = await JournalEntryClass.createJournalEntryItem1({
                    journal_id: journalItem._id, 
                    by_account_id: companyAccountId, 
                    account_id: item.account_id, 
                    amount: patti_amt, 
                    type: Constant.JOURNAL_ENTRY_TYPE.PATTI, 
                    narration: n
                })
            }))


            // Distribute Profit
            // var jeitem1 = await this.createJournalEntryItem(journalItem._id, companyAccountId, matchEntry.account_id, amount, 'PL', false, "PL -" + narration)
            var jeitem1 = await JournalEntryClass.createJournalEntryItem1({
                journal_id: journalItem._id, 
                by_account_id: companyAccountId, 
                account_id: matchEntry.account_id, 
                amount: amount, 
                type: Constant.JOURNAL_ENTRY_TYPE.PL, 
                narration: `PL - (Party: ${account._id} - ${account.account_name})` + narration,
                patti_amt: patti_distributed_total
            })

        }))

        // Distribute PL to Book Account
        var pl_bal = await JournalEntryClass.getBalanceTotal_byJournalId(journalItem._id)
        console.log(pl_bal)
        if(pl_bal!==0) {
            // var jeitemBook = await this.createJournalEntryItem(journalItem._id, companyAccountId, companyAccountId, pl_bal, "PL", true, "PL -" + narration)
            var jeitemBook = await JournalEntryClass.createJournalEntryItem1({
                journal_id: journalItem._id, 
                by_account_id: companyAccountId, 
                account_id: companyAccountId, 
                amount: pl_bal, 
                type: Constant.JOURNAL_ENTRY_TYPE.PL, 
                narration: "PL -" + narration,
                is_company: true
            })
        }

        // console.log('matchTeamId', matchTeamId)
        await MatchEntryModel.updateMany({match_team_id: parseInt(matchTeamId)}, {is_summarized:true})
 

       return cb(null, 'done')
    },
};