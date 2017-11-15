var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    match_id: { type: Number, required: true },
    meter_name: { type: String, required: true },
    is_declared: { type: Boolean, default: false },
    declared_runs: { type: Number, default: null },
    inn: { type: Number, default: 1 }
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Meter',
    startAt: 1,
});

/* global db */
module.exports = db.model('Meter', tableSchema);