var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    match_id: { type: Number, required: true },

    // Just informal
    team_id: { type: Number, required: true },
    session_name: { type: String, required: true },
    is_declared: { type: Boolean, default: false },
    declared_runs: { type: Number, default: null }
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Session',
    startAt: 1,
});

/* global db */
module.exports = db.model('Session', tableSchema);