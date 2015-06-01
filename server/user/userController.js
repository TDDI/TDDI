var db = require('../db');

// add content
// change content
// remove content
// hidden content
module.exports = {
  userControl: function(req, res, next){
  //need to build in a check  
    





  
    db.User.create({
      user_id: req.body.user_id,
      username: req.body.username
    })
    .then(function(results){
      res.json(results);
      console.log('done deal user data saved baby')
    })
    .catch(function(error){
      next(new Error('could not add user to db', error));
    });
  },

  getUserInfo: function(req, res, next){
    var username = req.username;
    db.User.find({where:{username: username}})
      .then(function(data){
        if(!data){
          next(new Error('no available user data from db'));
        }else{
          res.json(data);
          console.log('user data sent baby!');
        }
      })
      .catch(function(error){
        next(new Error('failed user get operation'))
      });
  },


};

//testing get and post for user side
/*
 curl -H 'Content-Type: application/json' -H 'Accept: application/json'
 -x post -d '{"user_id":"4567","username":"kevin"}' 
 http://localhost:3000/login

curl --data '{"user_id":"4577","username":"bobby"}' http://localhost:3000/login

curl -H "Content-Type: application/json" -X POST -d '{"user_id":"4770","username":"bobby"}' http://localhost:3000/login
curl -H "Content-Type: application/json" -X POST -d '{"user_id":"4777","username":"steve"}' http://localhost:3000/login
*/



