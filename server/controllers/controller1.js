var utils = require('../config/utils.js')

module.exports = function(router){
	router.get('/', function(req, res){
		res.send('got here baby');
	});
	// router.get('/page2', utils.method1);
};