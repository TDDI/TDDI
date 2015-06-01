require('../setup');
var React = require('react/addons'),
    assert = require('assert'),
    expect = require('chai').expect,
    Main = require('../../public/src/app/components/Main.react'),
    TestUtils = React.addons.TestUtils;

describe('Main Page component', function(){
  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <Main />
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

  it('component should not have props', function() {
    assert(Object.keys(this.componentObject.props).length === 0);
  });

  it('component should store a state', function() {
    assert(this.componentObject.state !== null);
  });
  
  it('<div> should have class "NavBarContainer"', function() {
    assert(this.containerElement.getAttribute('class').includes('MainPageContainer'));
  });


  var mainFilter = function(component){
    if (component.textContent.includes("TOTALY THE MAIN PAGE")) {
      return true;
    } else {
      return false;
    }
  }
  it('<div> should have text "TOTALY THE MAIN PAGE"', function() {
    assert(TestUtils.findAllInRenderedTree(this.containerElement, mainFilter).length > 0);
  });

  
})