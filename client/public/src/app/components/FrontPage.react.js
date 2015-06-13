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
    
      <section className="row splashbox">
          <div className="col-md-5 splashwords">
          <h1>Learn what testing is, and learn how to do it <strong>before</strong> instead of <i>after</i></h1>
          <p>TDDI is here to help you get started</p>
          </div>

          <div className="col-md-3 splashquickstart">
          <a href="/#lesson"><img src="https://i.imgur.com/NPluqP5.png?1"></img></a>
          <a className="btn btn-info lessonSelectRedirect" href="/#selector">Or Check Out <br />Our Lessons</a>
          </div>
      </section>
    </span>
    )
  }
})

module.exports = FrontPage;