var React = require('react');



var NavigationBar = React.createClass({
  render: function() {
    var self = this;
    return (
      <div className="row NavBarContainer">
        <ul>
          <span>
            <li className="col-md-2"><a href="/">Home</a></li>
            <li className="col-md-2"><a onClick={ self.props.showLogin }>Toggle</a></li>
          </span>
          <span className="AlignRight">
            <li className="col-md-2"><a href="/">Logout</a></li>
            <li className="col-md-2"><a href="/">Settings</a></li>
            <li className="col-md-2"><a href="/">{ this.props.user }</a></li>
          </span>
        </ul>
      </div>
    )
  }
})

module.exports = NavigationBar;
