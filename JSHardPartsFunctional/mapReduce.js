map;

// the copyArrayAndManipulate function in the map format

const map = function map(array, instructions) {
  var output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
};

var multBy2 = (input) => input * 2;

var result = map([1, 2, 3], multBy2);

isAbout =
  "mathmatical notion of changing data and changing data that is transformed in some way";

reduce;

is = "the most important function in functional programming";

isAbout = [
  "taking the element of the array and reducing it with a value based on a rule",
  "then using that value with the next value based on the same rule",
];

accumulator =
  "reducing the array elements to a total, through the accumulator ";
reducer = "rule for how to combine";

// example
var reduce = function reduce(array, hotToCombine, buildingUp) {
  // td 1, creating a function expression with the value function named reduce with three parameters
  for (let i = 0; i < array.length; i++) {
    buildingUp = hotToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};

let add = (a, b) => a + b;
// td 2, creating variable add with a value of function that combines a, b

let summed = reduce([1, 2, 3], add, 0);
// td 3, creating a variable summed with reduce as its value with three arguemnts

console.log(summed);
// 6

globalMemory;
reduce: "F";
add: "F a + b";
summed: 6;

executionContext: reduce = ([1, 2, 3], add, 0);
localMemory;
"array [1,2,3]", "howToCombine : add"("buildingUp: 0");

threadOfExecution;
"i: 0 -> add(0, 1) = 1 and is stored into buildingUp"(
  "i: 1 -> add(1, 2) = 3 and is stored into buidlingUp"
)("i: 2 -> add(3, 3) = 6 and is stored into buildingUp");

builtInArrayMethods;

quickly = "objects, functions, and arrays have access to methods";

methods = [
  "these methods that get stored in an object that all arrays have access to when the array is referd to with a . and method name",
  "the link to this object with all the shared properties is __proto__ property",
];

saving = [
  "when a function or array is saved",
  "via the __proto__ link",
  "allows for access to the store with these in it: push, map, filter, reduce, forEach",
  "note MDN represetns these as array.prototype.whatever",
];

filter;

// example
var array = [4, 66, 908, 45, 88];
// td 1, declaring a label array and setting its value to be 4, 66,...

let greaterThan = function greaterThan(num) {
  // ts 2, declaring a greaterThan variable whos value is a named function
  return num > 4;
};

var filteredArray = array.filter(greaterThan);
// td 3, declaring a label filteredArray with a value of function being passed as a callback named greaterThan

console.log(filteredArray);
console.log(`looks like lucky numbers are ${filteredArray}`);

globalMemory;
array: [4, 66, "etc"];
greaterThan: "F";
filteredArray: "";

executionContext: filteredArray = [4, 66, "etc"].filter;
"first look at the object then second look to the store of function and hence filter"(
  "filter creates an empty array"
)(
  "checks if i: 0 which is 4 is greater then num and if true places that vlaue into the array"
);

chaining;
// taking example above
var array = [4, 66, 908, 45, 88];

let greaterThan = function greaterThan(num) {
  return num > 4;
};
let add = (a, b) => a + b;

let sumTotal = array.filter(greaterThan).reduce(add, 0);

console.log(sumTotal);

composition;
