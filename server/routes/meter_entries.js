var express = require('express');
var router = express.Router();

var MeterEntryClass = require('../class/MeterEntryClass')
    
router.get('/', function(req, res, next) {
	MeterEntryClass.getEntryGridList(req.query.meter_id, function(err, doc){
		if(err) return res.send(err);
		return res.send(doc);
	})
});

router.get('/winlosslist/:id', function(req, res, next) {
	MeterEntryClass.buildWinLossList(req.params.id).then((data) => {
		res.send(data)
	})
});

router.get('/meter_plinfo', function(req, res, next) {
	MeterEntryClass.meterPL_Info(req.query.meter_id).then((data) => {
		res.send(data)
	})
});

router.post('/',function(req, res, next) {
	MeterEntryClass.save(req.body).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.put('/:id', function(req, res, next) {
	MeterEntryClass.save(req.body, req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.delete('/:id', function(req, res, next) {
  	MeterEntryClass.remove({_id: req.params.id}, function(err){
	    if (err) return res.send(500, { error: err });
	    return res.send("succesfully saved");
	});
});


module.exports = router;
