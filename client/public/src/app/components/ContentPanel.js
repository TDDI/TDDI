var React = require('react');

var ContentPanel = React.createClass({

  parseHTML: function() {

  },
  render: function() {
    return (
      <div className="ContentContainer">
        <p dangerouslySetInnerHTML={{__html: this.props.contents}}/>
      </div>
    )
  }

})

module.exports = ContentPanel;
