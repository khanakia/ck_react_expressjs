var express = require('express');
var router = express.Router();
var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SessionModel = require('../model/SessionModel')
var SessionClass = require('../class/SessionClass')
    
router.get('/', function(req, res, next) {
  SessionClass.list(req.query).exec(function (err, items) {
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});


router.post('/',function(req, res, next) {
	let item = new SessionModel(req.body);  
	item.save((err, obj) => {  
	    if (err) {
	        return res.status(500).send(err);
	    }
	    return res.status(200).send(obj);
	});

});

router.post('/declare/:id',function(req, res, next) {
	SessionClass.declare(req.params.id, req.body.declared_runs).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.post('/undeclare/:id',function(req, res, next) {
	SessionClass.undeclare(req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.get('/:id', function(req, res, next) {
  SessionModel.findOne({_id: req.params.id}).exec(function (err, items) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});

router.put('/:id', function(req, res, next) {
	SessionModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send(doc);
	});
  
});

router.delete('/:id', function(req, res, next) {
  SessionModel.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});


module.exports = router;
