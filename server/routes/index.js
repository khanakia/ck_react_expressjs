var express = require('express');
var router = express.Router();

var SetupClass = require('../class/SetupClass')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/setup', function(req, res, next) {
	SetupClass.init().then((data) => {
		res.send(data);
	}).catch((err)=>{
		res.send(err)
	})
});

module.exports = router;
