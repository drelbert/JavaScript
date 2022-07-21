// how to efficently construct function bodies, given a requirement?
// ask

// what are the components to the requirement?
// are expressions = phrases needed?
// what statements = commands are needed?

// what is the action = print, compute a value, recurse to compute, iterate?

// what form of statement: loop, conditional, jump

// what styles of constructing function bodies exist?

// how do I determine if recursion is best?

// conditionals
// is there a need execute a statement conditionally?
// use if

if (expression) statement;

if (!accountCheck) accountCheck = "Please create an account.";

// need to add a clause for when expression is false?
// use if /else

if (expression)
  // if truthy
  statement;
// if flasy
else statementTwo;

// is there a need to execute statements conditionally (make decision with a control statement)?
// also, are we dealing with control flow?
// then use switch
let type = "El Macho!";

function conditional(param) {
  let v = param;

  switch (typeof v) {
    case "number":
      // statement to execute when typeof v matches "number"
      return `Thank you for entering the number ${v}, value accepted.`;
    case "string":
      // statement to execute when typeof v matches "string"
      return `Invalid input, ${v} is a string, please enter a number.`;
    default:
      // statement executed when value !== expression
      return `The value ${v} is not a valid value for this conditional.`;
  }
}

console.log(conditional(type));

// loops

// is there a need for the interpreter to bend a path back on itself and repeat a portion of code?
// then use loops
// while, do/while, for, for/of

// while
while (
  // if true
  expression
)
  // then execute this...
  statement;

while (user == 456) {
  console.log("Logged In");
}

// for
// these three manipulations make up the expression
for (initailize; test; increment) statement;

// example sum function
let arr = [4, 8, 44, 60];

function sum(items) {
  // assign the inital total value to 0
  // this also could be tax or tip value to be added to total
  // let tax = .6
  let total = 0;
  // initialize: index of 0
  // test: that i is less than last element
  // increment: add one to operand and return
  for (let i = 0; i < items.length; i++) {
    // assign the current to item at index i
    const curr = items[i];
    // add and assign so total = total + curr
    total += curr;
  }
  return `Total is ${total}, have nice day!`;
}

console.log(sum(arr));

// for ... of
// is there a need to work with iterable objects?
// then use for/of (is there a need to iterate an object, then use for/in)

// syntax
for (variable of iterable) {
  statement;
}

let iter = "Some Value Here.";
for (let e of iter) {
  console.log(e);
}

// use with Set()
let userIds = [587, 89, 999, 805, 904, 2, 77, 805];

let userSet = new Set(userIds);
let newSet = [];

for (user of userSet) {
  newSet.push(user);
}

console.log(newSet);

// jumps

// cause the interpreter to jump to new location in source code

// labels
// for naming a loop or conditional to use break or continue
// use with break and continue

// return
// statement that end function execution and specifies a value to be returned to caller

// is there a need to handle an exception?
// try/catch/finally

try {
  // statement to be executed
  try_statement;
} catch (exception_var) {
  // optional exception_var to hold an exception object
  // statement that is executed if exception thrown in try block
  catch_statements;
} finally {
  // executed after try statement
  finally_statements;
}

// declarations
notTechnicallyStatements = ["let", "const", "function"];
// are actually declarations

// expressions are evaluated
// statements are executed

// declarations dont "run"
// are processed prior to code running

// simple expression statement in function body

// requirement: write function to convert C to F
// given f = c *9/5 + 32

function convert() {
  let f;
  // statment to compute f with state updater formula passing in c as the arg
  f = (c * 9) / 5 + 32;

  return f;
}

console.log(convert(-30));

// string reversal function

let a = "Array!";

function rString(str) {
  // convert string to array with .split()
  str = a.split("");
  // reverse the converted array string
  str.reverse();

  return str;
}

console.log(rString());

// same request but with for loop
function revWithFor(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

// return the factorial of an integer
// use recursive calls

function factorialize(n) {
  // condition ? expressionIfTrue : expressionIfFalse
  return n ? n * factorialize(n - 1) : 1;
}

console.log(factorialize());
