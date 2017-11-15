var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = new mongoose.Schema({
	_id: { type: Number, require: true },
    created_at: { type: Date, default: Date.now },
    series_name: { type: String, required: true },

}, { strict: false });


/* global db */
module.exports = db.model('LiveMatchScheduleSeries', tableSchema);