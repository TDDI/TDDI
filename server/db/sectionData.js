var defunc =  require('./dbUtils.js');

module.exports = [
  {
    lesson_id: '1',
    section_id: '1',
    sectionName: 'An Embearassing Situation',
    content: "Congratulations Teddi McMahon, you are the newest employee at "+
             "BLASTCO, the largest thermonuclear plant in Urzastan. It's your " +
             "first day on the job. Your supervisor is out getting coffee and " +
             "some chocolate bear claws, so it's time to impress him! According " +
             "to the manual you found, it looks like the start function needs " +
             "to be called. Hand-scribbled notes say to put a 500 into the start " + 
             "function. You should hurry before your boss comes back.",
    code: 'start();',
    preOp: defunc(function() {
      successCases = [{
        failMessage: "",
        scope: {
          start: function(tonsOfUranium) {
            console.log("Nuclear meltdown imminent!");
          }
        }
      }];
      failureCases = [];
    })
  }, 
  {
    lesson_id: '1',
    section_id: '2',
    sectionName: 'Pawing Through The Rubble',
    content: "Managing to survive the explosion, you sit in the rubble of your " +
             "ruined facility. Sifting through the rubble, you find a manuscript " +
             "about unit testing. According to this book, not testing your code leads to " +
             "unexpected side effects...\n Having lived through the most major of " +
             "side effects, it is your responsibility to make sure it doesn't happen" +
             "again. You have to rebuild the world... with TDD. First, it would be " +
             "good to familiarize yourself with the tenets of unit testing" +
             "1. Test only one thing\n" +
             "2. Make tests fast and simple\n" +
             "3. Tests should be repeatable with no side effects\n" +
             "4. Nothing should be hardcoded\n" +
             "5. Provide verbose and concise feedback \n",
    code: defunc(function() {
// expect(rule1).to.be.equal( /*First Rule*/ );
// expect(rule2).to.be.equal( /*Second Rule*/ );
// expect(rule3).to.be.equal( /*Third Rule*/ );
// expect(rule4).to.be.equal( /*Fourth Rule*/ );
// expect(rule5).to.be.equal( /*Fifth Rule*/ );
}),
    preOp: defunc(function() {
      successCases = [{
        failMessage: "",
        scope: {
          rule1: "Test one thing",
          rule2: "Fast and simple",
          rule3: "Repeatable",
          rule4: "No hardcoding",
          rule5: "Provide concise feedback"
        }
      }];
      failureCases = [{
        failMessage: "must test to see if rule1 is set correctly",
        scope: {
          rule1: undefined
        }
      }, {
        failMessage: "must test to see if rule2 is set correctly",
        scope: {
          rule2: undefined
        }
      }, {
        failMessage: "must test to see if rule3 is set correctly",
        scope: {
          rule3: undefined
        }
      }, {
        failMessage: "must test to see if rule4 is set correctly",
        scope: {
          rule4: undefined
        }
      }, {
        failMessage: "must test to see if rule5 is set correctly",
        scope: {
          rule5: undefined
        }
      }];
    })
  },
  {
    lesson_id: '1',
    section_id: '3',
    sectionName: 'Get Your Bearings',
    content: "Get a bearing on what your surroundings actually are.",
    code: defunc(function() {
// expect(aString).to.be.a( /*type of*/ );
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
          aString: "dangerous levels of radioactivity detected",
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
  {
    lesson_id: '1',
    section_id: '4',
    sectionName: 'Identify the Bare Necessities',
    content: "Teddi needs to find ",
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
  {
    lesson_id: '1',
    section_id: '5',
    sectionName: 'Testing Grizzly Outcomes',
    content: "You have more things to test. Don't be afraid to submit your incomplete tests. You will be given awesome feedback to help guide you.",
    code: defunc(function() { /* no code for you */ }),
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
  {
    lesson_id: '1',
    section_id: '6',
    sectionName: 'Finding Pawsible Returns',
    content: "You suck at coding because you don't test. You will now test and be good at coding.\n\
  You have a variable named \"honey\" and you need to write a test to see if it is equal to 5.",
    code: 'expect(honey).to.equal(/*put 5 here*/);',
    preOp: defunc(function() {
      successCases = [{
        failMessage: "...its 5",
        scope: {
          honey: 5
        }
      }];
      failureCases = [{
        failMessage: "You suck",
        scope: {
          honey: 0
        }
      }];
    })
  }, 
  {
    lesson_id: '1',
    section_id: '7',
    sectionName: "They Come Bearing Gifts",
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
  {
    lesson_id: '1',
    section_id: '8',
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
  {
    lesson_id: '1',
    section_id: '9',
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
  {
    lesson_id: '1',
    section_id: '10',
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
  {
    lesson_id: '2',
    section_id: '11',
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
  {
    section_id: '1',
    sectionName: 'lesson3section1',
    content: 'came across someth',
    code: 'qw43er',
    preOp: 'ttww',
    postOp: 'erjhjt',
    lesson_id: '3'
  }, 
  {
    section_id: '2',
    sectionName: 'lesson3section2',
    content: 'across someth',
    code: 'qaswer',
    preOp: 'wdfdert',
    postOp: 'erdfdt',
    lesson_id: '3'
  }, {
    section_id: '3',
    sectionName: 'lesson3section3',
    content: 'a team traded a to',
    code: 'qweewr',
    preOp: 'awert',
    postOp: 'ecvrt',
    lesson_id: '3'
  }
];
