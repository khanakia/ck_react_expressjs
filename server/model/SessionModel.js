var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    match_id: { type: ObjectId, required: true },
    team_id: { type: ObjectId, required: true },
    session_name: { type: String, required: true },
    is_declared: { type: Boolean, default: false },
    declared_runs: { type: Number, default: null }
});

/* global db */
module.exports = db.model('Session', tableSchema);