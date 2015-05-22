/* 
* @Author: John Winstead
* @Date:   2015-05-24 12:05:49
* @Last Modified by:   awate
* @Last Modified time: 2015-05-25 08:13:21
*/

var Tree = function(value, parent){
  this.value    = value;
  this.parent   = parent;
  this.children = [ ];
};
Tree.prototype.addChild = function(child){
  if( !child || !(child instanceof Tree) ) child = new Tree( child, this );
  return this.children[this.children.push(child)-1];
};
Tree.prototype.removeChild = function( child ){
  var index = this.children.indexOf( child );
  if( index !== -1 ) this.children.splice( index, 1 );
};
Tree.prototype.getHead = function( ){
  return this.parent ? this.parent.getHead() : this;
}

Tree.prototype.methods
var React = require('react');
var FileListView = React.createClass({

  render: function( ){
    return (
    )
  }
});

module.exports = FileListView;
