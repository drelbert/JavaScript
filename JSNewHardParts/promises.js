introToPromises;

promises;
// a readability enhancer

// special objects built into JS
// returned immediately when the call is made to the web browser API/feature for eaxmple fetch
// that are set up to return promises

// using 2-pronged facade functions
// first initiate background web browser work outside of JS
// second return a placeholder object (promise) immediately inside JS
// this second prong produces the promise object (placeholde object)
promiseObj = {
  value: "data returned from req when the first prong/facade finishes",
  hiddenPropNamedOnFullfillment:
    "functionality that triggers when value is updated",
};

solution3;
// implementing two-pronged facade functions
// the promise based model

// declare a function named display
// at 0 ms
function display(data) {
  // at 203 ms
  console.log(data);
}

// declare a var named furtureData
// initailly undefined
// it is the returned value of fetch
// using const to store the data

// ***************
// the fetch() details
// fetch() is a facade function masking JS work
// fetch prong one in web browser: kicks off web browser feature xml http
xhr;
// needs URL, path, and the method GET
// upon return of data, this web browser feature assigns that data to thePromiseObj.value

// fetch prong two in JS: returns out an object that is stored in furtureData in the memory
thePromiseObj = {
  value: "undefiend at first but will get the data from twitter",
  onfullfillment: [
    "hidden property: array, but a place to add any functions to auto trigger when value is updated",
  ],
};
// ****************

// at 1 ms
const futureData = fetch("https://twitter.com/user");

// .then method that adds function display into thePromiseObj.onfullfillment
// at 201 ms
futureData.then(display);

// at 2 ms
console.log("this logs first");

core6PartsofJSruntime;
// memory to store data and variables
// thread of execution
// callstack (reps the execution context)
// web browser features
// the callback queue (where the function is sent after the browser feature finishes its task)
// event loop checking the callback queue

promisesAndMicrotaskQueue;

// Question: how does the promise deffered functionality get back into JS to run?
// response: with the job queue

// declare a function and set it in global memory
function display(data) {
  console.log(data);
}

// declare a function and set it in global memory
function printHello() {
  console.log("Hello");
}

// declare a function in a black box manner
function blockFor300ms() {
  // Blocked js thread for 300ms with long "for loop"
}

// the web browser feature, timer with the properties to call the function printHello and a set time of 0
// given the set time of 0, this executes immediatly and is pushed to the callback queue
// and is ready for the event loop to process it and determine if it can be popped on the call stack

// NOTE, for the event loop to allow printHello to pop on the call stack all global code has to be done executing
setTimeout(printHello, 0);

// set a const and place it in global memory, initially undefined.
// fetch is a promise function that returns out
// {value: undefined, onfullfillment: [into this array are the functions auto triggered when value is updated ]}
// fetch web browser facade feature set up an XHR request
const furtureData = fetch("http://someURL");
futureData.then(display);

blockFor300ms();

console.log("This will print first.");

// microtask or job queue for any functions that handles background work
// the new web browser feature APIs or facade functions like fetch are in the category

challenges;
//http://csbin.io/promises

//https://gist.github.com/aegorenkov/2ae91cabf21223bddca8c5b3ef3ec6f6#file-promises-js

challenge2;

let freshPromise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000);
});

function msg() {
  console.log("Confirmed", "Resolved!");
}

freshPromise.then(msg);

console.log("Processing!");

// see also mdn promise example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

challenge3;

freshPromise = new Promise(function (resolve, reject) {
  reject();
});

function rejected() {
  console.log("Rejected");
}

freshPromise.catch(rejected);

console.log("Processing!");

challenge4;

let promise = new Promise(function (resolve, reject) {
  resolve();
});

promise.then(function () {
  console.log("Promise Resolved!");
});

console.log("Not the promise.");

challenge5;

function delay() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000);
  });
}

function sayHello() {
  console.log("Hello");
}

delay().then(sayHello);

console.log("Processing...");

challenge6;
// chaining two promises, one to reolve to the other

var secondPromise = new Promise(function (resolve, reject) {
  resolve("Second!");
});

var firstPromise = new Promise(function (resolve, reject) {
  resolve(secondPromise);
});

// call the promise with chaining .then()
firstPromise.then(function (secondPromise) {
  console.log(secondPromise);
});

challenge7;
// using an API to get data from a db
// make 3 API calls and ruturn the data

let fakeUsers = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

let fakeAPICall = function fake(i) {
  let returnTime = Math.floor(Math.random() * 1000);
  return new Promise(function (resolve, reject) {
    if (i >= 0 && i < fakeUsers.length) {
      setTimeout(() => resolve(fakeUsers[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getData() {
  let apiPromises = [fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)];
  return Promise.all(apiPromises).then(function (values) {
    return values;
  });
}

getData().then((values) => console.log("Data here:", values));
