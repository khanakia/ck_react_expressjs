var express = require('express');
var router = express.Router();
var async = require("async");
var _ = require('lodash');

var JournalEntryModel = require('../model/JournalEntryModel')
var JournalEntryClass = require('../class/JournalEntryClass')


/* GET users listing. */
router.get('/', function(req, res, next) {
    JournalEntryClass.list({ account_id: req.query.account_id, is_monday_final: req.query.is_monday_final }).then(function(err, docs) {
        if (err) return res.send(err)
        return res.send(docs)
    })
});


router.get('/balance', function(req, res, next) {
    var aggregate = [];
    // if(args.account_id) {
    //     aggregate.push(
    //         {
    //             $match: {
    //                 // 'account_id' : parseInt(args.account_id)
    //             }
    //         }
    //     )
    // }

    aggregate.push({
        $lookup: {
                from: "journals",
                localField: "journal_id",
                foreignField: "_id",
                as: "journal"
            }
        },

        {
            $unwind: "$journal"
        },

        {
            $lookup: {
                from: "accounts",
                localField: "account_id",
                foreignField: "_id",
                as: "account"
            }
        },

        {
            $unwind: "$account"
        },


        // {
        //     $match: {
        //         'journal_id' : parseInt(103)
        //     }
        // },

        {
            $group: {
                _id: {
                    "account_id": "$account_id",
                    // "account_name" : "$account.account_name" ,
                },
                "account_id": { $first: "$account_id" },
                "account_name": { $first: "$account.account_name" },
                "bal": { $sum: "$bal" },

            }
        },

        {
            $project: {
                _id: 1,
                journal_id: 1,
                match_id: "$journal.match_id",
                ref_type: "$journal.ref_type",
                ref_id: "$journal.ref_id",
                account_id: 1,
                dr_amt: 1,
                cr_amt: 1,
                bal: 1,
                created_at: 1,
                narration: 1,
                "account_name": 1,
            }
        }
    );

    JournalEntryModel.aggregate(aggregate, function(err, items) {
        if (err) return res.send(err)

        var items_pos = _.filter(items, function(o) { return o.bal > 0; });
        var items_neg = _.filter(items, function(o) { return o.bal < 0; });

        var newItems = [];
        items_pos.map((item, i) => {
            newItems[i] = {
                account_id: item.account_id,
                account_name: item.account_name,
                bal: item.bal,
                empty: '',
            }
        })

        items_neg.map((item1, i) => {
            newItems[i] = Object.assign({}, newItems[i], {
                account_id1: item1.account_id,
                account_name1: item1.account_name,
                bal1: item1.bal,
            })
        })

        return res.send(newItems)
    });
});



router.post('/monday_final', function(req, res, next) {
    JournalEntryModel.updateMany({}, { is_monday_final: true }, function(err, obj) {
        if (err) return res.send(err)
        return res.send(obj)
    })
});

router.get('/account/:id/balance', function(req, res, next) {
    async.parallel({
        monFinalBal: function(cb) {
            JournalEntryModel.aggregate([{
                    $match: {
                        'account_id': parseInt(req.params.id),
                        'is_monday_final': true
                    }
                },
                {
                    $group: {
                        _id: {
                            "account_id": "$account_id",
                        },
                        "account_id": { $first: "$account_id" },
                        "bal": { $sum: "$bal" },
                    }
                }
            ]).exec(cb)
        },
        totalBal: function(cb) {
            JournalEntryModel.aggregate([{
                    $match: {
                        'account_id': parseInt(req.params.id)
                    }
                },
                {
                    $group: {
                        _id: {
                            "account_id": "$account_id",
                        },
                        "account_id": { $first: "$account_id" },
                        "bal": { $sum: "$bal" },
                    }
                }
            ]).exec(cb)
        }
    }, function(err, result) {
        if (err) return res.status(500).send(err)
        result.monFinalBal = result.monFinalBal[0] ? result.monFinalBal[0]['bal'] : 0;
        result.totalBal = result.totalBal[0] ? result.totalBal[0]['bal'] : 0;
        res.send(result)
    });

});

router.post('/', function(req, res, next) {
    JournalEntryClass.save(req.body)
    .then((data)=>{
        res.send(data)
    }).catch((err) => {
        console.log('ERROR', err)
        res.status(401).send(err)
    })
});


router.delete('/:id', function(req, res, next) {
    JournalEntryClass.remove({ _id: req.params.id })
    .then((data)=>{
        res.send(data)
    }).catch((err) => {
        console.log('ERROR', err)
        res.status(401).send(err)
    })
});


module.exports = router;