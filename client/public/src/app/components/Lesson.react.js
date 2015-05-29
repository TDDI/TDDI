/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 20:07:51
*/

var CodeMirror = require('./CodeMirror');
var ContentPanel = require('./ContentPanel');

var Lesson = React.createClass({
  getInitialState: function( ){
    return {
      currentUser: "Krazy Kurt",
      selection: "sectionDefault",
      tableOfContents: ["section1", "section2", "section3"],

      sectionData: {
        sectionDefault: {
          name: 'sectionDefault',
          contents: "defaultstuff",
          code: "default code here",
          preopCode: "defaultpreopCode",
          postopCode: "defaultpostopCode"
        }, 
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
  updateCode: function(newCode) {
    console.log(newCode);
    this.setState({
      code: newCode
    });
  },
  render: function() {
    var that = this;

    var editorOptions = {
      lineNumbers: true
    };

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
    var contents = "";
    
    if(this.state.selection){
      code = this.state.sectionData[this.state.selection].code;
      contents = this.state.sectionData[this.state.selection].contents;
    }
    return (
      <div>

        <div class="module">

          <div id="tableofcontents">
            <ul style={{border: '10px'}}>
              {
                this.state.tableOfContents.map(function(v,k,c){
                  return <li onClick={handleClick.bind(this, v)} key={k}>{v}</li>;
                })
              }
            </ul>
          </div>

          <CodeMirror
            value={this.state.sectionData[this.state.selection].code}
            onChange={this.updateCode}
            options={editorOptions} />

          <div id="contents">
            <ContentPanel contents = { contents } />
          </div>

        </div>

      </div>
    );
  }
})

module.exports = Lesson;