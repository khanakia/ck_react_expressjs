var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var _ = require('lodash');

var ResponseHelper = require('../class/ResponseHelper')
var MatchClass = require('./MatchClass')
var SessionClass = require('./SessionClass')
var MeterClass = require('./MeterClass')

var JournalEntryModel = require('../model/JournalEntryModel')


module.exports = {


    async balanceSheet() {
        var aggregate = [];
        // if(args.account_id) {
        //     aggregate.push(
        //         {
        //             $match: {
        //                 // 'account_id' : parseInt(args.account_id)
        //             }
        //         }
        //     )
        // }

        aggregate.push(
            {
                $lookup: {
                    from: "journals",
                    localField: "journal_id",
                    foreignField: "_id",
                    as: "journal"
                }
            },

            
            {                
                $unwind: {
                    path: "$journal",
                    preserveNullAndEmptyArrays: true
                }
            },

            {
                $lookup: {
                    from: "accounts",
                    localField: "account_id",
                    foreignField: "_id",
                    as: "account"
                }
            },

            {
                $unwind: "$account"
            },


            // {
            //     $match: {
            //         'journal_id' : parseInt(103)
            //     }
            // },

            {
                $group: {
                    _id: {
                        "account_id": "$account_id",
                        // "account_name" : "$account.account_name" ,
                    },
                    "account_id": { $first: "$account_id" },
                    "account_name": { $first: "$account.account_name" },
                    "bal": { $sum: "$bal" },
                    "is_company": { $first: "$is_company" },

                }
            },

            // {
            //     $project: {
            //         _id: 1,
            //         journal_id: 1,
            //         match_id: "$journal.match_id",
            //         ref_type: "$journal.ref_type",
            //         ref_id: "$journal.ref_id",
            //         account_id: 1,
            //         dr_amt: 1,
            //         cr_amt: 1,
            //         bal: 1,
            //         created_at: 1,
            //         narration: 1,
            //         "account_name": 1,
            //     }
            // }
        );

        var items = await JournalEntryModel.aggregate(aggregate)
     
       return items;

    },

    async balanceSheetGrid(items) {
        var items = await this.balanceSheet()
        var items_pos = _.filter(items, function(o) { return o.bal > 0; });
        var items_neg = _.filter(items, function(o) { return o.bal < 0; });

        var newItems = [];
        items_pos.map((item, i) => {
            newItems[i] = {
                account_id: item.account_id,
                account_name: item.account_name,
                bal: item.bal,
                empty: '',
                account_id1: '',
                account_name1: '',
                bal1: '',
            }
        })

        items_neg.map((item1, i) => {
            newItems[i] = Object.assign({}, newItems[i], {
                account_id: newItems[i] ? newItems[i].account_id : null,
                account_name: newItems[i] ? newItems[i].account_name : null,
                bal: newItems[i] ? newItems[i].bal : null,
                empty: '',
                account_id1: item1.account_id,
                account_name1: item1.account_name,
                bal1: item1.bal,
            })
        })

        return newItems
    },

    async plMatchWise() {
        var aggregate = [];
        aggregate.push(
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
                $lookup: {
                    from: "matches",
                    localField: "journal.match_id",
                    foreignField: "_id",
                    as: "match"
                }
            },

            {
                $unwind: "$match"
            },

            // {
            //     "$match": {
            //         "journal.match_id": { "$exists": true, "$ne": null }
            //     }
            // },

            {
                $project: {     
                    match_name: "$match.match_name",
                    match_id: "$journal.match_id",
                    ref_type: "$journal.ref_type",
                    type: 1,
                    bal : 1,
                    is_company: 1,
                }
            },

            {
                $group: {
                    _id: {
                        "match_id" : "$match_id",
                    },
                    "match_id" : { $first: "$match_id"  },
                    "match_name" : { $first: "$match_name"  },
                    
                    'bal': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$type", "PL" ] },
                                           { "$eq": [ "$is_company", true ] },
                                       ]
                                    },

                                    // heree i added -1 becuase it is book account which is DR so it will show +ver
                                    // infacet we have to take money from book if DR but we are book ourselves
                                    {$multiply: ['$bal', -1] }, 
                                    0
                                ]
                            }
                    },

                    'comm_match': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Match Team" ] },
                                           { "$eq": [ "$type", "Commission" ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },
                    'patti_match': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Match Team" ] },
                                           { "$eq": [ "$type", "Patti" ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },
                    'pl_match': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Match Team" ] },
                                           { "$eq": [ "$type", "PL" ] },
                                           { "$eq": [ "$is_company", false ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },

                    'comm_session': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Session" ] },
                                           { "$eq": [ "$type", "Commission" ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },
                    'patti_session': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Session" ] },
                                           { "$eq": [ "$type", "Patti" ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },
                    'pl_session': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Session" ] },
                                           { "$eq": [ "$type", "PL" ] },
                                           { "$eq": [ "$is_company", false ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },

                    'comm_meter': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Meter" ] },
                                           { "$eq": [ "$type", "Commission" ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },
                    'patti_meter': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Meter" ] },
                                           { "$eq": [ "$type", "Patti" ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },
                    'pl_meter': { 
                            '$sum': {
                                '$cond': [
                                    // { '$gt': ['$calcs.favteam_subtotal', 0]}, 
                                    { "$and" : [
                                           { "$eq": [ "$ref_type", "Meter" ] },
                                           { "$eq": [ "$type", "PL" ] },
                                           { "$eq": [ "$is_company", false ] },
                                       ]
                                    },
                                    '$bal', 
                                    0
                                ]
                            }
                    },
                }
            }
            
        );

        var items = await JournalEntryModel.aggregate(aggregate);
        return items
    },


    async plMatchAccountWise() {
        var aggregate = [];
        aggregate.push(

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
                $lookup: {
                    from: "matches",
                    localField: "journal.match_id",
                    foreignField: "_id",
                    as: "match"
                }
            },

            {
                $unwind: "$match"
            },

            {
                $lookup: {
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
            "$match": {
                    "journal.match_id": { "$exists": true, "$ne": null },
                    "is_company" : { "$in": [null, false] },
                }
            },

            {
                $project: {     
                    account_id: 1,
                    account_name: "$account.account_name",
                    match_id: "$journal.match_id",
                    match_name: "$match.match_name",
                    bal : 1,
                }
            },

            

            {
                $group: {
                    _id: {
                        "match_id" : "$match_id",
                        "account_id" : "$account_id",
                    },
                    "match_id" : { $first: "$match_id"  },
                    "match_name" : { $first: "$match_name"  },
                    "account_id" : { $first: "$account_id"  },
                    "account_name" : { $first: "$account_name"  },
                    
                    'bal': { 
                            '$sum': '$bal'
                    },
                }        
            } ,

            { $sort: { match_id: -1 } },
        );

        var items = await JournalEntryModel.aggregate(aggregate);

        return items;
    },


    journalSummary(args = {}) {
        var aggregate = [];
        var match = {}
        if(args.ref_type) {
            match['ref_type'] = args.ref_type
        }

        if(args.ref_id) {
            match['ref_id'] = parseInt(args.ref_id)
            
        }
        
        aggregate.push(
            { $sort: { created_at: -1 } },
            // {
            //     $match: match
            // },
            {
                $lookup:
                {
                   from: "journals",
                   localField: "journal_id",
                   foreignField: "_id",
                   as: "journal"
                }
            },

            {                
                $unwind: {
                    path: "$journal",
                    preserveNullAndEmptyArrays: true
                }
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
                $project : { 
                    _id : 1 , 
                    journal_id : 1 ,
                    match_id : "$journal.match_id" ,
                    account_id: 1,
                    dr_amt: 1,
                    cr_amt: 1,
                    bal: 1,
                    created_at: 1,
                    narration: 1,
                    is_monday_final: 1,
                    type: 1,
                    "ref_type" :"$journal.ref_type",
                    "ref_id" :"$journal.ref_id",
                    "account_name" :"$account.account_name",
                } 
            }
        );

        return JournalEntryModel.aggregate(aggregate);
    },



    async connectListMatches() {
        var matchList = await MatchClass.list({is_declared: true})
        var sessionList = await SessionClass.list({is_declared: true})
        var meterList = await MeterClass.list({is_declared: true})

        var matches = [];
        matchList.map((item, i) => {
            matches.push({
                ref_type: 'Match',
                match_id: item._id,
                id: item._id,
                name: item.match_name,
                created_at: item.created_at,
                is_declared: item.is_declared,
            })
        })


        sessionList.map((item, i) => {
            matches.push({
                ref_type: 'Session',
                match_id: item.match_id,
                id: item._id,
                name: item.session_name,
                created_at: item.created_at,
                is_declared: item.is_declared,
            })
        })

        meterList.map((item, i) => {
            matches.push({
                ref_type: 'Meter',
                match_id: item.match_id,
                id: item._id,
                name: item.meter_name,
                created_at: item.created_at,
                is_declared: item.is_declared,
            })
        })

        matches = _.sortBy(matches, ['match_id', 'type'])
        matches = _.reverse(matches);
        return matches;
    },

    async connectReport(filters=[]) {

        if(filters.length == 0) {
            return []
        }

        var match = {
            "journal.match_id": { "$exists": true, "$ne": null },
            "is_company" : { "$in": [null, false] },

            //  $or:[
            //     {$and: [ 
            //           {"journal.ref_type": "Session"}, 
            //           {"journal.ref_id": 4}, 
            //     ]},

            //     {$and: [ 
            //           {"journal.ref_type": "Match Team"}, 
            //           {"journal.match_id": 2}, 
                      
            //     ]},
              
            // ]

        }

        filters = filters.map((item, i) => {
            if(item.ref_type=='Match') {
                return { 
                    "$and" : [
                        {"journal.ref_type": "Match Team"}, 
                        {"journal.match_id": item.id}, 
                    ]
                }
            }

            if(item.ref_type=='Session') {
                return {
                    "$and" : [
                        {"journal.ref_type": "Session"}, 
                        {"journal.ref_id": item.id}, 
                    ]
                }
            }

            if(item.ref_type=='Meter') {
                return {
                    "$and" : [
                        {"journal.ref_type": "Meter"}, 
                        {"journal.ref_id": item.id}, 
                    ]
                }
            }
        })

        if(filters.length > 0) {
            match['$or'] = filters
        }

        console.log(match)

        var aggregate = [];
        aggregate.push(
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
                $lookup: {
                    from: "matches",
                    localField: "journal.match_id",
                    foreignField: "_id",
                    as: "match"
                }
            },

            {
                $unwind: "$match"
            },

            {
                $lookup: {
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
            "$match": match
            },

            {
                $project: {     
                    account_id: 1,
                    account_name: "$account.account_name",
                    match_id: "$journal.match_id",
                    ref_id: "$journal.ref_id",
                    ref_type: "$journal.ref_type",
                    match_name: "$match.match_name",
                    bal : 1,
                    patti_amt: 1
                }
            },

            {
                $group: {
                    _id: {
                        // "match_id" : "$match_id",
                        // "ref_type" : "$ref_type",
                        // "ref_id" : "$ref_id",
                        "account_id" : "$account_id",

                    },
                    // "ref_type" : { $first: "$ref_type"  },
                    // "ref_id" : { $first: "$ref_id"  },
                    // "match_id" : { $first: "$match_id"  },
                    "account_id" : { $first: "$account_id"  },
                    "account_name" : { $first: "$account_name"  },
                    'bal': { 
                            '$sum': '$bal'
                    },
                    'patti_amt': { 
                        '$sum': '$patti_amt'
                    },
                }        
            } 
        );

        var items = await JournalEntryModel.aggregate(aggregate);

        var items_pos = _.filter(items, function(o) { return o.bal > 0; });
        var items_neg = _.filter(items, function(o) { return o.bal < 0; });

        var newItems = [];
        items_pos.map((item, i) => {
            newItems[i] = {
                account_id: item.account_id,
                account_name: item.account_name,
                bal: item.bal,
                patti_amt: item.patti_amt,
                after_patti: item.bal - item.patti_amt,
                empty: '',
            }
        })

        items_neg.map((item1, i) => {
            newItems[i] = Object.assign({}, newItems[i], {
                account_id1: item1.account_id,
                account_name1: item1.account_name,
                bal1: item1.bal,
                patti_amt1: item1.patti_amt,
                after_patti1: item1.bal - item1.patti_amt,
            })
        })

        return newItems;
    }

};