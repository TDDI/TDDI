var React = require('react');

var FrontPage = React.createClass({
  getInitialState: function( ){
    return { };
  },
  render: function() {
    return (
    <span>
    <section className="header-container">
      <div className="title-container">
        <h1 className="Title">TDDI</h1>
        <p className="SubTitle">Test Driven Development Initializer</p>
        <a className="btn btn-info headerButtons" href="/#lesson">Start Testing</a>
        <a className="btn btn-info headerButtons" href="/#selector">See All Lessons</a>
        <hr />
      </div>

    </section>
  
      <section className="descriptorsContainer">
      <div className="splashwords">
        <h1>Learn what testing is, and learn how to do it <strong>before</strong> instead of <i>after</i></h1>
      <p>TDDI is here to help you get started</p>
      </div>

      <div className="splashquote">
        <p>"Program testing can be used to show the presence of bugs, but never to show their absence!" -Edsger Dijkstra</p>
        <p>"Testing leads to failure, and failure leads to understanding."-Burt Rutan</p>
      </div>
      <div className="descriptors">
        <h3>Why Test At All?</h3>
        <p>In 2013, Knight Capital Group lost 450 million dollars in the course of 45 minutes due to a dependency not being loaded in their build process. A simple test checking for the existence of this dependency (less than 30 lines of code) would have prevented that unfortunate event.</p>
      </div>
      <div className="descriptors">
        <h3>Why Create TDDI?</h3>
        <p>When it came to learning Test Driven Development ourselves, we found that there were no easy  patterns to follow. Where do you start? What do you start testing for? These are simple questions that we never found a list, so we created our own after careful research.</p>        
      </div>
      <div className="descriptors">
        <h3>What Does TDDI Do?</h3>
        <p>TDDI offers a simple enumerated list of ways to test your program. This application should teach you not just the syntax for testing, but also the reasons and advantages of testing  before you build a mountain of technical debt.</p>        
      </div>

      </section >
      
    </span>
    )
  }
})

module.exports = FrontPage;