module.exports =  function( fn ){ 
  return fn.toString().slice( fn.toString().indexOf('{') + 1 ).slice(0,-1);
};