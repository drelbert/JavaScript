asyncAwait;
// removes the need for a function that triggers the return to the execution context
// it fixes the inversion of control problem of callbacks

// td 1 creating an async function
async function createFlow() {
  // in execution context, hit "This First"
  console.log("This First!");
  // adding this to memory
  // data will be the evaluated result of the await fetch... expression
  // fetch prong one in JS returns out a promise object {value: "undefined", onfullfillment: []}
  // fetch prong two in browser spins up XHR (the url, path "/will", GET) that sends off the http req
  // await throws us out of the execution context to the console.log("This Second")
  const data = await fetch("http://twitter.com/api/users/will/tweets/1");

  // td 3 this gets to run and has the value "hi" after the await expression evaluates
  console.log(data);
}

// td 2 invoke the createFlow function
// immediatley enter its execution context
createFlow();

console.log("This Second.");

// after a couple of seconds tweet "hi" is returned
// placed in the promiseObject.value line

//callstack
createFlow(); // pushed on after the data is returned
global();
