/* 
* @Author: John Winstead
* @Date:   2015-05-22 11:11:25
* @Last Modified by:   awate
* @Last Modified time: 2015-05-25 13:28:17
*/

var React = require('react');
var CodeBox = require('./components/CodeBox');
var ContentPanel = require('./components/ContentPanel');

var App = React.createClass({
  getInitialState: function( ){
    return {
      selection: null,
      tableOfContents: ["section1", "section2", "section3"],

      sectionData: { 
        section1: {
          name: 'section1',
          contents: "foo bar", // TODO: Markdown Library research
          code: "var example = 1",
          preopCode: "var mocha = requires(mocha);",
          postopCode: "console.log('PANIC');"
        },
        section2: {
          name: 'section2',
          contents: "bar of foo",
          code: "console.log('YOU GET NOTHING')",
          preopCode: "var hat = 'cat'",
          postopCode: "console.log(hat)"
        },
        section3: {
          name: 'section3',
          contents: "no no no",
          code: "//TODO fill this in",
          preopCode: "var stacks = true",
          postopCode: "var ondeck = stacks"
        }
      }

    };
  },
  render: function() {
    var that = this;

    var handleClick = function( selection ){
      that.setState( {selection: selection} );
    };

    // var loadSectionData = function(sectionName){
    //   if(//not loaded then reload it
    //     ){
    //     var serverstuff = get(serverstuff)//get stuff from server and set equal in sectionData
    //     that.sectionData[sectionName] = serverstuff;
    //   }
    // }

    var code = "";
    var content = "";
    if(this.state.selection){
      code = this.state.sectionData[this.state.selection].code;
      content = this.state.sectionData[this.state.selection].content;
    }
    return (
      <table>
      <tr><td>
      </td></tr>
        <tr>
          <td width="200px">
            <ul>
              {
                this.state.tableOfContents.map(function(v,k,c){
                  return <li onClick={handleClick.bind(this, v)} key={k}>{v}</li>;
                })
              }
            </ul>
          </td>
          <td>
            <CodeBox code = { code } />
          </td>
          <td>
            <ContentPanel content = { content } />
          </td>
        </tr>
      </table>
    );
  }
})

React.render(<App />, document.getElementById('app'));