var React = require('react');

var LessonOverlay = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className= { "LessonOverlay " + this.props.successOverlay.animation + " " + this.props.successOverlay.visibility }>
      <button onClick={ this.props.closeSuccess } >Close dis sheet</button>
      <div className="Notification">
        GRAPE SUCCESS!
      </div>
      <video>
      </video>
      </div>
    )
  }
})

module.exports = LessonOverlay;