note;
// one common interview question = what is the event loop
// two = what is closure

JSExecution;
// what happens when JS executes code?

// one = thread of execution, top to bottom
// two = live memory of variables and data, called the Global Variable Environment

//example

// create a global variable num and set the value of 3
var num = 3;

// declare a function multBy2 and save into memory
function multBy2(inputNumber) {
  var result = inputNumber * 2;
  return result;
}

// create a global var name and set its value to Ragnar
var name = "Ragnar";

// invoking/calling the function
// this invoking will result in a new execution context
var output = multBy2(2);
var newOutput = multBy2(56);

globalMemory; // the variable environment
// num = 3
// function definition
// name = "Ragnar"
// output : 8

executionContext; // space in which codes executes

output = multBy2(2);
localMemory;
// paramter is inoutNumber, argument is 2
// result is 4
// return 4

callStack;
// structure for storing data
// that are the execution contexts to be run by JS
// allows JS to keep track of what to execute

introToAsyncronicity;
// the backbone of modern web development in JS

commonCase;
// wait for data from an API
// or for a timer to complete

// thus a tension between...
// delay some code from executing
// but not block the thread

noWebFeaturesinJS;
// these features are in the browser and we hence get access to them

solution1;
// untenable but illustrative

function display(data) {
  console.log(data);
}

// call/invoke the made up function fetchAndAwait
var dataFromAPI = fetchAndWait("http://dataWhatere.com");

// user can do nothing here
// could be 300 ms or whatever
// no JS code is allowed to run for whatever time it takes to get the data

// this returns first
display(dataFromAPI);

// then this is logged
console.log("this later");

asynchronousWebBrowserFeatures;
// the web browser API's
// features of the web browser and JS is one feature,
// so is the DOM
// the console
// local storage
// XHR ability/talk to the internet

solution2;
// simple and illustrative

function printHi() {
  console.log("Hola");
}

// calling setTimeout and passing in two arguments, printHi and 1000ms
// setTimeout is a facade in JS
// it spins up timer in the web browser features
setTimeout(printHi, 1000);

console.log("This fires first");

callingOutsideWorld;

function printHi() {
  console.log("Hi");
}

function blockForOneSec() {
  // blocking the JS thread for 1 sec
}

// at 1ms
// calling setTImeout with two arguments
// passing in a function declaration printHi to be called via the event loop
// setTimeout facade(label) for timer which spins up the web browser feature timer

// will not get to the callstack
// rather placed in the callback queue at 1ms
// and allowed on the callstack when the callstack is empty

// this process is controlled by the event loop
// its role is to continously monitor the callstack status
setTimeout(printHi, 0);

// at 2ms
// pushed to call stack for 1000ms
blockForOneSec();
b;

console.log("This logs first.");

core6PartsofJSruntime;
// memory to store data and variables
// thread of execution
// callstack (reps the execution context)
// web browser features
// the callback queue (where the function is sent after the browser feature finishes it task)
// event loop checking the callback queue

wrappingUpWebBrowserAPIs;

challenges;
//http://csbin.io/promises

//https://gist.github.com/aegorenkov/2ae91cabf21223bddca8c5b3ef3ec6f6#file-promises-js

challenge1;

function printHi() {
  console.log("Hi");
}

setTimeout(printHi, 1000);

// immediatley calls function and logs Hi
printHi();
