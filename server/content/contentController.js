var db = require('../db');

module.exports = {
	findInfo: function(req, res, next){
		console.log('req.lesson:',req.lesson);
		console.log('req.section:',req.section);
		var sectionNumber = req.section;
		db.Section.find({where:{sectionNumber: sectionNumber}})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					res.json(data)
					console.log('data sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'))
			});
	},

	// addInfo: function(req, res, next){
	// 	res.send('hello2');
	// }
};


