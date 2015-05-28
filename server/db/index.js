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
  sectionNumber: Sequelize.INTEGER,
  content: Sequelize.TEXT,
  lesson: Sequelize.INTEGER,
  editorcode: Sequelize.STRING,
  precode: Sequelize.STRING,
  postcode: Sequelize.STRING
  
});


sequelize.sync({force:true}).then(function () {
  User.bulkCreate([
    {user_id:'1234',username:'stephen'},
    {user_id:'3654',username:'klay'},
    {user_id:'5436',username:'bogut'}
    ]);

  Section.bulkCreate([
    {sectionNumber: '1', content:'ould have to be', 
    lesson:'1', editorcode:'ething like t', 
    precode:'ould listen if presented', postcode:'Kupchak admitted tha'},
    {sectionNumber: '2', content:'u came across someth', 
    lesson:' 2', editorcode:'s something you would cons', 
    precode:'but there’s some', postcode:'ng the No. 2 pick in t'},
    {sectionNumber: '3',content:'a team traded a to', 
    lesson:' 1', editorcode:'Clippers traded th', 
    precode:'wo prospects are', postcode:'anuel Mudiay could'},
    ]);

  // Table created
  console.log('success');
});

exports.User = User;
exports.Section = Section;
