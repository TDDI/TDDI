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
