var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    match_type_name: String,
    match_type_val: String
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'MatchType',
    startAt: 1,
});


/* global db */
module.exports = db.model('MatchType', tableSchema);