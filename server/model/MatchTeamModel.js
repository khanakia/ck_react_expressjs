var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');


var tableSchema = mongoose.Schema({
    match_id: { type: Number, required: true },
    team_id: { type: Number, required: true },
    is_declared: { type: Boolean, default: false },
    // Winer, Loser, Draw, Abandon
    status: { type: String, default: null },
	created_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },

    // total_bid_amt: { type: Number, default: 0 },
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'MatchTeam',
    startAt: 1,
});

/* global db */
module.exports = db.model('MatchTeam', tableSchema);	