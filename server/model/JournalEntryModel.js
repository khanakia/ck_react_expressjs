var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    journal_id: { type: Number, required: true},
    account_id: { type: Number, required: true},
    dr_amt: Number,
    cr_amt: Number,
    bal: Number,
    narration: String
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'JournalEntry',
    startAt: 1,
});

/* global db */
module.exports = db.model('JournalEntry', tableSchema);	