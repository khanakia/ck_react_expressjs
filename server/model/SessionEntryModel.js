var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var async = require("async");

var tableSchema = mongoose.Schema({
    // created_at: { type: Date, default: Date.now },
    // updated_at: { type: Date, default: Date.now },
    // match_id: { type: ObjectId, required: true },
    // account_id: { type: ObjectId, required: true },
    // rate: { type: Number, required: true },
    // runs: { type: Number, required: true },
    // lk: { type: String, required: true },
    // amount: { type: Number, required: true },
    // is_declared: { type: Boolean, default: false },
    // comm_yn: { type: Boolean, default: true },
    
    // save account.patti 
    patti: {}
}, { strict: false });


/* global db */
module.exports = db.model('SessionEntry', tableSchema);

