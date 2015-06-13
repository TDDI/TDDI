require('../setup');
var React = require('react/addons'),
    assert = require('assert'),
    expect = require('chai').expect,
    ContentPanel = require('../../public/src/app/components/ContentPanel'),
    TestUtils = React.addons.TestUtils;

describe('ContentPanel component', function(){
  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <ContentPanel contents = "foo bar" />
    );

    //Search for <div> tag within rendered React component
    //Throws an exception if not found
    var containerComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'ContentContainer'
    );
    this.componentObject = renderedComponent;
    this.containerElement = containerComponent.getDOMNode();
  });

  it('component should be a React composite component', function(){
    TestUtils.isCompositeComponent(this.componentObject);
  });
  
  it('<div> should have class "ContentContainer"', function() {
    assert(this.containerElement.getAttribute('class') === 'ContentContainer');
  });


  var foobarFilter = function(component){
    if (component.textContent === "foo bar") {
      return true;
    } else {
      return false;
    }
  }
  it('<div> should render passed in contents once', function() {
    assert(TestUtils.findAllInRenderedTree(this.containerElement, foobarFilter).length === 1);
  });

  
})