var AccountModel = require('../model/AccountModel')
var JournalModel = require('../model/JournalModel')
var JournalEntryModel = require('../model/JournalEntryModel')
var MatchModel = require('../model/MatchModel')
var MatchEntryModel = require('../model/MatchEntryModel')
var MatchTeamModel = require('../model/MatchTeamModel')
var SessionModel = require('../model/SessionModel')
var SessionEntryModel = require('../model/SessionEntryModel')
var MeterModel = require('../model/MeterModel')
var MeterEntryModel = require('../model/MeterEntryModel')
var TeamModel = require('../model/TeamModel')

var ResponseHelper = require('../class/ResponseHelper')

module.exports = {
    async account(id) {
        id = parseInt(id)
        var q = {
            account_id: parseInt(id)
        }
        var i = 0
        i += await AccountModel.find({match_comm_to: id, _id: { $ne: id }}).count()
        i += await AccountModel.find({sess_comm_to: id, _id: { $ne: id }}).count()
        i += await AccountModel.find({meter_comm_to: id, _id: { $ne: id }}).count()
        i += await AccountModel.find({"patti.account_id": id}).count()
        i += await JournalEntryModel.find(q).count()
        i += await MatchEntryModel.find(q).count()
        i += await SessionEntryModel.find(q).count()




        if(i>0) {
            throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
        } else {
            try {
                await AccountModel.remove({_id: id});
            } catch(err) {
                // throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
            }
        }
        return ResponseHelper.ok(200, 'Successfully deleted.')
    },

    async team(id) {
        id = parseInt(id)
        var q = {
            team_id: parseInt(id)
        }
        var i = 0
        i += await MatchTeamModel.find(q).count()
        i += await MatchEntryModel.find(q).count()
        i += await SessionModel.find(q).count()

        if(i>0) {
            throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
        } else {
            try {
                await TeamModel.remove({_id: id});
            } catch(err) {
                // throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
            }
        }
        return ResponseHelper.ok(200, 'Successfully deleted.')
    },

    async session(id) {
        id = parseInt(id)
        var q = {
            session_id: parseInt(id)
        }
        var i = 0
        i += await SessionEntryModel.find(q).count()

        if(i>0) {
            throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
        } else {
            try {
                await SessionModel.remove({_id: id});
            } catch(err) {
                // throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
            }
        }
        return ResponseHelper.ok(200, 'Successfully deleted.')
    },

    async meter(id) {
        id = parseInt(id)
        var q = {
            meter_id: parseInt(id)
        }
        var i = 0
        i += await MeterEntryModel.find(q).count()

        if(i>0) {
            throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
        } else {
            try {
                await MeterModel.remove({_id: id});
            } catch(err) {
                // throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
            }
        }
        return ResponseHelper.ok(200, 'Successfully deleted.')
    },

    async match(id) {
        id = parseInt(id)
        var q = {
            match_id: parseInt(id)
        }
        var i = 0
        i += await MatchTeamModel.find(q).count()
        i += await MatchEntryModel.find(q).count()
        i += await SessionModel.find(q).count()
        i += await SessionEntryModel.find(q).count()
        i += await MeterModel.find(q).count()
        i += await MeterEntryModel.find(q).count()

        if(i>0) {
            throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
        } else {
            try {
                await MatchModel.remove({_id: id});
            } catch(err) {
                // throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
            }
        }
        return ResponseHelper.ok(200, 'Successfully deleted.')
    },

    async matchTeam(id) {
        id = parseInt(id)
        var q = {
            match_team_id: parseInt(id)
        }
        var i = 0

        var matchTeam = await MatchTeamModel.findOne({_id: id})
        if(matchTeam && matchTeam.is_declared) {
            throw(ResponseHelper.error(401, 'Declared Team cannot be removed.'))            
        }

        // If any team is declared under Same Parent Match 
        var declaredTeamsCount = await MatchTeamModel.find({match_id: parseInt(matchTeam.match_id), is_declared: true}).count()
        if(declaredTeamsCount > 0) {
            throw(ResponseHelper.error(401, 'Some Team is already declared in this match.'))
        }
        
        i += await MatchEntryModel.find(q).count()
        
        if(i>0) {
            throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
        } else {
            try {
                await MatchTeamModel.remove({_id: id});
            } catch(err) {
                // throw(ResponseHelper.error(401, 'Record is linked to other tables.'))
            }
        }
        return ResponseHelper.ok(200, 'Successfully deleted.')
    },
};