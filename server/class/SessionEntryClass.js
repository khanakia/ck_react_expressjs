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
        var sessionEntry = await SessionEntryModel.findOne({"_id": id});
        var account = await Account.findOne({_id: sessionEntry.account_id})
        var patti_aggregate = await AccountClass.getPattiAggregate(sessionEntry.account_id)

        var win_amt = sessionEntry.rate * sessionEntry.amount
        var loose_amt = sessionEntry.amount
        
        var sess_comm_amt = 0
        var tfr_sess_comm_amt = 0
        var win_amt_after_comm = win_amt;
        var loose_amt_after_comm = loose_amt;

        if(sessionEntry.comm_yn==true){
            sess_comm_amt = account.sess_comm * sessionEntry.amount/100
            tfr_sess_comm_amt = account.tfr_sess_comm * sessionEntry.amount/100

            win_amt_after_comm = win_amt + sess_comm_amt
            loose_amt_after_comm = loose_amt - sess_comm_amt
            
        }

        var sess_patti_total_per = patti_aggregate.session;
        var book_payable_after_patti = win_amt_after_comm - (win_amt_after_comm *  sess_patti_total_per / 100)
        var book_receivable_after_patti = loose_amt_after_comm - (loose_amt_after_comm *  sess_patti_total_per / 100)

        sessionEntry.set("win_amt", win_amt)
        sessionEntry.set("loose_amt", loose_amt)
        sessionEntry.set("sess_comm", account.sess_comm);
        sessionEntry.set("sess_comm_amt", sess_comm_amt);
        sessionEntry.set("tfr_comm_to", account.tfr_comm_to);
        sessionEntry.set("tfr_sess_comm_amt", tfr_sess_comm_amt);
        sessionEntry.set("win_amt_after_comm", win_amt_after_comm  );
        sessionEntry.set("loose_amt_after_comm", loose_amt_after_comm  );
        sessionEntry.set("sess_patti_total_per", sess_patti_total_per)
        sessionEntry.set("book_payable_after_patti", book_payable_after_patti);
        sessionEntry.set("book_receivable_after_patti", book_receivable_after_patti);
        sessionEntry.set("patti", account.patti);
        return sessionEntry.save(cb)
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


    async getsessionEntryGridList(match_id, cb){
        
        var matchTeams = await MatchTeamClass.list({match_id:match_id});

        // console.log(matchTeams)
   
        var project = {
            _id: 1,
            rate: 1,
            amount: 1,
            lk: 1,
            team_id: 1,
            account_id: 1,
            match_id: 1,
            is_declared: 1,
            "team_name": "$team.team_name",
            "account_name": "$account.account_name",
        };

        matchTeams.forEach(function(item,i) {
            // project[item.team_name] = "$teams_data."+item.team_id;
            project[item.team_name] = { $multiply: [ "$teams_data."+item.team_id, -1 ] }
            
        });

        SessionEntryModel.aggregate( [ 
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