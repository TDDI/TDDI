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

    // var buttonComponent = TestUtils.findRenderedDOMComponentWithTag(
    //   renderedComponent,
    //   'button'
    // );

    // var redirectComponent = TestUtils.findRenderedDOMComponentWithTag(
    //   renderedComponent,
    //   'a'
    // );

    this.componentObject = renderedComponent;
    // this.buttonElement = buttonComponent.getDOMNode();
    this.containerElement = containerComponent.getDOMNode();
    // this.redirectElement = redirectComponent.getDOMNode();
  });

  it('component should not have props', function() {
    assert(Object.keys(this.componentObject.props).length === 0);
  });

  // it('<div> should have a login button that says login', function() {
  //   assert(this.buttonElement.textContent === "Login");
  // });

  // it('<div> should contain a redirect to lessons without login', function() {
  //   assert(this.redirectElement.getAttribute('href') === "/#lesson");
  // });

  
});