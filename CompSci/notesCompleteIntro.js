// Complete Intro to Computer Science

sectionAlgorithimAnalysis;

hasTimeorComputationalComplexity;
think = "in terms sof trade offs,  get a set of methods to think this way";

bigOTimeComplexity;

point =
  "bigO is concerned with distilling the algosithim to just the essentials, input length and number of operations ";

illustration = linearO(n);
// this function cross adds the first and last elements in an array
// how many instructions for the cpu given the array length?
function crossAdd(input) {
  const answer = [];
  // this one for loop = one set of instructions and runs for every element in the array
  // the complexity if O(n) linear
  for (let i = 0; i < input.length; i++) {
    let goingUp = input[i];
    let goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}

illustration = quadratic_O(n2);

// double nested loop hence O(n2)
function makeTuples(input) {
  let answer = [];
  // for (initializer; test; increment) each of these three are expressions
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      // here is the statement
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}

illustration = constant_O(1);

// no loops, run an operation and exit = constant time
// ask = does the function take more time is array is longer?
function getArrayMiddle(array) {
  return array[Math.floor(array.length / 2)];
}

useCase;
commentSystem = "whats the right bigO for sort and filter feature?";

depends = {
  ask: "what's the size of user population?",
  how: "to write code that is maintainable, readable",
  compare: "tools/algorithms to reveal the right fit",
  think: "in terms of trade offs",
  constraints: "what are they?",
  devices: "what are they",
  endUser: " who are they",
};

alsoHasSpatialComplexity;
// how much ram taking up

linear;

logrithmic;

constant;

quadratic;
