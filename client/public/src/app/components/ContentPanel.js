var React = require('react');

var ContentPanel = React.createClass({
  render: function() {
    return (
      <p>{this.prop.content}</p>
    )
  }
})