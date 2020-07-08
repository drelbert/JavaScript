statement = [
  "stands on it own",
  "display something or change program state",
  "resulting in a side effect",
];

bindings;

keepingInternalState = "aka how does it remember things?";
answer = "the binding or variable";

functionsAs = "the way a program catches and holds a value";
let session = 44;

note = "bindings point to or grasp a vlaue, but not for ever";

let mode = "light";
console.log(mode);
// light

mode = "dark"; // reassign
console.log(mode);

// more details
var name = "Magnus";
const student = "Register "; // note on const = a constant binding for pointing at the same value for ever
console.log(greeting + name);
// Register Magnus

functions;

simple = "a piece of a program wrapped in a value";

console.logFunction;

isFor =
  "writing out its arguments to a text output device, like the console in a browser";

let x = 30;
console.log("the value of x is", x);
// the value of x is 30

returnValues;

note =
  "showing a dialog box or writing text to screen is a side effect of a function -> useful";
and = "functions also produce a value = 'return a value' ";
expressions = "anything that produces a value in JS";

controlFlow;
conditional;
looping;

makeUp = "more than one statement and these are executed top to bottom";

conditionalExecution;

createdWith = [
  "the if keyword",
  "if skips or executes depending on a boolean expression",
  "the deciding expression comes after the keyword",
];

conditionTranslates;
if (!Nunber.isNaM(theNumber)) {
  //..
}
meaning;
("unless theNumber is not-a-number, do this");

chainForMultiplePaths;
let num = Number(prompt("Pick number"));

if (num < 10) {
  console.log("smallish");
} else if (num < 100) {
  console.log("med");
} else {
  console.log("Grande");
}

whileAndDoLoops;

controlFlow = "for running a piece of code multiple times is a loop";

description =
  "for going back to some point in the program and repeat given current program state";

let number = 0;
while (number <= 22) {
  // while creates the loop followed by an expression in () and then a statement in {}
  console.log(number);
  number = number + 2;
}
// 0
// 2
// ..

forLoops;

are = "slightly shorter and more powerful than the while/do loops";

for (let number = 0; number <= 12; number = number + 2) {
  // in the () are all the statements related to the state
  // initializer = let number = 0
  // checks if need to continue = number <= 12
  // state updater after each iteration = number = number + 2
  console.log(number);
}
// 0
// 2
// 4
// ..

breakOut;

use = "break";

updateBindingsSuccinctly;

needToUpdateBinding =
  "for holding a value based in that bindings previous value";

counter = coutner + 1;
sameAs;
counter += 1;
sameAs;
counter++;

exampleUpdated;
for (let number = 0; number <= 12; number++) {
  console.log(number);
}

dispatchOnAValueUseSwitch;

switch (
  prompt("What's in Lofoten?") // program will execute at matching label in the case line
) {
  case "hiking":
    console.log("Many trails and mountains.");
    break;
  case "skiing":
    console.log("It will be cold, but fun.");
  case "surfing":
    console.log("Unstad for sure in winter and summer.");
    break;
  default:
    console.log("Unknown activity type.");
    break;
}

loopingATriangle;

for (let i = 0; i < 7; i++) {
  console.log("#".repeat(i + 1));
}

also;

for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}

fizzBuzz;
// solution for part 1
for (let num = 0; num <= 100; num++) {
  if (num % 3 == 0) {
    console.log("div by 3");
  } else if (num % 5 == 0) {
    console.log("div by 5");
  } else if (num % 3 == 0 || num % 5 == 0) {
    console.log("div by 3 and 5");
  } else console.log(num);
}

// solution for part 2
for (let num = 1; num <= 100; num++) {
  let output = "";
  if (num % 3 == 0) output += "Fizz";
  if (num % 5 == 0) output += "Buzz";
  console.log(output || n);
}

chessBoard;
needToSolveThis;
