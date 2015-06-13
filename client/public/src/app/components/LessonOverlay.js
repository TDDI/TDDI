var React = require('react');

var LessonOverlay = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className = { "LessonOverlay " + this.props.successOverlay.animation + " " + this.props.successOverlay.visibility }>
        <div className = 'overlay-container'>
          <button className = "closeWindow" onClick={ this.props.closeSuccess } >X</button>
          <div className="Notification">
            {this.props.successResponse}
          </div>
        </div>
      </div>
    )
  }
})

module.exports = LessonOverlay;


        // expect(aString).to.be.a("string");
        // expect(aFunction).to.be.a("function");
        // expect(aNumber).to.be.a("number");
        // expect(aBoolean).to.be.a("boolean");
        // expect(anObject).to.be.a("object");
        // expect(anArray).to.be.a("object");