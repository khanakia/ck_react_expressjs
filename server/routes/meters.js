var express = require('express');
var router = express.Router();

var MeterModel = require('../model/MeterModel')
var MeterClass = require('../class/MeterClass')
    
router.get('/', function(req, res, next) {
  MeterClass.list(req.query).exec(function (err, items) {
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});


router.post('/',function(req, res, next) {
	let item = new MeterModel(req.body);  
	item.save((err, obj) => {  
	    if (err) {
	        return res.status(500).send(err);
	    }
	    return res.status(200).send(obj);
	});

});

router.post('/declare/:id',function(req, res, next) {
	MeterClass.declare(req.params.id, req.body.declared_runs).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.post('/undeclare/:id',function(req, res, next) {
	MeterClass.undeclare(req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.get('/:id', function(req, res, next) {
  MeterModel.findOne({_id: req.params.id}).exec(function (err, items) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});

router.put('/:id', function(req, res, next) {
	MeterModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send(doc);
	});
  
});

router.delete('/:id', function(req, res, next) {
  MeterModel.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});


module.exports = router;
