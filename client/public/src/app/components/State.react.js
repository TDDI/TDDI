/* 
* @Author: John Winstead
* @Date:   2015-05-30 10:43:56
* @Last Modified by:   awate
* @Last Modified time: 2015-05-30 12:24:41
*/
window.React = require('react');

var State = React.createClass({
  getInitialState: function( ){
    var o        = { };
        o.states = prop.states || [];
        o.state  = prop.state  || "";
    return o;
  },
  render: function() {
    var CurrentState = states[state];

    //Render nothing if CurrentState is undefined
    if(!CurrentState) return(<span></span>);
    else return (<CurrentState {...this.props}/>);
  }
})

module.exports = State;