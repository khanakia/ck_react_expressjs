var express = require('express');
var router = express.Router()
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var compression = require('compression');


// EVENT EMITTER WITH HOOK
// var EventEmitter = require('events').EventEmitter;
// global.EVENTEMITTER = new EventEmitter();
var EventHookClass = require('./class/EventHookClass')

global.USERID = null
global.USER = null

// APP ROUTES
var index = require('./routes/index');
var demo = require('./routes/demo');
var users = require('./routes/users');
var teams = require('./routes/teams');
var accounts = require('./routes/accounts');
var match_types = require('./routes/match_types');
var matches = require('./routes/matches');
var match_teams = require('./routes/match_teams');
var match_entries = require('./routes/match_entries');
var sessions = require('./routes/sessions');
var session_entries = require('./routes/session_entries');
var meters = require('./routes/meters');
var meter_entries = require('./routes/meter_entries');
var journals = require('./routes/journals');
var journal_entries = require('./routes/journal_entries');
var others = require('./routes/others');
var reports = require('./routes/reports');
var backups = require('./routes/backups');
var exportreports = require('./routes/exportreports');
var liveapis = require('./routes/liveapis');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower', express.static(path.join(__dirname, 'node_modules/@bower_components')));
app.use('/temp', express.static(DIR_TEMP));


var routerMiddleware = router.use(function (req, res, next) {
	// console.log('Aman')
	// console.log(req.path)
	if(req.path.indexOf("server_") !== -1) {
		return next()
	}
	if(mongoose.connection.readyState!==1) {
		return res.status(400).send(ResponseHelper.error(400, 'DB Server not running.', 5001))
	} 
  	// console.log(db.readyState)
	next()
})

app.use(routerMiddleware)

// route middleware to verify a token
var authMiddleware = router.use(function(req, res, next) {

  // https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens

  // if(req.path.indexOf("users/login") !== -1) {
  //   return next()
  // }

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, APP_SECRET, function(err, decoded) {      
      if (err) {
        // return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        USERID = parseInt(decoded._id)
        USER = decoded
        // next();
      }
    });

  } else {
    // if there is no token
    // return an error
    // return res.status(403).send({ 
    //     success: false, 
    //     message: 'No token provided.' 
    // });
  }

  next();
});
app.use(authMiddleware)

app.use('/', index);
app.use('/demo', demo);
app.use('/users', users);
app.use('/teams', teams);
app.use('/accounts', accounts);
app.use('/match_types', match_types);
app.use('/matches', matches);
app.use('/match_teams', match_teams);
app.use('/match_entries', match_entries);
app.use('/sessions', sessions);
app.use('/session_entries', session_entries);
app.use('/meters', meters);
app.use('/meter_entries', meter_entries);
app.use('/journals', journals);
app.use('/journal_entries', journal_entries);
app.use('/others', others);
app.use('/reports', reports);
app.use('/backups', backups);
app.use('/exportreports', exportreports);
app.use('/liveapis', liveapis);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


global.app = app
module.exports = app;
