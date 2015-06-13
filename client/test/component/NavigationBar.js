require('../setup');
var React = require('react/addons'),
    assert = require('assert'),
    expect = require('chai').expect,
    NavigationBar = require('../../public/src/app/components/NavigationBar'),
    TestUtils = React.addons.TestUtils;

describe('NavigationBar component', function(){
  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <NavigationBar user = "Krazy Kurt" />
    );

    //Search for <div> tag within rendered React component
    //Throws an exception if not found
    var containerComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'NavBarContainer'
    );

    var settingsNavComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'settings-nav'
    );

    this.componentObject = renderedComponent;
    this.containerElement = containerComponent.getDOMNode();
    this.settingsNav = settingsNavComponent.getDOMNode();
  });

  it('component should store username in props', function() {
    assert(this.componentObject.props.user === "Krazy Kurt");
  });

  it('component should not store a state', function() {
    assert(this.componentObject.state === null);
  });
  
  it('<div> should have class "NavBarContainer"', function() {
    assert(this.containerElement.getAttribute('class').includes('NavBarContainer'));
  });


  var usernameFilter = function(component){
    if (component.textContent.includes("About Us")) {
      return true;
    } else {
      return false;
    }
  };

  it('<ul> should have About Us displayed in an <li> once', function() {
    assert(TestUtils.findAllInRenderedTree(this.settingsNav, usernameFilter).length === 1);
  });

  
})