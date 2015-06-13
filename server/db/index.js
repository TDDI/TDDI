// var iffyify = function( fn ){ return "(" +fn.toString()+ ")()" }
var Sequelize = require("sequelize");

if(process.env.DATABASE_URL){
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    var sequelize = new Sequelize("postgres", "postgres", "postgres",{
      host: 'localhost',
      dialect: 'postgres',
      // logging: false,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
  });
}

//database schema
var User = sequelize.define('User', {
  user_id: Sequelize.INTEGER,
  username: Sequelize.STRING
});

var Lesson = sequelize.define('Lesson', {
  lesson_id: Sequelize.INTEGER,
  lessonName: Sequelize.STRING,
  active: Sequelize.INTEGER
});

var Section = sequelize.define('Section', {
  section_id: Sequelize.INTEGER,
  sectionName: Sequelize.STRING,
  content: Sequelize.TEXT,
  code: Sequelize.TEXT,
  preOp: Sequelize.TEXT,
  postOp: Sequelize.TEXT,
  lesson_id: Sequelize.INTEGER,
  active: Sequelize.INTEGER,
  success_response: Sequelize.TEXT
});

// initializing databases
sequelize.sync();

exports.User = User;
exports.Section = Section;
exports.Lesson = Lesson;
exports.db = sequelize;
