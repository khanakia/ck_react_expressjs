var bcrypt = require('bcrypt');

var UserModel = require('../model/UserModel')

module.exports = {
    async init() {
      this.createUsers()
      return 'done setup'
    },

    async createUsers() {

        var userSa = await UserModel.findOne({username: 'sa'})
        var userSaOptions = {
            fullname: 'sa',
            username: 'sa',
            password: bcrypt.hashSync('danger', 10),
            is_sa: true,
            is_admin: true,
            is_hidden: true,
        }
        if(userSa) {
            await UserModel.findOneAndUpdate({_id: userSa._id}, userSaOptions)
        } else {
            var userSa = new UserModel(userSaOptions)
            await userSa.save()
        }

        var userAdmin = await UserModel.findOne({username: 'admin'})
        var userAdminOptions = {
            fullname: 'admin',
            username: 'admin',
            password: bcrypt.hashSync('admin', 10),
            is_sa: false,
            is_admin: true,
            is_hidden: true,
        }
        if(userAdmin) {
            await UserModel.findOneAndUpdate({_id: userAdmin._id}, userAdminOptions)
        } else {
            var userAdmin = new UserModel(userAdminOptions)
            await userAdmin.save()
        }
    },
    
   

};