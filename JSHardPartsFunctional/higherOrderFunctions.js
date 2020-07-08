JSPrinciples;

executingCode;

// example

memory(globalState); // significant part of JS = saving stuff to memory  = compiling
______;
num: 3;
multiplyBy2: "F";
output: 6;
newOutput: 20;

// next significant part of JS = thread of execution
var num = 3;
// td 1, declaring and storing a binding and setting is value to 3 with a property of number
// label = num and value = 3

function multiplyBy2(inputNumber) {
  // td 2, declaring and storing a function and assigning a paramter to it
  var result = inputNumber * 2;
  return result;
}

var output = multiplyBy2(num);
// td 3, declaring and storing a variable and setting its value as multiplyBy2, store in memory, kick off a new execution context
var newOutput = multiplyBy2(10);

executionContext: output = multiplyBy2(3);
localMemory;
("gets the parameter inputNumber : 3");
("create result and assign to it 6");

threadOfExecution;
("return result aka a value of 6 into output");

executionContext: newOutput = multiplyBy2(10);
localMemory;
("gets the paramter inputNumber : 10");
("create result and assign to it 20");

threadOfExecution;
("return result aka value of 20 into newOutput");

callStackReview;
about =
  "how JS keeps track of every function it calls, plus what to execute next";

// using the example from above

multiplyBy2; // executing and at return gets popped
global(); // the overall code always at the bottom

functionsReview;

function copyArrayAndDivideBy2(array) {
  // td 1, declaring and storing a function and storing it in global with the parameter of array
  var output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

var myArray = [1, 2, 3];
//  declaring and storing  a variable and assigning an array as its value with a property object
var result = copyArrayAndDivideBy2(myArray);
// declaring and storing  a variable and then run the function as this is its callsite, resulting in an execution context

executionContextFor: result = copyArrayAndDivideBy2([1, 2, 3]);
localMemory;
"parameter : argument -> array : [1,2,3]",
  "output : [].5, 1, 1.5]"("return output into result in the global memory");

threadOfExecution;
"array [1,2,3"("1/2 = .5 and push it onto output above")(
  "repeat for the other two"
);

HigherOrderFunctions;
problemRepetativeFunctions;

howTo =
  "write the program above so that we do not need two of them for different operators like * or /";

response = "pass in another function";

// the response in action
// first step to composing two functions together

function copyArrayAndManipulate(array, instructions) {
  // higher order function
  // td 1, declaring and storing the function with two parameters
  var output = [];
  for (let i = 0; i < array.length; i++) {
    // setting the i to a value of 0, so it starts at the 0 index
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  // callback function
  // td 2 create a function and store it with a parameter input
  return input * 2;
}

var result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
// td 3, creating a label with two arguments
//  and then run the function as this is the callsite, resulting in a new execution context

memory(globalState);
________;
copyArrayAndManipulate: "F";
multiplyBy2: "F";
result: [2, 4, 6];

executionContext: result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

localMemory;
"to determine what goes here, look to parameters and the callsite arguemnts",
  "which in this case it array and instructions: so...",
  "array = parameter : arugument is array : [1,2,3]",
  "instructions : multiplyBy2",
  "return the value of output which is the array [2, 4, 6]";

threadOfExecution;
"uses instructions : multiplyBy2", "array : [1,2,3]";

higherOrderReview;

challenges;
("http://csbin.io/functional");

solutions;
("https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/functional.js");

challenge1 = "create a function addTwo that accepts one input and adds 2 to it";

function addTwo(num) {
  return num + 2;
}

console.log(addTwo(98));

challenge2 = "same as above but with adding s";

function addS(plural) {
  return plural + "s";
}

console.log(addWord("gland"));

challenge3 =
  "create a function map that takes two inputs and returns a new array filled with new numbers based on the callback";

// var firstArray = [4, 60, 98];

function addTwo(num) {
  return num + 2;
}

function map(array, callback) {
  var newArray = [];

  for (let i = 0; i <= newArray.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

console.log(map([1, 2, 3], addTwo));

challenge4 = "the forEach";

let output = "";
let letterArray = ["S", "t", "o", "p"];

letterArray.forEach((e) => (output += e));
console.log(output);

// rewritten without arrow function
let output = "";
let letterArray = ["S", "t", "o", "p"];

letterArray.forEach(function (e) {
  return (output += e);
});

console.log(output);

challenge5 = "rebuild map and use forEach";

// try agian...
