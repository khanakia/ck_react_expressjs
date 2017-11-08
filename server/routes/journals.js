var express = require('express');
var router = express.Router();
var async = require("async");
var _ = require('lodash');

var JournalEntryModel = require('../model/JournalEntryModel')
var JournalClass = require('../class/JournalClass')


/* GET users listing. */
router.get('/entries', function(req, res, next) {
    JournalClass.entriesList({ ref_id: req.query.ref_id, ref_type: req.query.ref_type })
        .then((err, docs) => {
            if (err) return res.send(err)
            return res.send(docs)
        })
});



module.exports = router;