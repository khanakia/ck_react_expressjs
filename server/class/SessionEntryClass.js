var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var _ = require('lodash');
const ObjectId1 = mongoose.Types.ObjectId;

var AccountModel = require('../model/AccountModel')
var SessionModel = require('../model/SessionModel')
var SessionEntryModel = require('../model/SessionEntryModel')
var AccountClass = require('./AccountClass')
// var ResponseHelper = require('../class/ResponseHelper')
var ActivityLogClass = require('../class/ActivityLogClass')
module.exports = {
    async save(item, id=null) {

        var session = await SessionModel.findOne({_id: item.session_id})
        if(session.is_declared) {
            throw(ResponseHelper.error(400, 'Session is declared already.'))
        }

        if(id) {
             try {
                let sessionEntry = await SessionEntryModel.findOneAndUpdate({_id: id}, item);
                await this.updateEntryAfterInsert(id)
                // emitter.emit('accountUpdate', id);
                console.log(sessionEntry)
                await ActivityLogClass.create({type: 'Session Entry', action: 'Updated', id: sessionEntry._id })
                return sessionEntry
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        } else {
            try {
                let sessionEntry = new SessionEntryModel(item)
                await sessionEntry.save();
                await this.updateEntryAfterInsert(sessionEntry._id)
                await ActivityLogClass.create({type: 'Session Entry', action: 'Created', id: sessionEntry._id })
                return sessionEntry
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        }

        return ResponseHelper.ok(200, 'Successfully saved.','',{item})
    },
    
    async session_updateEntries_onAccountUpdate(accountId) {
        var sessionEntries = await SessionEntryModel.find({account_id:accountId, is_declared: {$in: [null, false]}})
        console.log('sessionEntries')
        sessionEntries.map( async (item,i) => {
            await this.updateEntryAfterInsert(item._id)
        })
    },

    async updateEntryAfterInsert(id, cb) {
        var item = await SessionEntryModel.findOne({"_id": id});
        var account = await AccountModel.findOne({_id: item.account_id})
        var sess_comm_aggregate = await AccountClass.getSessCommAggregate(item.account_id)

        // console.log(item.account_id)
        var patti_aggregate = await AccountClass.getPattiAggregate(item.account_id)

        var win_amt = win_amt_subtotal = item.rate * item.amount
        var loose_amt = loose_amt_subtotal = item.amount
        
        // var sess_comm = account.sess_comm;
        // var sess_comm_to = account.sess_comm_to==null ? item.account_id : account.sess_comm_to;
        var comm_amt = loose_comm_amt = 0
        if(item.comm_yn==true) {
            
            // comm_amt = item.amount * sess_comm/100;
            comm_amt = item.amount * sess_comm_aggregate/100;
            win_amt_subtotal +=  comm_amt
            loose_amt_subtotal -= comm_amt
        
        }
        

        // Patti will be calculated on final amount after commission
        var patti_total_per = patti_aggregate.session;
        var amount_patti = (item.amount *  patti_total_per / 100)
        // console.log(amount_patti)
        var win_patti_amt = (win_amt_subtotal *  patti_total_per / 100)
        var loose_patti_amt = (loose_amt_subtotal *  patti_total_per / 100)

        var win_amt_grandtotal = win_amt_subtotal - win_patti_amt
        var loose_amt_grandtotal = loose_amt_subtotal - loose_patti_amt

        // this one i did so i can show amount after patti deduction on frontend
        item.set("calcs.amount_patti", amount_patti)

        item.set("calcs.win_amt", win_amt)
        item.set("calcs.loose_amt", loose_amt)
        // item.set("calcs.sess_comm", sess_comm)
        // item.set("calcs.sess_comm_to", sess_comm_to)
        item.set("calcs.comm_total_per", sess_comm_aggregate)
        item.set("calcs.comm_amt", comm_amt)
        item.set("calcs.win_amt_subtotal", win_amt_subtotal)
        item.set("calcs.loose_amt_subtotal", loose_amt_subtotal)
        item.set("calcs.patti_total_per", patti_total_per)
        item.set("calcs.win_patti_amt", win_patti_amt)
        item.set("calcs.loose_patti_amt", loose_patti_amt)
        item.set("calcs.win_amt_grandtotal", win_amt_grandtotal)
        item.set("calcs.loose_amt_grandtotal", loose_amt_grandtotal)

        // item.set("calcs.patti", account.patti);

        // return item;

        return item.save(cb)
    },


    async sessionPL_Info(sessionId) {
       var sessionEntries = await SessionEntryModel.find({session_id : parseInt(sessionId)})

       let yes = no = yes_after_patti = no_after_patti = commRec = commPay = 0;

       sessionEntries.map( (item,i) => {
            const {calcs} = item
            // console.log(item.amount1, typeof item.amount1)
            yes += item.yn == "Y" ? item.amount : 0;
            no += item.yn == "N" ? item.amount : 0;

            yes_after_patti += item.yn == "Y" ? calcs.amount_patti : 0;
            no_after_patti += item.yn == "N" ? calcs.amount_patti : 0;

            var sess_comm = calcs.sess_comm;
            commRec += sess_comm <= 0 ? sess_comm : 0
            commPay += sess_comm > 0 ? sess_comm : 0
       })
       

       return {
            yes: yes.toFixed(2),
            no: no.toFixed(2),
            yes_after_patti: isNaN(yes_after_patti) ? 'N/A' : yes_after_patti.toFixed(2),
            no_after_patti: isNaN(no_after_patti) ? 'N/A' : no_after_patti.toFixed(2),
            comm_rec: (-1 * commRec).toFixed(2),
            comm_pay: (-1 * commPay).toFixed(2)
       }
    },

    async buildWinLossList(sessionId) {
		var sessionEntries = await SessionEntryModel.aggregate([ 
			{
				$match: {
					"session_id" : parseInt(sessionId)
				}
			},
		    { "$group": { 
		        "_id": null,
		        "max": { "$max": "$runs" }, 
		        "min": { "$min": "$runs" } 
		    }},
		    { $limit: 1 }
		])

		var sessionEntry = Object.assign({}, 
			{
				min: 1,
				max: 100
			},
			sessionEntries[0]
		)

        sessionEntry.min = (sessionEntry.min-5) > 0 ? sessionEntry.min-5 : 1;
        sessionEntry.max = (sessionEntry.max+5);


		var sessionEntriesGrouped = await SessionEntryModel.aggregate([ 
                {
                    $match: {
                        "session_id" : parseInt(sessionId)
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
			            win_amt_subtotal:  { $sum: "$calcs.win_amt_subtotal" },
			            loose_amt_subtotal: { $sum: "$calcs.loose_amt_subtotal" }
				    }
				}
			])

        // return (sessionEntriesGrouped)
		var wlarray = []
		for (var i = sessionEntry.min; i < sessionEntry.max; i++) {
			var amount = 0;
			var winners = _.filter(sessionEntriesGrouped, function(o) {
				// console.log(o.runs)
												return (o.yn=="Y" && o.runs<=i) || (o.yn=="N" && o.runs > i); 
											});
			// console.log(winners)
			var win_total_amt = _.sumBy(winners, 'win_amt_subtotal');

			var loosers = _.filter(sessionEntriesGrouped, function(o) {
												return (o.yn=="N" && o.runs <=i) || (o.yn=="Y" && o.runs > i); 
											});
			// console.log(loosers)
			var loose_total_amt = _.sumBy(loosers, 'loose_amt_subtotal');

			amount = loose_total_amt - win_total_amt;
            // console.log(loose_total_amt)
			// console.log(win_total_amt)
			wlarray.push({
				"runs": i,
				"amount" : amount.toFixed()
			})
		}

		// console.log(wlarray)
		return wlarray;
    },


    async getsessionEntryGridList(session_id, cb){
   
        var project = {
            _id: 1,
            rate: 1,
            runs: 1, 
            amount: 1,
            amount_patti: "$calcs.amount_patti",
            patti_total_per: "$calcs.patti_total_per",
            yn: 1,
            team_id: 1,
            account_id: 1,
            match_id: 1,
            session_id: 1,
            is_declared: 1,
            is_summarized: 1,
            created_at: 1,
            comm_yn: 1,
            "account_name": "$account.account_name",
            // sess_comm: "$calcs.sess_comm",
            comm_amt: "$calcs.comm_amt",
            comm_total_per: "$calcs.comm_total_per",
        };

        SessionEntryModel.aggregate( [ 
            {
                $match: {
                    session_id: parseInt(session_id)
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
            var sessionEntry = await SessionEntryModel.findOne({"_id": id});
            if(sessionEntry && sessionEntry.is_declared==false) {
                await ActivityLogClass.create({type: 'Session Entry', action: 'Removed', id: sessionEntry._id })
                sessionEntry.remove(cb)
            } else {
                cb(new Error('Cannot remove item.'), null)
            }
        }
        catch (e) {
           cb(new Error('Cannot remove item.'), null)
        }
        
    },

};