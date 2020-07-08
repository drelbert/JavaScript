functionComposition;

recall = [
  "chaining with dots uses the JavaScript prototype feature = functions return arrays that access to HOF's like map, filter or reduce",
  "output is passed to the next function automatically",
  "BUT how to chain functions that just return a regular output",
  "example = multiplyBy2,add3,divide5",
];

benefits = ["easier to add features", "more readable", "easier to debug"];

functionCompositionReduce[
  // here is the high level block of code
  (multiplyBy2, add3, divideBy5)
];

// note, no chaining as in passing the result from one function and then that result and so on
// will be composing -> joining

compose = "first 11 and multiplyBy2 to get result of 22";

11 = "is the accumulator";
reducer = fn(multiplyBy2)(11) = 22;

compose = "second take 22 and add3 for the result of 25";

22 = "is the accumulator";
reducer = fn(add3)(22) = 25;

compose = "third take the 25 and divideBy5 = 5";

25 = "is the accumulator";
reducer = fn(divideBy5)(25) = 5;

// here is the JS execution version
var multiplyBy2 = (x) => x * 2;
// td 1, declaring a variable label with a function as its value
// lexical note = x is a parameter and is in the local scope of this nameless arrow function
var add3 = (x) => x + 3;
// td 2, declare a function add3
var divideBy5 = (x) => x / 5;
// td 3, declare a function divideBy5
var reduce = (array, howToCombine, buildingUp) => {
  // td 4, declare a function reduce
  for (let i = 0; i < array.length; i++) {
    buildingUp = howToCombine(buildingUp, array[i]);
  }
  return buildingUp;
};

var runFunctionOnInput = (input, fn) => {
  // td 5, declare a function runFunctionOnInput
  return fn(input); // note the input gets run on the fn
};

var output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, 11);
// td 6, create a label output, no vlaue initially, but will call reduce
// buildingUp returns the value of 5

executionContext: output = reduce(
  [multiplyBy2, add3, divideBy5],
  runFunctionOnInput,
  11
);
localMemory("array[functions from above]")(
  "howToCombine: runFunctionOnInput takes in input and fn"
)("buildingUp, 11");

threadOfExecution("i:0  is multiplyBy2, compose with 11")(
  "i:1  is add3, compose with 22"
)("i:2  is divideBy5, compose with 25");
