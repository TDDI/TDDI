var React = require('react');

var Main = React.createClass({
  getInitialState: function( ){
    return { };
  },
  render: function() {
    return (
    <div className="AppBodyContainer">
 		  <div className="LessonButtonContainer">
        <div>
          PlaceholderBox, will dynamically populate in a bit
          <a href="/#lesson">Click here to go to a lesson</a>
        </div>
      </div>
    </div>
    )
  }
})

module.exports = LessonSelect;