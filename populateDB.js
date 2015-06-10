var sectionData = require('./server/db/sectionData.js');
var mainDBFile = require('./server/db/index.js');

mainDBFile.db.sync({force:true}).then(function () {
  mainDBFile.User.bulkCreate([
    {user_id:'1234',username:'stephen'},
    {user_id:'3654',username:'klay'},
    {user_id:'5436',username:'bogut'}
  ]);

  mainDBFile.Lesson.bulkCreate([
    {lesson_id: '1', lessonName:'Bear Testables'},
    {lesson_id: '2', lessonName:'lesson2'},
    {lesson_id: '3', lessonName:'lesson3'},
  ]);

  mainDBFile.Section.bulkCreate(sectionData);
});