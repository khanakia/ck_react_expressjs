// var async = require("async");
// var await = require("async").await;
// var mongoose = require('mongoose');

var JournalModel = require('../model/JournalModel')
var JournalEntryModel = require('../model/JournalEntryModel')

module.exports = {

    // entriesList(args = {}) {
    //     var aggregate = [];
    //     var match = {}
    //     if(args.ref_type) {
    //         match['ref_type'] = args.ref_type
    //     }

    //     if(args.ref_id) {
    //         match['ref_id'] = parseInt(args.ref_id)
            
    //     }
        
    //     aggregate.push(
    //         { $sort: { created_at: -1 } },
    //         // {
    //         //     $match: match
    //         // },
    //         {
    //             $lookup:
    //             {
    //                from: "journals",
    //                localField: "journal_id",
    //                foreignField: "_id",
    //                as: "journal"
    //             }
    //         },

    //         {                
    //             $unwind: {
    //                 path: "$journal",
    //                 preserveNullAndEmptyArrays: true
    //             }
    //         },

    //         {
    //             $lookup:
    //             {
    //                from: "accounts",
    //                localField: "account_id",
    //                foreignField: "_id",
    //                as: "account"
    //             }
    //         },

    //         {
    //             $unwind: "$account"
    //         },

    //         { 
    //             $project : { 
    //                 _id : 1 , 
    //                 journal_id : 1 ,
    //                 match_id : "$journal.match_id" ,
    //                 account_id: 1,
    //                 dr_amt: 1,
    //                 cr_amt: 1,
    //                 bal: 1,
    //                 created_at: 1,
    //                 narration: 1,
    //                 is_monday_final: 1,
    //                 type: 1,
    //                 "ref_type" :"$journal.ref_type",
    //                 "ref_id" :"$journal.ref_id",
    //                 "account_name" :"$account.account_name",
    //             } 
    //         }
    //     );

    //     return JournalEntryModel.aggregate(aggregate);
    // }

};