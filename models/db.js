var mongoose = require('mongoose');

mongoose.connect('<your mlab url goes here>', function(){
	console.log('connected to mongolabs');
});

module.exports = mongoose; 