var React = require('react');

var aboutUs = React.createClass({
  getInitialState: function() {
    return {};

  },

  render: function (){
    return (
      <div>
         <section className="techStack">
              <div>
                <img className ="techStackPic" src="/assets/images/Codemirror.png"> </img>
                <img className ="techStackPic" src="/assets/images/Gulp.png"> </img>
                <img className ="techStackPic" src="/assets/images/Node.png"> </img>
                <img className ="techStackPic" src="/assets/images/PostgreSQL.png"> </img>
                <img className ="techStackPic" src="/assets/images/React.png"> </img>
                <img className ="techStackPic" src="/assets/images/Sass.png"> </img>
                <img className ="techStackPic" src="/assets/images/Testing.png"> </img>
              </div>
            </section>
      </div>
      )
    
  }

})

module.exports = aboutUs;