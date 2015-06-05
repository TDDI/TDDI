/* 
* @Author: John Winstead
* @Date:   2015-05-25 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 16:22:57
*/

onmessage = function(e) {
  var code    = e.data[0];
  var options = e.data[1];
  var scripts = options.scripts;

  var result  = undefined;
  var error   = false;

  //import all of the scripts in options
  console.log(scripts);
  for(var i in scripts){
    var script = scripts[i];
    console.log(script);
    importScripts(script);
  }

  try { 
    eval(code);
  } catch(e) {
    error = e.toString();
  }

  postMessage({result:result, error:error});
}