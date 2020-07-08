abstractingRepetition;

commonPractice = "for a proram to do something a given number of times";

// example for loop to do this
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// abstract this as a function to call console.log N times
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

action = [
  "can be represented as a function",
  "functions are just values",
  "hence just pass the action as a function value",
];

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);

functionValue = [
  "not necessary to pass a predefiend function to repeat",
  "may be easier to create a function value instead",
];

// example
function generate(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let idGenerator = [];
generate(5, (i) => {
  idGenerator.push(`Devo ${i + 1}`); // the body written as a function value
});

console.log(idGenerator);

higherOrderFunctions;

simply = "functions that operate on other functions";

allowFor = [
  "abstracting over actions not just values",
  "different forms"[
    ("functions creating new functions",
    "functions that change other functions and others",
    "functions that create new types of control flow",
    "the built in array method = forEach")
  ],
];

mdnOnHigherOrderFunctions = "a function that returns another function";

//example
function launchCourse() {
  return function () {
    console.log("launched");
  };
}

simpleDataSet;

var PEOPLE = [
  {
    name: "Jerry DelJerr",
    codeRange: [
      [100, 200],
      [400, 600],
      [750, 900],
    ],
    tech: ["JS", "Python", "Node", "React"],
    ninja: true,
    onBoard: 2000,
  },
  {
    name: "LaDuane Miller",
    codeRange: [
      [100, 300],
      [400, 600],
      [850, 900],
    ],
    tech: ["JS", "Python", "Node", "Angular", "Mongo"],
    ninja: true,
    onBoard: 2009,
  },
  {
    name: "Tor Bergstrom",
    codeRange: [
      [100, 300],
      [400, 600],
      [850, 900],
    ],
    tech: ["JS", "Angular", "Mongo"],
    ninja: false,
    onBoard: 2013,
  },
];

filteringArrays;

buildRequirement =
  "find all people where ninja is true, filter out those who are not";

function filter(people, find) {
  // find passed as a parameter
  let isANinja = [];
  for (let element of people) {
    if (find(element)) {
      // find used as an argument, a function value to decide which elements to collect
      isANinja.push(element);
    }
  }
  return isANinja;
}

console.log(filter(PEOPLE, (person) => person.ninja)); // filter is pure as it builds up a new array with only elements that pass the test

mdnFilter;
var people = ["Del", "Indra", "Sol", "Bean"];

var result = people.filter((person) => person.name == "Sol");

console.log(result);

transformWithMap;

aboutMap = [
  "this method transforms an array by applying a function to all its elements and building a new array from the returned values",
  "the new array has the same length, but mapped content which is in a new form",
];

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}
let ninjas = PEOPLE.filter((n) => n.ninja == true);
console.log(map(ninjas, (n) => n.name));

summarizeWithReduce;

aboutReduce = [
  "can compute a single value from arrays",
  "or find the most of something",
  "reduce is a higher order operation",
  "builds a value by taking a single element and combining it with the current value",
];

//  simple example
function reduceArray(array, combine, start) {
  // note the required parameters combine and start
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduceArray([1, 2, 3, 4], (a, b) => a + b, 0));

composability;

useCase = "where there is a need to compose operations";

// example to find average year person started
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(
    average(PEOPLE.filter((p) => p.ninja == true).map((p) => p.onBoard))
  )
);

// 2005

summary;
var forEach = "used to loop over the elements in an array";
var filter =
  "this method returns a new array with only th elements that pass the test function";
var map =
  "useful for transforming an array by putting each element through a function";
var reduce = "for combining all the elements in an array into a single value";

exercises;

flattening;
build =
  "a function that flattens this arrays into a single array with the same elements";
let arrays = [[1, 2, 3], [4, 5], [6]].reduce(function (
  accumulator,
  currentValue
) {
  return accumulator.concat(currentValue);
},
[]);

console.log(arrays);

yourOwnLoop;

see = "https://eloquentjavascript.net/code/#5.2";
