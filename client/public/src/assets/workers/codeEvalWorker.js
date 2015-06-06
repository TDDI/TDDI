/* 
* @Author: John Winstead
* @Date:   2015-05-25 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 16:22:57
*/


onmessage = function(e) {
  var code    = e.data[0];
  var preOp   = e.data[1];
  var options = e.data[2];
  var scripts = options.scripts;

  var result  = undefined;
  var error   = false;

  for(var i in scripts){
      importScripts(scripts[i]);
  }
  var expect = chai.expect;

  //set failureCases and successCases
  eval( preOp );
  failureCases = failureCases || [ ];
  successCases = successCases || [ ];

  //setup test function
  var test = function( scope ){
    //inject the args into the scope.
    for(var key in scope){ eval( key+'='+scope[key]+';' ); }
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

  //test success cases
  for(var i in successCases){
    var successCase = successCases[i];
    var response = test(successCase.scope);
    //response means there is an error
    if(response){
      error  = response + '\n' + successCase.failMessage;
      for(var key in successCase.scope){
        error += "\n  '" + key + "':" + successCase.scope[key].toString();
      }
      break;
    }
  }

  //test failure cases
  if( !error ){
    for(var i in failureCases){
      var failureCase = failureCases[i];
      var response = test(failureCase.scope);
      //no response? your test sucks, bro.
      if(!response){
        error  = failureCase.failMessage;
        for(var key in failureCase.scope){
          error += "\n  '" + key + "':" + failureCase.scope[key].toString();
        }
        break;
      }
    }
  }

  postMessage({result:result, error:error});
};