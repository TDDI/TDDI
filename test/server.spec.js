// 'supertest' is used to simulate requests without starting a server
var stest = require('supertest');
var PORT = 8000;
//===============================================================

// require in our current server implementation to use for our tests
// Note: this will not work if .listen is used in the server.js
var server = require('../server/server.js');

//===============================================================

// 'request' is a built in node module for http requests
// if you didn't want to use supertest, you can use this
var request = require('request');

// 'chai' allows for the use of expect functions (not to be confused with .expect)
var expect = require('chai').expect;

//==============================================================


// 'describe' is used for grouping of different tests.
// Typical syntax is either to start a sentence - "The each function"
// or just write a conceptual group - "Users"
describe('The server', function() {
  // 'it' is where the real tests take place
  // Typical syntax is either to finish the sentence started by its describe - "should return null"
  // or to represent a specific piece of functionality - "Submit inserts into the database"
  // Side note: 'done' returns the information back to supertest for display in the test framework 
  it('returns a 200 status code on get request', function(done) {
    
    // this function send a request to the server instance it is passed
    // and starts a server up behind the scenes that uses an unused port
    stest(server)
      // this sends a get request to the root route
      .get('/')
      // .expect is the same as using chai's expect function.
      // Both supertest and mocha have a .expect method for requests
      .expect(200)
      // sends a response back to the test
      .end(function(error){
        if(error) { throw error; }
        // tells the testing framework the async function is done and can evaluate the response
        done();
      });
  });


  it('returns a 200 status code on get request to lesson', function(done){
    stest(server)
      .get('/api/lesson/')
      .expect(200)
      .end(function(error){
        if(error) { throw error; }
        done();
      });
  });

  it('returns a 200 status code on get request to lesson 1', function(done){
    stest(server)
      .get('/api/lesson/1')
      .expect(200)
      .end(function(error){
        if(error) { throw error; }
        done();
      });
  });

  it('returns a 200 status code on get request to lesson 2', function(done){
    stest(server)
      .get('/api/lesson/2')
      .expect(200)
      .end(function(error){
        if(error) { throw error; }
        done();
      });
  });

  it('returns a 200 status code on get request to section', function(done){
    stest(server)
      .get('/api/lesson/1/section')
      .expect(200)
      .end(function(error){
        if(error) { throw error; }
        done();
      });
  });

   it('returns a 200 status code on get request to lesson 1 section 1', function(done){
    stest(server)
      .get('/api/lesson/1/section/1')
      .expect(200)
      .end(function(error){
        if(error) { throw error; }
        done();
      });
  });

    it('returns a 200 status code on get request to lesson 1 section 1', function(done){
    stest(server)
      .get('/api/lesson/1/section/2')
      .expect(200)
      .end(function(error){
        if(error) { throw error; }
        done();
      });
  });
    
  it('returns a 200 status code on post request to lesson', function(done){
    var testPackage = '{"lesson":"12","lessonName":"lesson12"}';
    stest(server)
      .post('/api/lesson')
      .send(testPackage)
      .expect(200)
      .end(function(error){
        if(error) { throw error; }
        done();
      });
  });

  // it('returns a 200 status code on put request to section', function(done){
  //   var testPackage = '{"lesson":"12","lessonName":"lesson12"}';
  //   stest(server)
  //     .put('/api/lesson/1')
  //     .send(testPackage)
  //     .expect(200)
  //     .end(function(error){
  //       if(error) { throw error; }
  //       done();
  //     });
  // });

  it('returns a 200 status code on post request to section', function(done){
    var testPackage = '{"section_id": "1", "sectionName": "lesson20section1", "content":"ouldbe", "code":"erefd", "preOp":"sdf", "postOp":"adf", "lesson_id":"20"}';
      stest(server)
      .post('/api/lesson/1/section')
      .send(testPackage)
      .expect(200)
      .end(function(error){
        if(error) { throw error; }
        done();
      });
  });



  // it('returns a 200 status code on put request to section', function(done){
  //   // var testPackage = '{"lesson":"12","lessonName":"lesson12"}';

  // done();
  // });


  // it('returns a 200 status code on put request to section', function(done){
  //   // var testPackage = '{"lesson":"12","lessonName":"lesson12"}';

  // done();
  // });


  // it('returns a 200 status code on put request to section', function(done){
  //   // var testPackage = '{"lesson":"12","lessonName":"lesson12"}';

  // done();
  // });



  // the same thing using mocha / chai / request
  // it('returns a 200 status code', function (done) {
  //   request.get('http://localhost:' + PORT, function (err, res, body){
  //     expect(res.statusCode).to.equal(200);
  //     done();
  //   });
  // });
  
  
 



});


