var contentController = require('./contentController.js');

module.exports = function(app){

	//middleware catching lesson pages and setting it as a prop on req
	app.param('lesson', function(req, res, next, lesson){
		req.lesson = lesson;
		next();
	});
	//middleware catching section pages and setting it as a prop on req
	app.param('section', function(req, res, next, section){
		req.section = section;
		next();
	});

	//routes for lessons request
	app.get('/',contentController.getLessons);
	app.post('/',contentController.createLessons);
	app.put('/',contentController.updateLessons);
	app.get('/:lesson', contentController.findLessonInfo);

	//routes for sections requests
	app.get('/:lesson/section',contentController.getSectionsInLesson);
	app.post('/:lesson/section',contentController.createSectionsInLessons);
	app.put('/:lesson/section',contentController.updateSectionsInLessons);
	app.get('/:lesson/section/:section', contentController.findSectionInfo);
};


// app.param('user_id', function(req, res, next, user_id) {
//   // typically we might sanity check that user_id is of the right format
//   UserDatabase.find(user_id, function(err, user) {
//     if (err) return next(err);
//     if (!user) return next(...create a 404 error...);
 
//     req.user = user;
//     next()
//   });
// });