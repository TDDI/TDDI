/* 
* @Author: awate
* @Date:   2015-05-22 11:11:25
* @Last Modified by:   awate
* @Last Modified time: 2015-05-22 16:00:55
*/

var React = require('react');
var ShowList = require('./Child');

var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: 'Steph Curry',
      friends: ['Klay Thompson', 'Draymond Green', 'Andre Iguodala']
    }
  },
  render: function(){
    return (
      <div>
        <h1> React Starter Kit! </h1>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  }
});

module.exports = FriendsContainer;