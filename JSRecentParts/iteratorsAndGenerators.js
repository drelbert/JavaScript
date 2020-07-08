iterator = [
  "pattern to consume values in a data source",
  "using .next",
  "must be iterable",
];

iterables = [
  "something that can be iterated over",
  "anything where we can construct an iterator to consume the constituent values",
];

var str = "Bueno"; // iterable
var global = ["M", "o", "n"]; // iterable

var it1 = str[Symbol.iterator](); // built special meta locator to find a location on the object

console.log(it1.next()); //invoking it as a function to return iterator result { value: "B", done: false };

declarativeIsUsingiterators;
use =
  "for..of loop, taking iterables, iterates over them and then returns the iterated value";

var str = "Hi";
var it = str[Symbol.iterator](); // making an iterator instance

// or use the ES6 default built in
for (let v of it) {
  console.log(v);
}
// "H", "i"

// also can use the ...operator
var letters = [...str];
letters;
// ["H", "i"]

dataStructure - without - iterables;
object = "are not iterables, and must build own and use =>";

generators;

builtFor =
  "using a declarative appraoch to creating a iterator producing function";

function* main() {
  // the generator function
  yield 1;
  yield 2;
  return 3; // bad practice, needs to be "yield"
}

var it = main(); // invoking the generator function but not running, rather produce an iterator

it.next(); // { value: 1, done: false };
it.next(); // { value: 2, done: false };
it.next(); // { value: 3, done true};

// or use the ...operator
// [...main()];    [1, 2]  note no 3 since the return stops the generator function
