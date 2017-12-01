var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var _ = require('lodash');

var AccountModel = require('../model/AccountModel')
var MatchEntryClass = require('../class/MatchEntryClass')
var AccountClass = require('../class/AccountClass')
var DeleteClass = require('../class/DeleteClass')


var ResponseHelper = require('../class/ResponseHelper')

router.get('/', function(req, res, next) {
  	AccountClass.list({is_company: req.query.is_company || null, status: req.query.status || null}).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.get('/canbid', function(req, res, next) {
  	AccountClass.canBid(req.query.account_id || null, req.query.amount).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.get('/:id', function(req, res, next) {
  	AccountModel.findOne({_id: req.params.id}).exec((err, item) => {
  		res.send(item || {})
	})
});

router.post('/',function(req, res, next) {
	AccountClass.save(req.body).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.put('/:id', function(req, res, next) {
	AccountClass.save(req.body, req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.delete('/:id', function(req, res, next) {
 	DeleteClass.account(req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});


module.exports = router;
