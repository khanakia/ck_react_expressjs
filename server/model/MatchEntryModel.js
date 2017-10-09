var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var async = require("async");

var tableSchema = mongoose.Schema({
    match_id: { type: ObjectId, required: true },
	account_id: { type: ObjectId, required: true },
    team_id: { type: ObjectId, required: true },
    rate: { type: Number, required: true },
    amount: { type: Number, required: true },
    lk: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    is_declared: { type: Boolean, default: false },
    comm_yn: { type: Boolean, default: true },
    book_no: { type: Number, default: 1 },
    team_name: String,
    account_name: String,
    // save amount for each team assuming as team is winning
    teams_data: {},
    // save account.patti 
    patti: {}
}, { strict: false });

// Getter
// tableSchema.path('amount').get(function(num) {
//   return (num / 100).toFixed(2);
// });

// // Setter
// tableSchema.path('amount').set(function(num) {
//   return num * 100;
// });


tableSchema.statics.updateFullEntry = function updateFullEntry (_id, cb) {
    var _this = this;
    async.waterfall([
        function(next){
            _this.findOne({"_id": _id}).exec(next);
        },
        function(matchEntry, next){
            _this('Account').findOne({_id: matchEntry.account_id}).exec(next)
            // next(null, matchEntry.account_id)
        },
        function(matchEntry, account, next){
            next(null, account)
        }
      
      ], cb);


    return false;
    // return this.model('MatchEntry').findOne({ _id: _id }, cb);

};

/* global db */
module.exports = db.model('MatchEntry', tableSchema);	