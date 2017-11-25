var express = require('express');
var router = express.Router();

var TeamModel = require('../model/TeamModel')
var DeleteClass = require('../class/DeleteClass')
var TeamClass = require('../class/TeamClass')

router.get('/', function(req, res, next) {
    TeamModel.find({}).exec((err, items) => {
    	res.send(items)
	})
});


router.post('/', function(req, res, next) {
	TeamClass.save(req.body).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})

});

router.put('/:id', function(req, res, next) {
	TeamClass.save(req.body, req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
  
});

router.delete('/:id', function(req, res, next) {
    DeleteClass.team(req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});


module.exports = router;
