var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var pattiSchema = mongoose.Schema({
    account_id:  { type: Number, default: null },
    match: { type: Number, default: 0, min: 0, max: 100 }, // In Percentage
    session: { type: Number, default: 0, min: 0 , max: 100}, // In Percentage
    meter: { type: Number, default: 0 , min: 0, max: 100}, //In Percentage
    khada: { type: Number, default: 0 , min: 0, max: 100} //In Percentage
});

var sessCommSchema = mongoose.Schema({
    account_id:  { type: Number, default: null },
    sess_comm: { type: Number, default: 0, min: 0 , max: 100}, // In Percentage
});


var tableSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    account_name: { type: String, required: true },
    limit: { type: Number, default: 0 },
    match_comm_to: { type: Number, default: null },
    match_comm: { type: Number, default: 0 },
    match_comm_type: { type: String, default: 0 },   
    // sess_comm: { type: Number, default: 0 },
    // sess_comm_to: { type: Number, default: null },
    sess_comm_accounts: { type:[sessCommSchema] , validate: [
      // { validator: pattiTotal, msg: 'Email already exists'}
    ]},
    meter_comm_to: { type: Number, default: null },
    meter_comm: { type: Number, default: 0 },
    hide: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    is_company: { type: Boolean, default: false },
    patti: { type:[pattiSchema] , validate: [
      // { validator: pattiTotal, msg: 'Email already exists'}
    ]}
}, { strict: false });

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Account',
    startAt: 1,
});


tableSchema.pre('save', function (next) {
  // capitalize
  this.account_name = this.account_name.charAt(0).toUpperCase() + this.account_name.slice(1);
  next();
});

/* global db */
module.exports = db.model('Account', tableSchema);	