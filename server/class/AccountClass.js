var async = require("async");

var Account = require('../model/AccountModel')

module.exports = {
    async getPattiAggregate(id, cb) {
        var _this = this;
        var account = await Account.findOne({_id: id})
        var patti_aggregate = account.patti.reduce(function(totals, v) {
                    totals.match += parseFloat(v.match);
                    totals.session += parseFloat(v.session);
                    totals.meter += parseFloat(v.meter);
                    totals.khada += parseFloat(v.khada);
                    return totals;
                }, {match: 0, session: 0, meter: 0, khada: 0});

        return patti_aggregate;
    
    },
    // getPattiTotalPercentage: function(id, cb) {
    //     var _this = this;
    //     async.waterfall([
    //         function(next){
    //             Account.findOne({_id: id}).exec(next)
    //             // next(null, matchEntry.account_id)
    //         },
    //         function(account, next){
    //            var pattiAggregate = account.patti.reduce(function(totals, v) {
    //                 totals.match += parseFloat(v.match);
    //                 totals.session += parseFloat(v.session);
    //                 totals.meter += parseFloat(v.meter);
    //                 totals.khada += parseFloat(v.khada);
    //                 return totals;
    //             }, {match: 0, session: 0, meter: 0, khada: 0});
    //             next(null, pattiAggregate)
    //         }
    //     ], cb);
    // },
};