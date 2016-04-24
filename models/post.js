var db = require('../models/db');
var mongoose = require('mongoose');

var post = new mongoose.Schema({
	username:{type: String, required: true},
	body:{type:String, required:true},
	date:{type:Date, default:Date.now}
});


module.exports = mongoose.model('Post', post);