var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres", "postgres", "postgres",{
	host: 'localhost',
	dialect: 'postgres',

	pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

var User = sequelize.define('User', {
  user_id: Sequelize.INTEGER,
  username: Sequelize.STRING
});

var Section = sequelize.define('Section', {
  user_id: Sequelize.STRING,
  username: Sequelize.STRING,
  content: Sequelize.TEXT,
  lesson: Sequelize.STRING,
  editorcode: Sequelize.STRING,
  precode: Sequelize.STRING,
  postcode: Sequelize.STRING
});


sequelize.sync().then(function () {
  // Table created
  console.log('success');
});
