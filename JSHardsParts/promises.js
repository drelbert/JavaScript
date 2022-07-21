promisesIntro;

issue = "no way to track in JS, the background features that are running";

issueTwo =
  "no way to account for what's happening in web browser features and tracking of that in the state/global memory";

promisesAllow = "for the tracking of web browser activity in JS memory";

es6Introduced = [
  "two pronged facade functions"[
    ("initiate background web browser work",
    "return a special placeholder object (promise) immediately in JS")
  ],
  "resuling in a mapping of the background feature and JS",
];

promises = [
  "set an operation running and then wait until the res has returned before running another operation",
  "designed to account for action in web browser has consequence in JS memory to allow for consistency",
  "x is happening in web browser and with promises, it can be tracked in JS as well",

  "prior to promises = async callbacks",
];

webBrowser = {
  isRunning: "JS Engine",
  network: "JS has fetch : web browser has network req",
};

promisesExample;
//  declaring a function display and store it in global memory
function display(data) {
  console.log(data);
}

let futureData = fetch("https://twitter.com/dVader/22");
futureData.then(display); // .then(display) puts the function into promise.onFullfilled

console.log("This First");

memory(GlobalState);
display: "F";
// at first unitialized,
// then get the promise object
futureData: var promise = {
  value: "Hi", // from /dVader/22
  onFullfilled: [display],
};
fetch: "F";

executionContext: futureData = fetch("https://..");
// fetch first consequence returns the object: promise
// fetch other consequence is in the web browser(network request)
// fetch defaults to GET
var promise = {
  value: "", // this value property is updated on completion of futureData
  onFullfilled: [], // this array gets any functions that are needed to run when the value prop returns
  // in this case its display
};
executionContext: futureData.then(display);
// the running of this execution context inserts the display function into onFullfilled array

console.log("This First");
//then at 270m
console.log("Hi");

webBrowserFeatures;
// network request to domain twitter.com
// path /dVader22/
// GET

webAPIAndPromisesExample;

asyncCodeMeans =
  "code not running in order, no longer will code have to run in order";

// this code shows the entire map of async in JS

function display(data) {
  // td declare a function display and store it into global memory
  console.log(data);
}

function printHi() {
  // td declare a function and store it into global memory
  console.log("Hola");
}

function blockFor300ms() {
  // td declare a function and store it into global memory
  // blocks JS thread for 300ms
}

setTimeout(printHi, 0);

let futureData = fetch("https://twitter.com/dVader/22");
futureData.then(display); // this function places display into the futureData.unfullfilled array

blockFor300ms();

console.log("This displays first");
// this is the priority

globalMemory(GlobalState);
display: "F";
printHi: "F";
blockFor300ms: "F";
futureData = {
  value: "Hi",
  unfullfilled: [display],
};

"Oms" = setTimeout(printHi, 0);
// web browser : Timer

"1ms" = futureData - fetch("https://..");
// one: JS consequence creates a new
let promise = {
  value: "",
  unfullfilled: [],
};
// two: teb browser consequence is network request

futureData.then(display);
// stored into furtureData in the globalMemory

"2ms" = blockFor300ms();
// at 302ms is popped off callstack

executionContext: "302" = console.log("This displays first"); // runs

"303" = display("Hi");

"304" = printHi("Hola");

callStack;
// printHi()
// display("Hi") => popped of at 303ms
// blockFor300ms() => popped off at 302 ms
// global() at bottom

microtaskQueue; //interim queue = microtask queue
// display is put in with the "Hi" data at 270ms and popped of at 302ms

callbackQueue; // in spec = the task queue
// printHi popped off at 304ms

webBrowser;
// fetch in JS -> network request
// setTimeout in JS -> Timer

webBrowserFeatures;
// on completion = printHi
// network request on completion at 270ms = futureData.value = "Hi"

promisesReview;

brightErrorHandling =
  "with the promise object, there is an onRejection[] hidden property ";
