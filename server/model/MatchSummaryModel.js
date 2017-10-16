var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');
var tableSchema = mongoose.Schema({
    match_id: { type: Number, required: true },

    // Match Team, Session, Meter
    ref_type: { type: String, defaul: null },
    ref_id: { type: Number, defaul: null },

    // Match|Session
    // entry_type: {type: String, required: true},
    entry_id: { type: Number, required: true },
    entry_account_id: { type: Number, required: true },

    // If team is undeclared again then i need to remove all the entries relates to this teamid and matchid
    team_id: { type: Number, required: true },

    // Account which is affected by that entry
	account_id: { type: Number, required: true },
    dr_amt: { type: Number, default: 0 },
    cr_amt: { type: Number, default: 0 },
    bal: { type: Number, default: 0 },
    // match_amt: { type: Number, default: 0 },
    // sess_amt: { type: Number, default: 0 },
    // player_amt: { type: Number, default: 0 },
    // khadda_amt: { type: Number, default: 0 },
    // total_winloss: { type: Number, default: 0 },
    // patti_amt: { type: Number, default: 0 },
    // match_comm_amt: { type: Number, default: 0 },
    // sess_comm_amt: { type: Number, default: 0 },
    // player_comm_amt: { type: Number, default: 0 },
    // khadda_comm_amt: { type: Number, default: 0 },
    // total_after_patti_comm: { type: Number, default: 0 },
    // net_amt: { type: Number, default: 0 },
    // last_amt: { type: Number, default: 0 },
    // current_bal: { type: Number, default: 0 },

    // Match Win or Loss | Commission | Patti
    summary_type: {type: String, default: null},
    narration: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
}, { strict: false });


tableSchema.plugin(autoIncrement.plugin, {
    model: 'MatchSummary',
    startAt: 1,
});
/* global db */
module.exports = db.model('MatchSummary', tableSchema);	