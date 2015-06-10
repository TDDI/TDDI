var React = require('react');

var Main = React.createClass({

  render: function() {
    var self = this;

    return (
    <span className="loginContainer" style = {{ display: self.props.overlayState }}>
      <div className="loginoverlay">
      <button className="closeOverlay" onClick={ self.props.closeLogin }>Close</button>
      <button className="githubauth">Login with Github</button>
        <div className="loginform">
        <form>
        Username:
        <input type="text" name="username" /><br />
        Password: 
        <input type="password" name="password" /><br />
          <button>Login</button><br />
          <span>To proceed without <br />logging in click <a href="/#lesson">here</a></span>
        </form>
        </div>
      </div>
        
    <div className="overlaycover" onClick={ self.props.closeLogin } />
    </span>
    )
  }
})

module.exports = Main;

//app idea deep thoughts by brian