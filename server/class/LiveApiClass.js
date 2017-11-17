var async = require("async");
var await = require("async").await;
var moment = require('moment');
var _ = require('lodash');

var rp = require('request-promise');



var LiveMatchScheduleSeriesModel = require('../model/LiveMatchScheduleSeriesModel')
var LiveMatchScheduleModel = require('../model/LiveMatchScheduleModel')

var MetaDataModel = require('../model/MetaDataModel')

module.exports = {
	async matchScheduleList(args = {}) {
    
		await this.matchScheduleInsertToDB(args)

		var aggregate = [];
        var match = {}
        // if(args.account_id) {
        //     match['account_id'] = parseInt(args.account_id)
        // }
        aggregate.push(
        	{ $sort: { created_at: 1, series_id: 1 } },
            {
                $match: match
            },
            {
                $lookup:
                {
                   from: "livematchscheduleseries",
                   localField: "series_id",
                   foreignField: "_id",
                   as: "series"
                }
            },

            {
                $unwind: "$series"
            },

            { 
                $project : { 
                    _id : 1 , 
                    dated : 1 ,
                    match_name: 1,
                    time: 1,
                    location: 1,
                    "series_name" :"$series.series_name",
                } 
            }
        );

        return LiveMatchScheduleModel.aggregate(aggregate);
	},


    async matchScheduleInsertToDB(args={refresh: false}) {
        var lastFetched = await MetaDataModel.get('liveMatchScheduled_lastFetched')


        // console.log(HelperClass.stringToBoolean(args.refresh))
        if(HelperClass.stringToBoolean(args.refresh)==false) {
            var days = moment().diff(lastFetched, 'days')
            // console.log()
            if(!isNaN(days) && days<7) {
                return false;
            } 
        }

        await LiveMatchScheduleSeriesModel.remove({})
        await LiveMatchScheduleModel.remove({})

    	// http://mapps.cricbuzz.com/cbzandroid/2.0/homescreen.php
        var url = "http://mapps.cricbuzz.com/cbzandroid/2.0/sch_calendar.json"
        // var url = "http://localhost/schedule.json"
        var response = await  rp({
                                url: url,
                                json: true
                            })
        
        var seriesList = response.series

        await Promise.all(
	        seriesList.map( async (itemSeries,i) => {
	        	try {
		            await LiveMatchScheduleSeriesModel.findOneAndUpdate({_id: itemSeries.id}, {
		           		_id: itemSeries.id,
		           		series_name: itemSeries.name
		            }, {upsert: true})
	        	} catch(error) {
	        		console.log(error)
	        	}
	        })
        )


        var matchList = response.matches
        var count = 0

        
        await Promise.all(
	        matchList.map( async (itmeMatch,i) => {
	        	// if(count> 20) return null
	        	try {
		        	var date = `${itmeMatch.strtdt} ${itmeMatch.mnth_yr} ${itmeMatch.strttm}`
		        	// var date = `${itmeMatch.strtdt} ${itmeMatch.mnth_yr}`
		        	var dated = moment(date, 'ddd D MMMM,YYYY HH:mm')
		        	// var dated = moment()
		        	var datedYesterday = moment().subtract(2, 'days')
		        	var isAfter = dated.isAfter(datedYesterday)

                    // Get schedule only upto 7 days
                    var dateFuture = moment().add(7, 'days')
                    var isBefore = dated.isBefore(dateFuture)
		        	// console.log(dated)
		        	// console.log(isAfter)
		        	if(!isAfter || !isBefore) return null
		        	// console.log(itmeMatch.matchid)
		        	// console.log(itmeMatch.dt, moment(date, String).toISOString())
		        	count +=1
		          	var livematch = new LiveMatchScheduleModel({
		           		// _id: itmeMatch.matchid,
		           		series_id: itmeMatch.seriesid,
		           		dated: dated.toISOString(),
		           		match_name: itmeMatch.desc,
		           		time: itmeMatch.strttm || "00:00",
		           		location: date,
		            })
		            await livematch.save()
	        	} catch(error) {
	        		console.log(error)
	        	}
	        })
        )

        await MetaDataModel.updateMeta('liveMatchScheduled_lastFetched', moment().format())

        return 'done'
    },

 

};