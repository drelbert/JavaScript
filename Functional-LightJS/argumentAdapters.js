functionArguments;

argumentsAre = [
  (parameter = "the thing in function definition"),
  (argument = "the value passed in when the function is called"),
  (so = "arguments get assigned to parameters"),
];

functionShape;

shape = [
  "determined by the number and kind of things passed in ",
  "and the number and kinds of things that are outputed",
  "unary and binary describe the shape of the input/output signature",
  "super critical",
];

// unary = only one value/input in and one value/outputout
function increment(x) {
  return sum(x, 1);
}

// binary = two values/inputs in and one value/output
function sum(x, y) {
  return x + y;
}

argumentsShapeAdapters;

takeaway =
  "must learn how to build an adapter between two functions and then build a utility to do that";

higherOrderFunctions =
  "function that either gets one or more functions and/or returns one or more functions";

function uniary(fn) {
  // higher order function as it receives the function fn as a parameter
  return function one(arg) {
    // returning one back with the paramter arg
    return fn(arg);
  };
}
