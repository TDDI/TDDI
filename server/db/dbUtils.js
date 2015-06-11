module.exports =  function( fn ){ 
  return fn.toString().slice( fn.toString().indexOf('{') + 2 ).slice(0,-1);
};