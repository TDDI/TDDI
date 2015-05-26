/* 
* @Author: John Winstead
* @Date:   2015-05-24 20:47:02
* @Last Modified by:   awate
* @Last Modified time: 2015-05-25 16:31:32
*/
var React = require('react');

var getSimilarTypes = function( type ){
  functionTypes = [
    "function",
    "pseudoclasical object"
  ];
  if( functionTypes.indexOf(type)!=-1 ) return functionTypes;

  numberTypes = [
    "number",
    "integer",
    "float"
  ];
  if( numberTypes.indexOf(type)!=-1 ) return numberTypes;

  stringTypes = [
    "string",
    "char"
  ];
  if( stringTypes.indexOf(type)!=-1 ) return stringTypes;

  objectTypes = [
    "object",
    "library"
  ];
  if( objectTypes.indexOf(type)!=-1 ) return objectTypes;

  return [ ];
}

// var FunctionDescription  = require('./FunctionDescription');
// var PseudoclasicalDescription  = require('./PseudoclasicalDescription');

var Description = React.createClass({
  render: function( ){
    console.log("rendering Description ", this.props.tree);
    return (
      <span>
        <strong>{this.props.tree.name}</strong> is a <select>
          {getSimilarTypes(this.props.tree.type).map(function(v,k,c){
            return (<option value={v}>{v}</option>)
          })}
        </select> <br />
        <span>
          {this.props.tree.name}(<input></input>) should return a <select>
            <option value="object">object</option>
            <option value="value">value</option>
          </select>
          <input></input>
        </span>

        <br />
      </span>
    )
  }
});

//<span>Should return <input></input> when passed <input></input></span>
        
module.exports = Description;
