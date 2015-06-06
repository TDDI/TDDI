/* 
* @Author: John Winstead
* @Date:   2015-05-25 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 16:22:58
*/

var CodeEval=function( code, preOp, callback, options){
  if (!!window.Worker) {
    // set options for code evaluation
    options = options || {};
    // set timeout to prevent infinite loops from staying in memory
    options.timeout = options.timeout || 4000;

    // create a new HTML5 webworker
    var worker = new Worker("assets/workers/codeEvalWorker.js");

    // set the worker to terminate after a designated
    // period and report it as an error
    var timeoutID = setTimeout(function(){
      worker.terminate();
      callback({error:"Code ran unbearably too long"});
    },options.timeout);

    // clear the timeout if it comes back before
    // the timeout period
    worker.onmessage = function(e) {
      clearTimeout(timeoutID);
      // send the results back to the lesson component
      callback(e.data);
    };

    // start the worker with the code to be evaluated
    // and specific options for this section
    worker.postMessage([ code, preOp, options ]);
  }
};

module.exports = CodeEval;
