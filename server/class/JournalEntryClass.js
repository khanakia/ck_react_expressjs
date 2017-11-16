// var async = require("async");
// var await = require("async").await;
// var mongoose = require('mongoose');
// const ObjectId1 = mongoose.Types.ObjectId;
// var _ = require('lodash');

var moment = require('moment');
var JournalModel = require('../model/JournalModel')
var JournalEntryModel = require('../model/JournalEntryModel')
var MatchModel = require('../model/MatchModel')
// var ResponseHelper = require('../class/ResponseHelper')

module.exports = {

    async createJournalEntryItem1(args = {
                                     journal_id: null,
                                     by_account_id: null,
                                     account_id: null,
                                     amount: 0,
                                     type: 'Manual',
                                     is_company: false,
                                     narration: null,
                                     dr_amt: 0,
                                     cr_amt: 0,
                                     bal: 0,
                                     locked: true,
                                     patti_amt: 0
                                 }) {
        var jentryItem = new JournalEntryModel(args)

        if(args.amount > 0) {
            jentryItem.cr_amt = Math.abs(args.amount);
        } else {
            jentryItem.dr_amt = Math.abs(args.amount);
        }
        jentryItem.bal = jentryItem.dr_amt - jentryItem.cr_amt
        jentryItem.narration = args.narration
        if(jentryItem.bal!==0) {
            return await jentryItem.save()
        }
        return false;
    },

    async save(args = {}, cb) {

        try {
            var journalItem = await new JournalModel().save();
            journalItem.ref_id = journalItem._id
            journalItem.created_at = moment(args.created_at,'DD/MM/YYYY').format()
            await journalItem.save()

            var toAccArgs = {
                    journal_id: journalItem._id,
                    by_account_id: args.from_account_id,
                    account_id: args.account_id,
                    dr_amt: args.dr_amt,
                    cr_amt: args.cr_amt,
                    bal: 0,
                    narration: args.narration,
                    created_at: moment(args.created_at,'DD/MM/YYYY').format(),
                }

            toAccArgs.bal = toAccArgs.dr_amt - toAccArgs.cr_amt
            var journalEntryItem = new JournalEntryModel(toAccArgs)
            await journalEntryItem.save()

            var fromAccArgs = {
                    journal_id: journalItem._id,
                    by_account_id: args.account_id,
                    account_id: args.from_account_id,
                    dr_amt: 0,
                    cr_amt: 0,
                    bal: 0,
                    narration: args.narration,
                    created_at: moment(args.created_at,'DD/MM/YYYY').format(),
                }
            if(toAccArgs.bal > 0) {
                fromAccArgs.cr_amt = Math.abs(toAccArgs.bal);
            } else {
                fromAccArgs.dr_amt = Math.abs(toAccArgs.bal);
            }
            fromAccArgs.bal = fromAccArgs.dr_amt - fromAccArgs.cr_amt

            var journalEntryItem1 = new JournalEntryModel(fromAccArgs)
            await journalEntryItem1.save()
        } catch(err) {
            console.log(err)
            throw(ResponseHelper.error(400, 'Cannot create journal entry.'))
        }

        return ResponseHelper.ok(200, 'Saved successfully.')
    },

    list(args = {}) {
        // console.log(args)
        var aggregate = [];
        var match = {}
        if(args.account_id) {
            match['account_id'] = parseInt(args.account_id)
        }

        // By Default it will be false
        // if(args.is_monday_final==null || args.is_monday_final=="false" || args.is_monday_final==false ) {
        //     match['is_monday_final'] = false
        // }

        // if monday final is true then show all entries either it is false or true
        var is_monday_final = HelperClass.stringToBoolean(args.is_monday_final)
        if(is_monday_final==false) {
            match['is_monday_final'] = is_monday_final
        }
        

        console.log(match)

        aggregate.push(
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
                $unwind: "$account"
            },

            {
                $lookup:
                {
                   from: "accounts",
                   localField: "by_account_id",
                   foreignField: "_id",
                   as: "by_account"
                }
            },

            
            {                
                $unwind: {
                    path: "$by_account",
                    preserveNullAndEmptyArrays: true
                }
            },

            { 
                $project : { 
                    _id : 1 , 
                    journal_id : 1 ,
                    by_account_id: 1,
                    account_id: 1,
                    dr_amt: 1,
                    cr_amt: 1,
                    bal: 1,
                    created_at: 1,
                    narration: 1,
                    is_monday_final: 1,
                    locked: 1,
                    type: 1,
                    "by_account_name" :"$by_account.account_name",
                    "account_name" :"$account.account_name",
                } 
            }
        );

        return JournalEntryModel.aggregate(aggregate);
    },

    async getBalanceTotal_byJournalId(journalId) {
       var jentry = await JournalEntryModel.aggregate([

            {
                $match:  {
                    journal_id: parseInt(journalId)
                }
            },
            { 
                $group: { 
                    _id: null, 
                    total: { $sum: "$bal" } 
                } 
            }
        ]);
       // console.log(jentry[0] ? jentry[0]['total'] : 0)
       return jentry[0] ? jentry[0]['total'] : 0
    },

    async remove(id, cb) {
        var item = await JournalEntryModel.findOne({"_id": id});
        if(item && item.locked) {
            throw(ResponseHelper.error(400, 'Entry is locked.'))
        }

        if(item && item.is_monday_final) {
            throw(ResponseHelper.error(400, 'Entry is Monday finaled.'))
        }

        var journal = await JournalModel.findOne({"_id": item.journal_id});

        if(journal && journal.match_id) {
            throw(ResponseHelper.error(400, 'Entry was created using Declare Method.'))
        }

        try {
            if(item.type=='Manual') {
                await JournalEntryModel.remove({journal_id: parseInt(item.journal_id)})
                await JournalModel.remove({id: parseInt(item.journal_id)})
            } else {
                item.remove()
            }
        }
        catch (err) {
            console.log(err)
           throw(ResponseHelper.error(400, 'Cannot delete.'))
        }
        
        return ResponseHelper.ok(200, 'Successfully removed.')
    },

    async mondayFinal() {
        await JournalEntryModel.updateMany({is_monday_final: false}, { is_monday_final: true, monday_final_date: Date.now() })

        var aggregate = [];
        aggregate.push(
            {
                $match:  {
                    is_monday_final: true
                }
            },
            {
                $lookup: {
                    from: "journals",
                    localField: "journal_id",
                    foreignField: "_id",
                    as: "journal"
                }
            },

            {
                $unwind: "$journal"
            },

            {
                $group: {
                    _id: "$journal.match_id",
                    // "match_id" : { $first: "$journal.match_id"  }
                }
            }
        );

        var matches = await JournalEntryModel.aggregate(aggregate);
        var matchIdArray = _.map(matches, '_id');
        await MatchModel.updateMany({ _id: { $in: matchIdArray } }, {  $set: { is_monday_final: true} })
        return matches
    }

};