var React = require('react');

var aboutUs = React.createClass({
  getInitialState: function() {
    return {};

  },

  render: function (){
    return (
      <div>

        <section className="aboutus">
          <div>
            <h3>About Us</h3>
          </div>

            <div className="Person col-md-3">
              <div className="Portrait Lu">
              </div>
              <p>
                Legendary Lu is Ludicrous.
              </p>
              <a href="https://github.com/lugyin" className="GithubIconDiv"></a>
            </div>

            <div className="Person col-md-3">
              <div className="Portrait Kurt">
              </div>
              <p>
                Kingly Kurt is Krazy.
              </p>
              <a href="https://github.com/kurtbartholomew" className="GithubIconDiv"></a>
            </div>

            <div className="Person col-md-3">
              <div className="Portrait John">
              </div>
              <p>
                Judicious John is Jesting.
              </p>
              <a href="https://github.com/awatemonosan" className="GithubIconDiv"></a>
            </div>

            <div className="Person col-md-3">
              <div className="Portrait Brian">
              </div>
              <p>
                Bearish Brian is Belligerent.
              </p>
              <a href="https://github.com/bcjl" className="GithubIconDiv"></a>
            </div>
        </section>

         <section className="techStack">
              <div>
                <img className ="techStackPic" src="/assets/images/Codemirror.png"> </img>
                <img className ="techStackPic" src="/assets/images/Gulp.png"> </img>
                <img className ="techStackPic" src="/assets/images/Node.png"> </img>
                <img className ="techStackPic" src="/assets/images/PostgreSQL.png"> </img>
                <img className ="techStackPic" src="/assets/images/React.png"> </img>
                <img className ="techStackPic" src="/assets/images/Sass.png"> </img>
                <img className ="techStackPic" src="/assets/images/Testing.png"> </img>
                <img className ="techStackPic" src="/assets/images/Travis_CI.jpeg"> </img>
                <img className ="techStackPic" src="/assets/images/HTML5_CSS3.jpeg"> </img>
              </div>
            </section>
      </div>
      )
    
  }

})

module.exports = aboutUs;