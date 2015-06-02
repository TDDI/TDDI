/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:03:10
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 19:56:44
*/
window.React = require('react');
$ = require('jquery');

var NavigationBar = require('./components/NavigationBar');
/*  ========  Routes  =======  */
var Main = require('./components/Main.react');
var Lesson = require('./components/Lesson.react');
var Profile = require('./components/Profile.react');
var LoginOverlay = require('./components/LoginOverlay');

var App = React.createClass({
  getInitialState: function( ) {
    return {
      route:          "#",
      lessonData:     [ ],
      lessonsList:    [ ],
      sectionsList:   [ ],
      currentLesson:  null,
      currentSection: null,
      currentUser:    "Krazy Kurt",
      toggleLogin: "none"
    };
  },
  /* == == == == == == == == == == == == == == == == */
  // Fetchers
  fetchLessonList: function(){
    var that = this;
    console.log("fetch LessonList");
    $.get( "/api/lesson/", function(data){
      console.log("recieve LessonList",data);
      that.setState({lessonList:data});
    });
  },
  fetchSectionList: function( lesson ){
    var that = this;
    console.log("fecth SectionList for lesson " +lesson);
    $.get( "/api/lesson/" +(lesson+1)+ "/section/", function(data){
      console.log("recieve SectionList " +lesson,data);
      that.setState({sectionList:data});
    });
  },

  fetchLesson: function( lesson ){
    var that = this;
    console.log("fecth Lesson " +lesson);
    $.get( "/api/lesson/" +(lesson+1), function(data){
      console.log("recieve Lesson " +lesson,data);
      that.state.lessonData[ lesson ] = data;
      if(that.state.lessonData[ lesson ])
        that.state.lessonData[ lesson ].sectionData = [ ];
      that.setState( that.state );
    });
  },
  fetchSection: function( lesson, section ){
    var that = this;
    console.log("fecth Section " +section+ " in lesson " +lesson);
    $.get( "/api/lesson/" +(lesson+1)+ "/section/" +(section+1), function(data){
      console.log("recieve Section " +section+ " in lesson " +lesson,data);
      if(that.state.lessonData[ lesson ])
        that.state.lessonData[ lesson ].sectionData[ section ] = data;
      else console.log("FUCK", lesson, section, that.state.lessonData[ lesson ], that.state.lessonData[ lesson ].sectionData[ section ])
      that.setState(that.state);
    });
  },
  /* == == == == == == == == == == == == == == == == */

  routeChanged: function() {
    var hash     = window.location.hash.split('/');
    var newState = {
      route:          hash[0],
      currentLesson:  parseInt(hash[1])||0,
      currentSection: parseInt(hash[2])||0,
    }
    this.setState(newState);

    this.fetchLesson( newState.currentLesson );
    this.fetchSectionList( newState.currentLesson );
    this.fetchSection( newState.currentLesson, newState.currentSection );
  },
  componentWillMount: function( ) {
    this.fetchLessonList();
    window.addEventListener('hashchange', this.routeChanged);
  },
  componentWillUnmount: function( ) {
    window.removeEventListener('hashchange');
  },
  loginToggle: function( ) {
    toggleLogin === "none" ? this.setState({toggleLogin: "block"}) : this.setState({toggleLogin: "none"});
  },

  render: function( ) {

    var Child=Main;
    switch (this.state.route) {
      case '#lesson': Child = Lesson; break;
      case '#profile': Child = Profile; break;
    }
    
    var that=this;

    var sectionData = [ ];
    if(this.state.lessonData[ this.state.currentLesson ])
      sectionData=this.state.lessonData[ this.state.currentLesson ].sectionData;
    console.log("FML", this.state.currentLesson, this.state.lessonData);
    return (
      <div>
        <NavigationBar user = { this.state.currentUser } />
        <LoginOverlay toggleLogin = { this.state.toggleLogin } />
        <Child
          currentLesson  = {this.state.currentLesson}
          currentSection = {this.state.currentSection}
          lessonList     = {this.state.lessonList}
          sectionList    = {this.state.sectionList}
          lessonData     = {this.state.lessonData}
          sectionData    = {sectionData}
        />
      </div>
    );
  }
});

React.render(<App />,document.getElementById('app'));
