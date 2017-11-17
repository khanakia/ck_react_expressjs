var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var autoIncrement = require('mongoose-auto-increment');

var tableSchema = new mongoose.Schema({
    created_at: { type: Date, default: Date.now },
    meta_key: { type: String, required: true },
    meta_value: { type: String, required: true },
}, { strict: false });

tableSchema.plugin(autoIncrement.plugin, {
    model: 'MetaData',
    startAt: 1,
});

tableSchema.statics.updateMeta = function(key, value) {
	try {
 		this.findOneAndUpdate({meta_key: key}, { $set: { meta_value : value} }, {upsert: true}).exec()

	} catch(e) {
		console.log(e)
	}
}

tableSchema.statics.get = async function(key, defaultValue=null) {
	try {
 		var meta = await this.findOne({meta_key: key})
 		if(!meta) return defaultValue
 		return meta.meta_value

	} catch(e) {
		console.log(e)
		return defaultValue
	}
	return defaultValue
}

/* global db */
module.exports = db.model('MetaData', tableSchema);	