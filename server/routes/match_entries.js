var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var async = require("async");

var MatchEntryModel = require('../model/MatchEntryModel')
var MatchEntryClass = require('../class/MatchEntryClass')

router.get('/', function(req, res, next) {
	MatchEntryClass.getMatchEntryGridList({match_id: req.query.match_id, book_no: req.query.book_no}, function(err, doc){
		if(err) return res.send(err);
		return res.send(doc);
	})
});

router.get('/match_plinfo', function(req, res, next) {
	async.parallel({
		bookNoList: function (cb){ MatchEntryModel.find({match_id: req.query.match_id}).distinct('book_no').exec(cb) },
		teamsWinLossList: function (cb){ MatchEntryClass.teamsWinLossList({match_id: req.query.match_id, book_no: req.query.book_no}, cb) },
		lastEntryAccountTeamsWinLossList: function (cb){ 
			MatchEntryClass.lastEntryAccountTeamsWinLossList({match_id: req.query.match_id, book_no: req.query.book_no}, cb) 
		}
	}, function(err, result){
		if(err) return res.status(500).send(err)
		res.send(result)
	});

});

router.post('/',function(req, res, next) {
	MatchEntryClass.save(req.body).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.put('/:id', function(req, res, next) {
	MatchEntryClass.save(req.body, req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.delete('/:id', function(req, res, next) {
	MatchEntryClass.remove(req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});


module.exports = router;