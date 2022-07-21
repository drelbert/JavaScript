// recursion
// all about breaking down a very large problem into smaller ones to solve

// think of english definition = something that is defined in terms of itself
// in this context not helpful, but in computers, it is

// not the most efficient, but results in elegant code

// how to think in recursive terms?
first = "need a base case";
// check for truthyness
// if true, no need for recursion

// one form the base case can take
if (expression) statement;

second = "need a recursive case";
// the function calls itself

// call stack and recursion example
function fact(x) {
  // base case
  if (x == 1) {
    return 1;
    // recursive call
  } else return x * fact(x - 1);
}

fact(3);

// simple example 1

function check() {
  // base case
  if (expression) statement;

  // recusive case
  check();
}

// simple example 2
// oversimplified example, not useful
// could be rewritten as map
function countTo(max, current) {
  // base case
  // if: expression checking for truthyness
  if (current > max) return;
  // statement
  console.log(current);
  // recursive case
  countTo(max, current + 1);
}

console.log(countTo(10, 1));

// use case fibonacci

function fibbRecrse(n) {
  // base case, expression checking truthy
  if (n === 2 || n === 1) {
    // statement to execute
    return 1;
  } else if (n <= 0) {
    return 0;
  }

  // recursive case
  // this is the fibonacci formula
  return fibbRecrse(n - 1) + fibbRecrse(n - 2);
}

console.log(fibbRecrse(6));

// often recursive functions can be rewritten as an iterative solution
// these are more efficient
function fibIterate(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence[n];
}

// recursive sort with nested addition
// function that accepts an array that only accepts numbers and arrays
// nested arrays may only conatin those two items as well

let arr = [4, 8, [77, 4, [8, 9, 0, 88], 5]];

function nestedAdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // compare
    const current = array[i];
    // the base case, the if conditon/statement combo
    // helper function to track if something is an array
    // determining if adding a number or an array
    // if array, recurse more
    // using the Array.isArray method
    if (Array.isArray(current)) {
      // recurse
      sum += nestedAdd(current);
      // this is the recursive case
    } else {
      sum += current;
    }
  }
  return sum;
}

console.log(nestedAdd(arr));

module.exports = nestedAdd;

// resursive sort with factorials
// similar to fibonacci

factoral = n * (n - 1);
// example
// 5! = 5 * 4!

function factorial(n) {
  // base case is 1
  // condition_1
  if (n < 2) return 1;
  // there will be only one recursive call with factorals given n - 1
  // satement_1
  return n * factorial(n - 1);
}

module.exports = factorial;
