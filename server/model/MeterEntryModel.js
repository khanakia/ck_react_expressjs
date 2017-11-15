var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    match_id: { type: Number, required: true },
    meter_id: { type: Number, required: true },
    account_id: { type: Number, required: true },
    rate: { type: Number, required: true, default: 1 },
    runs: { type: Number, required: true, default: 0 },
    yn: { type: String, required: true },

    comm_yn: { type: Boolean, default: true },
    calcs: { type: Object, default: {} },

    // it can be -ve or +ve it is the final balance column which we fill after declaring session
    final_amount: { type: Number, default: 0 },
    is_declared: { type: Boolean, default: false },
    is_summarized: { type: Boolean, default: false },
    
}, { 
    strict: false,
    retainKeyOrder: true 
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'MeterEntry',
    startAt: 1,
});

/* global db */
module.exports = db.model('MeterEntry', tableSchema);

