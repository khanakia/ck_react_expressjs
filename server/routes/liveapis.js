var express = require('express');
var router = express.Router();
var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var LiveApiClass = require('../class/LiveApiClass')

router.get('/match_schedules', function(req, res, next) {
	LiveApiClass.matchScheduleList({refresh: req.query.refresh || false}).then(function(data, body){
		// console.log(body)
		// console.log(data)
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
});


module.exports = router;
