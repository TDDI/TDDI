var React = require('react');

var LessonOverlay = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className= { "LessonOverlay " + this.props.successOverlay.animation + " " + this.props.successOverlay.visibility }>
      <button className = "closeWindow" onClick={ this.props.closeSuccess } >X</button>
      <div className="Notification">
        {this.props.successDatabaseResponse}
      </div>
      <video>
      </video>
      </div>
    )
  }
})

module.exports = LessonOverlay;