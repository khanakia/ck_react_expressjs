var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var async = require("async");


var MatchEntryModel = require('../model/MatchEntryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var MatchEntryClass = require('../class/MatchEntryClass')

router.get('/', function(req, res, next) {

	MatchEntryClass.getMatchEntryGridList("59d774e3db652b22f83ff98c", function(err, doc){
		if(err) return res.send(err);
		return res.send(doc);
	})
});

router.get('/count_book', function(req, res, next) {
	MatchEntryModel.find({match_id: req.query.match_id}).distinct('book_no', function(err, docs) {
		res.send({count: docs.length+2})
	})
  	
});


router.get('/:id', function(req, res, next) {
  MatchEntryModel.findOne({_id: req.params.id}).exec(function (err, items) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});

router.post('/',function(req, res, next) {
	var matchEntryItem = req.body;

	let matchEntry = new MatchEntryModel(matchEntryItem)
	matchEntry.save(function(error, obj) {
		if (error) {
	        return res.status(401).send(error);
	    }
	    MatchEntryClass.updateMatchEntryAfterInsert(obj._id, function(err, item){
	    	if(err) {
	    		return res.status(401).send(err);	
	    	}
	    	return res.status(200).send(item);	
	    })
	    // return res.status(200).send(obj);
	});
});

router.put('/:id', function(req, res, next) {
	MatchEntryModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
  
});

router.delete('/:id', function(req, res, next) {
  MatchEntryModel.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});




module.exports = router;
