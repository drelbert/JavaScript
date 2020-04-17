goalOfThisChapter = "unpack the core of JS inner workings and ask Why?"

contents = [
    "iteration",
    "closure",
    "this",
    "prototype"
]

iteration 

details = {
    program: "built to process data and make decisions on that data, we need a pattern to step through the data",
    standardized: "iterator pattern standardizes the approach for consuming data one chunk at a time",
    iterator: "has reference to an underlying data source to expose methods like next() to return next record"
}

oneMechanism
var consumingIterators = [
    "ES6Iterator: protocol means easier consumption of a data source one value at a time, but this is quite manual",
    "syntaxAndAPIs: mechanisms for standard consumption of these iterators",
    "oneSuch: for..of",
  ]
  
  for(let detail of consumingIterators) {
    console.log(`Here is one detail about ${ detail }`);
  }

  secondMechanism
  var spreadRestOperator = {
      spread: "is an iterator consumer",
      required: "must have something to spread it into",
      twoWays :
      ["array", 
      'argument list for a function call'
    ]
  }

  var usingArray = [...consumingIterators];

  functionCall(...consumingIterators);


  iterables 

  givenThat = [
      "the iterator-consumption protocol is for consuming iterables",
      "iterable is a value that can be iterated over"
  ]

  var theES6BasicDataStructureTypes = [
      "strings",
      "array",
      "maps",
      "sets",
      "others"
  ]

  // illustration
  for (let dataStructures of theES6BasicDataStructureTypes) {
      console.log(`Is a ${ dataStructures }`);
  }

  canMakeShallowCopy
  var arrCopy = [ ...arr ];

  canIterateEachChar
  var question = "What Are The..."
  var chars = [ ...question ];

  console.log(chars);


  mapDataStructure

  iterationOccurs = "over the maps entries"
  mapEntry = "tuple, 2 element array, with a key and a value"
  
  //illustration 
  var buttonIds = new Map();
  buttonIds.set(butOne, "Butt One");
  buttonIds.set(butTwo, "ButT Two");

  for (let [btn, btnName] of buttonIds) {
      btn.addEventListner("click", function onClick(){
          console.log(`Clicked ${ btnName }`);
      });
  }



  closure 

  defined = "when a function remembers and continues to access free variables from outside its scope even when the function is executed in a different scope"

  characteristics = [
       "part of the nature of a function",
       "to observe, the functions gets executed in a different scope than where is was originailly defined"
  ]

// illustration 
function greeting(msg) {
    return function who(name) {
        console.log(`${ msg }, ${ name }`);
    };
}

var hello = greeting("Hello");
var hi = greeting("Hi");

hello("K");

hi("T");


commonUse = "with asynchronous code like callbacks"

// illustration
function getData(url) {
    ajax(url, function onRes(resp) {
        console.log(
            `Res (fron ${ url }): ${ resp }`
        );
    });
}
getData("https://data.some/411");



thisKeyword 

isNot = [
    "refering to the function itself",
    "points the instance that the method belongs to"
]

featuresOfFunctions
whenFunctionDefined = "it is attatched to its enclosing scope via closure"

scope = [
    "is static and the set of rules that controls how references are resolved",
    "an object that is hidden in the JS engine",
    "always the same for that function",
    "its properties are identifier variables accessible inside the function"
]

anotherCharacteristic = "besides scope which controls what functions access -> there is the execution context exposed to the function via this keyword"

thisIs = [
    "a dynamic characteristic determined each time the function is CALLED",
    "not statically connected to the functions definition"
]

executionContext = [
    "is dynamic, wholy dependent on how it is called",
    "its a tangible object whose properties are made available during execution"
]


// example 

function classroom(teacher) {  // no ref to 'this'
    return function study() {  // there is a ref to 'this'
        console.log(
            `${ teacher } says to study ${ this.topic }`
        );
    };
}
var assignment = classroom("Kyle");  //  how can assignemnt() aka study() be called?

assignment();   // lacking an execution context 
                // returns = Kyle says to study undefined

var homework = {
    topic: "JS",
    assignment: assignment
};

homework.assignment();   // Kyle says to study JS


// and even ...

var moreHW = {
    topic: "Math"
};

assignment.call(moreHW);


prototypes 
where = "this is a characteristic of function execution, a prototype = characterisitc of an object -> scefically of property access"

thinkInTerms = [
    "prototype as a linkeage between two objects (lineage being hidden)",
    "the linkeage occurs when an object is created -> gets linked to an object that already exists",
    "each is part of the prototype chain"
]

linkeagePurpose = [
    "for accesses against B for proterties/methods",
    "where B does not ahve them",
    "delgation to A to handle, occurs",
    "this delegation of property/methods allows for two or more objects to cooperate in task completion"
]

// consider this normal literal 
var homework = {  // Still connected to the Object.prototype object
    topic: "JS"  // properties and if present methods go here
}

homework = "connects to the Object.prototype which has built-in methods like toString() valueOf()"

// observing the prototype linkeage from homework to Object.prototype

homework.toString();  // [object Object]
homework.valueOf();  //  Object {topic: "JS"}



objectLinkage

toDefine = "the linkeage, create the object with the Object.create(..) utility"

// in action 
var homework = {
    topic: "JS"
};

var otherHomework = Object.create(homework);  // This creates the object to link the newly created object to, then returns the new object wich is linked

otherHomework.topic; // "JS"

noteOnAccess = "delegation only applies for access to lookup the value in a property"


thisRevisited = "this powers prototype-delegated function calls"

seeContentAndCode = "at the end of ch3"
