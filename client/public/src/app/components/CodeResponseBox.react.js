var React = require('react');

var CodeResponseBox = React.createClass({
  getInitialState: function() {
    return {
      data: []
    }
  },
  render: function() {
    var rows = this.props.responses.map(function(response, i){
      return <CodeResponse data={response} key={i} />
    });
    return <div className=""><ul className={this.props.codeResponseStatusClass}>{rows}</ul></div>
  }
});

var CodeResponse = React.createClass({
  render: function() {
    return (
        <li>{this.props.data}</li>
      )
  }
});

module.exports = CodeResponseBox;