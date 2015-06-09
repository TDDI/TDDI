var db = require('../db');

module.exports = {
	//grabs all the lesson names from db
	getLessons: function(req, res, next){
		var lessonNames = [];
		db.Lesson.findAll({})
			.then(function(data){
				if(!data){
					next(new Error('no available getLesson data from database'));
				} else {
					for(var i = 0; i<data.length; i++){
						lessonNames.push(data[i].lessonName);
					}
					res.json(lessonNames);
					console.log('getLessons successful baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed getLessons operation'));
			});
	},
	//creates new lesson in db
	createLessons: function(req, res, next){
		var lessonID = req.body.lesson;
		var lessonName = req.body.lessonName;
		db.Lesson.findOrCreate({where:{lesson_id: lessonID, lessonName:lessonName}})
			.spread(function(user, created){
				res.json(200);
				console.log('createLessons successful baby!');
			})
			.catch(function(error){
				next(new Error('failed createLessons operation'));
			});
// curl -H "Content-Type: application/json" -X POST -d '{"lesson":"12","lessonName":"lesson12"}' http://localhost:3000/api/lesson
	},

	//update existing lesson in db
	updateLessons: function(req, res, next){
		var lessonID = req.body.lesson;
		var lessonName = req.body.lessonName;
		db.Lesson.find({where:{lesson_id:lessonID}})
			.then(function(data){
				if(!data){
					next(new Error('no available updateLessons data from database'));
				} else {
					data.updateAttributes({lessonName:lessonName});
					res.json(200);
					console.log('updateLessons successful baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed updateLessons operation'));
			});
// curl -H "Content-Type: application/json" -X PUT -d '{"lesson":"3","lessonName":"lesson3orisit"}' http://localhost:3000/api/lesson
	},

	//grabs all section names within a lesson 
	getSectionsInLesson: function(req, res, next){
		var sectionNames = [];
		var lessonID = req.lesson;
		db.Section.findAll({where:{lesson_id:lessonID}})
			.then(function(data){
				if(!data){
					next(new Error('no available getSectionsInLesson data from database'));
				} else {
					for(var i = 0; i<data.length; i++){
						sectionNames.push(data[i].sectionName);
					}
					res.json(sectionNames);
					console.log('getSectionsInLesson successful baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed getSectionsInLesson operation'));
			});
	},

		//create new section in specific lesson
		createSectionsInLessons: function(req, res, next){
			var sectionID = req.body.section_id;
			var sectionName = req.body.sectionName;
			var content = req.body.content;
			var code = req.body.code;
			var prepOp = req.body.preOp;
			var postOp = req.body.postOp;
			var lessonID = req.body.lesson_id;
			db.Section.findOrCreate({where:{section_id: sectionID, sectionName: sectionName, content: content, code: code, preOp: prepOp, postOp: postOp, lesson_id:lessonID}})
				.spread(function(user, created){
					res.json(200);
					console.log('createSectionsInLessons successful baby!');
				})
				.catch(function(error){
					next(new Error('failed createSectionsInLessons operation'));
				});
	// curl -H "Content-Type: application/json" -X POST -d '{"section_id": "1", "sectionName": "lesson20section1", "content":"ouldbe", "code":"erefd", "preOp":"sdf", "postOp":"adf", "lesson_id":"20"}' http://localhost:3000/api/lesson/20/section/
		},

		//update existing section in specific lesson
		updateSectionsInLessons: function(req, res, next){
			var sectionID = req.body.section_id;
			var sectionName = req.body.sectionName;
			var content = req.body.content;
			var code = req.body.code;
			var prepOp = req.body.preOp;
			var postOp = req.body.postOp;
			var lessonID = req.body.lesson_id;
			db.Section.find({where:{lesson_id:lessonID, section_id:sectionID}})
				.then(function(data){
					if(!data){
						next(new Error('no available updateSectionsInLessons data from database'));
					} else {
						data.updateAttributes({sectionName: sectionName, content: content, code: code, preOp: prepOp, postOp: postOp})
						res.json(200);
						console.log('updateSectionsInLessons successful baby!');
					}
				})
				.catch(function(error){
					next(new Error('failed updateSectionsInLessons operation'));
				});

				// curl -H "Content-Type: application/json" -X PUT -d '{"section_id": "2", "sectionName": "lesson2section1", "content":"ou43ldbe", "code":"er34efd", "preOp":"s34df", "postOp":"add3f", "lesson_id":"2"}' http://localhost:3000/api/lesson/3/section/
		},

	//grab specific lesson from db
	findLessonInfo: function(req, res, next){
		var lessonName = [];
		var lessonID = req.lesson;
		db.Lesson.find({where:
			{lesson_id: lessonID,
			}})
			.then(function(data){
				if(!data){
					next(new Error('no available findLessonInfo data from database'));
				} else {
					res.json(data);
					console.log('findLessonInfo successful baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed findLessonInfo operation'))
			});
	},

	//grab specific section within a lesson from db
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
					next(new Error('no available findSectionInfo data from database'));
				} else {
					res.json(data);
					console.log('findSectionInfo successful baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed findSectionInfo operation'));
			});
	},
};


