var contentController = require('./contentController.js');

module.exports = function(app){
	app.get('/content', function(req, res){
		res.send('content routes');
	});
};