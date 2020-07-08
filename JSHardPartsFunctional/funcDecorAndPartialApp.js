functionDecorationIntro;

allowsFor =
  "for making enhancements to existing functions without modifyong the original function";

toDoThis =
  "in order to add permanent memory to an existing function, must create a new function that will run the existing function inside of itself";
decoratingAFunction;

invokingADecoratedFunction;

const oncify = function (convertMe) {
  // td 1, declaring a function
  // parameter convertMe has the entire multiplyBy2 functionality
  let counter = 0;
  const inner = (input) => {
    // the main action in this function is the saving of inner
    // when this is saved, it gets the link to the surrounding memory which is convertMe and counter
    // when the functionality known as inner returns out it is now known as oncifiedMultiplyBy2 and brings the backpack
    // backpack has multiplyBy2 and counter : 0

    // running the oncifiedMultiplyBy2
    // in the execution context, input : 0

    if (counter === 0) {
      // the condition if(..) is in the backpack
      // so 0 === 0
      const output = convertMe(input);
      // then convertMe is executed which is in the backpack

      // here it gets layered
      // the decoration happens
      // the functionality of multiplyBy2 is used (num * 2)
      // as a result of it being placed in the backpack which oncifiedMultiplyBy2 has
      // resulting in 2 * 10 = 20
      counter++;
      //counter is incrcremented to 1
      return output;
      // 20 is returned
    }
    return "Sorry, counter is 1, and this function cannot be run again";
  };
  return inner;
};

const multiplyBy2 = (num) => num * 2;
// td 2, declaring a function with an input of num*2
// cannot edit this to give it a backpack of inner, after it is saved

const oncefiedMultiplyBy2 = oncify(multiplyBy2);
// td 3, declaring a label and set its value to the execution of oncify

// this statement is how function decoration occurs
// this only appears to edit multiplyBy2
// in reality it creates a new function with access to a backpack
// the backpack acts to limit a function to run only once as it can remember its former running
// this is using closure, which is giving functions permanent memories, to supercharge/add new functionality

oncefiedMultiplyBy2(10); // 20
// the function that is really being run is inner
// the reason this is critical as inner originally had the backpack
// how?  with the functionality to run and the counter to limit the running to once
// these are both now the backpack of oncifiedMultiplyBy2

oncefiedMultiplyBy2(7); // Sorry, counter is 1, and this function cannot be run again
//  same steps as above
// but since counter has run once we get 1 === 0 thus returning "Sorry..."

memory(globalState);
oncify: "function";
multiplyBy2: "function";
oncefiedMultiplyBy2: [
  "note... at compile time the value is undefined and hence an execution context is built, run and deleted to return the value",
];

partialApplicationIntro;

partialApplicationAndCurrying = [
  "converting the arity(the number of inputs expected) of functions from 2 to 1",
  "this is important when there is an arity mismatch: one function in the list may require 2 inputs, but only one is available from the previous function",
];

functionComposition = [
  "taking in one input and returning one output",
  "in the case of arity mispmathc where a function expects 2 inputs",
  "the function needs to be decorated to prefill one of the inputs",
];

thisProcessCalled = "Partial application";

partialApplicationExample;

const multiply = (a, b) => a * b;
// this function has an arity of 2 (a, b)
// will be converting this function to result in an arity of 1

function prefillFunction(fn, prefilledValue) {
  const inner = (liveInput) => {
    const output = fn(liveInput, prefilledValue);
    return output;
  };
  return inner;
}

const multiplyBy2 = prefillFunction(multiply, 2);

const result = multiplyBy2(5);

challenges;
("http://csbin.io/functional");

solutions;
("https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/functional.js");

challenge5 =
  "build a function that accepts a callback as input and returns a function";

// function from challenge 4
const addByX = (x) => {
  const addBy = (num) => {
    return num + x;
  };
  return addBy;
};

const addByTwo = addByX(2);

// the challenge 5 solution
const once = function (func) {
  let counter = 0;
  let onceValue;
  const innerFunc = (val) => {
    if (counter == 0) onceValue = func(val);
    coutner++;
    return onceValue;
  };
  return innerFunc;
};

const onceFunc = once(addBy2);

console.log(onceFunc(2));
console.log(onceFunc(4));

challenge6 =
  "write a function that takes the number of times the callback needs to be called before executing";

var after = function (count, func) {
  let counter = 0;
  return (val) => {
    if (++counter >= count) func(val);
  };
};

var called = function () {
  console.log("Hola");
};

var afterCalled = after(3, called);

afterCalled(); // nothing
afterCalled(); // nothing
afterCalled(); // "Hola"
