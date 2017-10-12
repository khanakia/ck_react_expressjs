var express = require('express');
var router = express.Router();

var JournalEntryModel = require('../model/JournalEntryModel')

var JournalEntryClass = require('../class/JournalEntryClass')


var bodyParser = require('body-parser');
/* GET users listing. */
router.get('/', function(req, res, next) {
  	JournalEntryClass.list({account_id: req.query.account_id}).then(function(err, docs){
		if (err) return res.send(err)
		return res.send(docs)
	})
});

router.get('/:id', function(req, res, next) {
  JournalEntryModel.findOne({_id: req.params.id}).exec(function (err, items) {
	    // res.render('members', {members: docs})
	    res.setHeader('Content-Type', 'application/json');
	    res.send(JSON.stringify(items));
	})
});

router.post('/',function(req, res, next) {

	JournalEntryClass.add(req.body)
	res.send("demo")
	// let model = new JournalEntryModel(req.body);  
	// model.save((err, obj) => {  
	//     if (err) {
	//         res.status(500).send(err);
	//     }
	//     res.status(200).send(obj);
	// });

});

router.put('/:id', function(req, res, next) {
	JournalEntryModel.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
  
});

router.delete('/:id', function(req, res, next) {
  JournalEntryModel.remove({_id: req.params.id}, function(err){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
	});
});


module.exports = router;
