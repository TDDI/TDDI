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

var Lesson = sequelize.define('Lesson', {
  lesson_id: Sequelize.INTEGER,
  lessonName: Sequelize.STRING
});

var Section = sequelize.define('Section', {
  section_id: Sequelize.INTEGER,
  sectionName: Sequelize.STRING,
  content: Sequelize.TEXT,
  code: Sequelize.TEXT,
  preOp: Sequelize.TEXT,
  postOp: Sequelize.TEXT,
  lesson_id: Sequelize.INTEGER,
});



if(process.env.DATABASE_URL){
  sequelize.sync();
} else {
sequelize.sync({force:true}).then(function () {
  User.bulkCreate([
    {user_id:'1234',username:'stephen'},
    {user_id:'3654',username:'klay'},
    {user_id:'5436',username:'bogut'}
    ]);

  Lesson.bulkCreate([
    {lesson_id: '1', lessonName:'lesson1'},
    {lesson_id: '2', lessonName:'lesson2'},
    {lesson_id: '3', lessonName:'lesson3'},
    ]);

  Section.bulkCreate([
    {section_id: '1', sectionName: 'lesson1section1', content:'ould have to be', code:'qasdwer', preOp:'wert', postOp:'edfart', lesson_id:'1'},
    {section_id: '2', sectionName: 'lesson1section2', content:'u came across someth', code:'qwdfder', preOp:'wert', postOp:'erdfdt',lesson_id:'1'},
    {section_id: '1', sectionName: 'lesson2section1', content:'e across someth', code:'qdfdwer', preOp:'dfdfd', postOp:'sdfert', lesson_id:'2'},
    {section_id: '2', sectionName: 'lesson2section2', content:'u came oss someth', code:'qw43er', preOp:'weerrt', postOp:'ersdt',lesson_id:'2'},
    {section_id: '1', sectionName: 'lesson3section1', content:'came across someth',code:'qw43er', preOp:'ttww', postOp:'erjhjt', lesson_id:'3'},
    {section_id: '2', sectionName: 'lesson3section2', content:'across someth', code:'qaswer', preOp:'wdfdert', postOp:'erdfdt',lesson_id:'3'},
    {section_id: '3', sectionName: 'lesson3section3', content:'a team traded a to',code:'qweewr', preOp:'awert', postOp:'ecvrt',lesson_id:'3'}
    ]);


  // Table created
  console.log('success');
});
  
}

exports.User = User;
exports.Section = Section;
exports.Lesson = Lesson;
