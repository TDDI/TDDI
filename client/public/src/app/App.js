/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:03:10
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 19:56:44
*/
window.React = require('react');
$ = require('jquery');

/*  ========  Routes  =======  */
var NavigationBar = require('./components/NavigationBar');
var LoginOverlay = require('./components/LoginOverlay');

/*  ========  Routes  =======  */
var Main = require('./components/Main.react');
var Lesson = require('./components/Lesson.react');
var Profile = require('./components/Profile.react');

var App = React.createClass({
  getInitialState: function( ) {
    return {
      route:          "#",

      currentUser:    "Krazy Kurt",

      lessonsList:    [ ],
      sectionsList:   [ ],
      currentLesson:  null,
      currentSection: null,

      lessonData:     [ ],

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
      if(that.state.lessonData[ lesson ]){
        that.state.lessonData[ lesson ].sectionData = [ ];
      }
      that.setState( that.state );
    });
  },
  fetchSection: function( lesson, section ){
    var that = this;
    console.log("fecth Section " +section+ " in lesson " +lesson);
    $.get( "/api/lesson/" +(lesson+1)+ "/section/" +(section+1), function(data){
      console.log("recieve Section " +section+ " in lesson " +lesson,data);
      if(that.state.lessonData[ lesson ]){
        that.state.lessonData[ lesson ].sectionData[ section ] = data;
      }
      that.setState(that.state);
    });
  },
  /* == == == == == == == == == == == == == == == == */

  routeChanged: function() {
    console.log("HASH", window.location.hash);
    var hash     = window.location.hash.split('/');
    var newState = {
      route:          hash[0],
      currentLesson:  parseInt(hash[1]) || 0,
      currentSection: parseInt(hash[2]) || 0,
    };
    this.setState(newState);

    this.fetchLesson( newState.currentLesson );
    this.fetchSectionList( newState.currentLesson );
    this.fetchSection( newState.currentLesson, newState.currentSection );
  },
  componentWillMount: function( ) {
    window.addEventListener('hashchange', this.routeChanged);

    this.fetchLessonList();

    this.routeChanged();
  },
  componentWillUnmount: function( ) {
    window.removeEventListener('hashchange');
  },

  /*  ========  Events  =======  */
  // loginToggle: function( ) {
  //   toggleLogin === "none" ? this.setState({toggleLogin: "block"}) : this.setState({toggleLogin: "none"});
  // },
  openLogin: function( ) {
    var overlayState = this.state.overlayState;
    this.setState({ overlayState: "block" });
    console.log("tried to open login");
  },   
  closeLogin: function( ) {    
    var overlayState = this.state.overlayState;    
    this.setState({ overlayState: "none" });
  },
  render: function( ) {
    var Child;
    switch (this.state.route) {
      case '#lesson': Child = Lesson; break;
      case '#profile': Child = Profile; break;
      default: Child=Main;
    }
    
    var that = this;

    var sectionData = [ ];

    if(this.state.lessonData[ this.state.currentLesson ])
      sectionData=this.state.lessonData[ this.state.currentLesson ].sectionData;

    return (
      <div>
        <NavigationBar 
          user = { this.state.currentUser }
          showLogin = { this.openLogin }
        />
        <LoginOverlay 
         overlayState = { this.state.overlayState }
         closeLogin = { this.closeLogin } 
        />
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
