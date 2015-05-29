/* 
* @Author: Brian Liu
* @Date:   2015-05-26 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 17:17:34
*/

var arrowStyles = {

};

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

module.exports = NavigationBar;