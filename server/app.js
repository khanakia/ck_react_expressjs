var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var EventEmitter = require('events').EventEmitter;
global.emitter = new EventEmitter();


// var db = require('./db')
// var dbm = require('./config/dbm')
var mongoose = require('mongoose');
var  autoIncrement = require('mongoose-auto-increment');
// Connect to Mongo on start
// db.connect('mongodb://localhost:27017/ckdb', function(err) {
//   // if (err) {
//   //   console.log('Unable to connect to Mongo.')
//   //   process.exit(1)
//   // } else {
//   //   app.listen(3000, function() {
//   //     console.log('Listening on port 3000...')
//   //   })
//   // }
// })
var uri = 'mongodb://localhost:27017/ckdb';
global.MONGO_DB = uri;
global.db = mongoose.createConnection(uri);
autoIncrement.initialize(db);

var EventHookClass = require('./class/EventHookClass')

var index = require('./routes/index');
var demo = require('./routes/demo');
var users = require('./routes/users');
var states = require('./routes/states');
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

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/demo', demo);
app.use('/users', users);
app.use('/states', states);
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
