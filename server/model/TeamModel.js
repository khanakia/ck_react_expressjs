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

tableSchema.pre('save', function (next) {
  // capitalize
  this.team_name = this.team_name.charAt(0).toUpperCase() + this.team_name.slice(1);
  next();
});

/* global db */
module.exports = db.model('Team', tableSchema);