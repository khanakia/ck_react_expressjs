var async = require("async");
var _ = require('lodash');

var ResponseHelper = require('../class/ResponseHelper')
var MatchModel = require('../model/MatchModel')

module.exports = {
    list() {
        var aggregate = [];
        aggregate.push(

            {
                $lookup:
                {
                   from: "teams",
                   localField: "winner_teamid",
                   foreignField: "_id",
                   as: "team"
                }
            },
            
            {                
                $unwind: {
                    path: "$team",
                    preserveNullAndEmptyArrays: true
                }
            },

            { 
                $project : { 
                    _id : 1 , 
                    created_at: 1,
                    match_name :1 ,
                    match_type: 1,
                    is_declared: 1,
                    winner_teamid : 1 ,                    
                    "team_name" :"$team.team_name"
                } 
            }
        );
        
        return MatchModel.aggregate(aggregate);
    }   
};