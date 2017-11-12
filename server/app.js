var express = require('express');
var router = express.Router()

var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EventEmitter = require('events').EventEmitter;
global.emitter = new EventEmitter();
var EventHookClass = require('./class/EventHookClass')

var index = require('./routes/index');
var demo = require('./routes/demo');
// var users = require('./routes/users');
var teams = require('./routes/teams');
var accounts = require('./routes/accounts');
var match_types = require('./routes/match_types');
var matches = require('./routes/matches');
var match_teams = require('./routes/match_teams');
var match_entries = require('./routes/match_entries');
var journals = require('./routes/journals');
var journal_entries = require('./routes/journal_entries');
var sessions = require('./routes/sessions');
var session_entries = require('./routes/session_entries');
var others = require('./routes/others');
var reports = require('./routes/reports');
var backups = require('./routes/backups');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower', express.static(path.join(__dirname, 'node_modules/@bower_components')));


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


app.use('/', index);
app.use('/demo', demo);
// app.use('/users', users);
app.use('/teams', teams);
app.use('/accounts', accounts);
app.use('/match_types', match_types);
app.use('/matches', matches);
app.use('/match_teams', match_teams);
app.use('/match_entries', match_entries);
app.use('/journals', journals);
app.use('/journal_entries', journal_entries);
app.use('/sessions', sessions);
app.use('/session_entries', session_entries);
app.use('/others', others);
app.use('/reports', reports);
app.use('/backups', backups);

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

module.exports = app;
