var userController = require('./userController.js');

module.exports = function(app){

  app.param('username', function(req, res, next, username){
    req.username = username;
    next();
  })

	app.get('/login/:username', userController.userControl);

  app.post('/login', userController.addUserInfo);
};