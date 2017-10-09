var async = require("async");
var await = require("async").await;

var Account = require('../model/AccountModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var AccountClass = require('./AccountClass')
var MatchTeamClass = require('./MatchTeamClass')

module.exports = {

    async updateMatchEntryAfterInsert(id, cb) {
        var matchEntry = await MatchEntryModel.findOne({"_id": id});
        var account = await Account.findOne({_id: matchEntry.account_id})
        var patti_aggregate = await AccountClass.getPattiAggregate(matchEntry.account_id)

        var win_amt = this.winAmtByLK(matchEntry.rate, matchEntry.amount, matchEntry.lk)
        var loose_amt = this.looseAmtByLK(matchEntry.rate, matchEntry.amount, matchEntry.lk)
        var match_comm_amt = this.matchCommAmt(account.match_comm, win_amt, loose_amt)
        var lk_comm_amt = this.lkCommAmt(account.lk_comm, win_amt, loose_amt)
        var tfr_match_comm_amt = this.matchCommAmt(account.tfr_match_comm, win_amt, loose_amt)
        var tfr_lk_comm_amt = this.lkCommAmt(account.tfr_lk_comm, win_amt, loose_amt)

        var winAmtWithComm = win_amt;
        var looseAmtWithComm = loose_amt;

        if(matchEntry.comm_yn==true){
            winAmtWithComm = account.match_comm<0 ? win_amt + match_comm_amt : win_amt;
            winAmtWithComm = account.lk_comm<0 ? winAmtWithComm + lk_comm_amt : winAmtWithComm;

            looseAmtWithComm = account.match_comm>0 ? loose_amt + match_comm_amt : loose_amt;
            looseAmtWithComm = account.lk_comm>0 ? looseAmtWithComm + match_comm : looseAmtWithComm;
        }

        var match_patti_total_per = patti_aggregate.match;
        var win_amt_after_patti = winAmtWithComm - (winAmtWithComm *  match_patti_total_per / 100)
        var loose_amt_after_patti = looseAmtWithComm - (looseAmtWithComm *  match_patti_total_per / 100)

        matchEntry.set("win_amt", win_amt)
        matchEntry.set("loose_amt", loose_amt)
        matchEntry.set("match_comm", account.match_comm);
        matchEntry.set("lk_comm", account.lk_comm);
        matchEntry.set("match_comm_amt", match_comm_amt);
        matchEntry.set("lk_comm_amt", lk_comm_amt);
        matchEntry.set("tfr_comm_to", account.tfr_comm_to);
        matchEntry.set("tfr_match_comm_amt", tfr_match_comm_amt);
        matchEntry.set("tfr_lk_comm_amt", tfr_lk_comm_amt);
        matchEntry.set("win_amt_with_comm", winAmtWithComm  );
        matchEntry.set("loose_amt_with_comm", looseAmtWithComm  );
        matchEntry.set("match_patti_total_per", match_patti_total_per)
        matchEntry.set("win_amt_after_patti", win_amt_after_patti);
        matchEntry.set("loose_amt_after_patti", loose_amt_after_patti);
        matchEntry.set("patti", account.patti);

        var teams_data = await this.teamsDataArray(matchEntry.match_id, matchEntry.team_id, win_amt_after_patti, loose_amt_after_patti )
        matchEntry.set("teams_data", teams_data);

        return matchEntry.save(cb)
       // return matchEntry;
    },

    async teamsDataArray(match_id, team_id, win_amt, loose_amt ) {
        var teams_data = {};
        var matchTeams = await MatchTeamModel.find({"match_id": match_id})
        matchTeams.forEach(function(item,i) {
            var amount = (item.team_id.equals(team_id)) ? win_amt : loose_amt;
            // console.log(team_id, item.team_id, typeof item.team_id,(team_id == item.team_id))
            item.total_bid_amt += -1*amount;
            item.save();
            teams_data[item.team_id] = parseFloat(amount);
        });
       return teams_data;
    },

    // updateMatchEntry1: function(id, cb) {
    //     var _this = this;
    //     async.waterfall([
    //         function(next){
    //             MatchEntryModel.findOne({"_id": id}).exec(next);
    //         },
    //         function(matchEntry, next){
    //             // Account.findOne({_id: matchEntry.account_id}).exec(function(err, account){
    //             //   next(null, matchEntry, account)  
    //             // })
    //             // next(null, matchEntry.account_id)
    //             async.parallel({
    //                 // await _this.sayHelloInSpanish()
    //                 modelAFind: function (cb){ Account.findOne({_id: matchEntry.account_id}).exec(cb); },
    //                 modelBFind: function (cb){ AccountClass.getPattiTotalPercentage("59da24d61ae1d43d7373744c", cb); }
    //             }, function(err, result){
    //                 var account = result.modelAFind;
    //                 account.dataB = result.modelBFind;
    //                 next(null, matchEntry, account)
    //             });
    //         },
    //         function(matchEntry, account, next){
    //             var win_amt = _this.winAmtByLK(matchEntry.rate, matchEntry.amount, matchEntry.lk)
    //             var loose_amt = _this.looseAmtByLK(matchEntry.rate, matchEntry.amount, matchEntry.lk)
    //             var match_comm_amt = _this.matchCommAmt(account.match_comm, win_amt, loose_amt)
    //             var lk_comm_amt = _this.lkCommAmt(account.lk_comm, win_amt, loose_amt)
    //             var tfr_match_comm_amt = _this.matchCommAmt(account.tfr_match_comm, win_amt, loose_amt)
    //             var tfr_lk_comm_amt = _this.lkCommAmt(account.tfr_lk_comm, win_amt, loose_amt)

    //             matchEntry.set("win_amt", win_amt)
    //             matchEntry.set("loose_amt", loose_amt)
    //             matchEntry.set("match_comm", account.match_comm);
    //             matchEntry.set("lk_comm", account.lk_comm);
    //             matchEntry.set("match_comm_amt", match_comm_amt);
    //             matchEntry.set("lk_comm_amt", lk_comm_amt);
    //             matchEntry.set("tfr_comm_to", account.tfr_comm_to);
    //             matchEntry.set("tfr_match_comm_amt", tfr_match_comm_amt);
    //             matchEntry.set("tfr_lk_comm_amt", tfr_lk_comm_amt);


    //             var win_amt_after_comm = account.match_comm<0 ? win_amt + match_comm_amt : win_amt;
    //                 win_amt_after_comm = account.lk_comm<0 ? win_amt_after_comm + lk_comm_amt : win_amt_after_comm;
                
    //             var loose_amt_after_comm = account.match_comm>0 ? loose_amt + match_comm_amt : loose_amt;
    //                 loose_amt_after_comm = account.lk_comm>0 ? loose_amt_after_comm + match_comm : loose_amt_after_comm;
                
    //             matchEntry.set("win_amt_after_comm", win_amt_after_comm  );
    //             matchEntry.set("loose_amt_after_comm", loose_amt_after_comm  );

    //             matchEntry.aman = "dsfsd"
    //             next(null, matchEntry)
    //         }
          
    //     ], cb);
    // },

    winAmtByLK(rate, amount, mode) {
        if(mode == "L") {
            return amount * rate;
        } else {
            return amount;
        }
    },

    looseAmtByLK(rate, amount, mode) {
        if(mode == "L") {
            return -1 * amount;
        } else {
            return -1 * amount * rate;
        }
    },

    matchCommAmt(comm, win_amt, loose_amt) {
        if ( comm > 0 ) {
            // Yeah, it's positive
            return -1 * loose_amt * comm/100;
        } else {
            return  -1 * win_amt * comm/100;
        }
    },

    lkCommAmt(comm, win_amt, loose_amt) {
        if ( comm > 0 ) {
            // Yeah, it's positive
            return loose_amt * comm/100;
        } else {
            return win_amt * comm/100;
        }
    },


    async getMatchEntryGridList(match_id, cb){
        
        var matchTeams = await MatchTeamClass.list({match_id:match_id});

        // console.log(matchTeams)
   
        var project = {
            _id: 1,
            rate: 1,
            amount: 1,
            lk: 1,
            "team_name": "$team.name",
            "account_name": "$account.account_name",
        };

        matchTeams.forEach(function(item,i) {
            // project[item.team_name] = "$teams_data."+item.team_id;
            project[item.team_name] = { $multiply: [ "$teams_data."+item.team_id, -1 ] }
            
        });

        MatchEntryModel.aggregate( [ 
            {
                $lookup:
                {
                   from: "teams",
                   localField: "team_id",
                   foreignField: "_id",
                   as: "team"
                }
            },
            {
                $unwind:"$team"
            },
            {
                $lookup:
                {
                   from: "accounts",
                   localField: "account_id",
                   foreignField: "_id",
                   as: "account"
                }
            },
            {
                $unwind:"$account"
            },
            { 
                $project : project
            } 
        ], cb )
    },

    // HOW TO USE
    // DbClass.sayHelloInSpanish1().then(function(data){
    //     res.send(data)
    // })
    async sayHelloInSpanish1() {
      var obj = await new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve({a:42});
        },100);
      });
      return obj;
    },


    sayHelloInSpanish: function() {
        return "Hola";
    }
};