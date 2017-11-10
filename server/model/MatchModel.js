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
    is_abandoned: { type: Boolean, default: false },

    /* When we will monday final we will loop through Journal entrires and set each match as monday_final to true 
        and once it is monday finaled it cannot be undeclared
    */
    is_monday_final: { type: Boolean, default: false },
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Match',
    startAt: 1,
});

/* global db */
module.exports = db.model('Match', tableSchema);