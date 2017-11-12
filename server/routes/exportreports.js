var express = require('express');
var router = express.Router();

var ExportClass = require('../class/ExportClass')


router.get('/balance_sheet', function(req, res, next) {
    ExportClass.report_balanceSheet().then(function(data){
        res.send(data)    
    }).catch((err)=>{
        res.send(err)
    })
})

router.get('/pl_matchwise', function(req, res, next) {
    ExportClass.report_plMatchWise().then(function(data){
        res.send(data)    
    }).catch((err)=>{
        res.send(err)
    })
})

router.get('/pl_match_accountwise', function(req, res, next) {
    ExportClass.report_plMatchAccountWise().then(function(data){
        res.send(data)    
    }).catch((err)=>{
        res.send(err)
    })
})

router.post('/connect_report', function(req, res, next) {
    ExportClass.report_connectReport(req.body).then(function(data){
        res.send(data)    
    }).catch((err)=>{
        res.send(err)
    })
})

router.post('/journal_entries', function(req, res, next) {
    ExportClass.journalEntries(req.body).then(function(data){
        res.send(data)    
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports = router;