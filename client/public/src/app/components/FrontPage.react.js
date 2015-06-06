var React = require('react');

var FrontPage = React.createClass({
  getInitialState: function( ){
    return { };
  },
  render: function() {
    return (
    <span>
    
      <section className="row splashbox">
          <div className="col-md-5 splashwords">
          <h1>Learn to test so you don't end the world</h1>
          <p>TDDI is here to help you get started</p>
          </div>

          <div className="col-md-3 splashquickstart">
          <a className="" href="/#lesson"><img src="http://i.imgur.com/NPluqP5.png?1"></img></a>
          <a className="btn btn-info lessonSelectRedirect" href="/#selector">Check Out <br />Our Lessons</a>
          </div>
      </section>

      <section className="aboutus">
        <div>
          <h3>About Us</h3>
        </div>

          <div className="Person col-md-3">
            <div className="Portrait">
            </div>
            Legendary Lu is Ludicrous
          </div>

          <div className="Person col-md-3">
            <div className="Portrait">
            </div>
            Kingly Kurt is Krazy
          </div>

          <div className="Person col-md-3">
            <div className="Portrait">
            </div>
            Judicious John is Jesting
          </div>

          <div className="Person col-md-3">
            <div className="Portrait">
            </div>
            Bearish Brian is Belligerent
          </div>
      </section>

    </span>
    )
  }
})

module.exports = FrontPage;