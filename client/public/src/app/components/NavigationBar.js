var React = require('react');



var NavigationBar = React.createClass({
  render: function() {
    var self = this;
    return (
      <div className="row NavBarContainer">
        <ul>
          <span className="AlignLeft">
            <div><li className="col-md-2"><a href="/"><img className="cleanLogo" src="http://i.imgur.com/0idVjLu.png?1"></img></a></li></div>
          </span>
          <span className="AlignRight">
            <div><li className="col-md-2"><a href="/">Settings</a></li></div>
            <div><li className="col-md-3"><a onClick={ self.props.showLogin }>{ this.props.user }</a></li></div>
          </span>
        </ul>
      </div>
    )
  }
})

module.exports = NavigationBar;
