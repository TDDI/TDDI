var contentController = require('./contentController.js');

module.exports = function(app){

	app.param('lesson', function(req, res, next, lesson){
		//sanity check that lesson is right?
		// console.log('lesson1:',lesson);
		req.lesson = lesson;
		// console.log('req.lesson1:', req.lesson);
		next();
	})

	app.param('section', function(req, res, next, section){
		//sanity check that lesson is right?
		// console.log('section1:',section);
		req.section = section;
		// console.log('req.section1:', req.section);
		next();
	})

	app.get('/lesson/:lesson/section/:section', 
		contentController.findInfo);

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