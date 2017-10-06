var mongoose = require('mongoose');

var state = {
  dbm: null,
}

exports.connect = function(url, done) {
  if (state.dbm) return done()

  mongoose.connect(url, {useMongoClient: true}, function(err) {
    if (err) return done(err)
  })

  state.dbm = mongoose.connection;
  done()
}

exports.get = function() {
  return state.dbm
}

exports.close = function(done) {
  if (state.dbm) {
    state.dbm.close(function(err, result) {
      state.dbm = null
      state.mode = null
      done(err)
    })
  }
}