/* 
* @Author: awate
* @Date:   2015-05-23 16:17:49
* @Last Modified by:   awate
* @Last Modified time: 2015-05-25 11:23:12
*/

//THIS FILE IS DEPRECATED

Testy={ }
Testy["function"] = {
  subTypes=[
    'function'
  ]
}

if(!Testy){
  Testy=true;

  //Helper function. Could be refactored out into a library.
  function inherit(p){function F(){};F.prototype=p;return new F;};

  var File          = function( name ){
    this.name         = name || '(Loading)';
    this.objects      = { }; //populate with json of all objects from server.
    this.descriptions = [ ];
  };

  var Choice = function( ){}
  Choice.prototype.name     = 'Loading';
  Choice.prototype.subject  = null;
  Choice.prototype.type     = null;
  Choice.prototype.children = [  ];
  Choice.prototype.choices  = [  ];

  var Description = function( name, subject ){
    this.name       = name || '(Loading)';
    this.subject    = subject || null;
    this.type       = Description;
    this.choices    = [
      {
        title:"Test this"
        func: function( )
        object: Test
      }
    ];

    if(subject){
      for(key in subject){
        this.choices.push({

        });
      }
    }
    this.choices    = [
      {
        title:"Describe",
        desc: "Describe property/method",
        object: Description
      },
      
    ];
  };

  var It        = It || function( should ){
    this.should     = '(Loading)';
    this.type     = It;
    this.children = [ ]; // Can be assertions
  };

  var ShouldEqual
  var Assertion = Assertion || function( assertion ){

  }
}