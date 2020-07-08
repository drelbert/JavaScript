pureFunctions;

notion = "each line is self contained";

pureFunction = [
  "as tiny units to be combined and run automatically, must be completely predictable",
  "NOTE -> their only consequence is their evaluated result",
];

relianceThen = [
  "on using each function's evaluated result to pass the input to the next unit of code",
  "Hence there is no place for side effects as they would upset this process",
];

// example of introducing impurity
let num = 10;

const add3 = function add3(x) {
  num++;
  return x + 3;
};

add3(7);

immutability;

ensuringPurity = [
  "means preserving data and not manipulating it",
  "map does not mutate",
  "need to ensure referential transparency",
  "JavaScript and passing a reference"[
    ("is all about the link back to the array when inserted into the function map",
    "map does no mutations")
  ],
];

const array = [1, 2, 3];

const multiplyBy2 = function multiplyBy2(num) {
  num * 2;
};

var result = array.map(multiplyBy2); // [2, 4, 6]
var anotherResult = array.map(multiplyBy2); // [2, 4, 6]

challenges;
("http://csbin.io/functional");

solutions;
("https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/functional.js");

// the first few of these correspond to the mapReduce

challenge4 = "use forEach and insert an array and callback";

let names = ["Tor", "Magnus", "Vader"];

let users = [];

// use a for loop
for (let i = 0; i < names.length; i++) {
  users.push(names[i]);
}

console.log(users);

//use forEach
names.forEach(function (name) {
  users.push(name);
});

console.table(users);

challenge5 = "rebuild map as mapWith, use forEach not a for loop";

let doubleThis = [1, 2, 3, 4, 5];

let doubled = [];

let double = doubleThis.forEach(function (double) {
  doubled.push(double * 2);
});

console.log(doubled);

challenge6 = "simple function with reduce";

let array = [4, 3, 2, 1];

let sum = array.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
},
0);

console.log(sum);
// 10

// using reduce with object array

let initialValue = 0; // must supply this so each value passes through the function

let yearsExp = [
  { name: "Tony", years: 19 },
  { name: "Trine", years: 12 },
].reduce(
  (accumulator, currentValue) => accumulator + currentValue.years,
  initialValue
);

console.log(`Total for both is: ${yearsExp}.`);
// 31

// example summing judge score for teams

let teamScores = [
  {
    name: "TeamOne",
    scores: [{ score: 4 }, { score: 5 }, { score: 4 }],
  },
  {
    name: "TeamTwo",
    scores: [{ score: 4 }, { score: 4 }, { score: 2 }],
  },
];

let initialValue = 0;

let result = teamScores.reduce(
  (accumulator, currentValue) => accumulator + currentValue.scores.score,
  initialValue
);

console.log(result);
//NaN

challenge7 =
  "build a ruduce function to return values that are present in both arrays";

let projectOne = ["Magnus", "Tino", "Tina", "Dag", "Egil"];
let projectTwo = ["Del Torro", "Manny", "Astrid", "Magnus", "Egil"];

let intersection = [projectOne, projectTwo].reduce(function (
  accumulator,
  currentValue
) {
  return accumulator.filter((el) => currentValue.includes(el));
},
[]);

console.log(intersection[projectOne], [projectTwo]);

challenge8;
