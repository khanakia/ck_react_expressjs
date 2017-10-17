var async = require("async");

var AccountModel = require('../model/AccountModel')

var ResponseHelper = require('../class/ResponseHelper')
var _ = require('lodash');



module.exports = {
    async getPattiAggregate(id, cb) {
        var _this = this;
        var account = await AccountModel.findOne({_id: id})
        var patti_aggregate = account.patti.reduce(function(totals, v) {
                    totals.match += parseFloat(v.match);
                    totals.session += parseFloat(v.session);
                    totals.meter += parseFloat(v.meter);
                    totals.khada += parseFloat(v.khada);
                    return totals;
                }, {match: 0, session: 0, meter: 0, khada: 0});

        return patti_aggregate;
    
    },

    // async demo() {
    //     throw(ResponseHelper.errorThrow(400, 'Error', 'Validate Field'))
    //     return ResponseHelper.ok(200, '1', "Message", {status: 'dd'})
    // },

    async save(item, id=null) {
        var isError = 0
        var errorMessage = null

        // return item;
        item.patti = _.filter(item.patti, function(item, i){
             return !_.isEmpty(item.account_id)
        });

        var pattiAggregate = item.patti.reduce(function(totals, v) {
            totals.match += parseFloat(v.match);
            totals.session += parseFloat(v.session);
            totals.meter += parseFloat(v.meter);
            totals.khada += parseFloat(v.khada);
            return totals;
        }, {match: 0, session: 0, meter: 0, khada: 0});

        if(pattiAggregate.match > 100 
            || pattiAggregate.session > 100
            || pattiAggregate.meter > 100 
            || pattiAggregate.khada > 100 
            ) {
                
            throw(ResponseHelper.error(400, 'Patti Sum should be 100'))
        }

        item.match_comm_to = _.isEmpty(item.match_comm_to) ? null : item.match_comm_to;
        item.sess_comm_to = _.isEmpty(item.sess_comm_to) ? null : item.sess_comm_to;


        if(id) {
             try {
                await AccountModel.findOneAndUpdate({_id: id}, item);
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        } else {
            let account = new AccountModel(item)
            try {
                await account.save();
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        }

        return ResponseHelper.ok(200, 'Successfully saved.')
    },
};