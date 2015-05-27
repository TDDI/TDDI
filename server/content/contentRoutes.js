var contentController = require('./contentController.js');

module.exports = function(app){
	app.get('/content', function(contentController.findInfo)
	});

	app.post('/content,'function(contentController.addInfo)
	});
};