/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-30 15:14:01
*/
var React = require('react');

var codeEval = require('../codeEval');

/*  ========  Components  =======  */
var CodeMirror = require('./CodeMirror');
var ContentPanel = require('./ContentPanel');


var Lesson = React.createClass({
  getInitialState: function( ){
    return {
      currentUser: "Krazy Kurt"
    }
  },
  
  updateCode: function(newCode) {
    var sectionData = this.props.sectionData[this.props.currentSection];
    //if the section data exists
    if(sectionData)
      //update its code variable
      sectionData.code = newCode;
  },

  //Called when we need to evaluate the code in the codeBox. Called from clicking a button rendered in this file.
  codeEvaluation: function() {
    var sectionData = this.props.sectionData[this.props.currentSection];

    //This variable is a concatination of the preop code, the users provided code, and the postop code.
    var code = sectionData.preOp +"\n"+ sectionData.code +"\n"+ sectionData.postOp;

    //Create callback function for passing into codeEval
    var callBack = (function( response ){
      if( response.error ){
        this.setState({ codeResponse: "!!!Error: "+ response.error });
        console.log( "Error!", response.error );
      } else {
        this.setState({ codeResponse: "It worked!" });
        console.log( "It worked!", response.result );
      }
    }).bind( this );

    //add options to instruct codeEval to load these scripts before evaluating
    var codeOptions = {
       scripts: ['../lib/mocha/mocha.js','../lib/chai/chai.js']
    };

    //Call codeEval which will create a webworker and run the code.
    codeEval( code, callBack, codeOptions );
  },
  render: function() {
    var editorOptions = {
      lineNumbers: true,
      mode:        "javascript"
    };
    
    var section = this.props.sectionData[this.props.currentSection];
    var code    = section ? section.code    || "" : "";
    var content = section ? section.content || "" : "";

    //generate the information required for the side-bar
    var sectionList = [ ];
    if(this.props.sectionList){
      var path = window.location.pathname+ "#lesson/" +this.props.currentLesson+ "/section/";

      //Create a callback for use in the map function call below
      var callback = (function( sectionName, sectionIndex ){
        return (
          <a href={ path + sectionIndex } >
            <li key={ sectionIndex }>
              {sectionName}
            </li>
          </a>
        );
      }).bind( this );

      sectionList = this.props.sectionList.map( callback );
    }

    return (
      <div className = "AppBodyContainer" height='100%'>
        <div className = "TableOfContentsContainer">
          <ul>
            { sectionList }
          </ul>
        </div>

        <div className = "LessonContainer">
          <div className = "ContentContainer">
            <ContentPanel contents = { content } />
          </div>
          
          <div className = "CodeBoxContainer">
            <div className = "LessonResponseContainer ErrorBox">
              <p> { this.state.codeResponse } </p>
            </div>

            <CodeMirror
              value    = { code }
              onChange = { this.updateCode }
              options  = { editorOptions }
            />
            <button onClick = { this.codeEvaluation } className = "btn btn-default submit-code"> Submit </button>
          </div>
        </div>

      </div>
    );
  }
})

module.exports = Lesson;