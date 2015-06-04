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

  componentWillMount: function( ) {
    console.log("CURLES", this.props.currentLesson);
  },
  
  updateCode: function(newCode) {
    console.log("UPDATE CODE", this.props, this.props.currentSection)
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
        that.setState({codeResponse:"!!!Error: "+response.error});
        console.log("Error!", response.error);
      } else {
        that.setState({codeResponse:"It worked!"});
        console.log("It worked!", response.result);
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
      if(section){
        code    = section.code    || "";
        content = section.content || "";
      }
    }
    var sectionList = [ ];
    if(this.props.sectionList){
      console.log("this",this.props);
      sectionList = this.props.sectionList.map( (function(v,k,c){
        console.log("that",this.props.currentLesson);
        return <a href={ window.location.pathname + "#lesson/" + this.props.currentLesson + "/section/" + k } ><li key={k}>{v}</li></a>;
      }).bind(this))
    }
    return (
      <div className="AppBodyContainer" height='100%'>
          <div className="TableOfContentsContainer">
            <ul>
              { sectionList }
            </ul>
          </div>

          <div className="LessonContainer">
            <div className="ContentContainer">
              <ContentPanel
                contents = { content }
              />
            </div>
            
            <div className="CodeBoxContainer">
              <div className="LessonResponseContainer ErrorBox">
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