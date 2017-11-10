var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var _ = require('lodash');

var ResponseHelper = require('../class/ResponseHelper')
var MatchClass = require('./MatchClass')
var SessionClass = require('./SessionClass')

var JournalEntryModel = require('../model/JournalEntryModel')


module.exports = {

    async connectListMatches() {
        var matchList = await MatchClass.list()
        var sessionList = await SessionClass.list()

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