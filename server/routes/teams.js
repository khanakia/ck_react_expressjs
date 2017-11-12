var express = require('express');
var router = express.Router();

var TeamModel = require('../model/TeamModel')
var DeleteClass = require('../class/DeleteClass')

router.get('/', function(req, res, next) {
    TeamModel.find({}).exec((err, items) => {
    	res.send(items)
	})
});


router.post('/', function(req, res, next) {
	let item = new TeamModel(req.body);  
	item.save((err, obj) => {  
	    if (err) {
	        res.status(500).send(err);
	    }
	    res.status(200).send(obj);
	});

});

router.put('/:id', function(req, res, next) {
	console.log(req.body)
	TeamModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:false}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
  
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
