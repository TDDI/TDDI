var React = require('react');

var Main = React.createClass({

  render: function() {
    return (
    <span style = {{ display: this.props.toggleLogin }}>
      <div className="loginoverlay">
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
        
    <div className="overlaycover">
    </div>
    </span>
    )
  }
})

module.exports = Main;