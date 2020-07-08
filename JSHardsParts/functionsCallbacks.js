import { array } from "prop-types";

contents = [
  "JS principles",
  "functions and callbacks",
  "closure",
  "async JS",
  "promises",
  "classes and prototypes",
];

JSPrinciples;

threadOfExecution;

functions;

// example
let num = 3;
// td creating a binding with an identifier and set its value as 3

function multiplyBy2(inputNumber) {
  // td defining a function with a paramter = inputNumber
  let result = inputNumber * 2;
  return result; // return, finished the function and pops the its off the callstack
}

let output = multiplyBy2(num);
// td identifier as output = function call and is uninitialized
// given the funciton call, JS will now run the multiplyBy2

let newOutput = multiplyBy2(10);
// td identifier as newOutput = function call and is unititialized

memory(GlobalState);
num: 3;
multiplyBy2: "F";
output:;
6;

newOutput: 20;

executionContext: output = multiplyBy2(3);
localMemory;
("inputNumber = 3");
("result : 6");
("return the value of 6 to output in the global");

executionContext: newOutput = localMemory;
("inputNumber = 10");
("result: 20");
("return the value to newOutput");

theCallstack;
("newOutput(second, run then popped");
("output(first, run then then popped");
("global");

generalizedFunctions;

function square10() {
  return 10 * 10;
}

// cannot edit once function is saved

// so what about 9 squared

function square9() {
  return 9 * 9;
}

// this breaks the dry principle

// fix this with...
generalizeTheFunction = "to make it more reuseable";

function squareNum(num) {
  // write it once and resure it with different data
  // use a parameter in this case num
  return num * num;
}

squareNum(2);
squareNum(3);
squareNum(88);

// setting up for higher order functions

repeatingFunctionality;

function copyArrayAndManipulate(array) {
  // td function definition with one param: array
  let output = [];
  for (let i = 0; i < array.length; i++) {
    // note that i's value is the index of the array
    output.push(array[i] * 2);
  }
  return output;
}

var myArray = [1, 2, 3];
// td define label with value of array
var result = copyArrayAndManipulate(myArray);
// td, definng label result, call the function and pass in argument [1,2,3]

memory(GlobalState);
copyArrayAndManipulate: "F";
myArray: "[1,2,3]";
result: [2, 4, 6];

executionContext: result = copyArrayAndManipulate(myArray);
localMemory;
("array: [1,2,3]");
("output: [ ]");
("run through the loop, so 1*2, 2*2, 3*2, and stop since array.length has been reached");
("result: [2, 4, 6]");

higherOrderFunctions;
// ran through the similar code as above but just with divide as the operator

// and also another set of code to add 3

dryTheCode = [
  "how to move from a procedural, essentially the same functions with small changes like *2, /2, etc",
  "to enable the passing in of functionality as a paramter",
  "leave some functionality blank",
  "meaning we could generalize the function",
  "to wrap code and be passed in JS = wrap it in a function",
];

higherOrderFunctionExample;

defined = "any higher order function takes in or passes out a fucntion";

function copyArrayAndManipulate(array, instructions) {
  // the higher order function
  // define the function copyArrayAndManipulate and save it in global memory, has two inputs, array and instructions(code)
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  // the callback function
  // define the function and save it in global
  return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
// define the const result which calls the function
// passing in multiplyBy2 as an argument for the parameter instructions

memory(GlobalState);
copyArrayAndManipulate: "F";
multiplyBy2: "F";
result: executionContext: result = copyArrayAndManipulate(
  [1, 2, 3],
  multiplyBy2
);

localMemory;
("array: [1,2,3]"); // parameter: argument
("instructions: multiplyBy2");
("output: [2, 4, 6]");

challenges;
link = "http://csbin.io/callbacks";

solutions = "https://github.com/CodesmithLLC/cs-bin-solutions/blob/master";

challenge1 = "write a function that accepts on input and add 2 to it";

function addtwo(num) {
  return num + 2;
}

console.log(addtwo(2));

challenge2 = "write a function that adds s to a word";

function addS(word) {
  return word + "s";
}

console.log(addS("cholo"));

challenge3 =
  "create a map function that takes an array and callback and returns a new array with the updated numbers";

function map(array, callback) {
  // example of higher order function
  let renderResult = [];
  for (let i = 0; i < array.length; i++) {
    renderResult.push(callback(array[i]));
  }
  return renderResult;
}

function multiplyBy2(item) {
  // the callback function, could use also/instead the addTwo function above
  return item * 2;
}

var newArray = map([1, 2, 3], multiplyBy2);

console.log(newArray);

challenge4 =
  "create a forEach that runs the callback on each element of the array";

function forEach(array, callback) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
  return output;
}

let alpha = "";
var letters = ["a", "b", "c"];

forEach(letters, function (char) {
  alpha += char;
});

console.log(alpha);
// abc

challenge5 = "rebuild map above as mapWith and use a forEach not a for loop";

function mapWith(array, callback) {
  let updatedArray = [];
  forEach(array, (e) => updatedArray.push(callback(e)));
  return updatedArray;
}

function addThree(el) {
  return el + 3;
}

forEach(item, function (num) {
  updatedArray += num;
});

let threeAdded = mapWith([3, 9, 13], addThree);

console.log(threeAdded);
// get a forEach is not defined

challenge6 = "extension 2 = use reduce";

function reduce(array, callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

let nums = [4, 3, 2];

let add = function (a, b) {
  return a + b;
};

console.log(reduce(nums, add, 0));
// 9

reduceWithObjects;

let initialValue = 0;
let sumScores = [{ score: 5 }, { score: 9 }, { score: 10 }].reduce(function (
  acc,
  curr
) {
  return acc + curr.score;
},
initialValue);

console.log(sumScores);
// 24

reduceWithObjectsAndBoolean;

let studentRecords = [
  { name: "Alice", paid: true },
  { name: "Gunnar", paid: false },
  { name: "Sonya", paid: true },
];

// this combines what would be otherwise done with map() and filter()
var studentsPaid = studentRecords.reduce(function (newArr, isPaid) {
  if (isPaid.paid === true) {
    newArr.push(isPaid.name);
  }
  return newArr;
}, []);

console.log(`Hey oh, these have paid: ${studentsPaid}`);
// and
console.log(studentsPaid);

// Hey oh, these have paid Alice,Sonya

challenge7 =
  "extension 3 = create a function that compares input arrays and return elements common in all arrays";

let useThese = [
  [5, 10, 15, 20],
  [15, 88, 1, 5, 7],
  [1, 10, 15, 5, 20],
];

function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return curr.filter((e) => acc.includes(e));
  });
}

console.log(intersection(useThese));
// [5, 15];

challenge8 =
  "extension 4 = build a function that compares input arrays, returning a new flattened array with no duplicates";

let flatten = [
  [5, 10, 15],
  [15, 88, 1, 5, 7],
  [100, 15, 10, 1, 5],
];

function union(arrays) {
  return arrays.reduce((acc, curr) => {
    const newSet = curr.filter((e) => !acc.includes(e));
    return acc.concat(newSet);
  });
}

console.log(union(flatten));
//  [5, 10, 15, 88, 1, 7, 100]

challenge9 = "extension 5 = build a function that will build a set of objects";

function objOfMatches(array1, array2, callback) {
  let matchObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array[i]) === array2[i]) {
      matchObj[array1[i]] = array2[i];
    }
  }
  return matchObj;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
