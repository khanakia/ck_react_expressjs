var async = require("async");
var await = require("async").await;
var mongoose = require('mongoose');

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var Constant = require('../Constant')
var UserModel = require('../model/UserModel')
var ActivityLogClass = require('../class/ActivityLogClass')

module.exports = {
    async login(args = {username: null, password: null}) {
        var user = await UserModel.findOne({username: args.username})
        
        if(!user) {
            throw(ResponseHelper.error(400, 'User not found.'))
        }

        if(!user.status) {
            throw(ResponseHelper.error(400, 'User is disabled.'))
        }

        if (!user.comparePassword(args.password)) {
            throw(ResponseHelper.error(401, 'Authentication failed. Wrong password.'))
        } else {
            try {
                var payload = { 
                    _id: user._id,
                    username: user.username, 
                    fullname: user.fullname, 
                    is_sa: user.is_sa,
                    is_admin: user.is_admin
                }
                var token = await jwt.sign(payload, APP_SECRET)
                return {token: token}
            } catch(err) {
                throw(ResponseHelper.error(400, 'Server error token.'))
            }
        }
    
        throw(ResponseHelper.error(400, 'Cannot login.'))
    },

    async changePassword(args = {id: null, oldPassword: null, newPassword: null}) {

        if(!args.id) {
            throw(ResponseHelper.error(400, 'User not found.'))
        }
        
        var user = await UserModel.findOne({_id: parseInt(args.id)})

        
        if(!user) {
            throw(ResponseHelper.error(400, 'User not found.'))
        }

        if (!user.comparePassword(args.oldPassword)) {
            throw(ResponseHelper.error(401, 'Authentication failed. Wrong password.'))
        } else {
            try {
                user.password = bcrypt.hashSync(args.newPassword, 10)
                await user.save()
                return ResponseHelper.ok(200, 'Password changed successfully.')

            } catch(err) {
                console.log(err)
                throw(ResponseHelper.error(400, 'Server error.'))
            }
        }
    
        throw(ResponseHelper.error(400, 'Cannot change password.'))
    },

    async save(item, id=null) {
        var user = await UserModel.findOne({username: item.username})
       
        if(id) {
            if(user && user.id!==id) {
                throw(ResponseHelper.error(400, 'Username already exists.'))
            }
            
            if(item.password!==null && item.password!=='') {
                console.log('password')
                item.password = bcrypt.hashSync(item.password, 10)
            } else {
                item.password = user.password
            }
            
            try {
                var user = await UserModel.findOneAndUpdate({_id: id}, item);
                await ActivityLogClass.create({type: 'User', action: 'Updated', data: user })
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        } else {

            if(user) {
                throw(ResponseHelper.error(400, 'Username already exists.'))
            }

            if(item.password!==null && item.password!=='') {
                console.log('password')
                item.password = bcrypt.hashSync(item.password, 10)
            }

            let newuser = new UserModel(item)
            try {
                await newuser.save();
            } catch(err) {
                throw(ResponseHelper.parseMongooseFirstError(err))
            }
        }

        return ResponseHelper.ok(200, 'Successfully saved.')
    },

    list() {
        var filters = {}

        if(USER.is_sa) {
            filters.is_sa = false
        } else {
            filters.is_hidden = false   
        }

        // if(args.is_company!==null) {
        //     filters.is_company = args.is_company
        // }
        return UserModel.find(filters)
    },


    checkIsAdminElseThrowError() {
        if(typeof USER=="undefined" || !USER || USER.is_admin==false ) {
            throw(ResponseHelper.error(401, 'Permission Denied.'))  
        } 
    }

};