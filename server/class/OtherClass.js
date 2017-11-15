// NOTE ONLY NODE MODULES CAN BE INCLUDED IN THAT CLASS DO NOT INCLUDE CUSTOM MODULES

var winston = require('winston'); // https://github.com/flatiron/winston
var exec = require('child_process').exec;

var mongoose = require('mongoose');
var  autoIncrement = require('mongoose-auto-increment');

var UserClass = require('../class/UserClass')
module.exports = {

    async dropCollection(collectionName) {
        try {
            return await db.dropCollection(collectionName)
        } catch(e) {}

        return 'done'
    },
    async removeAllRecords() {
        UserClass.checkIsAdminElseThrowError()
        // db.dropCollection('accounts', function(err, result) {});
        // await db.dropCollection('accounts');
        // await db.dropCollection('teams');
        await this.dropCollection('livematchschedules');
        await this.dropCollection('livematchscheduleseries');
        await this.dropCollection('activitylogs');
        // await this.dropCollection('identitycounters');
        // await this.dropCollection('journalentries');
        // await this.dropCollection('journals');
        await this.dropCollection('matchsummaries');
        await this.dropCollection('matchentries');
        await this.dropCollection('matchteams');
        await this.dropCollection('matches');
        await this.dropCollection('sessionentries');
        await this.dropCollection('sessions');

        await db.collection('identitycounters').updateMany({ model: { $nin: [ "Account", "Journal", "JournalEntry", "User" ] } },  { '$set':  {"count": 0} });



        return ResponseHelper.ok(200, 'Successfully removed all records.')
    },

    async removeLedgerRecordsAndMerge() {
           
        // UserClass.checkIsAdminElseThrowError()
        return ResponseHelper.ok(200, 'Successfully removed ledger.')
    },

    async clearWholeDb() {
       await db.dropDatabase()
       return ResponseHelper.ok(200, 'Successfully cleared database.')
    },



};