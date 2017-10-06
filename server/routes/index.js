var express = require('express');
var router = express.Router();
// var db = require('../db')
var dbm = require('../config/dbm')
var ObjectId = require('mongodb').ObjectID;


var StateModel = require('../model/StateModel')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index.html', { title: 'Express' });
});

router.get('/members', function(req, res, next) {
  var fluffy = new StateModel({ name: 'fluffy' });
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  
});
  res.send('respond with a resource');
});


// router.get('/members', function(req, res, next) {
//   var collection = dbm.get().collection('members')
//   collection.find().toArray(function(err, docs) {
//     // res.render('members', {members: docs})
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(docs));
//   })
// });

// router.get('/member/:id', function(req, res, next) {
//   var collection = db.get().collection('members')
//   	var id = new ObjectId(req.params.id);


//   collection.find({"_id": id}).toArray(function(err, docs) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(docs));
//   })
// });

// router.get('/members/insert', function(req, res, next) {
// var collection = db.get().collection('members')
//   collection.insert( { item: "card", qty: 15 } )
//   res.send('respond with a resource');
// });


module.exports = router;
