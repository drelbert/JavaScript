_.mapV.mapFunctions;

mapArrayMethod =
  "returns a new array of the return value by executing callback on each array item";

similarTo = [
  "forEach, but forEach does not return anything",
  "executes callback on every array item and returns undefined",
];

// forEach Example
let a = ["a", "b", "c"];

a.forEach(function (element) {
  console.log(element);
});
// a b c

mapDetails = [
  "returns an array each time",
  "take a list and transform them to a new array",
];

// Form of map
// map(callback[, thisObject])

// utility function example
_.map([1, 2, 4], function (v, i, list) {
  console.log(v);
});

_.mapExercise;

var weapons = ["stick", "revolver", "pipe"];

var makeBroken = weapons.map(function (item) {
  return `The ${item} is broken.`;
});

var brokenStuff = makeBroken;

console.log(brokenStuff);

// alternative syntax to the above
var weapons = ["stick", "revolver", "pipe"];

var makeBroken = weapons.map(function (item) {
  console.log(`The ${item} is broken.`);
});

// Example
let a1 = ["a", "b", "c"]; // the list

let a2 = a1.map(function elCallback(item) {
  // the callback function
  return item.toUpperCase();
});

console.log(a2);
// logs ["A", "B", "C"]

mapExercise;
// create an empty array to store and then loop through
// another utility function

let arr = {};

arr.map = function (list, callback) {
  let store = [];

  for (let i = 0; i < list.length; i++) {
    store.push(callback(list[i], i, list));
  }

  return store;
};

// using the above utility function
arr.map([1, 2, 3], function (val) {
  console.log(val + 1);
});

// 2 3 4
