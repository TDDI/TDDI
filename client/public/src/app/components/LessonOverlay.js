var React = require('react');

var LessonOverlay = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className="LessonOverlay">
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