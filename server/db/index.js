var Sequelize = require("sequelize");

if(process.env.DATABASE_URL){
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    var sequelize = new Sequelize("postgres", "postgres", "postgres",{
  	host: 'localhost',
  	dialect: 'postgres',

  	pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

  });
}

var User = sequelize.define('User', {
  user_id: Sequelize.INTEGER,
  username: Sequelize.STRING
});

var Section = sequelize.define('Section', {
  section_id: Sequelize.INTEGER,
  sectionName: Sequelize.STRING,
  content: Sequelize.TEXT,
  lesson_id: Sequelize.INTEGER,
});

var Lesson = sequelize.define('Lesson', {
  lesson_id: Sequelize.INTEGER,
  lessonName: Sequelize.STRING
});


sequelize.sync({force:true}).then(function () {
  User.bulkCreate([
    {user_id:'1234',username:'stephen'},
    {user_id:'3654',username:'klay'},
    {user_id:'5436',username:'bogut'}
    ]);

  Section.bulkCreate([
    {section_id: '1', sectionName: 'section1', content:'ould have to be', lesson_id:'1'},
    {section_id: '1', sectionName: 'section1', content:'u came across someth', lesson_id:' 1'},
    {section_id: '2', sectionName: 'section2', content:'e across someth', lesson_id:' 2'},
    {section_id: '2', sectionName: 'section2', content:'u came oss someth', lesson_id:' 2'},
    {section_id: '3', sectionName: 'section3', content:'came across someth', lesson_id:'3'},
    {section_id: '3', sectionName: 'section3', content:'across someth', lesson_id:'3'},
    {section_id: '3', sectionName: 'section3', content:'a team traded a to',lesson_id:'3'}
    ]);

  Lesson.bulkCreate([
    {lesson_id: '1', lessonName:'lesson1'},
    {lesson_id: '2', lessonName:'lesson2'},
    {lesson_id: '3', lessonName:'lesson3'},
    ]);

  // Table created
  console.log('success');
});

exports.User = User;
exports.Section = Section;
exports.Lesson = Lesson;
