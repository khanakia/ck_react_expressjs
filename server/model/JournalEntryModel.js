var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    journal_id: { type: Number, required: true},
    
    // this is just for reference to know against which account this entry was affected
    by_account_id: { type: Number, required: true},

    account_id: { type: Number, required: true},
    dr_amt: { type: Number, default: 0},
    cr_amt: { type: Number, default: 0},
    bal: { type: Number, default: 0},
    is_monday_final: { type: Boolean, default: false},

    locked: { type: Boolean, default: false},
    // Patti, Commission, PL, Manual
    type: { type: String, default: 'Manual'},

    is_company: { type: Boolean, default: false},
    narration: String
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'JournalEntry',
    startAt: 1,
});

/* global db */
module.exports = db.model('JournalEntry', tableSchema);	