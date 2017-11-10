var express = require('express');
var router = express.Router();
var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var shell = require('shelljs');

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

router.get('/', function(req, res, next) {



});

router.get('/start_anydesk', function(req, res, next) {
	var commandExec = exec("start anydesk.exe", { silent: true })
    res.send({success: 1})
    // res.redirect("/")
})


router.get('/start_ammy', function(req, res, next) {
	var commandExec = exec("start ammy.exe", { silent: true })
    res.send({success: 1})
})


// router.get('/db_backup', function(req, res, next) {

// 	exec('rm ckdb.archive')
//  	exec('mongodump -d ckdb --archive=ckdb.archive', { silent: true })
// 	// res.send(stdout)
// 	// res.send("Sdfs")

// 	var filePath = path.resolve('./') + "/ckdb.archive" // or any file format

//   	// Check if file specified by the filePath exists 
// 	fs.exists(filePath, function(exists){
// 		if (exists) {     
// 			// Content-type is very interesting part that guarantee that
// 			// Web browser will handle response in an appropriate manner.
// 			res.writeHead(200, {
// 			  "Content-Type": "application/octet-stream",
// 			  "Content-Disposition" : "attachment; filename=" + "ckdb.archive"
// 			});
// 			fs.createReadStream(filePath).pipe(res);
// 		} else {
// 			// res.writeHead(400, {"Content-Type": "text/plain"});
// 			// res.end("ERROR File does NOT Exists");
// 			res.redirect("/")
// 		}
// 	});
// });

// router.get('/restore', function(req, res, next) {
// 	restore({
// 	  uri: 'mongodb://localhost:27017/ckdb11', // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
// 	  root: __dirname,
// 	  tar: "dump.tar"
// 	});
// 	res.send('restored')
// });



router.get('/db_remove_all_records', function(req, res, next) {
	db.dropCollection('accounts', function(err, result) {});
	db.dropCollection('journals', function(err, result) {});
	db.dropCollection('journalentries', function(err, result) {});
	db.dropCollection('matches', function(err, result) {});
	db.dropCollection('matchentries', function(err, result) {});
	db.dropCollection('matchsummaries', function(err, result) {});
	db.dropCollection('matchteams', function(err, result) {});
	db.dropCollection('sessionentries', function(err, result) {});
	db.dropCollection('sessions', function(err, result) {});
	db.dropCollection('teams', function(err, result) {});

	res.send("ds")
	// res.redirect('/');

});


module.exports = router;
