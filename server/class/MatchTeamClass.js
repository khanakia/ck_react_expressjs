var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var Account = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var AccountClass = require('./AccountClass')

const ObjectId1 = mongoose.Types.ObjectId;
module.exports = {



    // listByMatchId(match_id, cb) {
    //     const ObjectId1 = mongoose.Types.ObjectId;
    //     return MatchTeamModel.aggregate( [ 
    //         {
    //             $match: {
    //                 'match_id' : ObjectId1(match_id)
    //             }
    //         },
    //          {$lookup:
    //             {
    //                from: "teams",
    //                localField: "team_id",
    //                foreignField: "_id",
    //                as: "newtable"
    //             }
    //         },
    //         {
    //             $unwind:"$newtable"
    //         },
    //         { 
    //             $project : { 
    //                 _id : 1 , 
    //                 team_id : 1 ,
    //                 "team_name" :"$newtable.name"
    //             } 
    //         } 
    //     ])
    // },


    list(args = { match_id: null}) {
        var aggregate = [];
        if(args.match_id) {
            aggregate.push(
                {
                    $match: {
                        'match_id' : ObjectId1(args.match_id)
                    }
                }
            )
        }

        aggregate.push(
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
                $project : { 
                    _id : 1 , 
                    team_id : 1 ,
                    match_id: 1,
                    status: 1,
                    is_declared: 1,
                    updated_at: 1,
                    total_bid_amt: 1,
                    "match_name" :"$match.match_name",
                    "team_name" :"$team.name"
                } 
            }
        );

        return MatchTeamModel.aggregate(aggregate);

    }

};