var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var async = require("async");


var MatchEntryModel = require('../model/MatchEntryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var MatchEntryClass = require('../class/MatchEntryClass')

router.get('/', function(req, res, next) {

	MatchEntryClass.getMatchEntryGridList({match_id: req.query.match_id, book_no: req.query.book_no}, function(err, doc){
		if(err) return res.send(err);
		return res.send(doc);
	})
});


router.get('/match_plinfo', function(req, res, next) {
  async.parallel({
      bookNoList: function (cb){ MatchEntryModel.find({match_id: req.query.match_id}).distinct('book_no').exec(cb) },
      teamsWinLossList: function (cb){ MatchEntryClass.teamsWinLossList({match_id: req.query.match_id, book_no: req.query.book_no}, cb) }
  }, function(err, result){
       if(err) return res.status(500).send(err)
       res.send(result)
  });

});

// router.get('/count_book', function(req, res, next) {
// 	MatchEntryModel.find({match_id: req.query.match_id}).distinct('book_no', function(err, docs) {
// 		// res.send({count: docs.length+ Math.floor(Math.random() * 5)})
// 		res.send({ count: docs.length + 1 })
// 	})
  	
// });


// router.get('/team_winloss_list', function(req, res, next) {
// 	MatchEntryClass.getTeamsWinLossList({match_id: req.query.match_id, book_no: req.query.book_no}).then(function(data){
// 		res.send(data);
// 	})
// });


// router.get('/:id', function(req, res, next) {
//   MatchEntryModel.findOne({_id: req.params.id}).exec(function (err, items) {
// 	    // res.render('members', {members: docs})
// 	    res.setHeader('Content-Type', 'application/json');
// 	    res.send(JSON.stringify(items));
// 	})
// });

router.post('/',function(req, res, next) {
	var matchEntryItem = req.body;

	// res.send(matchEntryItem);
	let matchEntry = new MatchEntryModel(matchEntryItem)
	matchEntry.save(function(error, obj) {
		if (error) {
	        return res.status(401).send(error);
	    }
	    MatchEntryClass.updateEntryAfterInsert(obj._id, function(err, item){
	    	if(err) {
	    		return res.status(401).send(err);	
	    	}
	    	return res.status(200).send(item);	
	    })
	    // return res.status(200).send(obj);
	});
});

router.put('/:id', function(req, res, next) {

	var matchEntryItem = req.body;

	MatchEntryModel.findOneAndUpdate({_id: req.params.id}, matchEntryItem, {upsert:false}, function(err, obj){
		if (err) {
	        return res.status(401).send(err);
	    }
	    MatchEntryClass.updateEntryAfterInsert(obj._id, function(err, item){
	    	if(err) {
	    		return res.status(401).send(err);	
	    	}
	    	return res.status(200).send(item);	
	    })
	    // return res.status(200).send(obj);
	});
});

router.delete('/:id', function(req, res, next) {
	MatchEntryClass.remove(req.params.id,function(err){
		if (err) return res.send(401, { cerror: err.message });
		return res.send({"success" : 1, "message": "Succesfully removed."})
	})
 //  MatchEntryModel.remove({_id: req.params.id}, function(err){
 //    if (err) return res.send(500, { error: err });
 //    return res.send("succesfully saved");
	// });
});




module.exports = router;
