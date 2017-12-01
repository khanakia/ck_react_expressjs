var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var async = require("async");

var tableSchema = mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: null },
    match_id: { type: Number, required: true },
    match_team_id: { type: Number, required: true },
    account_id: { type: Number, required: true },
    team_id: { type: Number, required: true },
    rate: { type: Number, required: true },
    amount: { type: Number, required: true },
    lk: { type: String, required: true },
    
    comm_yn: { type: Boolean, default: true },
    book_no: { type: Number, default: 1 },

    // win_amt: {type: Number, default:0 },
    // loose_amt: {type: Number, default:0 },
    // win_amt_subtotal: {type: Number, default:0 },
    // loose_amt_subtotal: {type: Number, default:0 },
    // match_comm: {type: Number, default:0 },
    // match_comm_type: {type: String, default:null },
    // match_comm_to: {type: Number },
    // win_comm_amt: {type: Number, default:0 },
    // loose_comm_amt: {type: Number, default:0 },
    // match_patti_total_per: {type: Number, default:0 },
    // win_patti_amt: {type: Number, default:0 },
    // loose_patti_amt: {type: Number, default:0 },
    // win_amt_grandtotal: {type: Number, default:0 },
    // loose_amt_grandtotal: {type: Number, default:0 },
    is_summarized: { type: Boolean, default: false },

    calcs: {},
    teams: {},
}, { strict: false });


tableSchema.plugin(autoIncrement.plugin, {
    model: 'MatchEntry',
    startAt: 1,
});

/* global db */
module.exports = db.model('MatchEntry', tableSchema);	