/* 
* @Author: John Winstead
* @Date:   2015-05-24 20:47:02
* @Last Modified by:   awate
* @Last Modified time: 2015-05-25 14:31:55
*/
var React = require('react');

var FunctionDescription = React.createClass({
  render: function( ){
    console.log("rendering Description ", this.props.tree);
    return (
      <span>
        When passed <input></input> {this.props.tree.name} should return <select>
          <option value="object">
          <option value="value">
        </select>
        <input></input>
      </span>
    )
  }
});
        
module.exports = FunctionDescription;
