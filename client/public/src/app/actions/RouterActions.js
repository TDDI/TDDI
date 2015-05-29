var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var RouterActions = {
  change: function( route ) {
    AppDispatcher.dispatch({
      actionType: Constants.ROUTER_CHANGE,
      route: route
    });
  }
};

module.exports = RouterActions;