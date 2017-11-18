// var async = require("async");
// var await = require("async").await;
// var mongoose = require('mongoose');
// const ObjectId1 = mongoose.Types.ObjectId;
// var Constant = require('../Constant')

var MatchModel = require('../model/MatchModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var MatchSummaryClass = require('./MatchSummaryClass')
var ActivityLogClass = require('../class/ActivityLogClass')

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
                    team_id : 1 ,
                    match_id: 1,
                    status: 1,
                    is_declared: 1,
                    updated_at: 1,
                    total_bid_amt: 1,
                    "match_name" :"$match.match_name",
                    "team_name" :"$team.team_name"
                } 
            }
        );

        return MatchTeamModel.aggregate(aggregate);
    },


    async getWinnerTeam(matchId) {
        var matchTeams = await MatchTeamModel.find({match_id: matchId, status : Constant.MATCH_TEAM_STATUS.WINNER})
        return matchTeams ? matchTeams[0] : {}
    },

    async countDeclaredTeams(matchId) {
        var matchTeams = await MatchTeamModel.find({match_id: matchId, is_declared: true})
        return matchTeams.length
    },

    async countUneclaredTeams(matchId) {
        var matchTeams = await MatchTeamModel.find({match_id: matchId, is_declared: false})
        return matchTeams.length
    },

    async checkIfWinnerExists(matchId) {
        var matchTeams = await MatchTeamModel.find({match_id: matchId, status: Constant.MATCH_TEAM_STATUS.WINNER})
        if (matchTeams.length > 0) return true
            return false;
    },

    async setLoser(matchTeamId) {
        try {
            var matchTeam = await MatchTeamModel.findOne({_id: matchTeamId})
            var match = await MatchModel.findOne({_id: matchTeam.match_id})

            matchTeam.status = Constant.MATCH_TEAM_STATUS.LOSER
            matchTeam.is_declared = true
            await matchTeam.save();

            var activityLog = await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH_TEAM, action: Constant.ACTIVITY_ACTION.LOSER, data: matchTeam })

            //// If there is only single undeclared team left then set that team as winner
            var countUneclaredTeams = await this.countUneclaredTeams(matchTeam.match_id)
            // console.log(countUneclaredTeams)
            if(countUneclaredTeams==1) {
                await MatchTeamModel.updateMany(
                    { 
                        match_id : matchTeam.match_id, 
                        status : null
                    },
                    {
                        status : Constant.MATCH_TEAM_STATUS.WINNER,
                        is_declared : true
                    }
                )


                var winnerTeam = await this.getWinnerTeam(match._id)
                match.is_declared = true
                match.winner_teamid = winnerTeam.team_id
                await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH, action: Constant.ACTIVITY_ACTION.DECLARED, data: match })
            }

            // match.declare_method = Constant.MATCH_DECLARE_METHOD.TEAM
            await match.save()

            await MatchSummaryClass.buildMatchJournal(matchTeam.match_id)
            return matchTeam

        } catch(e) {
            throw(ResponseHelper.error(401, 'Cannot set loser.'))
        }
    },

    async setWinner(matchTeamId) {
        try {
            var matchTeam = await MatchTeamModel.findOne({_id: matchTeamId})
            var match = await MatchModel.findOne({_id: matchTeam.match_id})

            if(await this.checkIfWinnerExists(matchTeam.match_id)) {
                 throw new Error("Match is already declared.")
                 return false;
            }

            matchTeam.status = Constant.MATCH_TEAM_STATUS.WINNER
            matchTeam.is_declared = true
            await matchTeam.save();

            var activityLog = await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH_TEAM, action: Constant.ACTIVITY_ACTION.WINNER, data: matchTeam })

            await MatchTeamModel.updateMany(
                { 
                    match_id : matchTeam.match_id, 
                    _id: { $ne: matchTeamId } 
                },
                {
                    status : Constant.MATCH_TEAM_STATUS.LOSER,
                    is_declared : true
                }
            )

            // match.declare_method = Constant.MATCH_DECLARE_METHOD.MATCH
            match.is_declared = true
            match.winner_teamid = matchTeam.team_id
            await match.save()
            var activityLog1 = await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH, action: Constant.ACTIVITY_ACTION.DECLARED, data: match })

            await MatchSummaryClass.buildMatchJournal(matchTeam.match_id)

            return matchTeam

        } catch(err) {

            // ROLL BACK ENTRIES
            matchTeam.is_declared = false
            await matchTeam.save();

            if(activityLog) await activityLog.remove({})

            await MatchTeamModel.updateMany(
                { 
                    match_id : matchTeam.match_id, 
                },
                {
                    status : null,
                    is_declared : false
                }
            )
            
            match.is_declared = false
            match.winner_teamid = null
            await match.save()

            if(activityLog1) await activityLog1.remove({})

            
            await MatchSummaryClass.cleanUndeclaredData(matchTeam.match_id)    

            console.log("setWinner Error", err)
            throw(ResponseHelper.error(401, 'Cannot declare.'))  
        }

    },


    async unsetLoser(matchTeamId) {
        try {
            var matchTeam = await MatchTeamModel.findOne({_id: matchTeamId})
            var match = await MatchModel.findOne({_id: matchTeam.match_id})
            matchTeam.status = null
            matchTeam.is_declared = false
            await matchTeam.save();

            await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH_TEAM, action: Constant.ACTIVITY_ACTION.UDECLARED, data: matchTeam })
            
            await MatchTeamModel.updateMany(
                { 
                    match_id : matchTeam.match_id, 
                    status: Constant.MATCH_TEAM_STATUS.WINNER
                },
                {
                    status : null,
                    is_declared : false
                }
            )        

            // var countDeclaredTeams = await this.countDeclaredTeams(matchTeam.match_id)
            // console.log(countDeclaredTeams)

            // match.declare_method = countDeclaredTeams == 0 ? null : Constant.MATCH_DECLARE_METHOD.TEAM
            match.is_declared = false
            await match.save()
            await ActivityLogClass.create({type: Constant.ENTRY_TYPE.MATCH, action: Constant.ACTIVITY_ACTION.UDECLARED, data: match })

            await MatchSummaryClass.buildMatchJournal(matchTeam.match_id).catch((err)=>{
                console.log(err)
            });

            return matchTeam

        } catch(err) {
            throw(ResponseHelper.error(401, 'Cannot Unset Loser.'))  
        }
    },

    // async undeclareMatch(matchId) {
    //     var match = await MatchModel.findOne({_id: matchId})

    //     if(match.declare_method==Constant.MATCH_DECLARE_METHOD.TEAM) {
    //         throw new Error("Match declared method is set to dropout method.")
    //     }
      
    //     await MatchTeamModel.updateMany(
    //         { 
    //             match_id : matchId
    //         },
    //         {
    //             status : null,
    //             is_declared : false
    //         }
    //     )

    //     match.declare_method = null
    //     match.is_declared = false
    //     await match.save()

    //     return match
    // },

};