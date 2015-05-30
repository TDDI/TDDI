/* 
* @Author: Brian Liu
* @Date:   2015-05-26 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 19:31:36
*/

var arrowStyles = {

};

var NavigationBar = React.createClass({
  render: function() {
    return (
      <div className="row NavBarContainer">
        <ul>
          <span>
            <li className="col-md-2"><a href="/">Home</a></li>
            <li className="col-md-2"><a href="/">Dragons</a></li>
          </span>
          <span className="AlignRight">
            <li className="col-md-2"><a href="/">Logout</a></li>
            <li className="col-md-2"><a href="/">Settings</a></li>
            <li className="col-md-2"><a href="/">User</a></li>
          </span>
        </ul>
      </div>
    )
  }
})

module.exports = NavigationBar;
