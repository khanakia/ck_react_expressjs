var express = require('express');
var router = express.Router();
var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SessionEntryModel = require('../model/SessionEntryModel')
var SessionEntryClass = require('../class/SessionEntryClass')
    
router.get('/', function(req, res, next) {

	// SessionEntryClass.getsessionEntryGridList(req.query.session_id, function(err, doc){
	// 	if(err) return res.send(err);
	// 	return res.send(doc);
	// })

	SessionEntryClass.getsessionEntryGridList({session_id: req.query.session_id}).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.get('/winlosslist/:id', function(req, res, next) {
	SessionEntryClass.buildWinLossList(req.params.id).then((data) => {
		res.send(data)
	})
});

router.get('/session_plinfo', function(req, res, next) {
	SessionEntryClass.sessionPL_Info(req.query.session_id).then((data) => {
		res.send(data)
	})
});

router.post('/',function(req, res, next) {
	SessionEntryClass.save(req.body).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.put('/:id', function(req, res, next) {
	SessionEntryClass.save(req.body, req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.delete('/:id', function(req, res, next) {
  	SessionEntryClass.remove({_id: req.params.id}, function(err){
	    if (err) return res.send(500, { error: err });
	    return res.send("succesfully saved");
	});
});


module.exports = router;
