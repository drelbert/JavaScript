functionVProcedures;

point = "just because the function keyword is present, not necc a function";

// illustration of procedures

function addNum(x = 0, y = 8) {
  // not a function, but using the function keyword
  // actually a procedure which is a collection of procedures
  var total = x + y;
  console.log(total);
}

function extraNumbers(x = 2, ...args) {
  // not a function, functions can only call other functions
  // still just a procedure
  return addNums(x, 40, ...args);
}

addNums();
// 8

extraNumbers(3, 5, 2);
//43

functionNamingSemantics;

goal = "create relationships that are obvious to the reader of code";

function tuple(x, y) {
  return [x + 1, y - 1];
}

var [a, b] = tuple(...[5, 10]);

a; // 6
b; // 9

function inFp() {
  // has to take input
  // has to return output
  // can only call other functions
  // no side effects
}

functionIs = [
  "the relationship between the input and the output",
  "the semantic relationship between input and computed output",
  "inputs and outputs have to be direct",
];

naming = ["name must describe the relationship between the input and output"];

// illustration
function shipRate(size, weight, speed) {
  // function name describes the semantic relationship
  return (size + 1) * weight + speed;
  // returns an output
}

sideEffects;

about = [
  "indirect inputs and or",
  "indirect outputs",
  "invalidate the idea of a function",
];

buildingTheDefinition = [
  "direct input semantically related to direct output",
  "so must take direct inputs aka arguments passed as parameters",
  "and compute then return a value without assigning to anything ourside its scope",
  "everytime the function is executed with the same inputs, will always return the same outputs",
  "there is more",
];

// just a procedure
function shippingRate() {
  // note no params so missing the first part of the semantic relationship: inputs
  rate = (size + 1) * weight + speed;
  // note no return value so missing the direct output
}

// this will allow for the calculation of the shipping rate, but its in the global.
var rate;
var size = 12;
var weight = 4;
var speed = 5;
shippingRate();
rate; // 57

size = 8;
speed = 6;
shippingRate();
rate; // 42

// function
function shippingRate(size, weight, speed) {
  //parameters present to signal the eventual presence of input(aka arguments)
  return (size + 1) * weight + speed;
}

var rate;

rate = shippingRate(12, 4, 5); // 57,  the function call, giving direct inputs and getting direct output
// this function call is what matters

rate = shippingRate(4, 6, 99); // 129  the function call, giving direct inputs and getting direct output
// this function call is what matters

console.log(shippingRate(4, 6, 99)); // 129  // this is a side effect

sideEffectsList = [
  "input/output(I/O) = console, files, other",
  "database storage",
  "network calls",
  "DOM",
  "timestamps",
  "random numbers",
];

hence = "it is practically and theoretically impossible to avoid side effects";

so = "minmize side effects and where needed, make them obvious";

practicePoint = "make clear a. functions and b. side effects";

pureFunctionsAndConstants;

is =
  "a function that takes all of its inputs and outputs as direct and has no side effects";

theGoal = "obtain a pure function call";

// pure
function add2(x, y) {
  return x + y;
}

// adding the const/var, z is a const in practice even if not identified as such
const z = 1;

// impure with the variable z alone
function addAnother(x, y) {
  return add2(x, y) + z; // the z variable is an indirect input thus invalidating the predictable nature of this function but... add the const/var z = 1 above
}

addAnother(20, 21); // 42  // a pure function call, even though we are accessing a variable in the global which is const z = 1

reduceSurfaceArea;

to =
  "reduce the surface area where reassignemnt can occur and increase readability";

// example updated code from above
function addAnother(z) {
  return function addTwo(x, y) {
    return x + y + z; // inner function using the z variable
  };
}

addAnother(1)(20, 21); // 42
// there are two function calls here (1) and (20, 21)
// and both are pure and have predicitibility

sameInputSameOutput;

goal =
  "build so that function calls are pure meaning each time we give it the same input, we get the same output";

// investigation
question =
  "if getId() is called multiple times with same object, will it return the same output each time?";

levelOfConfidence = "how sure am I of the level of predictability?";

point = "object does not get mutated";

function getId(obj) {
  return obj.id;
}

butHereIsMore = "to the program";

getId({
  get id() {
    return Math.random(); // using a getter and there will be different outputs each time
  },
});

levelOfConfidence;

rule = [
  "its not yes or no response to the question of function call purity",
  "but rather the 'level of confidence' to how pure the function call is, we have",
];

againNote =
  "function purity is not related to the function definition, but rather the function calls being pure";

extractingImpurity;

ask = "given a procedure, is there a way to extract the impurity?";

useCase = [
  "procdure or procedures that do a computation and write to the DB",
  "FP approach would dictate that a function can do the computation",
  "while the procedure executes the single side effect",
];

// add comment to procedure to make it clear as to the side effects
function addComment(userID, comment) {
  var record = {
    id: uniqueID(), // side effect = this output is a side effect
    userID,
    text: comment,
  };
  var elem = buildCommentElement(record);
  commentsList.appendChild(elem);
}

addComment(42, "Comment intro!"); // impure function call
// side effect/output- impure function call, as its constructing an object and append to the DOM

// extract the impurity to place it in the shell, while the core is functional
function newComment(userID, commentID, comment) {
  // now a function with sole purpose to make a new comment object
  var record = {
    id: commentID,
    userID,
    text: comment,
  };
  return buildCommentElement(record);
}

var commentID = uniqueID(); // the function gets the commentID as an input

var elem = newComment(42, commentID, "First comment");
commentsList.appendChild(elem);

containingImpurity;

bad = "if side affects pollutes the global scope";

good = "contian it or reduce the surface area ";
