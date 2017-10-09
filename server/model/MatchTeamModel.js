var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;



var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    match_id: { type: ObjectId, required: true },
    team_id: { type: ObjectId, required: true },
    update_at: { type: Date, default: Date.now },
    is_declared: { type: Boolean, default: false },
    status: { type: Boolean, default: false },
    total_bid_amt: { type: Number, default: 0 },
});

/* global db */
module.exports = db.model('MatchTeam', tableSchema);	