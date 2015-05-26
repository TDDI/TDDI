var Sequelize = require("sequelize");
var sequelize = new Sequelize("mydb1", "luyin", "",{
	host: 'localhost',
	dialect: 'postgres',

	pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

var User = sequelize.define('User', {
  username: Sequelize.STRING
});


User.sync().then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
