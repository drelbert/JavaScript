returnFunctionInsideAFunction;

point = [
  "typical activity",
  "take data",
  "store it",
  "then apply functionality to that data",
  "state is live data",
];

data = [
  "often a collection of elements"[("array", "set", "objects", "map")],
  "hence there is a process to access the data, a task",
];

newParadigm = [
  "first the imperative, think and build in terms of accessing an element one at a time, get then get the next and so on",
  "imperative/procedural = the for loop",
  "instead: how about using a function to turn on a flow of that data and then manage the output",
];

theImperativeApproach;
point =
  "too busy determining how to access and not focusing on what we want to do";
var codes = [55, 4, 99];
// td 1, declaraing a variable codes and assigning an array of three elements to it
for (let el = 0; el < codes.length; el++) {
  //check this
  // that el < codes.length
  // that el is less than 3

  // do this
  // console.log(codes[el])
  // el++

  // td 2
  // setting the initializer to a variable with id of el and assigning 0 to it
  // setting the check to not excede 100
  // updating state with number = number +1
  console.log(codes[el]);
}

declarativeApproach;
atTheCore =
  "returning a function from another function, where the returned function gets super powers";

globalMemory;
____________;
createNewFunction = "F";
newFunction =
  "is the return value of createNewFunction as a result of the execution context below";
result: 5;

executionContext: newFunction = createNewFunction();
localMemory = [
  "new function: add2",
  "return out the entire function add2",
  "store it in global label under newFunction",
  "then this is popped off call stack and is GC'd",
];

executionContext: result = newFunction(3);
localMemory = [
  "num : 3",
  "2 + 3",
  "return out 5 into the global variable ",
  "then this is popped off call stack and is GC'd",
];

function createNewFunction() {
  // td 1, create and store in global createNewFunction
  function add2(num) {
    return num + 2;
  }
  return add2;
}

var newFunction = createNewFunction();
// td 2, create a new variable NewFunction and set its value to createNewFunction
// build a new execution context and push it on the stacck
// the result is the function add2

var result = newFunction(3);
// td 3, create a variable result and bind it to newFunction(3)
// build a new execution context and push it on the stack
// the result being result : 5

returnNextElementInAFunction;

theImperativeApproach;

globalMemory;
____________;
createNewFunction = "F";

returnNextElement = "F"; // the iterator function
// where the backpack lands, with the ability to control the data flow and track which element to send next
// backpack = COVE, the Closure = the closing over of the variable environment
// this backpack, COVE, closure will only ever refer back to where it was created as per the rules of a lexically scoped language

element1;
44;

element2;
5;

executionContext: returnNextElement = createFlow([44, 5, 6]);
localMemory = [
  "array : [44, 5, 6]",
  "i : 0",
  (innerFunction = "F"),
  "the definition of innerFunction is returned out and stored in returnNextElement", // BACKPACK! this is where, when returned out: returnNextElement gets a bond to the live memory/data/state/variable environment
  "popped off the stack and GC'd",
];

executionContext: element1 = returnNextElement();
localMemory = [
  "element : 4 as a result of using the backpack",
  "array and i are not here so need to look to the backpack associated with reutrnNextFunction",
  "array == [44, 5, 6]",
  "i == [0]",
  "popped off the stack and GC'd",
];

executionContext: element2 = returnNextElement();
localMemory = [
  "element : ",
  "array and i are not here, go look at the backpack bonded to returnNextFunction",
  "i == [1]",
  "popped off the stack and GC'd",
];

function createFlow(array) {
  // td 1, create a new function with the parameter array and store it in global memory
  let i = 0;
  function innerFunction() {
    var element = array[i];
    i++;
    return element;
  }
  return innerFunction;
}

var returnNextElement = createFlow([44, 5, 6]); // establishing returnNextElement as an iterator
// td 2, create a new variable and set its value to createFunction
// declare the variable returnNextFunction in the global memory
// build a new execution context and push returnNextElement on the stack
var element1 = returnNextElement();
// td 3, create new variable and set its value to returnNextElement
// declare the variable element1 in the global memory
// create a new execution context and push element onto the call stack
var element2 = returnNextElement();
// td 4, create a new varaible and set its value to returnNextElement
// declare the variable element2 in the global memory
// create a new execution context and push element onto the call stack

iteratorFunction;

areFor =
  "turning lists or arrays of data into streams of values for access one after the other";

allowFor =
  "functions to hold: the array, the position and return the next item (see returnNextElement above)";

practice;

exercises = "http://csbin.io/iterators";

solutions =
  "https://gist.github.com/aegorenkov/2ae91cabf21223bddca8c5b3ef3ec6f6";

challengeOne;

var array = [1, 2, 3, 4];

function sumValues(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; // using assignemnt operator +=, statement means: total = total + i, where i is the index
  }
  return total;
}

console.log(sumValues(array));

challengeTwo;

const array3 = [1, 2, 3];

function nextIterator(arr) {
  var i = 0;
  var iterator = {
    // setting up the iterator object with just the method
    next: function () {
      // key = next and value = function ...
      var value = arr[i];
      i++;
      return value;
    },
  };
  return iterator;
}

var iteratorWithNext = nextIterator(array3);

console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

challengeThree;

function sumArray(arr) {}
let array = [1, 2, 3, 4];
console.log(sumArray(array4));
