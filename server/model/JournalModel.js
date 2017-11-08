var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');
var tableSchema = mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    
    match_id: { type: Number, default: null },

    // Match Id or Session Id
    ref_id: { type: Number, default: null },

    // Match, Session
    ref_type: { type: String, default: 'Journal' },
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Journal',
    startAt: 1,
});

/* global db */
module.exports = db.model('Journal', tableSchema);	