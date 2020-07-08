closure;

recall = [
  "functions have no memories of previous execution",
  "however, closure allows for this exact thing and is achieved with returning a function from a function",
];

//example
var multBy2 = function (inputNumber) {
  return inputNumber * 2;
};

var output = multBy2(7); // callsite to execute
var anotherOutput = multBy2(3); // callsite to execute. no memory of previous execution

console.log(output);
console.log(anotherOutput);

closureUnderTheHood;

var functionCreator = function () {
  //td 1, creating a function labeled functionCreator, saving it into global memory
  let counter = 0;
  var add3 = (num) => {
    var result = num + 3;
    return result;
  };
  return add3;
};

var generatedFunc = functionCreator();
// td 2, creating a label generatedFunc and setting its value to the return value of executing functionCreator
// RECALL that functionCreator is not getting stored in generatedFunc

var result = generatedFunc(2);
// td 3, after the function add3 is returned to  generatedFunc,
// run generatedFunc with the vlaue of 2
// note, generatedFunc has the backpack with everything from add3, the COVE
// otherwise said, generatedFunc has the code formerly known as add3
//5

memory(GlobalState);
______;
functionCreator: "F";
generatedFunc: "the add3 function";
result: "5";

executionContext: generatedFunc = functionCreator();

localMemory;
"counter : 0", "add3 : function";

threadOfExecution;
("return add3");

executionContext: result = generatedFunc(2);
localMemory;
("num : + 2");
("result: 5");

threadOfExecution;
("");

closureClarifications;

question =
  "why save a function inside another function (closure) instead of just placing it in global?";

innerFunction;

illustrating =
  "lexically, how does the lookup work for data access when the function is called?";

const outer = function () {
  // creating a label outer and assigning it to an unamed function
  let counter = 0;
  const incrementCounter = () => {
    // creating a label incrementCoutner and assigning it to an arrow function
    counter++; // in incrementCounter's local execution context counter is not found
    // so we go out and up to find counter = 0 and increment it by adding one
  };
  incrementCounter();
};

outer();

// the issue with how this code is written is that it is unclear how the counter is enabled
// there is no var output = outer()

outerFunction;
// this code snippet is the correct way/replacement of the const outer
// through the backpack of the newFunction
// which will have the functionality and the persisten data (counter = 0)

const outer = function () {
  let counter = 0;
  const incrementCounter = () => {
    counter++;
  };
  return incrementCounter; // note returning the function, here is where the backpack is created
};

const newFunction = outer(); // here is where the connection is established between the backpack and newFunction

newFunction(); // here is where the backpack is actualy used
newFunction(); // here is where the backpack is actualy used

closureClarificationAndReview;

namesForBackpack = [
  "Persistent Lexically Scoped Referenced Data",
  "Closed Over Variable Environment",
  "Closure",
];

closureInFunctionalJs = [
  "easy to add features, function now have persistant memories connected to them",
  "easy to see what's happening under the hood",
];

challenges;
("http://csbin.io/functional");

solutions;
("https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/functional.js");

// need to complete challenge 8 to 15
challenge1 =
  "create a function that creates and returns a function, which prints 'hello'";

var createFunction = function () {
  let newFunction = () => {
    return "Hello";
  };
  return newFunction;
};

var function1 = createFunction();

console.log(function1());

// alternative syntax
const functionFactory = function () {
  let createdFunction = () => {
    console.log("Hello");
  };
  return createdFunction;
};

const function1 = functionFactory();
function1();

challenge2 =
  "create a function that accepts one input and returns a function, when called it prints the input that was used when the function was created";

var functionMain = function (input) {
  let printerFunction = () => {
    return input; // alternatively: use the console.log(input) here
  };
  return printerFunction;
};

var printHello = functionMain("Hello");
console.log(printHello());

var printVikings = functionMain("Vikings");
console.log(printVikings());

challenge3 =
  "illustration of a function expression using a variable outside its scope";

const outer = function () {
  let counter = 0;

  const incrementCounter = () => {
    counter++;
    console.log("couter", counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const torCounter = outer();

willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

torCounter(); // 1
willCounter(); // 4

challenge4 = "create a function that returns a function to add an input by x";

var addByX = function (x) {
  let addingFunction = (y) => {
    console.log(x + y);
  };
  return addingFunction;
};

var addBy2 = addByX(2);
addBy2(1);
addBy2(2);

var addBy3 = addByX(3);
addBy3(3);
addBy3(6);
