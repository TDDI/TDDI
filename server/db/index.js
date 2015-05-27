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
  user_id: Sequelize.STRING,
  username: Sequelize.STRING,
  content: Sequelize.TEXT,
  lesson: Sequelize.STRING,
  editorcode: Sequelize.STRING,
  precode: Sequelize.STRING,
  postcode: Sequelize.STRING
  
});


sequelize.sync({force:true}).then(function () {
  User.bulkCreate([
    {user_id:'1234',username:'Stephen'},
    {user_id:'3654',username:'Klay'},
    {user_id:'5436',username:'Bogut'}
    ]);

  Section.bulkCreate([
    {user_id:'1234',username:'Stephen',content:'ould have to be', 
    lesson:'unity for us to consider', editorcode:'ething like t', 
    precode:'ould listen if presented', postcode:'Kupchak admitted tha'},
    {user_id:'3654',username:'Klay',content:'u came across someth', 
    lesson:' team better quicke', editorcode:'s something you would cons', 
    precode:'but there’s some', postcode:'ng the No. 2 pick in t'},
    {user_id:'5436',username:'Bogut',content:'a team traded a to', 
    lesson:' a veteran was in', editorcode:'Clippers traded th', 
    precode:'wo prospects are', postcode:'anuel Mudiay could'},
    ]);

  // Table created
  console.log('success');
});
