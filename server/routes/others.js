var express = require('express');
var router = express.Router();
var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

var AccountClass = require('../class/AccountClass')
var OtherClass = require('../class/OtherClass')

router.get('/', function(req, res, next) {
	res.send('ok')
})

router.get('/create_book_account', function(req, res, next) {
	var companyAccountId = AccountClass.getCompanyAccounId()
    res.send({success: 1})
    // res.redirect("/")
})

router.get('/start_anydesk', function(req, res, next) {
	var commandExec = exec("start anydesk.exe", { silent: true })
    res.send({success: 1})
    // res.redirect("/")
})


router.get('/start_ammy', function(req, res, next) {
	var commandExec = exec("start ammy.exe", { silent: true })
    res.send({success: 1})
})



router.get('/server_db_status', function(req, res, next) {
	// console.log(mongoose.connection.readyState)
	var status = 0
	if(mongoose.connection.readyState==1) status = 1
    res.send({status: mongoose.connection.readyState})
})

router.get('/server_startdb', function(req, res, next) {
	aman = "NEW AMAN"
	if(mongoose.connection.readyState!==1) {
		AppClass.startMongoDBServer()
	}
    res.send({message: 'Db Server Starting'})
})


router.get('/remove_all_records', function(req, res, next) {
	OtherClass.removeAllRecords().then(function(data){
        res.send(data)    
    }).catch((err)=>{
        res.status(401).send(err)
    })
});

router.get('/remove_ledger_records', function(req, res, next) {
	OtherClass.removeLedgerRecordsAndMerge().then(function(data){
        res.send(data)    
    }).catch((err)=>{
        res.status(401).send(err)
    })
});

router.get('/clear_wholedb', function(req, res, next) {
	OtherClass.clearWholeDb().then(function(data){
        res.send(data)    
    }).catch((err)=>{
        res.status(401).send(err)
    })
});



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



module.exports = router;
