/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:03:10
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 19:56:44
*/
window.React = require('react');
$ = jQuery = require('jquery');
require('../assets/lib/bootstrap/js/collapse.js');

/*  ========  Components  =======  */
var NavigationBar = require('./components/NavigationBar');
var LoginOverlay = require('./components/LoginOverlay');

/*  ========  Routes  =======  */
var FrontPage = require('./components/FrontPage.react');
var Main = require('./components/Main.react');
var Lesson = require('./components/Lesson.react');
var Profile = require('./components/Profile.react');
var AboutUs = require('./components/About_Us.react');

var App = React.createClass({
  getInitialState: function( ) {
    return {
      //The current top level route
      route:          "#",

      //The currently logged in users name, Will likely refactor out when we switch to auth
      currentUser:    "Krazy Kurt",

      //Array of strings containing the list of lessons and the list of lessons in current section
      lessonList:    [ ],
      sectionList:   [ ],

      //the current lesson and section
      currentLesson:  null,
      currentSection: null,

      //This is a tree holding all of the downloaded lesson AND section data
      lessonData:     [ ],

      //This variable tracks the current state of the login overlay
      overlayState: "none",

      //fake database success response
      successResponse: 'YOU DID THE THING!'
    }
  },
  /* == == == == == == == == == == == == == == == == */
  // Fetchers
  // These will be refactored out into FLUX eventually

  //called during initialization in function componentWillMount
  fetchLessonList: function(){
    //Make ajax request to the backend api to get the list of lessons
    $.get( "/api/lesson/",
      //pass a bound function as the callback so >this< is preserved.
      (function( response ){
        //Store the response in the state
        this.setState({ lessonList: response });
      }).bind(this)
    );
  },
  //called whenever the route changes to update section list in the current lesson
  fetchSectionList: function( lesson ){
    $.get( "/api/lesson/" +(lesson+1)+ "/section/",
      //pass a bound function as the callback so >this< is preserved.
      (function( response ){
        //Store the response in the state
        this.setState({sectionList:response});
      }).bind(this)
    );
  },

  //called whenever the route changes to update lessonData with the current lesson
  fetchLesson: function( lesson ){
    $.get( "/api/lesson/" +(lesson+1),
      //pass a bound function as the callback so >this< is preserved.
      (function( response ){
        //Store the response in the state if empty
        if(!this.state.lessonData[ lesson ]){
          this.state.lessonData[ lesson ] = response;
          this.state.lessonData[ lesson ].sectionData = [ ];
          //save the state
          this.setState( this.state );
        }
      }).bind(this)
    );
  },

  //called whenever the route changes to update sectionData with the current section
  fetchSection: function( lesson, section ){
    $.get( "/api/lesson/" +(lesson+1)+ "/section/" +(section+1),
      //pass a bound function as the callback so >this< is preserved.
      (function( response ){
        //if the lesson has not been fetched/recieved yet
        if(this.state.lessonData[ lesson ]){
          //store the response in the state if empty
          if(!this.state.lessonData[ lesson ].sectionData[ section ]){
            this.state.lessonData[ lesson ].sectionData[ section ] = response;
            this.setState(this.state);
          }
        } else {
          //fetch the lesson and the section over again.
          this.fetchLesson( lesson );
          this.fetchSection( lesson, section );
        }
      }).bind(this)
    );
  },
  /* == == == == == == == == == == == == == == == == */

  //Called when route changes. event listener is added in componentWillMount
  routeChanged: function() {
    // hash is an array of strings.
    var hash     = window.location.hash.split('/');
    //the only location that is allowed to have sub sections is "lesson"
    // if any the location in #lesson and the user is trying to access a sub section...
    if(hash[0]!='#lesson' && hash.length>1){
      // truncate the location down to just the root and return, triggering the routeChanged event again.
      window.location.hash = hash[0];
      return;
    }
    //if hash[2] is anything other than "section" then redirect to main page (todo: 404 page)
    if(hash[2]!==undefined && hash[2]!=='section' && hash[2]!==""){
      window.location.hash = "";
      return;
    }

    //the split array is then used to populate state
    //the url I will be using in the following examples is:
    //  http://TDDI.io/#lesson/1/section/2

    //route is everything after "http://TDDI.io/" and before "1/section/1"
    var newState = {
      route:          hash[0], // "#lesson"
      currentLesson:  parseInt(hash[1]) || 0, // 1
      //hash[2] should allways be "section"
      currentSection: parseInt(hash[3]) || 0, // 2
    };

    //store the state

    //fetch the selected lesson...
    this.fetchLesson( newState.currentLesson );
    //... the sectionlist for that lesson...
    this.fetchSectionList( newState.currentLesson );
    //... and the selected section in that lesson.
    this.fetchSection( newState.currentLesson, newState.currentSection );

    this.setState(newState);
  },
  componentWillMount: function( ) {
    //whenever the hash changes, call routeChanged
    window.addEventListener('hashchange', this.routeChanged);

    //fetch the list of lessons
    this.fetchLessonList();

    //call routeChanged for the first time to initialize things
    this.routeChanged();
  },
  componentWillUnmount: function( ) {
    //when unmounted, remove the hash listener
    window.removeEventListener('hashchange');
  },

  //used to open the login overlay. Called from NavigationBar
  openLogin: function( ) {
    var overlayState = this.state.overlayState;
    this.setState({ overlayState: "block" });
  },
  //used to close the login overlay. Called from LoginOverlay
  closeLogin: function( ) {
    var overlayState = this.state.overlayState;
    this.setState({ overlayState: "none" });
  },


  render: function( ) {
    var CurrentRoute;// our... Bearing... if you will...
    //pick a component to create based on the current route
    switch (this.state.route) {
      case '#lesson': CurrentRoute  = Lesson;  break;
      case '#profile': CurrentRoute = Profile; break;
      case '#selector': CurrentRoute = Main; break;
      case '#aboutus': CurrentRoute = AboutUs; break;
      default: CurrentRoute = FrontPage;
    }

    var sectionData = [ ];
    
    //render might be called before the lesson and section data are fetched
    //  if the section data for the currently selected lesson is available, use it
    if(this.state.lessonData[ this.state.currentLesson ])
      sectionData=this.state.lessonData[ this.state.currentLesson ].sectionData;

    return (
      <div className="page-wrapper">
        <NavigationBar 
          user = { this.state.currentUser }
          showLogin = { this.openLogin }
        />
        
        <LoginOverlay 
         overlayState = { this.state.overlayState }
         closeLogin = { this.closeLogin } 
        />

       


        <CurrentRoute
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



React.render(<App />, document.getElementById('app'));
