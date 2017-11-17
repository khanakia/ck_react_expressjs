var express = require('express');
var router = express.Router();

var UserModel = require('../model/UserModel')
var UserClass = require('../class/UserClass')

router.get('/', function(req, res, next) {
  	UserClass.list({}).then((data)=>{
		res.send(data)
	}).catch((err) => {
		res.status(401).send(err)
	})
});

router.get('/:id', function(req, res, next) {
  	UserModel.findOne({_id: req.params.id}).exec((err, item) => {
  		if(USER && USER.is_sa) return res.send(item || {})
  		if(item.is_hidden) {
  			return res.status(401).send(ResponseHelper.error(401, 'Permission denied.'))
  		}
  		return res.send(item || {})
	})
});

router.post('/',function(req, res, next) {
	UserClass.save(req.body).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});

router.put('/:id', function(req, res, next) {
	UserClass.save(req.body, req.params.id).then((data)=>{
		res.send(data)
	}).catch((err) => {
		console.log('ERROR', err)
		res.status(401).send(err)
	})
});


router.post('/login', function(req, res, next) {
	UserClass.login({username: req.body.username || null, password: req.body.password || null}).then((data) => {
		res.send(data);
	}).catch((err)=>{
		res.status(401).send(err)
	})
});


router.post('/changepassword', function(req, res, next) {
	UserClass.changePassword({
		id: req.body.id || null, 
		oldPassword: req.body.oldpassword || null, 
		newPassword: req.body.password || null
	}).then((data) => {
		res.send(data);
	}).catch((err)=>{
		res.status(401).send(err)
	})
});


module.exports = router;
