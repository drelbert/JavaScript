intro;

codeRunning;

resultsIn = "creation of a global execution context";

hasThreadOfExecution = "parsing and executing the code line by line";
hasLiveMemory =
  "variable environment, data store variables with data aka the global variable environment";

var num = 3;
// td 1
// binding the variable num to 3
// storing it in the global memory
// scope level 1 orange
function multBy2(inputNumber) {
  // td 2
  // creating a function definiton named multBy2
  // storing it in the global memory
  // setting the parameter to inputNumber
  // inputNumber scope level 2 blue
  var result = inputNumber * 2;

  return result;
}
var output = multBy2(4);
// td 3 binding the var output to the function multBy2 with an argument of 4
// td 3 alternative: creating a new label in memory called output with value of multBy2 with arg 4
// output is the command to run the function
// creation of a new execution context
// local memory gets the parameter inputNumber : argument 4
// local memory gets result : 8
// return out to the global memory and store in the variable = output
// the thread of execution handles just the one thing = output, until its finished
// when complete, this gets garbage collected
var newOutput = multBy2(10);
// td 4 creating a new label in local memory called output with value of multBy2 with arg of 10
// newOutput is the command to run the function
// creation of a new execution context
// local memory gets the parameter inoutNumber : arguemnt 10
// local memory gets the result : 20
// return out to the global memory and store in the variable  = newOutput
// the thread of execution handles just the one thing = newOutput, until its finished

// note that together the global memory and the local execution contexts make up the global execution context

callStack: multBy2(10); // is pushed on when the execution context fires up
// is popped off after thread of execution finishes
multBy2(4); // is pushed on when the execution context fires up
// is popped off after thread of execution finishes
____________;
global;

introAsync;

function display(data) {
  // td 1 function definition display created
  // stored in the global memory
  // setting the parameter to data
  console.log(data);
}

var dataFromAPI = fetchAndWait("https://twitter.com/will/tweets");
// td 2 variable (binding) declaration called dataFromAPI which calls the fetchAndWait function
// creating a new execution context

display(dataFromApi);

console.log("Later on...");
