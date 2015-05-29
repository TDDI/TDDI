/* 
* @Author: John Winstead
* @Date:   2015-05-25 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 16:22:58
*/

var CodeEval=function( code, callback, options){
  if (!!window.Worker) {
    var result = {
      complete:false,
      result:undefined
    };

    var worker = new Worker("./app/codeEvalWorker.js");

    worker.onmessage = function(e) {
      callback(e.data);
      result.complete = true;
      result.result   = e.data;
    }

    worker.postMessage([code,options]);

    return result;
  } else {
    return undefined;
  }
}

module.exports = CodeEval;
