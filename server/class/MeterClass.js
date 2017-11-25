var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var Constant = require('../Constant')
var MeterModel = require('../model/MeterModel')
var MatchSummaryClass = require('./MatchSummaryClass')
var ActivityLogClass = require('../class/ActivityLogClass')
module.exports = {

    async declare(id, runs) {
        var meter = await MeterModel.findOne({_id: parseInt(id)})
        if(meter.is_declared) {
            throw(ResponseHelper.error(400, 'Meter is declared already.'))
        }
        await this.undeclare(id)

        try {
            meter.declared_runs = runs
            meter.is_declared = true
            await meter.save() 
            await MatchSummaryClass.meter_updateFinalWinLossAmt_byMeter(id)
            await MatchSummaryClass.meter_buildJournal(id)
            await ActivityLogClass.create({type: Constant.ENTRY_TYPE.METER, action: Constant.ACTIVITY_ACTION.DECLARED, data: meter })
            return ResponseHelper.ok(200, 'Successfully declared')
        } catch(err) {
            console.log(err)
            await this.undeclare(id)
            throw(ResponseHelper.error(400, 'Cannot declare.'))
        }

        return ResponseHelper.ok(200, 'Successfully declared')
    },

    async undeclare(id) {
        var meter = await MeterModel.findOne({_id: parseInt(id)})
        try {
            await MatchSummaryClass.meter_deleteJournal(id)
            meter.declared_runs = null
            meter.is_declared = false
            await ActivityLogClass.create({type: Constant.ENTRY_TYPE.METER, action: Constant.ACTIVITY_ACTION.UDECLARED, data: meter })
            await meter.save()
        } catch(err) {
            throw(ResponseHelper.error(400, 'Cannot undeclare.'))
        }
        return ResponseHelper.ok(200, 'Successfully undeclared')
    },

    list(args = { match_id: null, is_declared: null}) {
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

            { $sort: { created_at: -1 } },
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
                $project : { 
                    _id : 1 , 
                    match_id: 1,
                    meter_name: 1,
                    is_declared: 1,
                    declared_runs: 1,
                    inn : 1 ,
                    created_at: 1,
                    match_name :"$match.match_name",
                } 
            }
        );



        return MeterModel.aggregate(aggregate);
    },

};