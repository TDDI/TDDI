/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-30 15:14:01
*/

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
    console.log(newCode);
    this.setState({
      code: newCode
    });
  },
  render: function() {
    DEBUG&&console.log("Re-rendering lesson");
    var that = this;

    var editorOptions = {
      lineNumbers: true
    };

    var handleClick = function( selection ){
      DEBUG&&console.log("setting selection to ", selection);
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
    DEBUG&&console.log("selection ",this.state.selection);
    
    if(this.state.selection!==undefined){
      DEBUG&&console.log("sectionData ",this.props.sectionData);
      var section = this.props.sectionData[this.state.selection];
      DEBUG&&console.log("section ",section);
      if(section){
        DEBUG&&console.log("success ");
        code     = section.code     || "";
        contents = section.contents || "";
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
              <ContentPanel contents = { contents } />
            </div>
            
            <div className="CodeBoxContainer">
              <div className="LessonResponseContainer">
                <p>This is a response</p>
              </div>
              <CodeMirror
                value={ code }
                onChange={this.updateCode}
                options={editorOptions}
              />
            </div>
          
          </div>

      </div>
    );
  }
})

module.exports = Lesson;