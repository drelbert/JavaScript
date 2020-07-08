making - decisions - conditionals;

ifElseStatements;

is = "most common type of if statement = conditions";

syntax;
if (condition) {
  // condition holds place for comparison operators
  // code to run if condition is true
} else {
  // run this instead
}

// example
let studentsPaid = true;

if (studentsPaid == true) {
  let studentEnroll = "enroll now";
} else {
  let studentEnroll = "please pay first";
}

// use this in a function
var studentPaid = true;

function studentEnrollMsg() {
  if (studentPaid == true) {
    let studentEnroll = "Enroll here";
  } else {
    let studentEnroll = "Please pay here";
  }
}

studentEnrollMsg();

comparisonOperators;

are = "used to test the conditions in a conditional";

logicalOperators;

are = ["and &&", "or ||", "not !"];

switchStatements;

are = "for taking one input then look through a set of choices to match it";

switch (expression) {
  case choice1:
    // run this code
    break;
  case choice2:
    // run this instrad
    break;

  default:
  // just run this
}

ternaryOperator;

is = "for two choices that depend on a true/false condition";

let greeting = isLoggedIn ? "Please Log In" : "Welcome";

looping - code;

are = "all about repetition called iteration";

theFeatures = [
  "counter = initialized with a given value",
  "exit condition = criteria to stop the loop, usually the counter get to x",
  "iterator = incremtns the counter a given amount on each loop",
];

commonLoop = "for";

// the syntax
for (initializer; exit - condition; final - expression) {
  // details
  // initalizer = counter
  // exit-condition usually requires a comparison operator ==, >, <
  // final-expression = evaluated on each loop iteration
  // run this code
}

// example
var courses = ["Falcon Code", "Vader Leadership", "X Wing OS Update"];

var text = "Current courses are: .";

for (let i = 0; i < courses.length; i++) {
  text += courses[i] + " ,";
}

note = "can add a conditional if needed";

functions;

returnValues = [];

// example
function random(number) {
  var result = Math.floor(Math.random() * number);

  return result;
}
console.log(random(44));
// 11

events;
