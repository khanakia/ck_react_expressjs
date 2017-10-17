var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    match_name: { type: String, required: true },

    // One Day, Twenty, Test, Cup
    match_type: { type: String, required: true },
    winner_teamid: { type: Number, default: null },
    is_declared: { type: Boolean, default: false },
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Match',
    startAt: 1,
});

/* global db */
module.exports = db.model('Match', tableSchema);