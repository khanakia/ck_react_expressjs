var express = require('express');
var router = express.Router();

var Account = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchTypeModel = require('../model/MatchTypeModel')

var MatchEntryClass = require('../class/MatchEntryClass')
var AccountClass = require('../class/AccountClass')
var MatchTeamClass = require('../class/MatchTeamClass')
var MatchSummaryClass = require('../class/MatchSummaryClass')

var SessionEntryClass = require('../class/SessionEntryClass')

/* GET users listing. */
router.get('/', function(req, res, next) {

	// var account = new Account({
	// 	account_name: "Aman"
	// })

	// account.save(function(error, obj){
	// 	if (error) {
	//     	res.status(500).send(error);
	//     }
	//     res.status(200).send(obj);
	// })


	// var mentry = new MatchEntryModel({
	// 	match_id: "59d774e3db652b22f83ff98c",
	// 	account_id: "59da24d61ae1d43d7373744c",
	// 	team_id: "59d7187512dfaf1a6a842d86",
	// 	rate: 0.10,
	// 	amount: 100,
	// 	lk: "L"
	// })

	// mentry.save(function(error, obj){
	// 	if (error) {
	//     	res.status(500).send(error);
	//     }
	//     res.status(200).send(obj);
	// })


	// MatchEntryModel.updateFullEntry("59da25338d64b83d7d8efc9f", function(err,obj){
	// 	res.send(obj);
	// })


// DbClass.sayHelloInSpanish1().then(function(data){
// 	res.send(data)
// })

// MatchEntryClass.generateTeamDataArray("59d774e3db652b22f83ff98c", null).then(function(data){
// 	res.send(data)
// })


 // MatchTeamClass.listByMatchId("59d774e3db652b22f83ff98c", function(err, data){
 //            	res.send(data)
 //        })


// MatchEntryClass.updateMatchEntryAfterInsert("59de0a48050f6a70558dbb7c", function(err, data){
// 	console.log(err)
// })

// MatchSummaryClass.buildSummaryByMatchEntry("59de0a48050f6a70558dbb7c");

// MatchSummaryClass.buildMatchSummary("59dc80189857c85e8d6d94ac").catch((data)=>{
// 	console.log(data)
// });

// MatchSummaryClass.buildMatchEntryJournal("59dc80189857c85e8d6d94ac", "59dc7ffe9857c85e8d6d94a7").then((data) => {
// 	res.send(data)
// })
// MatchEntryClass.buildNetComm().then(function(data){
// 	console.log(data)
// 	res.send(data);
// })

// MatchEntryClass.getTeamsWinLossList().then(function(data){
// 	console.log(data)
// 	res.send(data);
// })


// SessionEntryClass.updateEntryAfterInsert(9).then(function(data){
// 	console.table(data)
// 	res.send(data)
// 	// res.send(data);
// }).catch((err)=>{
// 	res.send(err.message)
// })

SessionEntryClass.sessionPL_Info(9).then(function(data){
	
	res.send(data)
	// res.send(data);
}).catch((err)=>{
	res.send(err.message)
})


// SessionEntryClass.buildWinLossList();

// DbClass.updateMatchEntry("59da25338d64b83d7d8efc9f",function(err,obj){
// 	res.send(obj)
// })
// AccountClass.getPattiTotalPercentage("59da24d61ae1d43d7373744c", function(err,obj){
// 	res.send(obj)
// })
    // res.send('respond with a resource');
});

router.get('/migration', function(req, res, next) {
	MatchTypeModel.findOneAndUpdate({match_type_val: "one_day"}, {match_type_name: "One Day", match_type_val: "one_day"}, {upsert:true}).exec();
	MatchTypeModel.findOneAndUpdate({match_type_val: "twenty"}, {match_type_name: "Twenty-20", match_type_val: "twenty"}, {upsert:true}).exec();
	MatchTypeModel.findOneAndUpdate({match_type_val: "test"}, {match_type_name: "Test", match_type_val: "test"}, {upsert:true}).exec();
	MatchTypeModel.findOneAndUpdate({match_type_val: "cup"}, {match_type_name: "Cup", match_type_val: "cup"}, {upsert:true}).exec();
	res.send("Migration Done")
});


module.exports = router;
