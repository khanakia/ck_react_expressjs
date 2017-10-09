var express = require('express');
var router = express.Router();

var model = require('../model/TeamModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
    model.find({}).exec(function (err, blogs) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(blogs));
	})
});


router.post('/', function(req, res, next) {
	let item = new model(req.body);  
	item.save((err, obj) => {  
	    if (err) {
	        res.status(500).send(err);
	    }
	    res.status(200).send(obj);
	});

});

router.put('/:id', function(req, res, next) {
	model.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
  
});

router.delete('/:id', function(req, res, next) {
    model.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});


module.exports = router;
