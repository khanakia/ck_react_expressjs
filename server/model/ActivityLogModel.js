var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    type: { type: String, required: true },
    action: { type: String, required: true },
    description: { type: String, required: true },
    user_id: { type: Number, required: true },
    data: {}
}, { strict: false });

tableSchema.plugin(autoIncrement.plugin, {
    model: 'ActivityLog',
    startAt: 1,
});

/* global db */
module.exports = db.model('ActivityLog', tableSchema);	