'use strict';

var React = require('react');

// require in the codemirror in-browser editor
// from it's node module
var CM = require('codemirror');

// awkwardly pull in the javascript syntax mode js file from codemirror
// (thanks to how browserify will have to pull this in)
require('../../../../../node_modules/codemirror/mode/javascript/javascript.js');

var CodeMirror = React.createClass({
  displayName: 'CodeMirror',

  // the code mirror does not start
  getInitialState: function() {
    return {
      isFocused: false
    };
  },

  // when the component mounts, create the code mirror editor from the existing
  // text area. It binds click events for codemirror on the component and uses
  // the value passed from the lesson component as the initial code for editor
  componentDidMount: function() {
    this.codeMirror = CM.fromTextArea(this.refs.codemirror.getDOMNode(), this.props.options);
    this.codeMirror.on('change', this.codemirrorValueChanged);
    this.codeMirror.on('focus', this.focusChanged.bind(this, true));
    this.codeMirror.on('blur', this.focusChanged.bind(this, false));
    this._currentCodemirrorValue = this.props.value;
  },

  // when unmounted, it returns the textarea it used for instantiation
  // and returns it back to a normal state
  componentWillUnmount: function() {
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  },

  // if the code is updated by the lesson component
  // and isn't the same as the current code,
  // it will update properly
  componentWillReceiveProps: function(nextProps) {
    if (this.codeMirror && this._currentCodemirrorValue !== nextProps.value) {
      this.codeMirror.setValue(nextProps.value);
    }
  },

  // retrieves a reference to the code mirror component in memory
  getCodeMirror: function() {
    return this.codeMirror;
  },

  // initiates the focus event and should add focus event css to the editor
  focus: function() {
    if (this.codeMirror) {
      this.codeMirror.focus();
    }
  },

  // reflect the focus change to the editor in the component
  focusChanged: function(focused) {
    this.setState({
      isFocused: focused
    });
  },

  // detect when the code editor is updated, set it on the component
  // in memory, and pass the updated code to the onchange event handler
  // if it is declared in the parent (lesson component)
  codemirrorValueChanged: function (doc, change) {
    var newValue = doc.getValue();
    this._currentCodemirrorValue = newValue;
    this.props.onChange && this.props.onChange(newValue);
  },

  render: function() {
    var className = 'codearea';
    if (this.state.isFocused) {
      className += ' codearea--focused';
    }
    return (
      <div className = {className}>
        <textarea
          ref ='codemirror'
          name = {this.props.path}
          defaultValue = {this.props.value} 
          autoComplete = 'off'>
        </textarea>
      </div>
    );
  }

});

module.exports = CodeMirror;