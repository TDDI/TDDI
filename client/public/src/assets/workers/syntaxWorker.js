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

  //import all of the scripts in options
  for(var i in scripts){
    importScripts(scripts[i]);
  }

  try { 
    JSHINT(code/* put JSHINT config options here*/);

    var lintData = JSHINT.data();

    if(lintData.errors && lintData.errors.length) {
      error = lintData.errors;
    } else {
      result = true;
    }

  } catch(e) {
    error = e.toString();
  }

  postMessage({ result: result, error:error });
}

// self.onmessage = function (ev) {
//   var ret, req = ev.data

//   if (req.task === "lint") {
//     JSHINT(req.code, req.config)

//     ret = JSHINT.data()
//     ret.options = null
//     self.postMessage({ task: "lint", result: JSON.stringify(ret) })
//   }
// }