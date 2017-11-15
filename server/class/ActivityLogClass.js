var async = require("async");
var await = require("async").await;

var ActivityLogModel = require('../model/ActivityLogModel')
var AccountModel = require('../model/AccountModel')
var TeamModel = require('../model/TeamModel')
var MatchModel = require('../model/MatchModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var SessionModel = require('../model/SessionModel')
var SessionEntryModel = require('../model/SessionEntryModel')
var MeterModel = require('../model/MeterModel')
var MeterEntryModel = require('../model/MeterEntryModel')

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
            data: args.data,
            user_id: USERID,
            description: '.',
            id: null
        }

        try {
            // if(args.type=="User") {
            //     item.description = `User with username ${args.data.username} ${args.action}`
            // }

            if(args.type=="Match Entry") {
                var matchEntry = await MatchEntryModel.findOne({_id: parseInt(args.id)})
                item.description = `Match Entry with id ${args.id} ${args.action}`
                item.data = await this.matchEntry_createData(matchEntry)
            }

            if(args.type=="Session Entry") {
                var sessionEntry = await SessionEntryModel.findOne({_id: parseInt(args.id)})
                item.description = `Session Entry with id ${args.id} ${args.action}`
                item.data = await this.sessionEntry_createData(sessionEntry)
            }

            if(args.type=="Meter Entry") {
                var meterEntry = await MeterEntryModel.findOne({_id: parseInt(args.id)})
                item.description = `Meter Entry with id ${args.id} ${args.action}`
                item.data = await this.meterEntry_createData(meterEntry)
            }

            if(args.type=="Session") {
                item.description = `Session ${args.action} MatchID: ${args.data.match_id} | Name: ${args.data.session_name} Declared Runs: ${args.data.declared_runs} `
            }

            if(args.type=="Meter") {
                item.description = `Meter ${args.action} MatchID: ${args.data.match_id} | Name: ${args.data.meter_name} Declared Runs: ${args.data.declared_runs} `
            }

            if(args.type=="Match") {
                item.description = `Match ${args.action} MatchID: ${args.data._id} | Name: ${args.data.match_name}`
                item.data = await this.match_createData(args.data)
            }

            if(args.type=="Match Team") {
                var team = await TeamModel.findOne({_id: parseInt(args.data.team_id)})
                item.description = `Match Team set to ${args.action} MatchID: ${args.data.match_id} | Team: ${team.team_name} `
                item.data = await this.matchTeam_createData(args.data)
            }

            var activity = new ActivityLogModel(item)

            await activity.save()

        } catch(error) {
            console.log(error)
        }
    },

    async matchTeam_createData(item) {
        try {
            var match = await MatchModel.findOne({_id: parseInt(item.match_id)})
            var team = await TeamModel.findOne({_id: parseInt(item.team_id)})
            return {
                _id: item.id,
                status: item.status,
                match_id: match._id,
                match_name: match.match_name,
                team_id: team._id,
                team_name: team.team_name,
            }
        } catch(error) {
            console.log(error)
        }

        return {}
    },

    async match_createData(item) {
        try {
            if(item.winner_teamid) {
                var team = await TeamModel.findOne({_id: parseInt(item.winner_teamid)})
            } else {
                var team = new TeamModel
            }
            return {
                _id: item.id,
                match_name: item.match_name,
                team_id: team._id,
                team_name: team.team_name,
            }
        } catch(error) {
            console.log(error)
        }

        return {}
    },

    async meterEntry_createData(item) {
        try {
            var match = await MatchModel.findOne({_id: parseInt(item.match_id)})
            var account = await AccountModel.findOne({_id: parseInt(item.account_id)})
            var meter = await MeterModel.findOne({_id: parseInt(item.meter_id)})
            return {
                _id: item.id,
                rate: item.rate,
                runs: item.runs,
                comm_yn: item.comm_yn,
                match_id: match._id,
                match_name: match.match_name,
                meter_id: meter._id,
                meter_name: meter.meter_name,
                account_id: account._id,
                account_name: account.account_name
            }
        } catch(error) {
            console.log(error)
        }

        return {}
    },


    async sessionEntry_createData(item) {
        try {
            var match = await MatchModel.findOne({_id: parseInt(item.match_id)})
            var account = await AccountModel.findOne({_id: parseInt(item.account_id)})
            var session = await SessionModel.findOne({_id: parseInt(item.session_id)})
            return {
                _id: item.id,
                rate: item.rate,
                amount: item.amount,
                runs: item.runs,
                comm_yn: item.comm_yn,
                match_id: match._id,
                match_name: match.match_name,
                session_id: session._id,
                session_name: session.session_name,
                account_id: account._id,
                account_name: account.account_name
            }
        } catch(error) {
            console.log(error)
        }

        return {}
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