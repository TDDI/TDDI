var React = require('react');

var ContentPanel = React.createClass({

  render: function() {
    return (
      <div className="ContentContainer">
        <p>{this.props.contents}</p>
      </div>
    )
  }

})

module.exports = ContentPanel;
