var mongoose = require('mongoose');

mongoose.connect('mongodb://<username>:<password>@dbh42.mlab.com:27427/social_javascriptla', function(){
	console.log('connected to mongolabs');
});

module.exports = mongoose; 