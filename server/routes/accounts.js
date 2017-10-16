var express = require('express');
var router = express.Router();

var AccountModel = require('../model/AccountModel')
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var _ = require('lodash');


var MatchEntryClass = require('../class/MatchEntryClass')

router.get('/', function(req, res, next) {
  AccountModel.find({}).exec(function (err, items) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});

router.get('/:id', function(req, res, next) {
  AccountModel.findOne({_id: req.params.id}).exec(function (err, items) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});

router.post('/',function(req, res, next) {
	let accountItem = req.body;
	accountItem.patti = _.filter(accountItem.patti, function(item, i){
		 return !_.isEmpty(item.account_id)
	});

	var pattiAggregate = accountItem.patti.reduce(function(totals, v) {
	    totals.match += parseFloat(v.match);
	    totals.session += parseFloat(v.session);
	    totals.meter += parseFloat(v.meter);
	    totals.khada += parseFloat(v.khada);
	    return totals;
	}, {match: 0, session: 0, meter: 0, khada: 0});

	if(pattiAggregate.match > 100 
		|| pattiAggregate.session > 100
		|| pattiAggregate.meter > 100 
		|| pattiAggregate.khada > 100 
		) {
		return res.status(401).send({cerror: "Patti Sum should be 100"});
	}

	accountItem.match_comm_to = _.isEmpty(accountItem.match_comm_to) ? null : accountItem.match_comm_to;

	// res.status(200).send(accountItem);
	let account = new AccountModel(accountItem)
	account.save(function(error, obj) {
		if (error) {
	        return res.status(401).send(error);
	    }
	    return res.status(200).send(obj);
	});
});

router.put('/:id', function(req, res, next) {
	let accountItem = req.body;
	accountItem.patti = _.filter(accountItem.patti, function(item, i){
		 return !_.isEmpty(item.account_id)
	});

	var pattiAggregate = accountItem.patti.reduce(function(totals, v) {
	    totals.match += parseFloat(v.match);
	    totals.session += parseFloat(v.session);
	    totals.meter += parseFloat(v.meter);
	    totals.khada += parseFloat(v.khada);
	    return totals;
	}, {match: 0, session: 0, meter: 0, khada: 0});

	if(pattiAggregate.match > 100 
		|| pattiAggregate.session > 100
		|| pattiAggregate.meter > 100 
		|| pattiAggregate.khada > 100 
		) {
		return res.status(401).send({cerror: "Patti Sum should be 100"});
	}

	accountItem.match_comm_to = _.isEmpty(accountItem.match_comm_to) ? null : accountItem.match_comm_to;
	
	AccountModel.findOneAndUpdate({_id: req.params.id}, accountItem, {upsert:true}, function(err, obj){
    	if (err) {
	        return res.status(401).send(err);
	    }
	    MatchEntryClass.updateEntriesByAccount(obj._id)
	    return res.status(200).send(obj);
	});
  
});

router.delete('/:id', function(req, res, next) {
  AccountModel.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});


module.exports = router;
