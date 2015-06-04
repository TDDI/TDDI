var React = require('react');



var NavigationBar = React.createClass({
  render: function() {
    var self = this;
    return (
      <div className="row NavBarContainer">
        <ul>
          <span className="AlignLeft">
            <li className="col-md-2"><a href="/"><img className="cleanLogo" src="http://i.imgur.com/0idVjLu.png?1"></img></a></li>
            <li className="col-md-2"><div><a onClick={ self.props.showLogin }>Toggle</a></div></li>
          </span>
          <span className="AlignRight">
            <li className="col-md-2"><a href="/">Settings</a></li>
            <li className="col-md-3"><a href="/">{ this.props.user }</a></li>
          </span>
        </ul>
      </div>
    )
  }
})

module.exports = NavigationBar;
