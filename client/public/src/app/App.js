/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:03:10
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 19:56:44
*/

window.React = require('react');

var NavigationBar = require('./components/NavigationBar');
/*  ========  Routes  =======  */
var Main = require('./components/Main.react');
var Lesson = require('./components/Lesson.react');
var Profile = require('./components/Profile.react');

var App = React.createClass({
  getInitialState: function( ) {
    return { currentUser: "Krazy Kurt" };
  },
  render: function( ) {
    var Route=Lesson;
    switch (window.location.hash) {
      case '#lesson': Route = Lesson; break;
      case '#profile': Route = Profile; break;
    }

    return (
      <span>
        <NavigationBar user = { this.state.currentUser } />
        <Route />
      </span>
    );
  }
});

function render() {
  React.render(
    <App />,
    document.getElementById('app')
  );
}
window.addEventListener('hashchange', render);
render();
