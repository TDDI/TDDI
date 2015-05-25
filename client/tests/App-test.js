var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

// Create a fake global `window` and `document` object:
var jsdom = require('mocha-jsdom');

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [
  'BigComplicatedComponent.js'
];

// Tests below

describe('CheckboxWithLabel', function() {
  jsdom();

  it('changes the text after click', function() {
    var React = require('react/addons');
    var CheckboxWithLabel = require('../public/app/src/CheckboxWithLabel');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'label');
    assert.equal(label.getDOMNode().textContent, 'Off');

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      checkbox, 'input');
    TestUtils.Simulate.change(input);
    assert.equal(label.getDOMNode().textContent, 'On');
  });
});


// describe('App', function(){
//   describe('files menu', function(){
//     it('shows a list of files on click', function(){
//       )
//     })
//   })