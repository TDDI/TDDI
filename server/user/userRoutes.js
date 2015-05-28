var userController = require('./userController.js');

module.exports = function(app){
	app.post('/login', function(req, res){
		res.send('userRoutes post');
	});
};