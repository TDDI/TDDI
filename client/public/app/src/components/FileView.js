/* 
* @Author: John Winstead
* @Date:   2015-05-24 18:16:48
* @Last Modified by:   awate
* @Last Modified time: 2015-05-25 13:33:01
*/

var React = require('react');
var Description  = require('./Description');

var FileView = React.createClass({
  render: function( ){
    var that=this;
    console.log("rendering FileView ", this.props.tree);
    if(this.props.tree===undefined){
      return (<h1>loading</h1>)
    }
    return (
      <div>
      {Object.keys(this.props.tree.children).map(function(key){
        return (<Description tree={that.props.tree.children[key]} />);
      })}
      </div>
    )
  }
});

module.exports = FileView;
