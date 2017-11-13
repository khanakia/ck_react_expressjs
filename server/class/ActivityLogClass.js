var async = require("async");
var await = require("async").await;

var ActivityLogModel = require('../model/ActivityLogModel')
var TeamModel = require('../model/TeamModel')
var MatchModel = require('../model/MatchModel')
var AccountModel = require('../model/AccountModel')

module.exports = {
    async list(args = {}) {
        var aggregate = [];
        var match = {}
        if(args.type) {
            match['type'] = parseInt(args.type)
        }

        aggregate.push(
            { $sort: { created_at: -1 } },
            {
                $match: match
            },
            {
                $lookup:
                {
                   from: "users",
                   localField: "user_id",
                   foreignField: "_id",
                   as: "user"
                }
            },

            {
                $unwind: "$user"
            },

            { 
                $project : { 
                    _id : 1 , 
                    created_at : 1 ,
                    type: 1,
                    action: 1,
                    user_id: 1,
                    username: "$user.username",
                    description: 1,
                    data: 1
                } 
            }
        );

        return ActivityLogModel.aggregate(aggregate);
    },

    async create(args={type: null, action: null, data: null}) {
        var item = {
            type: args.type,
            action: args.action,
            data: {},
            user_id: USERID,
            description: '.'
        }

        try {
            if(args.type=="User") {
                item.description = `User with username ${args.data.username} ${args.action}`
            }

            if(args.type=="Match Entry") {
                item.description = `Match Entry with id ${args.data._id} ${args.action}`
                item.data = await this.matchEntry_createData(args.data)
            }

            if(args.type=="Session Entry") {
                item.description = `Session Entry with id ${args.data._id} ${args.action}`
            }

            if(args.type=="Session") {
                item.description = `Session ${args.action} MatchID: ${args.data.match_id} | Name: ${args.data.session_name} Declared Runs: ${args.data.declared_runs} `
            }

            if(args.type=="Match") {
                if(args.action=="Declared") {
                    var team = await TeamModel.findOne({_id: parseInt(args.data.winner_teamid)})
                    item.description = `Match ${args.action} MatchID: ${args.data._id} | Name: ${args.data.match_name} | Winning Team: ${team.team_name} `
                } else {
                    item.description = `Match ${args.action} MatchID: ${args.data._id} | Name: ${args.data.match_name}`
                }
            }

            if(args.type=="Match Team") {
                var team = await TeamModel.findOne({_id: parseInt(args.data.team_id)})
                item.description = `Match Team set to ${args.action} MatchID: ${args.data.match_id} | Team: ${team.team_name} `
            }

            var activity = new ActivityLogModel(item)

            await activity.save()

        } catch(error) {
            console.log(error)
        }
    },

    async matchEntry_createData(item) {
        try {
            var match = await MatchModel.findOne({_id: parseInt(item.match_id)})
            var account = await AccountModel.findOne({_id: parseInt(item.account_id)})
            var team = await TeamModel.findOne({_id: parseInt(item.team_id)})
            return {
                _id: item.id,
                rate: item.rate,
                amount: item.amount,
                lk: item.lk,
                comm_yn: item.comm_yn,
                match_id: match._id,
                match_name: match.match_name,
                team_id: team._id,
                team_name: team.team_name,
                account_id: account._id,
                account_name: account.account_name
            }
        } catch(error) {
            console.log(error)
        }

        return {}
    }
};