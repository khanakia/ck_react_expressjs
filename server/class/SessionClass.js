var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var SessionModel = require('../model/SessionModel')
var Constant = require('../Constant')
module.exports = {

    list(args = { match_id: null}) {
        var aggregate = [];

        if(args.match_id) {
            aggregate.push(
                {
                    $match: {
                        'match_id' : parseInt(args.match_id)
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
                    match_id: 1,
                    team_id : 1 ,
                    session_name: 1,
                    declared_runs: 1,
                    is_declared: 1,
                    created_at: 1,
                    updated_at: 1,
                    match_name :"$match.match_name",
                    team_name :"$team.team_name"
                } 
            }
        );



        return SessionModel.aggregate(aggregate);

    },

};