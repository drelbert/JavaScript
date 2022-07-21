closureIntro;

enables = "pro level functions";

functionsGetNewMemory = "every run/invocation";

function mult2(inputNumber) {
  // local var with the procedure
  var result = inputNumber * 2;
  // return it
  return result;
}

var output = mult2(7);

var outputSecond = mult2(10);

console.log(output);
console.log(outputSecond);

functionsWithMemories;

pointOne =
  "when functions are called -> local memory/variable environment or state = live data in the app currently, is created with a live store of data, for the execution context";

pointTwo =
  "when the function completes, local memory is deleted and value is returned";

concept = "how about holding onto live data between executions?";

allowingFor = "function definitions have cache/persistent memory";

state = "live data in app in local memory";

thisIsPossibleWith = "returning a function from another function";

returningFunctions;

rule = "functions can be returned from other functions in JavaScript";

function buildFunction() {
  // td define function create function and store it in global memory
  function doMultBy2(num) {
    return num * 2;
  }
  return doMultBy2;
}

let firstBuiltfunc = buildFunction();
// td define the label theBuiltFunc with a value: uninitialized -> go off and call buildFunction

// firstBuiltFunc is the new label for the function born as doMultBy2
// and has its data and functionality in the form of the backpack

let result = theBuiltFunc(3);
// td define the label secondBuiltFunc and store the value: the result of calling firstBuiltFunc(3)

memory(GlobalState);
buildFunction: "F";
firstBuiltFunc: "F";
result: "6";

executionContext: firstBuiltFunc = buildFunction();
localMemory;
("doMultBy2: 'F' ");

executionContext: result = firstBuiltfunc(3);
localMemory;
("num : 3");
// 3*2 = 6 returned out to result

thisIsValuableFor =
  "saving a function inside another function = the returned function gets the most powerful property in JavaScript ->   closure ";

nestedFunctionScope;

isAbout =
  "slightly adjacent to calling a function in the same function call as it was defined";

locationOfFunction =
  "Where the function is defined, determines what data it has access to when called";

function outer() {
  // create and save outer
  // td define the function in the global memory
  let counter = 0;
  function incrementCounter() {
    // create and save incrementCounter
    counter++;
    // store counter++ under the label of incrementCounter
  }
  incrementCounter();
  // call the function
}

outer();
// run outer

memory(GlobalState);
outer: "F";

executionContext: outer(); // look for counter here, and then increment it from 0 to 1
localMemory;
"counter: 0"("incrementCoutner: F");

executionContext: incrementCounter();
localMemory;
("counter++  meaning add one to counter"); // lookup counter in this context, not there so go to the next outer context...

details = [
  "question: how does the function get to grab the surrounding data and return it out?",
  "response: the incrementCounter counter++ gets a hidden property [scope]",
  "the [scope] links to where the surrounding data is stored",
  "so when the incrementCounter is returned out of outer, the hidden property [scope] pulls the data with it",
];

retainingFunctionMemory;
_________;
function outer() {
  // td declare the function outer
  let counter = 0;
  // td label counter and value it 0
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

let myNewFunction = outer();
// declaring the variable and has nothing stored in it, we have to call outer
myNewFunction();
myNewFunction();

memory(GlobalState);
outer: "F";
myNewFunction: "F (was called incrementCounter)";
// here there is no counter but ...
// it turns out that when the data were saved, they were returned out in the backpack and now exist as part of myNewFunction
// and hence counter : 0  and its state can be updated by the calling of myNewFunction
// then increment counter to 1
// then increment counter to 2

executionContext: myNewFunction = outer();
localMemory;
("counter = 0");
("incrementCounter : F");
// returing the incrementCounter out to myNewFunction in global memory

executionContext: myNewFunction();
localMemory;
(" "); // nothing in the local memory
// but have to run the coutner++
// lookup for counter++ in this context, but it is not there, so out to the next context ...

executionContext: myNewFunction();
localMemory;
(" "); // nothing in the local memory
// but have to run the counter++
// lookup counter in local, not there, then out into the backpack
___________;

functionClosure;
// continued execution of the above function

caveats = [
  "how does the function get to grab the data in the first place: via the [[scope]] property ",
  "permanent private data ",
];

closureQA;

closureTechnicalDefinition;
see =
  "https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8";

technicalDetails = [
  "local memory = variable environment",
  "COVE = closed over variable environment (creation of the backpack)",
  "PLSRD = Persistent Lexical Static/scope(rules for data available) Referenced Data (defines the presence of the Backpack and its journey)",

  "lexically scoped means = the physical position on the page",

  "In JS this is known as putting the data into the functions closure",
  "but the issue is that the entire process is called closure",

  "SO, as JS is a lexically scoped langauge, the function brings the data (in a backpack) wherever it goes",
  "backpack = closure",
];

multipleClosureInstances;

// take the above function outer() and add another block of code
// rewriting of the function for clarity

// the point here is that anotherFunction below creates a new backpack

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
// td, defining the const anotherFunction as unitialized

anotherFunction();

anotherFunction();

executionContext: anotherFunction = outer();
localMemory;
"counter: 0"("incrementCounter : F");

point =
  "with a new const anotherFucntion() comes an all new execution context and a new backpack of data and method";

practicalApplications;

closureAllows = [
  "give our functions persistent memories",
  "helper function = once -> for once and done specification",
  "memoization =  giving the function persistent memory of previous input/output combinations",
  "iterators and generators using lexical scoping and closure for contemporary patterns",
  "module pattern -> preserve state throughout app running without poluting global namespace",
  "asyncronous JS -> callbacks and promises need closure to persist state in async envio",
];

challenges;

linkToChallenges;
("http://csbin.io/closures");

linkToSolutions;
("https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/closures.js");

challengeOne = "create a function that creates and returns a function";

function createAFunction() {
  function createdFunction() {
    return "Hola";
    // or console.log("Hola");
  }
  return createdFunction;
}

let messageFunction = createAFunction();

console.log(messageFunction());

challengeTwo = "create a function that accepts an input and returns a function";

function functionPrinter(input) {
  function functionPrint() {
    console.log(input);
  }
  return functionPrint;
}

let messageGenerator = functionPrinter("Message One");
let messageCenter = functionPrinter("Message Two");

messageGenerator();

messageCenter();

challengeThree =
  "build a function that returns a function that will add input by x";

function addByX(x) {
  function generateResult(input) {
    console.log(input + x);
    // return input + x;
  }
  return generateResult;
}

let addThree = addByX(3);

addThree(5);

let addTen = addByX(10);

addTen(6);

challengeFour =
  "labeld 5, create a function that accepts a callback as an input and returns a function and thereafter will return the same number";

// the callback function passed to the value of firstCall below
function addByX(x) {
  let addBy = (num) => {
    return num + x;
  };
  return addBy;
}

let addByTwo = addByX(2);

function once(func) {
  let counter = 0;
  let onceVal;
  function limitCalls(val) {
    // setting if check to allow the callback to be run only once but return the inital value any time it is called again
    if (counter === 0) onceVal = func(val);
    counter++;

    return onceVal;
  }
  return limitCalls;
}

let firstCall = once(addByTwo);

console.log(firstCall(4));
console.log(firstCall(2));

challengeFive =
  " labeled 6 in github, write a function that takes the number of times the callback needs to be called before being executed";

function after(count, func) {
  let counter = 0;
  return function (val) {
    if (++counter >= count) func(val);
  };
}

// callback
let called = function () {
  console.log("Hola!");
};

let afterCalled = after(3, called);

afterCalled();
afterCalled();
afterCalled();
