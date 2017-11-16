var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

// var bcrypt = require('bcrypt');
var bcrypt = require('bcryptjs');

// var permissionSchema = mongoose.Schema({
//     account: {},
   
// });

var tableSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, default: true },
    is_sa: { type: Boolean, default: false },
    is_admin: { type: Boolean, default: false },
    is_hidden: { type: Boolean, default: false },
    // permissions: { type:[permissionSchema] , validate: [
      // { validator: pattiTotal, msg: 'Email already exists'}
    // ]}
}, { strict: false });

tableSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    startAt: 1,
});

tableSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}


/* global db */
module.exports = db.model('User', tableSchema);	