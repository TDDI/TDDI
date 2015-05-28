var userController = require('./userController.js');

module.exports = function(app){

app.param('username', function(req, res, next, username){
    //sanity check that lesson is right?
    // console.log('lesson1:',lesson);
    req.username = username;
    // console.log('req.lesson1:', req.lesson);
    next();
  })



	app.get('/login/:username', userController.getUserInfo);

  app.post('/login/:username', userController.addUserInfo);
};