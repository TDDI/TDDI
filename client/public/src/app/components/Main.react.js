/* 
* @Author: John Winstead
* @Date:   2015-05-28 19:54:37
* @Last Modified by:   awate
* @Last Modified time: 2015-05-29 15:01:23
*/
var React = require('react');

var Main = React.createClass({
  getInitialState: function( ){
    return { };
  },
  render: function() {
    return (
      <div>
        <button>Login</button><br />
        To proceed without logging in click <a href="/#lesson">here</a>
      </div>
    )
  }
})

module.exports = Main;