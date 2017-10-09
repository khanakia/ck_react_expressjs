var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    match_name: String,
    type: String,
    is_declared: Boolean,
    win_teamid: ObjectId
});

/* global db */
module.exports = db.model('Match', tableSchema);