generators;

customIterators =
  "useful tool, but creating them calls for care to maintain consistent state";

// here is an example of having to persist state

// td 1, create a new generator function with no parameter and store it in global memory
function createFlow(array) {
  let i = 0;
  // defining the inner object with a method
  const inner = {
    next: function () {
      const element = array[i];
      i++;
      return element;
    },
  };
  return inner;
}

// creating a constant which is initially undefined, but will be the return value of createFlow
// the callsite/call to createFlow()
// build an execution context
// first thing in memory is array, second is i
// array = [4, 5, 6]
// i = 0
// with this constant is created the backpack with the array[4,5,6] and i = 0 and is STATE
const objectWithReturnedNextElementMethod = createFlow([4, 5, 6]);

// declare const element1 and is the retuend value of the object objectWith... that has a function on it "next"
// build an execution context
// element: array[i], which is [4, 5, 6][i]
// i++
// return element is 4
const element1 = objectWithReturnedNextElementMethod.next();
const element2 = objectWithReturnedNextElementMethod.next();

henceGenerators = [
  "allow for defining an iterative algorithm by writing a single function whose execution is not continuous",
  "generators are written with the function* syntax",
];

generatorFunctionWithDynamicData;

// this feature allows for the yielding of data with a function
// also allowing for dynamically setting the flow with code

// simple example
// td 1 declare a generator function createFlow
function* createFlow() {
  yield 4;
  yield 5;
  yield 6;
}

// td 2 declare a constant, initially undefined and will be the output of the call to createFlow
// when called, createFlow returns out a generator object with next function on it
// so this places a next element on the constant returnedObject...
const returnedObjectWithNextElement = createFlow();

// td 3 declare a constant and call the next method on the object returnedObject...
// this is a command to begin the execution context of createFlow()
// yield 4 is the first line
// yield suspends the execution context (like a return statement)
// thus 4 is yielded out as the output of returnedObject...
// and assigned to element1 in the global memory
const element1 = returnedObjectWithNextElement.next();

// td 4 is the same as td 3
const element2 = returnedObjectWithNextElement.next();

// example illustrating how to dynamically set what data flows

// td 1 declare a generator function
function* createFlow() {
  const num = 10;
  // this is a command to throw you out of the function
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

// td 2 declare a constant, initially as undefined and will be the output of the call to createFlow
// when called, createFlow returns out a generator object with next function on it
// the syntax for this object is {next: "F" }
const returnedObjectWithNextElement = createFlow();

// td 3 decalre a constant and call the next method of the object returnedObject...
// this is a command to begin the execution context of createFlow()
// declare a constant num to have the value of 10
// declare a constant newNum to have the yield num value
// but since yield kicks things out of the function, newNum never gets a value so its undefined
// so the rest of the function body line 80 and 81 are "paused" or suspended
// the .next() initiates the going back into the execution context
// until then, go to element2
const element1 = returnedObjectWithNextElement.next();

// td 4 declare a constant and call the next method of the object returnedObject...
const element2 = returnedObjectWithNextElement.next(2);

generatorsQA;

asyncGenerators;
// requirements of aynsc JS
// 1. initiate a task that takes a while (http GET)
// 2. move on to more syncronous code in the meantime
// 3. run some functionality once the requested data has come back

// async generator example
// combining event loop, closure, creating new generator functions in one place

// this is how async await from scratch would be built

// td 1 declare a function
function doWhenDataReceived(value) {
  returnedObjectWithNextElement.next(value);
}

// td 2 declare a generator function
function* createFlow() {
  // in the execution context, local memory, data is the first thing declared and is undefined
  // yield kicks us out to do call the fetch facade function (in JS it creates a promise object)
  // promise object syntax {value: undefined, onFullfilled: [any auto triggered functions] }
  // promise object is returned out to returnedObjectWith...
  // and is stored in futureData
  // bach to fetch, fetch web browser feature spins up an xhr feature(props are: URL, path "/", and type(GET))
  // this feature will update the futureData.value in the promise object
  const data = yield fetch("http://twitter.com/user804/1");
  console.log("data");
}

// td 3 declare a const and initially undefined
// here the output of calling create flow
// is the generator object with the next method on it
// this object will be stored in returnedObject...
const returnedObjectWithNextElement = createFlow();

// td 4 declare a const which is the output of returnedObject...next() call
// and enters createFlow's execution context
const furtureData = returnedObjectWithNextElement.next();

// td 5
furtureData.then(doWhenDataReceived);

mdnOnTheGeneratorFunction =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*";
