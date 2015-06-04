/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-30 15:14:01
*/
var React = require('react');

var CodeMirror = require('./CodeMirror');
var ContentPanel = require('./ContentPanel');

var codeEval = require('../codeEval');


var Lesson = React.createClass({
  getInitialState: function( ){
    return {
      currentUser: "Krazy Kurt"
    }
  },
  updateCode: function(newCode) {
    this.props.sectionData[this.props.currentSection].code = newCode;
  },
  codeEvaluation: function() {
    var that = this;

    // var codeOptions = {
    //   scripts: ['../assets/lib/mocha/mocha.js','../assets/lib/chai/chai.js']
    // };

    console.log(this.props.sectionData[this.props.currentSection].code);
    codeEval(this.props.sectionData[this.props.currentSection].code,function(response){
      if(response.error){
        that.setState({codeResponse:"!!!Error"});
        console.log("Error!");
      } else {
        that.setState({codeResponse:"It worked!"});
        console.log("It worked!");
      }
    });
  },
  render: function() {
    var that = this;

    var editorOptions = {
      lineNumbers: true,
      mode: "javascript"
    };

    var code = "";
    var content = "";
    
    if(this.props.currentSection!==undefined){
      var section = this.props.sectionData[this.props.currentSection];
      console.log("RENDER SECTION",this.props.currentSection, section, this.props);
      if(section){
        code     = section.code     || "";
        content = section.content || "";
      }
    }
    var sectionList = [ ];
    if(this.props.sectionList){
      sectionList = this.props.sectionList.map(function(v,k,c){
        return <a href={ window.location.pathname + "#lesson/" + that.props.currentlesson + "/section/" + k } ><li key={k}>{v}</li></a>;
      })
    }
    return (
      <div className="row AppBodyContainer">
          <div className="col-md-2 TableOfContentsContainer container-fluid">
            <ul>
              { sectionList }
            </ul>
          </div>

          <div className="col-md-9 LessonContainer container-fluid">
            <div className="ContentContainer">
              <ContentPanel
                contents = { content }
              />
            </div>
            
            <div className="CodeBoxContainer">
              <div className="LessonResponseContainer">
                <p>{ this.state.codeResponse }</p>
              </div>
              <CodeMirror
                value = { code }
                onChange = { this.updateCode }
                options = { editorOptions }
              />
              <button onClick= { this.codeEvaluation } className="btn btn-default submit-code">Submit</button>
            </div>
          
          </div>

      </div>
    );
  }
})

module.exports = Lesson;