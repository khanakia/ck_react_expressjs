var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    series_id: { type: Number, required: true },
    dated: { type: Date, default: Date.now },
    match_name: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
}, { strict: false });

tableSchema.plugin(autoIncrement.plugin, {
    model: 'LiveMatchSchedule',
    startAt: 1,
});

/* global db */
module.exports = db.model('LiveMatchSchedule', tableSchema);