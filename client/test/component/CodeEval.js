var assert = require('assert');
var expect = require('chai').expect;

var codeEval = require("./../../public/src/app/codeEval.js");

var defunc =  function( fn ){ return fn.toString().slice(12).slice(0,-1) }

describe('CodeEval', function( ) {

  xit('should exist', function( ) {
    expect(codeEval).to.exist;
  });

  // it('should run without error with no arguments', function( ) {
  //   expect(codeEval).to.not.throw(/*good function*/);
  // });

  xit('should return an error when code has errors', function( done ) {
    var code     = "var FAIL=undefined;FAIL();";
    var preOp    = "";
    var options  = { task: 'code-eval' };
    var callback = function( e ) {
      expect( e ).to.have.property( 'error' );
      done( );
    }
    codeEval( code, preOp, callback, options );
  });

  xit('should return an error when failing a success case', function( done ) {
    var code     = defunc(function(){
      expect(truthy).to.be.false;
    });
    var preOp    = defunc(function(){
      successCases=[ {failMessage:"fail", scope:{ truthy:true }} ];
    });
    var options  = { task: 'code-eval' };
    var callback = function( e ) {
      expect( e ).to.have.property( 'error' );
      done( );
    }
    codeEval( code, preOp, callback, options )
  });

  xit('should return an error when passing a failure case', function( done ) {
    var code     = defunc(function(){
      expect(truthy).to.be.false;
    });
    var preOp    = defunc(function(){
      failureCases=[ {failMessage:"fail", scope:{ truthy:false }} ];
    });
    var options  = { task: 'code-eval' };
    var callback = function( e ) {
      expect( e ).to.not.have.property( 'error' );
      done( );
    }
    codeEval( code, preOp, callback, options )
  });

  xit('should return no errors when passing success case and failing failure case', function( done ) {
    var code     = defunc(function( ){
      expect(truthy).to.be.true;
    });
    var preOp    = defunc(function(){
      failureCases=[ {failMessage:"fail", scope:{ truthy:false }} ];
      successCases=[ {failMessage:"fail", scope:{ truthy:true }} ];
    });
    var options  = { task: 'code-eval' };
    var callback = function( e ) {
      expect( e ).to.not.have.property( 'error' );
      done( );
    }
    codeEval( code, preOp, callback, options )
  });

});