introFunctional;

contents = [
  "objects",
  "list transformations",
  ".forEach Function",
  ".map function",
  ".filter function",
  "functions in depth",
  "scope",
  "callbacks",
  "functional utilitites",
  "closure",
];

objects;
dataStructures = "objects and arrays";

propertyAccess;

// the object literal
var person = {};
person.name = "User Ingra";

// or
var person = {
  name: "Gunnar",
};

// pass it around
var user = person.name; // property name points to Gunnar

console.log(user);

// reassign
person.name = "Sunner"; // upon reassignemnt, change the pointer is to Sunner

console.log(person.name);
// Sunnar

knownAs = "storing a value by reference or by value";

store = [
  "primitives are stored by value and make a copy each time created(number, boolean, string, null and undefined)",
  "non-primitives get passed by reference (obj, func, array, promise)",
  ["these share the same space in memory"],
];

arrays;

var user = [];

user.name = "Sr User Gonzalez";

var label = user.name;

console.log(label);
// Sr User Gonzalez

typeof person === "array";
// false

console.log(typeof user);
// object

bracketNotation;

objectToArrayDiff = "arrays have methods";

// illustrating use of brackets
var person = [];
var message = "wouldShe";

person.name = "Sra. Gomez";
person[message] = "Let's get started"; // this would result in an a "not defined" for message

person["message"] = "Let's go"; // is the correct way and would return the message

nonValidCharacters;
doNot = "use as character names, if absolutely neede, use double quotes";

// example
userId[33]; // this is seen as something to be evaluated not say a variable name

gameCharacterChallenge;

var game = {};

game.murderer = " ";

game["weapons"] = [{ type: "lazers" }, { type: "pipe" }, { type: "gun" }];

// adding to the array
game.name[0] = "Sr. G";
game.player.push("Sra. Zen");

objectsRules;

usingDots = [
  "OK = strings",
  "notOK = number, quotations, weird characters, expression",
];

usingBrackets = ["OK = string, numbers, vars, weird characters, expressions"];

es6Destructuring;

from = "es6";

have = "the target and the source";

is = [
  "simplified way of defining variables",
  "taking them outside of an object or an array",
];

arrayDestructuring;
allAbout = [
  "an expression to unpack values from arrays or properties from objects into distinct variables",
  "on the left hand side defines what values to unpack",
];

//  array
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// 10

[a, b, ...rest] = [10, 20, 30, 40, 50, "Sami"];

console.log(rest);
// Array [..]

// object
[a, b] = { a: 10, b: 20 };
console.log(a);
// 10

// example
let foz = ["one", 4, "Ragnar"]; // the array literal, an ad hoc package of data

let [valOne, valThree] = foz; // left hand side defining the values to unpack from the sourced variable foz

console.log(valOne);
// one

objectDestructuring;
variableDeclarations;
let { first, second } = { first: 0, second: 1 };
// same if using const or var

assignment;
("{first, second} = {first: 0, second: 1}");

// assinging first to the value of the first property and so on

destructuringExamples;
