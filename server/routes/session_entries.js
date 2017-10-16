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

	SessionEntryClass.getsessionEntryGridList(req.query.session_id, function(err, doc){
		if(err) return res.send(err);
		return res.send(doc);
	})
});

router.get('/winlosslist/:id', function(req, res, next) {
	SessionEntryClass.buildWinLossList(req.params.id).then((data) => {
		res.send(data)
	})
});

router.get('/sessionpl_info/:id', function(req, res, next) {
	SessionEntryClass.sessionPL_Info(req.params.id).then((data) => {
		res.send(data)
	})
});

router.post('/',function(req, res, next) {
	// res.status(200).send(req.body);
	delete req.body["_id"];
	// res.status(200).send(req.body);

	let item = new SessionEntryModel(req.body);  
	item.save((err, obj) => {  
	    if (err) {
	        return res.status(500).send(err);
	    }

	    SessionEntryClass.updateEntryAfterInsert(obj._id, function(err, item){
	    	if(err) {
	    		return res.status(401).send(err);	
	    	}
	    	return res.status(200).send(item);	
	    })
	    // return res.status(200).send(obj);
	});

});

router.put('/:id', function(req, res, next) {
	SessionEntryModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });

    	 SessionEntryClass.updateEntryAfterInsert(doc._id, function(err, item){
	    	if(err) {
	    		return res.status(401).send(err);	
	    	}
	    	return res.status(200).send(item);	
	    })
    // return res.send(doc);
	});
  
});

router.delete('/:id', function(req, res, next) {
  SessionEntryModel.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});


module.exports = router;
