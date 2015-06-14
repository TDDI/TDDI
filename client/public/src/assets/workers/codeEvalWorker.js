/* 
* @Author: John Winstead
* @Date:   2015-05-25 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 16:22:57
*/


onmessage = function(e) {
  //========================================
  //Helper Functions
  var injectThen = function( scope, cb ) {
    for(var key in scope){
      eval( key+'=scope[key];' );
    }
    return cb();
  };

  function merge(target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || {};

    if (array) {
      target = target || [];
      dst = dst.concat(target);
      src.forEach(function(e, i) {
        if (typeof dst[i] === 'undefined') {
          dst[i] = e;
        } else if (typeof e === 'object') {
          dst[i] = merge(target[i], e);
        } else {
          if (target.indexOf(e) === -1) {
            dst.push(e);
          }
        }
      });
    } else {
      if (target && typeof target === 'object') {
        Object.keys(target).forEach(function (key) {
          dst[key] = target[key];
        })
      }
      Object.keys(src).forEach(function (key) {
        if (typeof src[key] !== 'object' || !src[key]) {
          dst[key] = src[key];
        }
        else {
          if (!target[key]) {
            dst[key] = src[key];
          } else {
            dst[key] = merge(target[key], src[key]);
          }
        }
      });
    }
    return dst;
  }
  var safeToString = function( o ){
    return o===undefined ? 'undefined' : o.toString();
  }
  var test = function( ){
    return (function( ){
      //mask some variables
      var failureCases =undefined;
      var successCases =undefined;

      var error        =undefined;
      var result       =undefined;

      var scope        =undefined;
      var key          =undefined;

      try {
        eval( code );
      } catch(e) {
        return e.toString();
      }
      return;
    })( );
  };
  //========================================

  var code    = e.data[0];
  var preOp   = e.data[1];
  var options = e.data[2];
  var scripts = options.scripts;

  var result  = undefined;
  var error   = undefined;

  var expect;

  for(var i in scripts){
      importScripts(scripts[i]);
  }
  if(chai)
    expect = chai.expect;

  //set failureCases and successCases
  eval( preOp );
    failureCases = failureCases || [ ];
    successCases = successCases || [ ];

  //test success cases
  for(var i in successCases){
    var successCase = successCases[i];
    var response = injectThen(successCase.scope, test);
    //response means there is an error
    if(response){
      error  = [ response, successCase.failMessage ];
      for(var key in successCase.scope){
        error.push( key + " = " + safeToString(successCase.scope[key]) );
      }
      break;
    }
  }

  //test failure cases
  if( !error ){
    for(var i in failureCases){
      var failureCase = failureCases[i];
      var successCase = merge({}, successCases[0]);
      var finalFailureCase = merge(successCase,failureCase);
      var response = injectThen(finalFailureCase.scope, test);
      console.log(response);
      //no response? the tests are not covering a case
      if(!response){
        error  = [ response, finalFailureCase.failMessage ];
        for(var key in finalFailureCase.scope){
          error.push( key + " = " + safeToString(finalFailureCase.scope[key]) );
        }
        break;
      }
    }
  }

  console.log(error);
  postMessage({result:result, error:error});
};