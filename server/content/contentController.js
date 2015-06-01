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

					console.log('getlesson sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'));
			});
	},

	createLessons: function(req, res, next){
		var lessonID = req.body.lesson;
		// console.log('lessonID:',lessonID);
		var lessonName = req.body.lessonName;
		// console.log('lessonName:',lessonName);
		db.Lesson.findOrCreate({where:{lesson_id: lessonID, lessonName:lessonName}})
			.spread(function(user, created){
				// console.log('spreaduser:',user);
				// console.log('spreadcreated:',user);
				res.json(200);
			})
			.catch(function(error){
				next(new Error('failed get operation'));
			});
// curl -H "Content-Type: application/json" -X POST -d '{"lesson":"12","lessonName":"lesson12"}' http://localhost:3000/api/lesson
	},

	updateLessons: function(req, res, next){
		var lessonID = req.body.lesson;
		console.log('putlessonID:',lessonID);
		var lessonName = req.body.lessonName;
		console.log('putlessonName:',lessonName);
		
		db.Lesson.find({where:{lesson_id:lessonID}})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					data.updateAttributes({lessonName:lessonName});
					res.json(200);
				}
			})
			.catch(function(error){
				next(new Error('failed update operation'));
			});
// curl -H "Content-Type: application/json" -X PUT -d '{"lesson":"3","lessonName":"lesson3orisit"}' http://localhost:3000/api/lesson
	},

	getSectionsInLesson: function(req, res, next){
		var sectionNames = [];
		var lessonID = req.lesson;
		db.Section.findAll({where:{lesson_id:lessonID}})
			.then(function(data){
				if(!data){
					next(new Error('no available data from database'));
				} else {
					for(var i = 0; i<data.length; i++){
						sectionNames.push(data[i].sectionName);
					}
					res.json(sectionNames);
					console.log('getSectionsInLesson sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'));
			});
	},

		createSectionsInLessons: function(req, res, next){
			var sectionID = req.body.section_id;
			var sectionName = req.body.sectionName;
			var content = req.body.content;
			var code = req.body.code;
			var prepOp = req.body.preOp;
			var postOp = req.body.postOp;
			var lessonID = req.body.lesson_id;
			// console.log('lessonID:',lessonID);
			// console.log('lessonName:',lessonName);
			db.Section.findOrCreate({where:{section_id: sectionID, sectionName: sectionName, content: content, code: code, preOp: prepOp, postOp: postOp, lesson_id:lessonID}})
				.spread(function(user, created){
					console.log('spreaduser:',user);
					console.log('spreadcreated:',user);
					res.json(200);
				})
				.catch(function(error){
					next(new Error('failed get operation'));
				});
	// curl -H "Content-Type: application/json" -X POST -d '{"section_id": "1", "sectionName": "lesson20section1", "content":"ouldbe", "code":"erefd", "preOp":"sdf", "postOp":"adf", "lesson_id":"20"}' http://localhost:3000/api/lesson/20/section/
		},

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
						next(new Error('no available data from database'));
					} else {
						data.updateAttributes({sectionName: sectionName, content: content, code: code, preOp: prepOp, postOp: postOp})
						res.json(200);
						console.log('updatesection done baby!');
					}
				})
				.catch(function(error){
					next(new Error('failed get operation'));
				});

				// curl -H "Content-Type: application/json" -X PUT -d '{"section_id": "2", "sectionName": "lesson2section1", "content":"ou43ldbe", "code":"er34efd", "preOp":"s34df", "postOp":"add3f", "lesson_id":"2"}' http://localhost:3000/api/lesson/3/section/
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
					console.log('findLessonInfo sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'))
			});
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
					// sectionName.push(data.sectionName);
					res.json(data);
					console.log('findSectionInfo sent baby!');
				}
			})
			.catch(function(error){
				next(new Error('failed get operation'));
			});
	},
};


//find all lessons