var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
	created_at: { type: Date, default: Date.now },
    match_name: { type: String, required: true },

    // One Day, Twenty, Test, Cup
    match_type: { type: String, required: true },
    winner_teamid: { type: Number, default: null },
    is_declared: { type: Boolean, default: false },

    /*  There can be two ways to declare match first on Team wise and other is whole match by ignoring team so i can dropout each team
		individually one by one then Journal will be affected based on team_id if i declare match by setting some team as winner 
		then other will be set to loose automatically and journal will be affected by match_id

		Match | Team
	*/
    // declare_method: { type: String, default: null}
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Match',
    startAt: 1,
});

/* global db */
module.exports = db.model('Match', tableSchema);