/* 
* @Author: John Winstead
* @Date:   2015-05-28 19:54:37
* @Last Modified by:   awate
* @Last Modified time: 2015-05-29 15:01:23
*/
var React = require('react');

var Main = React.createClass({
  getInitialState: function( ){
    return { };
  },
  render: function() {
    return (
    <div align="center">
    <table id="lessonList" >
      <tr>
        <td>
          <a href={window.location.pathname + "#lesson/0/"}>
            <img class="img-responsive img-rounded" src="assets/images/lesson1Button.png" alt="Lesson 1" width="300" height="200"> </img>
            <h2>Lesson 1: Unit Tests</h2>
          </a>
        </td>
        <td>
          <a href={window.location.pathname + "#lesson/1/"}>
            <img class="img-responsive img-rounded" src="assets/images/lesson2Button.png" alt="Lesson 2" width="300" height="200"> </img>
            <h2>Lesson 2: Integration Tests</h2>
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <a href={window.location.pathname + "#lesson/2/"}>
            <img class="img-responsive img-rounded" src="assets/images/lesson3Button.png" alt="Lesson 3" width="300" height="200"> </img>
            <h2>Lesson 3: Headless Browser Tests</h2>
          </a>
        </td>
        <td>
          <a href={window.location.pathname + "#lesson/3/"}>
            <img class="img-responsive img-rounded" src="assets/images/lesson4Button.png" alt="Lesson 4" width="300" height="200"> </img>
            <h2>Lesson 4: End-to-end Tests</h2>
          </a>
        </td>
      </tr>
    </table>
    </div>
    )
  }
})

module.exports = Main;