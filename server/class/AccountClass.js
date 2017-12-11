// var async = require("async");
// var _ = require('lodash');

var AccountModel = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')


module.exports = {
    async demo() {
        return 'demo'
    },

    async getCompanyAccounId() {
        var accounts = await AccountModel.find({is_company: true})
        var account = new AccountModel({
            // "account_name" : Constant.ACCOUNT_NAME_BOOK,
            "is_company" : true
        })
        if(accounts.length > 0) {
            account = accounts[0]
        } else {
            account.account_name = Constant.ACCOUNT_NAME_BOOK
            await account.save()
        }

        // console.log(account._id)
        return account._id
    },

    async getCompanyAccount() {
        var accountId = await this.getCompanyAccounId()
        var account = await AccountModel.findOne({_id: accountId})
        return account;
    },

    async updateCompanyName(companyName) {
        if(!companyName) return false;
        var accountId = await this.getCompanyAccounId()
        var account = await AccountModel.findOne({_id: accountId})
        account.account_name = companyName
        await account.save()
        return account;
    },

    async canBid(accountId, amount=0) {
        // Beacuse of Cyclic Dependencies i included these class within funciton
        var JournalEntryClass = require('../class/JournalEntryClass')
        var MatchEntryClass = require('../class/MatchEntryClass')
        var SessionEntryClass = require('../class/SessionEntryClass')

        if(!accountId) return false;
        var account = await AccountModel.findOne({_id : parseInt(accountId)})
        var limit = account.limit || 0
        var balance = await JournalEntryClass.getBalanceByAccountId(accountId)
        var matchEntriesLossAmount = await MatchEntryClass.getLossAmountByAccountId(accountId)
        var SessionEntriesLossAmount = await SessionEntryClass.getLossAmountByAccountId(accountId)

        // return SessionEntriesLossAmount;
        // console.log(SessionEntriesLossAmount)
        var canBidAmount = limit + (-1*balance) + matchEntriesLossAmount - SessionEntriesLossAmount

        var canBid = true;

        if( limit>0 && (amount > canBidAmount)) {
            canBid = false
        }

        var result = {
            limit: limit,
            balance: -1*balance,
            matchLoss: matchEntriesLossAmount,
            sessionLoss: -1*SessionEntriesLossAmount,
            canBidAmount: canBidAmount,
            currentBid: amount,
            canBid: canBid

        }
        return result
    },

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


    async getMatchCommAggregate(id, cb) {
        var _this = this;
        var account = await AccountModel.findOne({_id: id})
        var aggregate = account.match_comm_accounts.reduce(function(totals, v) {
                    if(v.account_id) {
                        totals += parseFloat(v.match_comm);
                    }
                    return totals;
                }, 0);

        // console.log(aggregate)
        return aggregate;
    },

    async getSessCommAggregate(id, cb) {
        var _this = this;
        var account = await AccountModel.findOne({_id: id})
        var aggregate = account.sess_comm_accounts.reduce(function(totals, v) {
                    if(v.account_id) {
                        totals += parseFloat(v.sess_comm);
                    }
                    return totals;
                }, 0);

        // console.log(aggregate)
        return aggregate;
    },

    async getMeterCommAggregate(id, cb) {
        var _this = this;
        var account = await AccountModel.findOne({_id: id})
        var aggregate = account.meter_comm_accounts.reduce(function(totals, v) {
                    if(v.account_id) {
                        totals += parseFloat(v.meter_comm);
                    }
                    return totals;
                }, 0);

        // console.log(aggregate)
        return aggregate;
    },

    

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
        // item.sess_comm_to = _.isEmpty(item.sess_comm_to) ? null : item.sess_comm_to;


        if(id) {
             try {
                await AccountModel.findOneAndUpdate({_id: id}, item);
                EVENTEMITTER.emit('accountUpdate', id);
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        } else {
            // var account1 = await AccountModel.findOne({'account_name' : { $regex : new RegExp(item.account_name, "i") }})
            var account1 = await AccountModel.findOne({'account_name' : { $regex : new RegExp("^" + item.account_name + "$", 'i') }})

            if(account1) {
                throw(ResponseHelper.error(400, 'Account Name alread exists.'))
            }

            let account = new AccountModel(item)
            try {
                await account.save();

                // account.match_comm_to = account._id
                if(!account.sess_comm_accounts[0]['account_id']) {
                    account.sess_comm_accounts[0]['account_id'] = account._id                    
                }

                if(!account.match_comm_accounts[0]['account_id']) {
                    account.match_comm_accounts[0]['account_id'] = account._id
                }
                await account.save()
                return ResponseHelper.ok(200, 'Successfully saved.', {_id: account._id})
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        }

        return ResponseHelper.ok(200, 'Successfully saved.')
    },

    async list(args={is_company: null, status: null}) {
        var filters = {}
        if(args.is_company!==null) {
            filters.is_company = args.is_company
        }
        if(args.status!==null) {
            filters.status = HelperClass.stringToBoolean(args.status)
        }
        return AccountModel.find(filters)
    }


};