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
    var containerComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'div'
    );
    this.componentObject = renderedComponent;
    this.containerElement = containerComponent.getDOMNode();
  });

  it('component should store contents in props', function() {
    assert(this.componentObject.props.contents === "foo bar");
  });

  it('component should not store a state', function() {
    assert(this.componentObject.state === null);
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
  it('<div> should render passed in contents at least once', function() {
    assert(TestUtils.findAllInRenderedTree(this.containerElement, foobarFilter).length > 0);
  });

  
})