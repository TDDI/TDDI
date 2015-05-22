/* 
* @Author: awate
* @Date:   2015-05-22 11:11:25
* @Last Modified by:   awate
* @Last Modified time: 2015-05-22 16:01:08
*/

var React = require('react');

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

module.exports = ShowList;