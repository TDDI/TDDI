require('../setup');
var React = require('react/addons'),
    assert = require('assert'),
    expect = require('chai').expect,
    LessonOverlay = require('../../public/src/app/components/LessonOverlay'),
    TestUtils = React.addons.TestUtils;

describe('ContentPanel component', function(){
  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <LessonOverlay successOverlay = { {animation: "none"} } />
    );
    //Search for <div> tag within rendered React component
    //Throws an exception if not found
    var containerComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'LessonOverlay'
    );

    var videoComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'video'
    );

    this.componentObject = renderedComponent;
    this.containerElement = containerComponent.getDOMNode();
    this.videoElement = videoComponent.getDOMNode();
  });

  it('component should not store a state', function() {
    assert(this.componentObject.state === null);
  });
  
  it('<div> should have class "LessonOverlay"', function() {
    assert(this.containerElement.getAttribute('class').includes('LessonOverlay'));
  });

  
})