var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var JournalModel = require('../model/JournalModel')
var JournalEntryModel = require('../model/JournalEntryModel')

const ObjectId1 = mongoose.Types.ObjectId;

module.exports = {

    async add(args = {}, cb) {
        var journalItem = await new JournalModel().save();


        var toAccArgs = {
                journal_id: journalItem._id,
                account_id: args.account_id,
                dr_amt: args.dr_amt,
                cr_amt: args.cr_amt,
                bal: 0,
                narration: args.narration,
            }

        toAccArgs.bal = toAccArgs.dr_amt - toAccArgs.cr_amt
        var journalEntryItem = new JournalEntryModel(toAccArgs)
        await journalEntryItem.save()

        var fromAccArgs = {
                journal_id: journalItem._id,
                account_id: args.from_account_id,
                dr_amt: 0,
                cr_amt: 0,
                bal: 0,
                narration: args.narration,
            }
        if(toAccArgs.bal > 0) {
            fromAccArgs.cr_amt = toAccArgs.bal;
            fromAccArgs.bal = -1* toAccArgs.bal;
        }

        var journalEntryItem1 = new JournalEntryModel(fromAccArgs)
        await journalEntryItem1.save()
       
       // return matchEntry;
    },

    list(args = { account_id: null}) {
        var aggregate = [];
        if(args.account_id) {
            aggregate.push(
                {
                    $match: {
                        'account_id' : ObjectId1(args.account_id)
                    }
                }
            )
        }

        aggregate.push(
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
                $project : { 
                    _id : 1 , 
                    journal_id : 1 ,
                    account_id: 1,
                    dr_amt: 1,
                    cr_amt: 1,
                    bal: 1,
                    created_at: 1,
                    narration: 1,
                    "account_name" :"$account.account_name",
                } 
            }
        );

        return JournalEntryModel.aggregate(aggregate);
    }

};