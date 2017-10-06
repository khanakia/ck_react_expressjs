
var mongoose = require('mongoose');

var tableSchema = mongoose.Schema({
    name: String
});

/* global db */
module.exports = db.model('Team', tableSchema);