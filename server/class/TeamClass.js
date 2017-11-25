var TeamModel = require('../model/TeamModel')
module.exports = {

    async save(item, id=null) {
        var team = await TeamModel.findOne({'team_name' : { $regex : new RegExp(item.team_name, "i") }})

        if(team) {
            throw(ResponseHelper.error(400, 'Team Name alread exists.'))
        }

        if(id) {
             try {
                await TeamModel.findOneAndUpdate({_id: id}, item);
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        } else {
            let team1 = new TeamModel(item)
            try {
                await team1.save();
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        }

        return ResponseHelper.ok(200, 'Successfully saved.')
    },




};