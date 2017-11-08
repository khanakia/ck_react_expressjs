var express = require('express');
var router = express.Router();
var async = require("async");
var _ = require('lodash');

var JournalEntryModel = require('../model/JournalEntryModel')
var JournalEntryClass = require('../class/JournalEntryClass')


router.get('/pl_matchwise', function(req, res, next) {
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
        "$match": {
                "journal.match_id": { "$exists": true, "$ne": null }
            }
        },

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
            }
        }
        
    );

    JournalEntryModel.aggregate(aggregate, function(err, items) {
        if (err) return res.send(err)

        return res.send(items)
    });
});

router.get('/pl_match_accountwise', function(req, res, next) {
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
        } 
    );

    JournalEntryModel.aggregate(aggregate, function(err, items) {
        if (err) return res.send(err)

        return res.send(items)
    });
});

module.exports = router;