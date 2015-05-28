// var React = require('react/addons');
var arrowStyles = {

}

var NavigationBar = React.createClass({
  render: function() {
    return (
      <div>
        <div id="cssmenu">
          <img id='arrow' src="assets/images/arrow_transparent_red.gif" />
          <ul>
            <li class='active' ><a href="/">Home</a></li>
            <li><a href="/">Dragons</a></li>
            <li><a href="/">Doom</a></li>
            <li style={{float:'right'}}><a href="/">Logout</a></li>
            <li style={{float:'right'}}><a href="/">Settings</a></li>
            <li style={{float:'right'}}><a href="/">User</a></li>
          </ul>
        </div>
      </div>
    )
  },


})

// module.exports = NavigationBar;