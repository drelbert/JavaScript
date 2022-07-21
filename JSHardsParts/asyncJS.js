singleThreadedExecutionReview;
promises = [
  "an ES6 feature",
  "under the hood not radically different from the callback model",
];

JSExecutingRegularCode;

// declaring a variable num and setting its value to 3 in global
let num = 3;

// td declaring a function with an parameter
function mult2(inputNum) {
  let result = inputNum * 2;
  return result;
}

// td define the variable in the global memory with a value to be the result of mult2 and is unitialized
let output = mult2(num);

let outputTwo = mult2(10);

memory(GlobalState);
num: 3;
mult2: "F";
output: 6;

executionContext: output = mult2(3);
localMemory;
("inputNum = 3");
("result : 6"); // result of inputNum(3) * 2 = 6
// thread of execution is occupied with the running of this function
// it must finish before moving on

executionContext: outputTwo = mult2(10);
localMemory;
("inputNum = 10");
("result : 20"); // result of inputNum(10) * 2 = 20
// thread of execution is occupied with the running of this function

asynchronicityInJS;
// example that illustrates JS is not enough to achieve asyncronity
function printMsg() {
  console.log("Hola");
}

setTimeout(printMsg, 1000); // setTimeout is a built-in function
console.log("First One!");
// First one!
// Hola

currentAndNeededComponents = [
  "core JS engine has 3 parts"[
    ("thread of execution", "memory/variable enviornment", "call stack")
  ],
  "components to add"[
    ("web browser APIs/node background APIs",
    "promises",
    "event loop, callback/task queue and mictrotask queue")
  ],
];

AsyncBrowserFeatures;

about = "ES5 solution = callback functions and web browser APIs";

webBrowserHas;
webBrowserFeature: "JS facade/label for web browser features";

HTMLDOM: "JS label = document";
NetworkRequests: "JS label = fetch(was xhr)";
console: "JS label = console";
timer: "JS label = setTimeout";

webAPIExample;

function printHello() {
  console.log("Hi!");
}

// the web browser feature setTimeout and in JS its timer
// this is a method on the window object
// 2 arguments (are others) function and duration value
setTimeout(printHello, 1000);

console.log("Me First");

memory(GlobalState);
printHello: "F";

console: "Me First at 1 mili sec";
Hi: "printed at 1000 mili sec";

executionContext: setTimeout(printHello, 1000);
localMemory;
("web Browser: timer");

webBrowserFeatures: timer: duration, 1000;

webAPIRules;

point =
  "need to have specific rules to explain how JS works with the web browser features";

function printHi() {
  console.log("This second");
}

function blockFor1Sec() {
  // the body of this function could be a for loop
  // would be the blocking function
}

// setTimeout method with arguemnts: 1. callback 2. duration value
setTimeout(printHi, 0);

blockFor1Sec();

console.log("Me first");

callbackQueueAndEventLoop;
//using above fcode

memory(GlobalState);
printHi: "F";
blockFor1Sec: "F";

console: "first the Me First, followed by Hi";

executionContext: setTimeout(printHi, 0);
// triggers in the web browser the turning on of a timer

executionContext: blockFor1Sec();
// runs immediatly via the callstack then is popped

executionContext: console.log("Me First");
// runs after blockFor1Sec

// on completion at 0ms, run printHi

// a queue for items that are ready to run
// after console.log runs, at 1002 ms goes to the callstack then is popped

theEventLoop = [
  "the feature that checks what runs looking into the callback queue and the call stack",
  "it first checks the call stack for any code, runs that first, moving on only if there is nothing to run",
  "then goes to the callback que",
  "for example, printHi is on the callback queue",
];

challenges;

linkToChallenges;
("http://csbin.io/async");

linkToSolutions;
("https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/closures.js");

challengeOne = "what is the print order?";
function sayHi() {
  console.log("Hi");
}

function message() {
  setTimeout(sayHi, 0); // pauses the execution of the sayHi function
  console.log("Amigo");
}

message();

// Amigo Hi

challengeTwo = "create a function delayedGreet that logs welcome after 3 sec";

function delayedGreet() {
  console.log("Welcome");
}

setTimeout(delayedGreet, 3000);

delayedGreet();

challengeThree = "write a function that logs goodby then hello";

function hiBy() {
  console.log("Hi");

  setTimeout(() => console.log("Bye"), 2000);
}

hiBy();

challengeFour = "create a function that logs hi again every sec";

function hiAgain() {
  setInterval(() => console.log("Hi Again"), 1000);
}

hiAgain(); // will keep running as no stop condition

challengeFive =
  "write a function that logs  hi for now every second, but only for 5 seconds, use clearInterval";

function hiForNow() {
  let intervalId = setInterval(() => console.log("Hi For Now"), 1000);
  setTimeout(() => clearInterval(intervalId), 5000);
}

hiForNow();

challengeSix =
  "write a function that accepts 3 args and does some other complex things";

function everyXForYSecs(func, interval, duration) {
  let intervalId = setInterval(func, interval * 1000);
  setTimeout(() => clearInterval(intervalId), duration * 1000);
}

// the callback
function theEnd() {
  console.log("Tis the end");
}

everyXForYSecs(theEnd, 2, 10);
