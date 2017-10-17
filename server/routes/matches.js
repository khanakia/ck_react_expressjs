var express = require('express');
var router = express.Router();
var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MatchModel = require('../model/MatchModel')
var MatchClass = require('../class/MatchClass')
var MatchTeamClass = require('../class/MatchTeamClass')
var DeleteClass = require('../class/DeleteClass')
    
router.get('/', function(req, res, next) {
  	MatchClass.list().then(function(err, docs){
		if (err) return res.send(err)
		return res.send(docs)
	})
});

router.get('/:id', function(req, res, next) {
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
	let item = new MatchModel(req.body);  
	item.save((err, obj) => {  
	    if (err) {
	        return res.status(500).send(err);
	    }
	    return res.status(200).send(obj);
	});

});

router.put('/:id', function(req, res, next) {
	MatchModel.findOneAndUpdate({_id: req.params.id}, req.body, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send(doc);
	});
  
});

router.delete('/:id', function(req, res, next) {
	DeleteClass.match(req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});


module.exports = router;
