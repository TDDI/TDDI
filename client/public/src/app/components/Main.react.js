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
        <h3>Get yourself out of Technical Debt</h3>
        <p>Try one of our lessons today</p>
      </div>
      <div className="innerLessonsContainer container-fluid flex-container">

      <div className="LessonArticle backglow">
        <a className="LessonPicture Lesson1img" href="/#lesson"></a>
        <div className="LessonTextDescription">
          <h3>Unit Testing</h3>
          <p>In computer programming, unit testing is a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use. Intuitively, one can view a unit as the smallest testable part of an application. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. In object-oriented programming, a unit is often an entire interface, such as a class, but could be an individual method. Unit tests are short code fragments created by programmers or occasionally by white box testers during the development process. It forms the basis for component testing.</p>
        </div>
      </div>

      <div className="LessonArticle UnderConstruction">
        <a className="LessonPicture Lesson2img "></a>
        <div className="LessonTextDescription">
          <h3>Integration Testing</h3>
          <p>Integration testing (sometimes called integration and testing, abbreviated I&T) is the phase in software testing in which individual software modules are combined and tested as a group. It occurs after unit testing and before validation testing. Integration testing takes as its input modules that have been unit tested, groups them in larger aggregates, applies tests defined in an integration test plan to those aggregates, and delivers as its output the integrated system ready for system testing. </p>
        </div>
      </div>


      <div className="LessonArticle UnderConstruction">
        <a className="LessonPicture Lesson3img"></a>
        <div className="LessonTextDescription">        
          <h3>Visual Testing</h3>
          <p>End-to-end testing is a methodology used to test whether the flow of an application is performing as designed from start to finish. The purpose of carrying out end-to-end tests is to identify system dependencies and to ensure that the right information is passed between various system components and systems.</p>
        </div>
      </div>

      <div className="LessonArticle UnderConstruction">
        <a className="LessonPicture Lesson4img"></a>
        <div className="LessonTextDescription">        
          <h3>End to End Testing</h3>
          <p>The aim of visual testing is to provide developers with the ability to examine what was happening at the point of software failure by presenting the data in such a way that the developer can easily ﬁnd the information she or he requires, and the information is expressed clearly. At the core of visual testing is the idea that showing someone a problem (or a test failure), rather than just describing it, greatly increases clarity and understanding. Visual testing therefore requires the recording of the entire test process – capturing everything that occurs on the test system in video format. Output videos are supplemented by real-time tester input via picture-in-a-picture webcam and audio commentary from microphones.</p>
        </div>
      </div>

      </div>
      </span>
    )
  }
})

module.exports = Main;