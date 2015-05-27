var db = require('../db');

module.exports = {
	findInfo: function(req, res, next){
		res.send('hello1');
	},

	addInfo: function(req, res, next){
		res.send('hello2');
	}
};