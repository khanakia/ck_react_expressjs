
var mongoose = require('mongoose');

var stateSchema = mongoose.Schema({
    name: String
});

/* global db */
module.exports = db.model('State', stateSchema);