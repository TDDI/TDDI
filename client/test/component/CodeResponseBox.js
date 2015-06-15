require('../setup');
var React = require('react/addons'),
    assert = require('assert'),
    expect = require('chai').expect,
    CodeResponseBox = require('../../public/src/app/components/CodeResponseBox.react.js'),
    TestUtils = React.addons.TestUtils;


describe('CodeResponseBox component', function(){
  before('render and locate element', function() {
    var responseArray = ["Must check to see if aString is actually a string 'aString':undefined", "Another value"];

    var renderedComponent = TestUtils.renderIntoDocument(
      <CodeResponseBox      
        codeResponseStatusClass = "error"
        codeboxResponseClass = "showActualResponseBox"
        responses = { responseArray }/>
    );

    //Search for tag with class corresponding to codeboxResponseClass within rendered 
    //React component, throws an exception if not found
    var containerComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'showActualResponseBox'
    );

    this.componentObject = renderedComponent;
    this.containerElement = containerComponent.getDOMNode();

  });

  it('component should be a React composite component', function(){
    TestUtils.isCompositeComponent(this.componentObject);
  });
  
  it('Component should have <ul> element', function() {
    assert(TestUtils.scryRenderedDOMComponentsWithTag(this.componentObject, 'ul').length === 1);
  });

  // Testing dynamic rendering of data passed in
  it('Component should create <li> element for each response data passed in', function() {
    var reactLiArray = TestUtils.scryRenderedDOMComponentsWithTag(this.componentObject, 'li');
    assert(TestUtils.scryRenderedDOMComponentsWithTag(this.componentObject, 'li').length === 2);
  });

  it('Component should have response data in each <li> element', function() {
    var reactLiArray = TestUtils.scryRenderedDOMComponentsWithTag(this.componentObject, 'li');    
    var responseArray = ["Must check to see if aString is actually a string 'aString':undefined", "Another value"];
    for(var i = 0; i < reactLiArray.length; i++){
      assert(reactLiArray[i].props.children === responseArray[i]);
    }
  });

  
})
