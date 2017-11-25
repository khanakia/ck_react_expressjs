var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var _ = require('lodash');
const ObjectId1 = mongoose.Types.ObjectId;

var AccountModel = require('../model/AccountModel')
var MeterModel = require('../model/MeterModel')
var MeterEntryModel = require('../model/MeterEntryModel')
var AccountClass = require('./AccountClass')
var ActivityLogClass = require('../class/ActivityLogClass')
module.exports = {
    async save(item, id=null) {
        var meter = await MeterModel.findOne({_id: item.meter_id})
        if(meter.is_declared) {
            throw(ResponseHelper.error(400, 'Meter is declared already.'))
        }

        if(id) {
             try {
                let meterEntry = await MeterEntryModel.findOneAndUpdate({_id: id}, item);
                await this.updateEntryAfterInsert(id)
                // emitter.emit('accountUpdate', id);
                console.log(meterEntry)
                await ActivityLogClass.create({type: Constant.ENTRY_TYPE.METER_ENTRY, action: Constant.ACTIVITY_ACTION.UPDATED, id: meterEntry._id })
                return meterEntry
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        } else {
            try {
                let meterEntry = new MeterEntryModel(item)
                await meterEntry.save();
                await this.updateEntryAfterInsert(meterEntry._id)
                await ActivityLogClass.create({type: Constant.ENTRY_TYPE.METER_ENTRY, action: Constant.ACTIVITY_ACTION.CREATED, id: meterEntry._id })
                return meterEntry
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        }

        return ResponseHelper.ok(200, 'Successfully saved.','',{item})
    },
    
    async meter_updateEntries_onAccountUpdate(accountId) {
        var meterEntries = await MeterEntryModel.find({account_id:accountId, is_declared: {$in: [null, false]}})
        console.log('meterEntries')
        meterEntries.map( async (item,i) => {
            await this.updateEntryAfterInsert(item._id)
        })
    },

    async updateEntryAfterInsert(id, cb) {
        var item = await MeterEntryModel.findOne({"_id": id});
        var account = await AccountModel.findOne({_id: item.account_id})
        var meter_comm_aggregate = await AccountClass.getMeterCommAggregate(item.account_id)

        var patti_aggregate = await AccountClass.getPattiAggregate(item.account_id)
        
        if(item.comm_yn==true) {            
            comm_amt = meter_comm_aggregate;
        }
       
        // Patti will be calculated on final amount after commission
        var patti_total_per = patti_aggregate.meter;
        var rate_after_patti = item.rate - (item.rate * patti_total_per/100)
    
        // item.set("calcs.comm_total_per", meter_comm_aggregate)
        item.set("calcs.comm_amt", comm_amt)
        item.set("calcs.patti_total_per", patti_total_per)
        item.set("calcs.rate_after_patti", rate_after_patti)
        return item.save(cb)
    },


    async meterPL_Info(meterId) {
       var meterEntries = await MeterEntryModel.find({meter_id : parseInt(meterId)})

       let rate_sum = commRec = commPay = 0;

       meterEntries.map( (item,i) => {
            const {calcs} = item
            rate_sum += item.rate
        
            var comm_amt = calcs.comm_amt;
            commRec += comm_amt <= 0 ? comm_amt : 0
            commPay += comm_amt > 0 ? comm_amt : 0
       })
       

       return {
            rate_sum: rate_sum.toFixed(2),
            comm_rec: (-1 * commRec).toFixed(2),
            comm_pay: (-1 * commPay).toFixed(2)
       }
    },

    async buildWinLossList(meterId) {
		var matchEntries = await MeterEntryModel.aggregate([ 
			{
				$match: {
					"meter_id" : parseInt(meterId)
				}
			},
		    { "$group": { 
		        "_id": null,
		        "max": { "$max": "$runs" }, 
		        "min": { "$min": "$runs" } 
		    }},
		    { $limit: 1 }
		])

		var meterEntry = Object.assign({}, 
			{
				min: 1,
				max: 100
			},
			matchEntries[0]
		)

        // meterEntry.min = (meterEntry.min-5) > 0 ? meterEntry.min-5 : 1;
        meterEntry.max = (meterEntry.max+100);


		var meterEntriesGrouped = await MeterEntryModel.aggregate([ 
                {
                    $match: {
                        "meter_id" : parseInt(meterId)
                    }
                },
			    { 
			    	"$group": { 
			            _id: {
			                    "runs" : "$runs",
			                	"yn" : "$yn"
			                },

			            "runs" : {$first: "$runs"},
			            "yn" : {$first: "$yn"},
			            rate:  { $sum: "$calcs.rate_after_patti" },
				    }
				}
			])

        // return (meterEntriesGrouped)
		var wlarray = []
		for (var i = 0; i < meterEntry.max; i++) {
			var amount = 0;

            try {
                var amount = meterEntriesGrouped.reduce((sum, item) => {
                    var diff = item.runs - i
                    diff = item.yn=="Y" ? diff : -1*diff
                    // console.log(diff)
                    var amt = (diff * item.rate)
                    return parseFloat(sum + amt)
                }, 0)
            } catch(e) {
                console.log(e)
            }
            
            // amount = amount - (amount * item.patti_per/100)
            // console.log(item)

			wlarray.push({
				"runs": i,
				"amount" : amount
			})
		}

		// console.log(wlarray)
		return wlarray;
    },


    async getEntryGridList(meter_id, cb){
   
        var project = {
            _id: 1,
            rate: 1,
            runs: 1, 
            amount: 1,
            // amount_patti: "$calcs.amount_patti",
            yn: 1,
            team_id: 1,
            account_id: 1,
            match_id: 1,
            meter_id: 1,
            is_declared: 1,
            is_summarized: 1,
            created_at: 1,
            updated_at: 1,
            comm_yn: 1,
            "account_name": "$account.account_name",
            patti_total_per: "$calcs.patti_total_per",
            // sess_comm: "$calcs.sess_comm",
            rate_after_patti: "$calcs.rate_after_patti",
            comm_amt: "$calcs.comm_amt",
            // comm_total_per: "$calcs.comm_total_per",
        };

        MeterEntryModel.aggregate( [ 
            {
                $match: {
                    meter_id: parseInt(meter_id)
                }
            },
            {
                $lookup:
                {
                   from: "accounts",
                   localField: "account_id",
                   foreignField: "_id",
                   as: "account"
                }
            },
            {
                $unwind:"$account"
            },
            { 
                $project : project
            } 
        ], cb )
    },


    async remove(id, cb) {
        try {
            var meterEntry = await MeterEntryModel.findOne({"_id": id});
            if(meterEntry && meterEntry.is_declared==false) {
                await ActivityLogClass.create({type: Constant.ENTRY_TYPE.METER_ENTRY, action: Constant.ACTIVITY_ACTION.REMOVED, id: meterEntry._id })
                meterEntry.remove(cb)
            } else {
                cb(new Error('Cannot remove item.'), null)
            }
        }
        catch (e) {
           cb(new Error('Cannot remove item.'), null)
        }
        
    },

};