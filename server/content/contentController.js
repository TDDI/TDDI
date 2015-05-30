var db = require('../db');

module.exports = {
	getLessons: function(req, res, next){
		var lessonNames = [];
		db.Lesson.findAll({})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					for(var i = 0; i<data.length; i++){
						lessonNames.push(data[i].lessonName);
					}
					res.json(lessonNames);

					console.log('lesson data sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'))
			});
	},

	getSections: function(req, res, next){
		var sectionNames = [];
		db.Section.findAll({})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					for(var i = 0; i<data.length; i++){
						sectionNames.push(data[i].sectionName);
					}
					console.log('sectionNames:', sectionNames)
					res.json(sectionNames);
					console.log('section data sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'))
			});
	},

	findLessonInfo: function(req, res, next){
		var lessonName = [];
		var lessonID = req.lesson;
		db.Lesson.find({where:
			{lesson_id: lessonID,
			}})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					lessonName.push(data.lessonName);
					res.json(lessonName);
					console.log('data sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'))
			})
	},

	findSectionInfo: function(req, res, next){
		var sectionName = [];
		var sectionID = req.section;
		var lessonID = req.lesson;
		db.Section.find({where:
			{lesson_id: lessonID,
			section_id: sectionID
			}})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					sectionName.push(data.sectionName);
					res.json(sectionName);
					console.log('data sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'))
			})
	},
}


//find all lessons