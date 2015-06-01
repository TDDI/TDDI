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

var App = React.createClass({
  getInitialState: function( ) {
    return {
      route:          "#",
      lessonData:     [ ],
      lessonsList:    [ ],
      sectionsList:   [ ],
      currentLesson:  null,
      currentSection: null,
      currentUser:    "Krazy Kurt"
    };
  },
  /* == == == == == == == == == == == == == == == == */
  // Fetchers
  fetchLessonList: function(){
    var that = this;
    $.get( "/api/lesson/", function(data){
      var lessonList = [ ];
      for(var i in data){
        lessonList.push(data[i].lessonName);
      }
      that.setState({lessonList:lessonList});
    });
  },
  fetchSectionList: function( lesson ){
    var that = this;
    $.get( "/api/lesson/" +lesson+ "/section/", function(data){
      var sectionList = [ ];
      for(var i in data){
        sectionList.push(data[i].sectionName);
      }
      that.setState({sectionList:sectionList});
    });
  },

  fetchLesson: function( lesson ){

    var that = this;
    $.get( "/api/lesson/" +lesson, function(data){
      that.state.lessonData[ lesson ] = data[ lesson ];
      if(that.state.lessonData[ lesson ])
      that.state.lessonData[ lesson ].sectionData = [ ];
      that.setState( that.state );
    });
  },
  fetchSection: function( lesson, section ){
    var that = this;
    $.get( "/api/lesson/" +lesson+ "/section/" +section, function(data){
      if(that.state.lessonData[ lesson ] && that.state.lessonData[ lesson ].sectionData[ section ])
        that.state.lessonData[ lesson ].sectionData[ section ] = data[ section ];
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

  render: function( ) {

    var Child=Main;
    switch (this.state.route) {
      case '#lesson': Child = Lesson; break;
      case '#profile': Child = Profile; break;
    }
    
    var that=this;

    var sectionData = [ ];
    if(that.state.lessonData[ this.state.currentLesson ])
      sectionData=that.state.lessonData[ this.state.currentLesson ].sectionData;
    return (
      <div>
        <NavigationBar />
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
