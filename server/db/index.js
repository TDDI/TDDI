// var iffyify = function( fn ){ return "(" +fn.toString()+ ")()" }
var defunc =  function( fn ){ return fn.toString().slice(12).slice(0,-1) }
var Sequelize = require("sequelize");

if(process.env.DATABASE_URL){
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    var sequelize = new Sequelize("postgres", "postgres", "postgres",{
          host: 'localhost',
          dialect: 'postgres',
    // logging: false,

          pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

  });
}

//database schema
var User = sequelize.define('User', {
  user_id: Sequelize.INTEGER,
  username: Sequelize.STRING
});

var Lesson = sequelize.define('Lesson', {
  lesson_id: Sequelize.INTEGER,
  lessonName: Sequelize.STRING,
  active: Sequelize.INTEGER
});

var Section = sequelize.define('Section', {
  section_id: Sequelize.INTEGER,
  sectionName: Sequelize.STRING,
  content: Sequelize.TEXT,
  code: Sequelize.TEXT,
  preOp: Sequelize.TEXT,
  postOp: Sequelize.TEXT,
  lesson_id: Sequelize.INTEGER,
  active: Sequelize.INTEGER
});


// initializing databases and bulkCreates dummy data
if(process.env.DATABASE_URL){
  sequelize.sync();
} else {
  sequelize.sync({force:true}).then(function () {
    User.bulkCreate([
      {user_id:'1234',username:'stephen'},
      {user_id:'3654',username:'klay'},
      {user_id:'5436',username:'bogut'}
      ]);

  Lesson.bulkCreate([
    {lesson_id: '1', lessonName:'Bear Testables'},
    {lesson_id: '2', lessonName:'lesson2'},
    {lesson_id: '3', lessonName:'lesson3'},
    ]);

  Section.bulkCreate([
    {lesson_id:'1', section_id: '1',  sectionName: 'Bear with me',
      content:"You suck at coding because you don't test. You will now test and be good at coding.\n\
      You have a variable named \"honey\" and you need to write a test to see if it is equal to 5.",
      code:'expect(honey).to.equal(/*put 5 here*/);',
      preOp: defunc(function(){
        successCases=[{ failMessage:"...its 5", scope:{honey:5} }];
        failureCases=[{ failMessage:"You suck", scope:{honey:0} }];
      })
    },
    {lesson_id:'1', section_id: '2', sectionName: "Don't paws",
      content:"You got spunk, kid. Alright. Here's a harder test.\n\
      You have a variable in your scope called \"Tree\". It is a pseudo-classical Tree object with an addChild method and you need to make sure it isn't terrible.",
      code:defunc(function(){
var tree = new Tree();
expect(tree).to.have.property('addChild');

  tree.addChild(0);
  tree.addChild(1);
  tree.addChild(2);
expect(tree.children.length).to.equal(3);

  tree.children[0].addChild(3);
  tree.children[0].addChild(4);
  tree.children[0].addChild(5);
expect(tree.children[0].children[0].value).to.equal(3);
expect(tree.children[0].parent).to.equal(tree);

expect(tree).to.have.property('removeChild');
  tree.removeChild(tree.children[1]);
expect(tree.children.length).to.equal(2);
expect(tree.children[1].value).to.equal(2);

expect(tree).to.have.property('hasChild');
expect(tree.hasChild(tree.children[1])).to.be.true;
expect(tree.hasChild(new Tree)).to.not.be.true;
}),
      preOp: defunc(function(){
        var BadTree1 = function( value ){
          this.children = [ ];
          this.addChild = function( value ){
            this.children.push(value);
          };
          this.hasChild = function( node ){
            //TODO: write this function...
          };
          this.removeChild = function( value ){
            for(var i = 0; i < this.children.length; i++){
              if(value === this.children[i].value){
                delete this.children[i];
                break;
              }
            }
            return this;
          };
        }
        var GoodTree = function( value ){
          this.children = [ ];
          this.value    = value;
          this.parent   = null;

          this.addChild = function( value ) {
            var newTree = new GoodTree(value);
            newTree.parent=this;
            this.children.push(newTree);
            return newTree;
          };

          this.removeChild = function( node ){
            for(var i = 0; i < this.children.length; i++){
              if(node === this.children[i]){
                this.children.splice(i,1);
                break;
              }
            }
            return this;
          };

          this.hasChild = function( node ){
            for(var i = 0; i < this.children.length; i++){
              if( node.value === this.children[i].value){
                return true;
              }
            }
            return false;
          };
        };

        successCases=[{ failMessage:"Uninstall everything. You suck", scope:{Tree: GoodTree} }];
        failureCases=[{ failMessage:"You suck", scope:{Tree: BadTree1} }];
      })
    },
    {lesson_id:'1', section_id: '3', sectionName: "Making testing bearable",
      content:"Try not to break this code. please.<br>\
      You have a variable in your scope called \"Stack\". It is a pseudo-clasical Stack object. You know whats up. Get to it.",
      code:defunc(function(){//TODO: write tests for Stack

}),
      preOp: defunc(function(){
        var GoodStack = function() {
          this._storage = {};
          this._count = -1;

          this.push = function(value){
            this._count++;
            this._storage[this._count] = value;
          };

          this.pop = function(){
            delete this._storage[this.count];
            this._count--
          };

          this.size = function(){
            return this._count;
          };
        };

        var BadStack1 = function() {
          this._storage = {};
          this._count = -1;

          this.push = function(value){
            this._count++;
            this._storage[this._count] = value;
          };

          this.pop = function(){
            delete this._storage[this.count];
            this._count--;
          };

          this.size = function(){
            return 0;
          };
        };

        var BadStack2 = function() {
          this._storage = {};
          this._count = -1;

          this.push = function(value){
            this._count++;
            this._storage[this._count] = value;
          };

          this.pop = function(){
            delete this._storage[this.count];
          };

          this.size = function(){
            return this._count;
          };
        };

        successCases=[{ failMessage:"Your tests failed a clearly good stack. Keep trying.", scope:{Stack: GoodStack} }];
        failureCases=[
          {
            failMessage:"You need to test to make sure .size operates correctly.",
            scope:{Stack: BadStack1}
          },
          {
            failMessage:"You need to test to make sure .pop operates correctly",
            scope:{Stack: BadStack2}
          }
        ];
      })
    },
    {lesson_id:'1', section_id: '4', sectionName: "Bear your soul to testing",
      content:"You have a variable in your scope called \"MakeLinkedList\". It is something, idk. You figure it out. Stop making me do your job.",
      code:defunc(function(){//TODO: write tests for MakeLinkedList

}),
      preOp: defunc(function(){
        var Node = function(value){
          return {value:value,next:null};
        };

        var MakeLinkedList = function(){
          var list = {};
          list.head = null;
          list.tail = null;

          list.addToTail = function(value){
            var newTail = Node(value);
            if (!list.head)
              list.head = newTail;
            if (list.tail)
              list.tail.next = newTail;
            list.tail = newTail;
          };

          list.removeHead = function(){
            if (list.head === null)
              return null;
            var currentHead = list.head;
            list.head = list.head.next;
            return currentHead.value;
          };

          list.contains = function(target){
            var node = list.head;
            while (node) {
              if (node.value === target) {
                return true;
              }
              node = node.next;
            }
            return false;
          };
          return list;
        };

        var MakeBadLinkedList = function(){
          var bad = MakeLinkedList();
          bad.contains = function(target){
            var node = list.head;
            while (node) {
              if (node.value === target) {
                return false;
              }
              node = node.next;
            }
            return true;
          };
        }

        successCases=[{ failMessage:"Your tests failed a clearly good linkedList. Keep trying.", scope:{MakeLinkedList: MakeLinkedList} }];
        failureCases=[
          {
            failMessage:"If your not going to try then why should I even bother?.",
            scope:{MakeLinkedList: MakeBadLinkedList}
          }
        ];
      })
    },
    {lesson_id:'1', section_id: '5', sectionName: "(Insert bear pun)",
      content:"blah blah blah blah MakeQueue Blah blah",
      code:defunc(function(){//TODO: write tests for MakeQueue

}),
      preOp: defunc(function(){
        var MakeQueue = function(){
          var someInstance = {};
         
          someInstance._storage = {};
          someInstance._start = -1;
          someInstance._end = -1;

          someInstance.enqueue = function(value){
            this._end++;
            this._storage[this._end] = value;
          };

          someInstance.dequeue = function(){
            this.size() && this._start++;
            var result = this._storage[this._start];
            delete this._storage[this._start];
            return result;
          };

          someInstance.size = function(){
            return this._end - this._start;
          };
          return someInstance;
        };

        var MakeBadQueue = function(){
          var bad = MakeQueue();
          bad.dequeue = function(){
            this.size() && this._start--;
            var result = this._storage[this._start];
            delete this._storage[this._start];
            return result;
          };
        }

        successCases=[{ failMessage:"Your tests failed a clearly good queue. Keep trying.", scope:{MakeQueue: MakeQueue} }];
        failureCases=[
          {
            failMessage:"Do you even test, bro?",
            scope:{MakeQueue: MakeBadQueue}
          }
        ];
      })
    },
    {lesson_id:'1', section_id: '6', sectionName: "I'm hungry. I skipped lunch.",
      content:"Given an array of numbers, the sumArray function will calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum. Test it, brah.",
      code:defunc(function(){//TODO: write tests for sumArray

}),
      preOp: defunc(function(){
        var sumArray = function(array) {
          var maxSum = number.NEGATIVE_INFINITY;
          var currentSum = 0;

          for (var i = 0; i < array.length; i++){
            currentSum += array[i];
            maxSum = Math.max(maxSum, currentSum);
            if(currentSum < 0){
              currentSum = 0;
            }
          }
          return maxSum;
        };

        var badSumArray = function(array) {
          var maxSum = 0;
          var currentSum = 0;

          for (var i = 0; i < array.length; i++){
            currentSum += array[i];
            maxSum = Math.max(maxSum, currentSum);
            if(currentSum < 0){
              currentSum = 0;
            }
          }
          return maxSum;
        };

        successCases=[{ failMessage:"kjlasdfasd.", scope:{sumArray: sumArray} }];
        failureCases=[
          {
            failMessage:"Great. You messed up.",
            scope:{sumArray: badSumArray}
          }
        ];
      })
    },
    {section_id: '1', sectionName: 'lesson2section1', content:'e across someth', code:'qdfdwer', preOp:'dfdfd', postOp:'sdfert', lesson_id:'2'},
    {section_id: '2', sectionName: 'lesson2section2', content:'u came oss someth', code:'qw43er', preOp:'weerrt', postOp:'ersdt',lesson_id:'2'},
    {section_id: '1', sectionName: 'lesson3section1', content:'came across someth',code:'qw43er', preOp:'ttww', postOp:'erjhjt', lesson_id:'3'},
    {section_id: '2', sectionName: 'lesson3section2', content:'across someth', code:'qaswer', preOp:'wdfdert', postOp:'erdfdt',lesson_id:'3'},
    {section_id: '3', sectionName: 'lesson3section3', content:'a team traded a to',code:'qweewr', preOp:'awert', postOp:'ecvrt',lesson_id:'3'}
    ]);
});
  
}

exports.User = User;
exports.Section = Section;
exports.Lesson = Lesson;
