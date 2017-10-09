var mongoose = require('mongoose');

var tableSchema = mongoose.Schema({
    date: String,
    account_id: Objectid,
    dr_amount: Number,
    cr_amount: Number,
    balance: Number,
    uid: String,
    narration: String
});

/* global db */
module.exports = db.model('Journal', tableSchema);	