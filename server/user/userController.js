var db = require('../db');


module.exports = {
  addUserInfo: function(req, res, next){
    db.User.create({
      user_id: req.body.user_id,
      username: req.body.username
    })
    .then(function(results){
      res.json(results);
      console.log('done deal baby')
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
  }
};


  //     .then(function(data){
  //       if(!data){
  //         next(new Error('no available data from database'));
  //       } else {
  //         res.json(data)
  //         console.log('data sent baby!');
  //       }
  //     })
  //     .catch(function(error){
  //       next(new Error('failed get operation'))
  //     });
  // },
/*
 curl -H 'Content-Type: application/json' -H 'Accept: application/json'
 -x post -d '{"user_id":"4567","username":"kevin"}' 
 http://localhost:3000/login

curl --data '{"user_id":"4577","username":"bobby"}' http://localhost:3000/login

curl -H "Content-Type: application/json" -X POST -d 
'{"user_id":"4777","username":"Steve"}' 
 http://localhost:3000/login
*/



