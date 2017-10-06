var mongoose = require('mongoose');

var tableSchema = mongoose.Schema({
    account_name: String,
    state: String,
    limit: Number,
    sess_comm: Number,
    match_comm: Number,
    lk_comm: Number,
    player_comm: Number,
    khada_comm: Number,
    cup_comm: Number,
    tfr_comm_to: Number,
    tfr_sess_comm: Number,
    tfr_match_comm: Number,
    tfr_lk_comm: Number,
    tfr_player_comm: Number,
    tfr_khada_comm: Number,
    tfr_cup_comm: Number,
    patti: Array
});

/* global db */
module.exports = db.model('Account', tableSchema);	