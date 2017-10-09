var express = require('express');
var router = express.Router();

var Account = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')

var MatchEntryClass = require('../class/MatchEntryClass')
var AccountClass = require('../class/AccountClass')
var MatchTeamClass = require('../class/MatchTeamClass')

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
// MatchEntryClass.updateMatchEntryAfterInsert("59da25338d64b83d7d8efc9f").then(function(data){
// 	res.send(data)
// })

 MatchTeamClass.listByMatchId("59d774e3db652b22f83ff98c", function(err, data){
            	res.send(data)
        })

// DbClass.updateMatchEntry("59da25338d64b83d7d8efc9f",function(err,obj){
// 	res.send(obj)
// })
// AccountClass.getPattiTotalPercentage("59da24d61ae1d43d7373744c", function(err,obj){
// 	res.send(obj)
// })
    // res.send('respond with a resource');
});


module.exports = router;
