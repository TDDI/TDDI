onmessage = function(e) {
  var code=e.data[0];
  var options=e.data[1];
  var result;

  eval(code);

  postMessage(result);
}