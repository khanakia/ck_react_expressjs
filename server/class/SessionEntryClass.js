var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var _ = require('lodash');
var Account = require('../model/AccountModel')
var SessionEntryModel = require('../model/SessionEntryModel')
var AccountClass = require('./AccountClass')
const ObjectId1 = mongoose.Types.ObjectId;
module.exports = {

    async updateEntryAfterInsert(id, cb) {
        var item = await SessionEntryModel.findOne({"_id": id});
        var account = await Account.findOne({_id: item.account_id})
        var patti_aggregate = await AccountClass.getPattiAggregate(item.account_id)

        var win_amt = win_amt_subtotal = item.rate * item.amount
        var loose_amt = loose_amt_subtotal = item.amount
        
        var sess_comm = account.sess_comm;
        var sess_comm_to = account.sess_comm_to==null ? item.account_id : account.sess_comm_to;
        var comm_amt = loose_comm_amt = 0
        if(item.comm_yn==true) {
            
            comm_amt = item.amount * sess_comm/100;
            
            // if it is same accoutn id then add or subtract commission and display on frontend otherwise we will add commision for third parties directly in match summary
            // so in match summary win amt or loss amt will be always without commissino we will add new entry for commission in match summary always
            if(sess_comm_to == item.account_id) {
                win_amt_subtotal = win_amt_subtotal + comm_amt
                loose_amt_subtotal = loose_amt_subtotal - comm_amt
            }
        }
        

        // Patti will be calculated on final amount after commission
        var patti_total_per = patti_aggregate.session;
        var win_patti_amt = (win_amt_subtotal *  patti_total_per / 100)
        var loose_patti_amt = (loose_amt_subtotal *  patti_total_per / 100)

        var win_amt_grandtotal = win_amt_subtotal - win_patti_amt
        var loose_amt_grandtotal = loose_amt_subtotal - loose_patti_amt


        item.set("calcs.win_amt", win_amt)
        item.set("calcs.loose_amt", loose_amt)
        item.set("calcs.win_amt_subtotal", win_amt_subtotal)
        item.set("calcs.loose_amt_subtotal", loose_amt_subtotal)
        item.set("calcs.sess_comm", sess_comm)
        item.set("calcs.sess_comm_to", sess_comm_to)
        item.set("calcs.comm_amt", comm_amt)
        item.set("calcs.patti_total_per", patti_total_per)
        item.set("calcs.win_patti_amt", win_patti_amt)
        item.set("calcs.loose_patti_amt", loose_patti_amt)
        item.set("calcs.win_amt_grandtotal", win_amt_grandtotal)
        item.set("calcs.loose_amt_grandtotal", loose_amt_grandtotal)

        item.set("calcs.patti", account.patti);

        // return item;

        return item.save(cb)
    },


    async sessionPL_Info(sessionId) {
       var sessionEntries = await SessionEntryModel.find({session_id : parseInt(sessionId)})

       let yes = no = commRec = commPay = 0;

       sessionEntries.map( (item,i) => {
            const {calcs} = item
            yes += item.yn == "Y" ? item.amount : 0;
            no += item.yn == "N" ? item.amount : 0;
            commRec += calcs.sess_comm <= 0 ? calcs.sess_comm : 0
            commPay += calcs.sess_comm > 0 ? calcs.sess_comm : 0
       })
       

       return {
            yes: yes,
            no: no,
            comm_rec: -1 * commRec,
            comm_pay: -1 * commPay
       }
    },

    async buildWinLossList() {
		// var sessionEntries = await SessionEntryModel.aggregate([ 
		// 	// {
		// 	// 	$match: {
		// 	// 		"_id" : ""
		// 	// 	}
		// 	// },
		//     { "$group": { 
		//         "_id": null,
		//         "max": { "$max": "$runs" }, 
		//         "min": { "$min": "$runs" } 
		//     }},
		//     { $limit: 1 }
		// ])

		// var sessionEntry = Object.assign({}, 
		// 	{
		// 		min: 0,
		// 		max: 0
		// 	},
		// 	sessionEntries[0]
		// )


		var sessionEntriesGrouped = await SessionEntryModel.aggregate([ 
			    { 
			    	"$group": { 
			            _id: {
			                    "runs" : "$runs",
			                	"lk" : "$lk"
			                },

			            "runs" : {$first: "$runs"},
			            "lk" : {$first: "$lk"},
			            win_amt_after_comm:  { $sum: "$win_amt_after_comm" },
			            loose_amt_after_comm: { $sum: "$loose_amt_after_comm" }
				    }
				}
			])

		var wlarray = []
		for (var i = 1; i < 100; i++) {
			var amount = 0;
			var winners = _.filter(sessionEntriesGrouped, function(o) {
				// console.log(o.runs)
												return (o.lk=="L" && o.runs<=i) || (o.lk=="K" && o.runs > i); 
											});
			// console.log(winners)
			var win_total_amt = _.sumBy(winners, 'win_amt_after_comm');

			var loosers = _.filter(sessionEntriesGrouped, function(o) {
												return (o.lk=="K" && o.runs <=i) || (o.lk=="L" && o.runs > i); 
											});
			// console.log(loosers)
			var loose_total_amt = _.sumBy(loosers, 'loose_amt_after_comm');

			amount = loose_total_amt - win_total_amt;
			// console.log(win_total_amt)
			wlarray.push({
				"runs": i,
				"amount" : amount
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
            yn: 1,
            team_id: 1,
            account_id: 1,
            match_id: 1,
            session_id: 1,
            is_declared: 1,
            created_at: 1,
            comm_yn: 1,
            "account_name": "$account.account_name",
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