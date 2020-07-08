ObjectsAndArrays;

atoms = "numbers, booleans, strings";

dataStructure = "for storing information";

dataSets;

array = "for storing sequences of values";

properties;

propertiesAre = [
  "desctibes, tells about distinctive attribute or quality?",

  "expressions that access a property of some value",
  "most JS values have properties",
  "but not null and undefined",

  "example: length property of an array",
  "example: max property of the Math object",
];

elements = [
  "of an array are stored in the array's properties using numbers as property names",
  "for instance length will return how many elements an array has",
];

methods;

are =
  "when properties have functions, these are called methods of the values they belong to";

string = [
  "properties (describe) = string.length",
  "methods (do) = .toLowerCase, .pad, .toString, ...",
];

array = [
  "properties (describe) = array.length and array.prototype",
  "methods (do) = .isArray, .filter, .map, .pop, ...",
];

objects;

defined = [
  "as values of the type object are arbitrary collections of properties",
  "key value pairs that describe somehting",
];

simpleWayToCreate;
let day1 = {
  squirrel: true, // property
  events: ["coffee", "work", "paddle tennis"], // property
};

accessData;
console.log(day1.squirrel);
// true

modifyBy;
day1.wolf = false; // setting a new property in the object with squirrel and events
console.log(day1.wolf);
// false

mutability;

firstImmutability = [
  "immutable = numbers, stings, Booleans",
  "can combine and derive new values, but not possible to change values of these types",
];

objectsDifferent = "object properties can be changed";

let object1 = { value: 9 }; // binding/variable is grasping object {value : 9}
let object2 = object1; // binding/value is grasping object {value : 9}

object1 == object2; // true and is known as having the same identity

let object3 = { value: 9 }; // this binding points to different object

object1 == object3; // false

object1.value = 19; // updating the property's value of this object from 9 to 19
// watch this!!
console.log(object2.value);
// 28

recall =
  "== is the identity operator, returning true if both objects are identical in value";

lycanthropesLog;
var journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel }); // note that the property events is the only one supplied
  // the value will be taken and added from the binding of the same name
}

arrayLoops;

loop;
var JOURNAL = [];

for (let i = 0; i < journal.length; i++) {
  let entry = JOURNAL[i];
  return entry;
}

simplerWay;
var JOURNAL = [
  { events: ["code", "run", "seek"] },
  { events: ["code", "coffee", "play", "watch"] },
  { events: ["seek"] },
];

for (let entry of JOURNAL) {
  // simple count function for each event array
  // where "of" comes after the var definition "entry", it will loop over the elements in JOURNAL
  console.log(`${entry.events.length} events`);
}

stringProperties;

properties = [
  "cannot be added",
  "again they are immutable",
  "but have built-in properties",

  "properties (describe) .length",
  "methods (do) .padEnd, .slice, and etc",
];

// illustration
var useThis = "Stop";

function reverse(string) {
  var string = useThis;
  return string.split("").reverse().join("").toLowerCase();
}

console.log(reverse());

restParameters;
usedFor = [
  "allowing a function to accept any number of arguments",
  "write the function with the last paramter using the triple-dot operator",
];

// like this
function max(...userId) {
  // ...
}

// or call the function with an array of arguments
let ids = [4, 7, 99];
console.log(max(...numbers));
// 99

MathObject;

about = [
  "container that groups a set of related functionality",
  "good for not polluting the namespace",
];

destructuring;
arrays;
//simple accessing without destructuring
var one = anArray[0];
var two = anArray[3];
var three = anArray[44];

// simple acces with destructuring
var [one, two, three] = anArray;

objects;
var pilotOne = { name: "Vader" };
var pilotTwo = { name: "Solo" };

// simple access with destructuring
var { name: nameA } = pilotOne;
var { name: nameB } = pilotTwo;

console.log(nameA);
// Vader
console.log(nameB);
// Solo

JSON;
note = "again properties only grasp their value, not contain it";

addresses =
  "objects and arrays are stored as sequences that hold the address = place in memory";

need = "way to share that data, cannot send the computers memory";

serialize = "converting data into a flat description";

thusJSON = "data storage and communication";

//  JSON model
// {
//   "pilot" : true,
//   "ships" : ["Star Destroyer", "X wing", "The Galziter"]
// }

JSONFunctions = [
  "JSON.stringify = for taking a JS value and returns a JSON-encoded string",
  "JSON.parse = taking the string and converts it to the value it encodes",
];

Practice;
("https://eloquentjavascript.net/code");

sumOfRange;

function range(start, end) {
  var arrayOf10 = []; // first build up the array by initializing a binding = []

  for (let i = start; i <= end; i++) {
    // simply doing math
    // let i = start means we have a binding declaration with a value of start
    // i <= end indicates where the loop needs to stop
    // i++ indicates the increment amount
    arrayOf10.push(i);
  }
  return arrayOf10;
}

function sum(arr) {
  let total = 0;
  for (let value of arr) {
    // for ... of loop iterating over arr
    total += value; // += addition assignment meaning total = total + value
    // total = total + value -> 0 = 0 + 1 becomes
  }
  return total;
}

console.log(range(1, 10));

console.log(sum(range(1, 10)));

reversingAnArray;

function reverse(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

console.log(reverse(["A", "B", "C", "D"]));

aList;

// write a function that builds up a list structure using [ 1, 2, 3 ] as an argument

function arrayList() {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}
console.log(arrayList([10, 20]));

deepComparison;
