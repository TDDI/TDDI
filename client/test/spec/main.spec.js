// 'describe' is used for grouping of different tests.
// Typical syntax is either to start a sentence - "The each function"
// or just write a conceptual group - "Users"
describe('The main test', function() {

  // 'it' is where the real tests take place
  // Typical syntax is either to finish the sentence started by its describe - "should return null"
  // or to represent a specific piece of functionality - "Submit inserts into the database"
  it('should pass', function() {
    
    var returnsTrue = function(){
      return true;
    };

    // 'expect' is provided by chai.js and is synonymous with assert
    // each test should contain at least 1 expectation
    // these expectations usually involve the result of a function - returnsTrue()
    // and the result you know it should be - true
    expect(returnsTrue()).to.equal(true);
  });
});