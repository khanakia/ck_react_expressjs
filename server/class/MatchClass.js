// var async = require("async");
// var _ = require('lodash');

// var ResponseHelper = require('../class/ResponseHelper')
var MatchModel = require('../model/MatchModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var MatchSummaryClass = require('./MatchSummaryClass')
var ActivityLogClass = require('../class/ActivityLogClass')
module.exports = {
    async undeclare(id) {
        id = parseInt(id)
        var match = await MatchModel.findOne({_id: id})
        try {
            await MatchTeamModel.updateMany({"match_id": id}, {"is_declared": false, "status" : null});
            await MatchSummaryClass.cleanUndeclaredData(id)
            match.is_declared = false
            match.winner_teamid = null
            await match.save()
            await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH, action: Constant.ACTIVITY_ACTION.UDECLARED, data: match })
        } catch(err) {
            console.log(err)
            throw(ResponseHelper.error(400, 'Cannot undeclare.'))
        }
    },

    list(args={is_declared: null}) {
        var aggregate = [];

        var match = {}
        if(args.match_id) {
            match['match_id'] = parseInt(args.match_id)
        }

        if(args.is_declared) {
            match['is_declared'] = JSON.parse(args.is_declared)
        }

        aggregate.push(
             {
                $match: match
            },

            { $sort: { createdDate: -1 } },

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
                    is_abandoned: 1,
                    winner_teamid : 1 ,                    
                    "team_name" :"$team.team_name"
                } 
            }
        );
        
        return MatchModel.aggregate(aggregate);
    }   
};