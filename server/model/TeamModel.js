var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    team_name: { type: String, required: true },
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Team',
    startAt: 1,
});

/* global db */
module.exports = db.model('Team', tableSchema);