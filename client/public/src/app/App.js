/* 
* @Author: John Winstead
* @Date:   2015-05-28 16:03:10
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 17:29:19
*/

window.React = require('react');

var NavigationBar = require('./components/NavigationBar');
/*  ========  Routes  =======  */
var Main = require('./components/Lesson.react');
var Lesson = require('./components/Lesson.react');
var Profile = require('./components/Lesson.react');

var App = React.createClass({
  getInitialState: function( ) {
    return { currentUser: "Krazy Kurt" };
  },
  render: function( ) {
    var route;
    switch (window.location.hash) {
      case '#lesson': route = Lesson; break;
      case '#profile': route = Profile; break;
      default: route = Main;
    }
    return (<div><NavigationBar />{route}</div>);
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
