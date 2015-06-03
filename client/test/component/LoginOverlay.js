require('../setup');
var React = require('react/addons'),
    assert = require('assert'),
    expect = require('chai').expect,
    LoginOverlay = require('../../public/src/app/components/LoginOverlay'),
    TestUtils = React.addons.TestUtils;

describe('LoginOverlay component', function(){
  before('render and locate element', function() {
    var testFunction = function(){
      return 0;
    }
    var renderedComponent = TestUtils.renderIntoDocument(
      <LoginOverlay 
        overlayState = "block"
        closeLogin = { testFunction }
        />
    );

    //Search for tag with class "loginContainer" within rendered React component
    //Throws an exception if not found
    var containerComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'loginContainer'
    );

    var closeComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'closeOverlay'
    );

    this.componentObject = renderedComponent;
    this.containerElement = containerComponent.getDOMNode();
    this.closeElement = closeComponent.getDOMNode();
  });

  it('component should be a React composite component', function(){
    TestUtils.isCompositeComponent(this.componentObject);
  });

  it('login container should have visibility determined by overlayState', function() {
    assert(this.containerElement.getAttribute('style').includes("display:block"));
  });

  it('component should not store a state', function() {
    assert(this.componentObject.state === null);
  });
  
  it('close <button> should have class closeOverlay', function() {
    assert(this.closeElement.getAttribute('class') === "closeOverlay");
  });

  
})