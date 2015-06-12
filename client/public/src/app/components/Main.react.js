/* 
* @Author: John Winstead
* @Date:   2015-05-28 19:54:37
* @Last Modified by:   awate
* @Last Modified time: 2015-05-29 15:01:23
*/
var React = require('react');

var Main = React.createClass({
  getInitialState: function( ){
    return { };
  },
  render: function() {
    return (
      <span>
      <div className="LessonSelectHeader">
        <h1>Get yourself out of Technical Debt</h1>
        <p>Try one of our lessons today</p>
      </div>
      <div className="innerLessonsContainer container-fluid flex-container">

      <div className="LessonArticle backglow">
        <a className="LessonPicture Lesson1img" href="/#lesson"></a>
        <div className="LessonTextDescription">
          <h3>Unit Testing</h3>
          <p>
            Learn how to test individual components in your program. 
            Identify the most basic aspects of unit testing. 
            Learn valuable lessons about what it means to properly test your code. 
          </p>
        </div>
      </div>

      <div className="LessonArticle UnderConstruction">
        <a className="LessonPicture Lesson2img "></a>
        <div className="LessonTextDescription">
          <h3>Integration Testing</h3>
          <p>
            Realize the power of multi-component testing for yourself.
            Build on the foundations taught to you by unit testing.
            Enable you and your team to iterate without fear. 
          </p>
        </div>
      </div>


      <div className="LessonArticle UnderConstruction">
        <a className="LessonPicture Lesson3img"></a>
        <div className="LessonTextDescription">        
          <h3>Visual Testing</h3>
          <p>Under Construction</p>
        </div>
      </div>

      <div className="LessonArticle UnderConstruction">
        <a className="LessonPicture Lesson4img"></a>
        <div className="LessonTextDescription">        
          <h3>End to End Testing</h3>
          <p>Under Construction</p>
        </div>
      </div>

      </div>
      </span>
    )
  }
})

module.exports = Main;