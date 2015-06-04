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
      //The current top level route
      route:          "#",

      //The currently logged in users name, Will likely refactor out when we switch to auth
      currentUser:    "Krazy Kurt",

      //Array of strings containing the list of lessons and the list of lessons in current section
      lessonsList:    [ ],
      sectionsList:   [ ],

      //the current lesson and section
      currentLesson:  null,
      currentSection: null,

      //This is a tree holding all of the downloaded lesson AND section data
      lessonData:     [ ],

      toggleLogin: "none"
    };
  },
  /* == == == == == == == == == == == == == == == == */
  // Fetchers
  // These will be refactored out into FLUX eventually

  fetchLessonList: function(){
    $.get( "/api/lesson/",
      (function(data){
        this.setState({lessonList:data});
      }).bind(this)
    );
  },
  fetchSectionList: function( lesson ){
    $.get( "/api/lesson/" +(lesson+1)+ "/section/",
      (function(data){
        this.setState({sectionList:data});
      }).bind(this)
    );
  },

  fetchLesson: function( lesson ){
    $.get( "/api/lesson/" +(lesson+1),
      (function(data){
        this.state.lessonData[ lesson ] = data;
        if(this.state.lessonData[ lesson ])
          this.state.lessonData[ lesson ].sectionData = [ ];
        this.setState( this.state );
      }).bind(this)
    );
  },
  fetchSection: function( lesson, section ){
    $.get( "/api/lesson/" +(lesson+1)+ "/section/" +(section+1),
      (function(data){
        if(this.state.lessonData[ lesson ])
          this.state.lessonData[ lesson ].sectionData[ section ] = data;
        this.setState(this.state);
      }).bind(this)
    );
  },
  /* == == == == == == == == == == == == == == == == */

  routeChanged: function() {
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
