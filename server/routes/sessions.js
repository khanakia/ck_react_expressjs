var express = require('express');
var router = express.Router();
var async = require("async");
var await = require("async").await;

var SessionModel = require('../model/SessionModel')
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
router.get('/', function(req, res, next) {
  SessionModel.find({}).exec(function (err, items) {
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
