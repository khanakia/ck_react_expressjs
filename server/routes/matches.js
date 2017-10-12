var express = require('express');
var router = express.Router();
var async = require("async");
var await = require("async").await;

var MatchModel = require('../model/MatchModel')
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MatchTeamClass = require('../class/MatchTeamClass')
    
router.get('/', function(req, res, next) {
  MatchModel.find({}).exec(function (err, items) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});

router.get('/:id', function(req, res, next) {
	// MatchModel.findOne({_id: req.params.id}).exec(function(err, docs){
	// 	res.send(docs)
	// })
	// res.send("Sdfs")
	async.parallel({
		match: function (cb){  MatchModel.findOne({_id: req.params.id}).exec(cb) },
		matchTeams: function (cb){ MatchTeamClass.list({match_id: req.params.id}).exec(cb) }
	}, function(err, result){
	   var ret = result.match.toObject();
	   ret.match_teams = result.matchTeams;
	   res.send(ret)
	});
});

router.post('/',function(req, res, next) {
	// res.status(200).send(req.body);
	delete req.body["_id"];
	// res.status(200).send(req.body);

	let item = new MatchModel(req.body);  
	item.save((err, obj) => {  
	    if (err) {
	        return res.status(500).send(err);
	    }
	    return res.status(200).send(obj);
	});

});

router.put('/:id', function(req, res, next) {
	MatchModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send(doc);
	});
  
});

router.delete('/:id', function(req, res, next) {
  MatchModel.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});


module.exports = router;
