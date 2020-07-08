Destructuring;

is = "decomposing a structure into its individual parts";

purposeFeature = "assign  individual parts from a larger structure";

imperative;
// here is a use case for why destructuring was created
// requirement: pull in a JSON object from an API like Twitter API with deeply nested data structure
// get name and email

// highly difficult to reason about = imperative

var tmp = getRecords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "madeUp@mail.com";

array - destructuring;

destructuring - declarative;

function getSomeRecords() {
  return [one, two];
}
var [
  // not an array of objects, it is a pattern, a syntax to describe the value expected from the RHS
  { name: firstName, email: firstEmail = "nobody@none.tld" },
  { name: secondName, email: secondEmail = "nobody@none.tld" },
] = getSomeRecords();

// another  destructuring comparison imperative to declarative

function data() {
  return [1, 2, 3, 4, 5];
}

var first, second, third, fourth; // declaring the variables first and then no need to use the var declaration below
var o = {}; // refactoring to assign to entirely different location aka a valid left hand side target

var tmp = data(); // grab the data with an unimportant var tmp,
first = tmp[0]; // do care about these
second = tmp[1];
third = tmp[2];
fourth = tmp.slice(3); // using slice to collect the remaining values

destructuring - approach;

function data() {
  return [1, 2, 3, 4, 5];
}

var tmp = data();
var first, second, third, fourth; // declaring here so no need to use the var declaration below, just have the [] on the left side
var o = {}; // refactoring to assign to entirely different location aka a valid left hand side target
[
  o.first, // comma separation to disregard value of 2 in the array
  ,
  o.third,
  ...o.fourth // using the gather/rest syntax for the remaining values
  // must show up at end of pattern
] = tmp;

noteOnDestructuring = " about the assignment not the declaration";

comma - separation;

// requirement swap these two
imperative - approach;
var x = 10;
var y = 20;
{
  let temp = x;
  x = y;
  y = temp;
}

destructuring - approach;
swap - destructuring;
var x = 10;
var y = 20;
[y, x] = [x, y]; //  swap the value of x to y and y to x from the first array, given the second array

parameter - arrays;

imperative - approach;

function dataAndParams(tmp = []) {
  //  the addition of [] is a default paramater array for graceful fallback
  var [first, second, third] = tmp;
}

destructuring - approach;

function dataAndParams([
  first = 4, //  adding default values for all three
  second = 5,
  third = 55,
] = []) {
  // adding the [] as a default parameter array for graceful fallback to aviod a typeerror
  //.. use them as needed
}

nestedArray - destructuring;

object - destructuring;

nested - array - destructuring;

object - destructuring;

function data() {
  return { a: 4, b: 56, c: 90 };
}

var {
  b: second, // source: target
  a: first = 42, // example setting source: target = default
  ...third // creating a whole new object to bundle whatever is remaining
} = data();

// discussion of prop: value and source: target
// object literal
var o = {
  prop: value,
  target: source, // prop = target and source = value
};

// destructuring
var {
  source: target, // opposite of above
  // why?  the role is not important, think in terms of identity
  // so property is always left: and value is on right
} = o;

object - assignemnt - destructuring;

requirement =
  "Given the {} are overloaded, must wrap the whole statement in () when using assignment destructuring, this use case is rare";

function data() {
  return { b: 2, c: 4, d: 6 };
}

var first, second;

({ b: second, a: first } = data());

destructuring - named - arguments;

// example use cases of destructuring
// when designing functions use this pattern

function lookupRecord({ store = "person-records", id = -1 }) {} // declaring a function with an object paramter
lookupRecord({ id: 42 }); // at the callsite, saying the value goes to the paramter of id
