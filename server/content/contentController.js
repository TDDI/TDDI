var db = require('../db');

module.exports = {
	getLessons: function(req, res, next){
		db.Lesson.findAll({})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					res.json(data)
					console.log('lesson data sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'))
			});
	},

	getSections: function(req, res, next){
		db.Section.findAll({})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					res.json(data)
					console.log('section data sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'))
			});
	},

	// findInfo: function(req, res, next){
	// 	console.log('req.lesson:',req.lesson);
	// 	console.log('req.section:',req.section);
	// 	var lessonID = req.lesson;
	// 	var SectionID = req.section;
	// 	db.Section.find({where:
	// 		{lesson_id: lessonID,
	// 		 section_id: sectionID,	
	// 		}})
	// 		.then(function(data){
	// 			if(!data){
	// 				next(new Error('no available data from database'));
	// 			} else {
	// 				res.json(data)
	// 				console.log('data sent baby!');
	// 			}
	// 		})
	// 		.catch(function(error){
	// 			next(new Error('failed get operation'))
	// 		})
	// }
}


//find all lessons