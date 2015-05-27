
//this is only for testing
var db = require('../db');

module.exports = function(router){
	router.get('/', function(req, res){
		res.send('got here baby');
	});
};