var express = require('express');
var router = express.Router();

var BackupClass = require('../class/BackupClass')



var fs = require('fs');
var path = require('path');

router.get('/list_db_backup_files', function(req, res, next) {
	
	BackupClass.listDbBackupFiles().then(function(data){
		res.send(data)
		// res.send(data);
	}).catch((err)=>{
		res.send(err)
	})

})

router.get('/backup_db', function(req, res, next) {
	BackupClass.backupDb().then(function(data){
		res.send(data)
		// res.send(data);
	}).catch((err)=>{
		res.send(err)
	})
})


router.get('/restore_db', function(req, res, next) {
	BackupClass.restoreDb(req.query.dirname).then(function(data){
		res.send(data)
		// res.send(data);
	}).catch((err)=>{
		res.send(err)
	})
})

module.exports = router;
