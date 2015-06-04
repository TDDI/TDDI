/* 
* @Author: John Winstead
* @Date:   2015-05-25 16:14:16
* @Last Modified by:   awate
* @Last Modified time: 2015-05-28 16:22:57
*/

onmessage = function(e) {
  var code=e.data[0];
  var options=e.data[1];
  var result;
  var error = false;

  //importScripts('../assets/lib/mocha/mocha.js');

  try { 
    eval(code);
  } catch(e) {
    error = e.toString();
  }

  postMessage({result:result, error:error});
}