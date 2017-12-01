var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var async = require("async");
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: null },
    match_id: { type: Number, required: true },
    session_id: { type: Number, required: true },
    account_id: { type: Number, required: true },
    rate: { type: Number, required: true, default: 1 },
    runs: { type: Number, required: true, default: 0 },
    yn: { type: String, required: true },
    amount: { type: Number, required: true },

    // it can be -ve or +ve it is the final balance column which we fill after declaring session
    final_amount: { type: Number, default: 0 },
    is_declared: { type: Boolean, default: false },
    is_summarized: { type: Boolean, default: false },


    comm_yn: { type: Boolean, default: true },
    

    calcs: { type: Object, default: {} },

    // win_amt: {type: Number, default:0 },
    // loose_amt: {type: Number, default:0 },
    // win_amt_subtotal: {type: Number, default:0 },
    // loose_amt_subtotal: {type: Number, default:0 },
    // match_comm: {type: Number, default:0 },
    // sess_comm_to: {type: Number },
    // comm_amt: {type: Number, default:0 },    
    // patti_total_per: {type: Number, default:0 },
    // win_patti_amt: {type: Number, default:0 },
    // loose_patti_amt: {type: Number, default:0 },
    // win_amt_grandtotal: {type: Number, default:0 },
    // loose_amt_grandtotal: {type: Number, default:0 },


    // save account.patti 
    // patti: {}
}, { 
    strict: false,
    retainKeyOrder: true 
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'SessionEntry',
    startAt: 1,
});

// Getter
// tableSchema.virtual('amount1').get(function(num) {
//   return Number(this.amount.toFixed(2));
// }).set(function(username) {
//     this.amount = 5;
// });


// UserSchema.virtual('usernameLower').get(function() {
//     return this.username.toLowerCase();
// }).set(function(usernameLower) {
//     this.username = usernameLower;
// });



/* global db */
module.exports = db.model('SessionEntry', tableSchema);

