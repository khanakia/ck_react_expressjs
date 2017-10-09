
var mongoose = require('mongoose');

var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    name: { type: String, required: true },
});

/* global db */
module.exports = db.model('Team', tableSchema);