var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    
var MatchTeamModel = require('../model/MatchTeamModel')
var MatchTeamClass = require('../class/MatchTeamClass')

router.get('/', function(req, res, next) {
	MatchTeamClass.list({match_id: req.query.match_id}).then(function(err, docs){
		if (err) return res.send(err)
		return res.send(docs)
	})
// res.send("sdf")
});



router.get('/:id', function(req, res, next) {
  MatchTeamModel.findOne({_id: req.params.id}).exec(function (err, items) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});

router.post('/',function(req, res, next) {
	// res.status(200).send(req.body);
	delete req.body["_id"];
	// res.status(200).send(req.body);

	let item = new MatchTeamModel(req.body);  
	item.save((err, obj) => {  
	    if (err) {
	        res.status(500).send(err);
	    }
	    res.status(200).send(obj);
	});

});

router.post('/set_winner',function(req, res, next) {
	MatchTeamClass.setWinner(req.body.match_team_id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		res.status(401).send({cerror: err.message})
	})
});

router.post('/set_loser',function(req, res, next) {
	MatchTeamClass.setLoser(req.body.match_team_id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		res.status(401).send({cerror: err.message})
	})
});


router.post('/unset_loser',function(req, res, next) {
	MatchTeamClass.unsetLoser(req.body.match_team_id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		res.status(401).send({cerror: err.message})
	})
});

router.post('/undeclare_match',function(req, res, next) {
	MatchTeamClass.undeclareMatch(req.body.match_id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		res.status(401).send({cerror: err.message})
	})
});

router.put('/:id', function(req, res, next) {
	MatchTeamModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
  
});

router.delete('/:id', function(req, res, next) {
  MatchTeamModel.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});


module.exports = router;
