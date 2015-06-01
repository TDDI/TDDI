/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-30 15:14:01
*/
var React = require('react');

var CodeMirror = require('./CodeMirror');
var ContentPanel = require('./ContentPanel');

var Lesson = React.createClass({
  getInitialState: function( ){
    return {
      currentUser: "Krazy Kurt",
      selection: "0"
    }
  },
  componentWillMount: function() {
    console.log("WILLMOUNT!", this.state.sectionData[this.state.selection].code);
    this.setState({ code: this.state.sectionData[this.state.selection].code });
  },
  updateCode: function(newCode) {
    this.props.sectionData[this.state.selection].code = newCode;
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
    var content = "";
    
    if(this.state.selection!==undefined){
      var section = this.props.sectionData[this.state.selection];
      console.log("RENDER SECTION",this.state.selection, section, this.props);
      if(section){
        code     = section.code     || "";
        content = section.content || "";
      }
    }
    var sectionList = [ ];
    if(this.props.sectionList){
      sectionList = this.props.sectionList.map(function(v,k,c){
        return <li onClick={handleClick.bind(this, k)} key={k}>{v}</li>;
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
                <p>This is a response</p>
              </div>
              <CodeMirror
                value = { code }
                onChange = { this.updateCode }
                options = { editorOptions }
              />
            </div>
          
          </div>

      </div>
    );
  }
})

module.exports = Lesson;