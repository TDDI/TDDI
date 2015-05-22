/* 
* @Author: John Winstead
* @Date:   2015-05-22 11:11:25
* @Last Modified by:   awate
* @Last Modified time: 2015-05-25 13:28:17
*/

var React = require('react');

var FileView = require('./components/FileView');

var App = React.createClass({
  getInitialState: function( ){
    return {
      selection: null,
      fileList: [ {
        //name:               name of field
        //type:               type of field
        //tests(optional):    array of tests to run on field
        //children(optional): object or array containing children
        name: "addUp.js", type: "file", children: {
          add: { name:"add", type:"function", tests:[
            {args:[1,2],expect:3,result:3,pass:true},
            {args:[1,2],expect:8,result:3,pass:false}
          ]},
          values: { name:"values", type:"array", children:[
            { name:"0", type:"number"},
            { name:"1", type:"number"},
            { name:"2", type:"number"}
          ]},
          lib: {  name:"lib", type:"object",  children: {
            sub: { name:"sub", type:"function", tests:[ ] },
            div: { name:"div", type:"function", tests:[ ] }
          }}
        }
      } ] // list of file names
    };
  },
  render: function() {
    var that = this;
    var handleClick = function( selection ){
      that.setState( {selection: selection} );
    }
    return (
      <table>
        <tr>
          <td width="200px">
            <ul>
              {
                this.state.fileList.map(function(v,k,c){
                  return <li onClick={handleClick.bind(this, k)} key={k}>{v.name}</li>;
                })
              }
            </ul>
          </td>
          <td>
            <FileView
              tree = {this.state.fileList[this.state.selection]}
            />
          </td>
        </tr>
      </table>
    );
  }
})

React.render(<App />, document.getElementById('app'));