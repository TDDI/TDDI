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
        <h3>First blah</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <div className="descriptors">
        <h3>Second blah</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>        
      </div>
      <div className="descriptors">
        <h3>Third blah</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>        
      </div>

      </section >
      
    </span>
    )
  }
})

module.exports = FrontPage;