var defunc =  require('./dbUtils.js');

module.exports = [
//================================================================================
  {
    lesson_id: '1',
    section_id: '1',
    sectionName: 'A simple look at TDD',
    content:   "Things and stuff",
    code: defunc(function() {
//edit these so they contain the correct type of data. aString is done for you.
var aString = 'The quick brown fox jumps over the lazy dog';
var aFunction;
var aNumber;
var aBoolean;
var anObject;
var anArray;
//You don't have to change anything below here.
expect(aString).to.be.a( 'string' );
expect(aFunction).to.be.a( 'function' );
expect(aNumber).to.be.a( 'number' );
expect(aBoolean).to.be.a( 'boolean' );
expect(anObject).to.be.a( 'object' );
expect(anArray).to.be.a( 'array' );
}),
    preOp: "successCases=[{scope:[]}];failureCases=[{scope:[]}];"
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '2',
    sectionName: 'Type Checking: Part 1',
    content:
      "You can use to.be.a to check if a variable is the expected type. "
    + "Good for checking the results of functions. Here we will check "
    + "a number of different variables. Uncomment them one at a time and "
    + "click submit. Pay attention to the errors below and try to get all "
    + "of the tests to pass!",
    code: defunc(function() {
// expect(aString).to.be.a( 'string' );
// expect(aFunction).to.be.a( /*type of*/ );
// expect(aNumber).to.be.a( /*type of*/ );
// expect(aBoolean).to.be.a( /*type of*/ );
// expect(anObject).to.be.a( /*type of*/ );
// expect(anArray).to.be.a( /*type of*/ );
}),
    preOp: defunc(function() {
      successCases = [{
        failMessage: "",
        scope: {
          aString: "The quick brown fox jumps over the lazy dog",
          aFunction: function() {
              undefined();
          },
          aNumber: Infinity,
          aBoolean: false,
            anObject: {
                name: 'steve'
            },
            anArray: [0, 1, 2, 3, 4, 5]
          }
      }];
      failureCases = [{
        failMessage: "Must check to see if aString is actually a string",
        scope: {
          aString: undefined
        }
      }, {
        failMessage: "Must check to see if aFunction is actually a function",
        scope: {
          aFunction: undefined
        }
      }, {
        failMessage: "Must check to see if aNumber is actually a number",
        scope: {
          aNumber: undefined
        }
      }, {
        failMessage: "Must check to see if aBoolean is actually a boolean",
        scope: {
          aBoolean: undefined
        }
      }, {
        failMessage: "Must check to see if anObject is actually an object",
        scope: {
          anObject: undefined
        }
      }, {
        failMessage: "Must check to see if anArray is actually an array",
        scope: {
          anArray: undefined
        }
      }];
    })
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '3',
    sectionName: 'Type Checking: Part 2',
    content:
      "Now do the same thing again. This time you don't get any hints "
    + "besides the responses you get from the error box below.",
    code: defunc(function() {
/* no code for you */
}),
    preOp: defunc(function() {
      successCases = [{
        failMessage: "",
        scope: {
          headline: "Bearer of bad news",
          gatherFood: function() {
            undefined();
          },
          temperature: 300,
          isRadioactive: true,
          isotopes: {
            idk: true
          },
          employees: ['arin', 'barry', 'danny']
        }
      }];
      failureCases = [{
        failMessage: "Must check to see if headline is a string",
        scope: {
          headline: undefined
        }
      }, {
        failMessage: "Must check to see if gatherFood is a function",
        scope: {
          gatherFood: undefined
        }
      }, {
        failMessage: "Must check to see if temperature is a number",
        scope: {
          temperature: undefined
        }
      }, {
        failMessage: "Must check to see if isRadioactive is a boolean",
        scope: {
          isRadioactive: undefined
        }
      }, {
        failMessage: "Must check to see if isotopes is an object",
        scope: {
          isotopes: undefined
        }
      }, {
        failMessage: "Must check to see if employees is an array",
        scope: {
          employees: undefined
        }
      }];
    })
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '4',
    sectionName: 'Result Checking: Part 1',
    content: "functions, test them",
    code: defunc(function() {
//expect(double(2)).to.equal(4);
//expect(removeDuplicateChars('aabbcc')).to.equal( /* result */ );
//expect(isEven(1)).to.equal( /* result */ );
//expect(merge({a:1},{b:2})).to.equal( /* result */ );
}),
    preOp: defunc(function() {
      successCases = [{
        failMessage: "",
        scope: {
          //number
          double: function( v ) { return v*2; },
          //string
          removeDuplicateChars: function( string ){ 
            var obj    = { };
            var result = '';
            for(var i=0; i<arr.length; i++){
              if(obj[string[i]]===undefined)
                result.push(string[i]);
              obj[string[i]]=true;
            };
            return result;
          },
          //boolean
          isEven: function( val ) { return !(val%2) },
          //object || array
          merge: function(target, src) {
            var array = Array.isArray(src);
            var dst = array && [] || {};

            if (array) {
              target = target || [];
              dst = dst.concat(target);
              src.forEach(function(e, i) {
                if (typeof dst[i] === 'undefined') {
                  dst[i] = e;
                } else if (typeof e === 'object') {
                  dst[i] = deepmerge(target[i], e);
                } else {
                  if (target.indexOf(e) === -1) {
                    dst.push(e);
                  }
                }
              });
            } else {
              if (target && typeof target === 'object') {
                Object.keys(target).forEach(function (key) {
                  dst[key] = target[key];
                })
              }
              Object.keys(src).forEach(function (key) {
                if (typeof src[key] !== 'object' || !src[key]) {
                  dst[key] = src[key];
                }
                else {
                  if (!target[key]) {
                    dst[key] = src[key];
                  } else {
                    dst[key] = deepmerge(target[key], src[key]);
                  }
                }
              });
            }
            return dst;
          }
        }
      }];
      failureCases = [{
        failMessage: "Must check to see if double returns the correct value",
        scope: {
          double: undefined
        }
      }, {
        failMessage: "Must check to see if removeDuplicateChars returns the correct value",
        scope: {
          removeDuplicateChars: undefined
        }
      }, {
        failMessage: "Must check to see if isEven returns the correct value",
        scope: {
          isEven: undefined
        }
      }, {
        failMessage: "Must check to see if merge returns the correct value",
        scope: {
          merge: undefined
        }
      }];
    })
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '5',
    sectionName: 'Result Checking: Part 2',
    content: "MORE functions, test them",
    code: defunc(function() {
/* PUT CODE HERE */
}),
    preOp: defunc(function() {
      successCases = [{
        failMessage: "",
        scope: {
          //number
          getLength: function( arr ) { return arr.length; },
          //array
          sort: function( arr ){ return arr.sort() },
          //boolean
          contains: function( arr, val ){ return arr.contains(val) } 
        }
      }];
      failureCases = [{
        failMessage: "Must check to see if getLength returns the correct value",
        scope: {
          getLength: undefined
        }
      }, {
        failMessage: "Must check to see if sort returns the correct value",
        scope: {
          sort: undefined
        }
      }, {
        failMessage: "Must check to see if contains returns the correct value",
        scope: {
          contains: undefined
        }
      }];
    })
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '6',
    sectionName: 'Property Check: Part 1',
    content: "Check if things have properties",
    code: defunc(function() {
//expect(object).to.have.property( /*property*/ );
}),
    preOp: defunc(function() {
      successCases = [{
        failMessage: "",
        scope: {
          object: {a:1,b:2,c:3}
        }
      }];
      failureCases = [{
        failMessage: "Must check to see if object has an 'a' property",
        scope: {
          object: {a:1,b:2}
        }
      }, {
        failMessage: "Must check to see if object has an 'b' property",
        scope: {
          object: {a:1,c:3}
        }
      }, {
        failMessage: "Must check to see if object has an 'c' property",
        scope: {
          object: {b:2,c:3}
        }
      }];
    })
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '7',
    sectionName: 'Property Check: Part 2',
    content: "Check if things have properties",
    code: defunc(function() {
/* PUT CODE HERE */
}),
    preOp: defunc(function() {
      successCases = [{
        failMessage: "",
        scope: {
          object: {a:1,b:2,c:3}
        }
      }];
      failureCases = [{
        failMessage: "Must check to see if object has an 'a' property",
        scope: {
          object: {a:1,b:2}
        }
      }, {
        failMessage: "Must check to see if object has an 'b' property",
        scope: {
          object: {a:1,c:3}
        }
      }, {
        failMessage: "Must check to see if object has an 'c' property",
        scope: {
          object: {b:2,c:3}
        }
      }];
    })
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '8',
    sectionName: 'Side effects: Part 1',
    content: "",
    code: defunc(function() { /* PUT CODE HERE */}),
    preOp: "successCases=[{scope:[]}];failureCases=[{scope:[]}];"
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '9',
    sectionName: 'Side effects: Part 2',
    content: "",
    code: defunc(function() { /* PUT CODE HERE */}),
    preOp: "successCases=[{scope:[]}];failureCases=[{scope:[]}];"
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '10',
    sectionName: 'When does it error: Part 1',
    content: "",
    code: defunc(function() { /* PUT CODE HERE */}),
    preOp: "successCases=[{scope:[]}];failureCases=[{scope:[]}];"
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '11',
    sectionName: 'When does it error: Part 2',
    content: "",
    code: defunc(function() { /* PUT CODE HERE */}),
    preOp: "successCases=[{scope:[]}];failureCases=[{scope:[]}];"
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '12',
    sectionName: 'How does it handle edge cases: Part 1',
    content: "",
    code: defunc(function() { /* PUT CODE HERE */}),
    preOp: "successCases=[{scope:[]}];failureCases=[{scope:[]}];"
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '13',
    sectionName: 'How does it handle edge cases: Part 2',
    content: "",
    code: defunc(function() { /* PUT CODE HERE */}),
    preOp: "successCases=[{scope:[]}];failureCases=[{scope:[]}];"
  },
//================================================================================
  {
    lesson_id: '1',
    section_id: '14',
    sectionName: 'Pulling it all together',
    content: "",
    code: defunc(function() { /* PUT CODE HERE */}),
    preOp: "successCases=[{scope:[]}];failureCases=[{scope:[]}];"
  },
//================================================================================
  {
    lesson_id: '2',
    section_id: '1',
    sectionName: "Side effects: Part something",
    content: "You got spunk, kid. Alright. Here's a harder test.\n\
  You have a variable in your scope called \"Tree\". It is a pseudo-classical Tree object with an addChild method and you need to make sure it isn't terrible.",
    code: defunc(function() {
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
    preOp: defunc(function() {
      var BadTree1 = function(value) {
          this.children = [];
          this.addChild = function(value) {
            this.children.push(value);
          };
          this.hasChild = function(node) {
            //TODO: write this function...
          };
          this.removeChild = function(value) {
            for (var i = 0; i < this.children.length; i++) {
              if (value === this.children[i].value) {
                delete this.children[i];
                break;
              }
            }
            return this;
          };
      };
      var GoodTree = function(value) {
        this.children = [];
        this.value = value;
        this.parent = null;

        this.addChild = function(value) {
          var newTree = new GoodTree(value);
          newTree.parent = this;
          this.children.push(newTree);
          return newTree;
        };

        this.removeChild = function(node) {
          for (var i = 0; i < this.children.length; i++) {
            if (node === this.children[i]) {
              this.children.splice(i, 1);
              break;
            }
          }
          return this;
        };

        this.hasChild = function(node) {
          for (var i = 0; i < this.children.length; i++) {
            if (node.value === this.children[i].value) {
              return true;
            }
          }
          return false;
        };
      };
      successCases = [{
        failMessage: "Uninstall everything. You suck",
        scope: {
          Tree: GoodTree
        }
      }];
      failureCases = [{
        failMessage: "You suck",
        scope: {
          Tree: BadTree1
        }
      }];
    })
  }, 
//================================================================================
  {
    lesson_id: '2',
    section_id: '2',
    sectionName: "Checking Koalafications",
    content: "Try not to break this code. please.<br>\
  You have a variable in your scope called \"Stack\". It is a pseudo-clasical Stack object. You know whats up. Get to it.",
    code: defunc(function() { //TODO: write tests for Stack

    }),
    preOp: defunc(function() {
      var GoodStack = function() {
        this._storage = {};
        this._count = -1;

        this.push = function(value) {
            this._count++;
            this._storage[this._count] = value;
        };

        this.pop = function() {
            delete this._storage[this.count];
            this._count--
        };

        this.size = function() {
            return this._count;
        };
      };

      var BadStack1 = function() {
        this._storage = {};
        this._count = -1;

        this.push = function(value) {
          this._count++;
          this._storage[this._count] = value;
        };

        this.pop = function() {
          delete this._storage[this.count];
          this._count--;
        };

        this.size = function() {
          return 0;
        };
      };

      var BadStack2 = function() {
        this._storage = {};
        this._count = -1;

        this.push = function(value) {
          this._count++;
          this._storage[this._count] = value;
        };

        this.pop = function() {
          delete this._storage[this.count];
        };

        this.size = function() {
          return this._count;
        };
      };

      successCases = [{
        failMessage: "Your tests failed a clearly good stack. Keep trying.",
        scope: {
          Stack: GoodStack
        }
      }];
      failureCases = [
        {
          failMessage: "You need to test to make sure .size operates correctly.",
          scope: {
          Stack: BadStack1
          }
        }, 
        {
          failMessage: "You need to test to make sure .pop operates correctly",
          scope: {
            Stack: BadStack2
          }
        }
      ];
    })
  }, 
//================================================================================
  {
    lesson_id: '2',
    section_id: '3',
    sectionName: "Controlling the Pandamonium",
    content: "You have a variable in your scope called \"MakeLinkedList\". It is something, idk. You figure it out. Stop making me do your job.",
    code: defunc(function() { //TODO: write tests for MakeLinkedList

    }),
    preOp: defunc(function() {
      var Node = function(value) {
        return {
          value: value,
          next: null
        };
      };

      var MakeLinkedList = function() {
        var list = {};
        list.head = null;
        list.tail = null;

        list.addToTail = function(value) {
          var newTail = Node(value);
          if (!list.head)
            list.head = newTail;
          if (list.tail)
            list.tail.next = newTail;
          list.tail = newTail;
        };

        list.removeHead = function() {
          if (list.head === null)
            return null;
          var currentHead = list.head;
          list.head = list.head.next;
          return currentHead.value;
        };

        list.contains = function(target) {
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

      var MakeBadLinkedList = function() {
        var bad = MakeLinkedList();
        bad.contains = function(target) {
          var node = list.head;
          while (node) {
            if (node.value === target) {
              return false;
            }
            node = node.next;
          }
          return true;
        };
      };

      successCases = [{
        failMessage: "Your tests failed a clearly good linkedList. Keep trying.",
        scope: {
          MakeLinkedList: MakeLinkedList
        }
      }];
      failureCases = [{
        failMessage: "If your not going to try then why should I even bother?.",
        scope: {
          MakeLinkedList: MakeBadLinkedList
        }
      }];
    })
  }, 
//================================================================================
  {
    lesson_id: '2',
    section_id: '4',
    sectionName: "Berry Dangerous Side Effects",
    content: "blah blah blah blah MakeQueue Blah blah",
    code: defunc(function() { //TODO: write tests for MakeQueue

    }),
    preOp: defunc(function() {
      var MakeQueue = function() {
        var someInstance = {};

        someInstance._storage = {};
        someInstance._start = -1;
        someInstance._end = -1;

        someInstance.enqueue = function(value) {
          this._end++;
          this._storage[this._end] = value;
        };

        someInstance.dequeue = function() {
          this.size() && this._start++;
          var result = this._storage[this._start];
          delete this._storage[this._start];
          return result;
        };

        someInstance.size = function() {
          return this._end - this._start;
        };
        return someInstance;
      };

      var MakeBadQueue = function() {
        var bad = MakeQueue();
        bad.dequeue = function() {
          this.size() && this._start--;
          var result = this._storage[this._start];
          delete this._storage[this._start];
          return result;
        };
      };

      successCases = [{
        failMessage: "Your tests failed a clearly good queue. Keep trying.",
        scope: {
          MakeQueue: MakeQueue
        }
      }];
      failureCases = [{
        failMessage: "Do you even test, bro?",
        scope: {
          MakeQueue: MakeBadQueue
        }
      }];
    })
  }, 
//================================================================================
  {
    lesson_id: '2',
    section_id: '5',
    sectionName: "Berry Dangerous Side Effects",
    content: "Given an array of numbers, the sumArray function will calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum. Test it, brah.",
    code: defunc(function() { //TODO: write tests for sumArray

    }),
    preOp: defunc(function() {
      var sumArray = function(array) {
        var maxSum = number.NEGATIVE_INFINITY;
        var currentSum = 0;

        for (var i = 0; i < array.length; i++) {
          currentSum += array[i];
          maxSum = Math.max(maxSum, currentSum);
          if (currentSum < 0) {
            currentSum = 0;
          }
        }
        return maxSum;
      };

      var badSumArray = function(array) {
        var maxSum = 0;
        var currentSum = 0;

        for (var i = 0; i < array.length; i++) {
          currentSum += array[i];
          maxSum = Math.max(maxSum, currentSum);
          if (currentSum < 0) {
            currentSum = 0;
          }
        }
          return maxSum;
      };

      successCases = [{
        failMessage: "kjlasdfasd.",
        scope: {
            sumArray: sumArray
        }
      }];
      failureCases = [{
        failMessage: "Great. You messed up.",
        scope: {
          sumArray: badSumArray
        }
      }];
    })
  }, 
//================================================================================
  {
    lesson_id: '3',
    section_id: '1',
    sectionName: 'lesson3section1',
    content: 'came across someth',
    code: 'qw43er',
    preOp: 'ttww',
    postOp: 'erjhjt'
  }, 
//================================================================================
  {
    lesson_id: '3',
    section_id: '2',
    sectionName: 'lesson3section2',
    content: 'across someth',
    code: 'qaswer',
    preOp: 'wdfdert',
    postOp: 'erdfdt'
  },
//================================================================================
  {
    lesson_id: '3',
    section_id: '3',
    sectionName: 'lesson3section3',
    content: 'a team traded a to',
    code: 'qweewr',
    preOp: 'awert',
    postOp: 'ecvrt'
  }
];
