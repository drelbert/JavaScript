classAndOOPIntro;

oop = [
  "paradigm for structuring complex code",
  "prototype chain = feature that supports emulation of oop but a complex tool itself",
  "there is a difference betweem __proto__ and prototype",
  "the keywords: new and class = tools to automate object and method creation",
];

coreOfDevelopment = ["1. save some data", "2. run code using the data"];

problem = [
  "how to structure properties and functions correctly so that its correctly connected?",
  "how to store data and functions together?",
  "OOP exists to answer this problem",
];

codeEndState[
  ("1. easy to reason about",
  "2. easy to add features to = new functions",
  "3. always efficient and performant")
];

objectDotNotation;

useCase = [
  "how to represent data and have functions to manipulate that data for a user in a game?",
  "how to store the data and functionality together?",
];

// illustrating the notion of encapsulation
// this is an object literal, where data is already filled in, but what if no users or no data yet?
let user1 = {
  name: "Anna",
  score: 5,
  increment: function () {
    user1.score++;
  },
};

user1.increment();
// 6

// creating a user with dot notation
let user2 = {};
// td, declare user2

(user2.name = "Leif"),
  (user2.score = 3),
  (user2.increment = function () {
    user2.score++;
  });

factoryFunctions;
// creating a user with Object.create
// this approach illustrates the value of oop paradigm but is not practical in development

let user3 = Object.create(null);

user3.name = "Ada";
user3.score = 6;
user3.increment = function () {
  user3.score++;
};

globalMemory(GlobalState);
user2 = {
  name: "Leif", // property name: property value
  score: 3,
  increment: "F",
};

// right hand side returns an empty object
user3 = {
  name: "Ada",
  score: 6,
  increment: "F",
};

factoryFunctionsExample;
// again, not practical but illustrative

// intuative and easy to reason about
// but
// not easy to add features/functions
// lots of extra memory used since the function is bundled with each user

function userCreator(name, score) {
  // bind the label userCreator to the function type
  let newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    // increment has a backpack
    newUser.score++;
  };
  return newUser;
}

// define userOne
const userOne = userCreator("Ada", 6);
// define userTwo
const userTwo = userCreator("Go-Go", 4);

// execute userOne
userOne.increment();

globalMemory(GlobalState);
userCreator = "F";
userOne =
  // at first undefined, prior to the call of userOne = unitiialized
  {
    name: "Ada",
    score: 6,
    increment: "F",
  };

userTwo = {
  name: "Go-Go",
  score: 4,
  increment: "F",
};

executionContext: userOne = userCreator("Ada", 6);
localMemory;
name: "Ada"; // the argument
score: 6; // the argument
newUser: {
  name: "Ada";
  score: "6";
  increment: "F";
}

executionContext: userTwo = userCreator("Go-Go", 4);
localMemory;
name: "Go-Go";
score: 4;
newUser: {
  name: "Go-Go";
  score: 4;
  increment: "F";
}

prototypeChain;
// solution to the above issue = just have one function useable only by a specific object

// remove the increment function from each object above
// replace with
functionStore = { increment: "F" };
// and have the interpreter use it

usingThePrototypeChain;

// the code, one function and one object

function userCreator(name, score) {
  // declaring a function and storing it in global
  let newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

let userFunctionStore = {
  // define a variable with a value = object with two methods
  increment: function () {
    this.score++; // inside the function, "this" is bound to the object userFunctionStore when invoked below
  },
  login: function () {
    console.log("Logged In");
  },
  hiddenProperty: __proto__, // adding this to illustrate that all objects have this __proto__ linking to Object.prototype
};

// define userOne
const userOne = userCreator("Ada", 6);
// declare a constant and setting the value to a function

// define userTwo
const userTwo = userCreator("Ida", 4);
// declare a constant and setting the value to a function

// execute userOne increment
userOne.increment();

// execute userTwo login
userTwo.login();

// the technical description
globalMemory(GlobalState);
userCreator = "F";
userOne = {
  name: "Ada", // property name: value "ada"
  score: 6, // property score: value 6
  hiddenProperty: __proto__, // the link/reference up to the userFunctionStore that is used when userOne is executed above
};
userTwo = {
  name: "Ida", // property name: value "Ida"
  score: 4, // property score: value 4
  hiddenProperty: __proto__, // the link/reference up to the userFunctionStore that is used when userTwo is executed above
};

userFunctionStore = {
  // in this variable/constant we are creating an object that replaces the need for creating user objects as in factory function above
  increment: "F",
  login: "F",
};

executionContext: userOne = userCreator("Ada", 6);
localMemory;
name: "Ada"; // parameter: argument
score: 6; // parameter: argument
newUser = {
  // empty object initally (but has link to userFunctionStore object)
  name: "Ada",
  score: 6,
  hiddenProperty: __proto__,
}; // return this out to global label userOne

executionContext: userTwo = userCreator("Ida", 4);
localMemory;
name: "Ida";
score: 4;
newUser = {
  name: "Ida",
  score: 4,
  hiddenProperty: __propto__,
}; // return this out to global label userTwo

executionContext: userOne.increment();
// go up to userOne to find increment, not there
// so go up to userFunctionStore and finds it there

// this  is the callsite indicating the value of "this"
// the __proto__ property has the link up to another object that has the functions needed
// it is the prototypal nature/feature where objects are linked

localMemory;
this = userOne; // an implict paramter that is provided automatically (provided)
// then allows for the creation of userOne.score++ below

threadOfExecution;
this.score++; // the code of increment using this keyword to allow for various objects to use the code score++
userOne.score++;

hasOwnPropertyMethod;

Object.prototype = {
  // has a bunch of useful functions available to all the objects
  hasOwnProperty: "F",
  __proto__: null, // nothing higher than this
};

// illustrating use
userOne.hasOwnProperty("score");
// not found on userOne
// look up to userFunctionStore, not there
// look up to Object.prototype, and is there

thisKeyword;
//bonus pieces

thisValue =
  "determined by how a function is called(runtime binding), not at all by how/where it was defined";

arrowFunctionScopeAndThis;

(standard =
  "new way to define/declare is using =>, since this assignemnt is automatically lexicically scoped"),
  "meaning, where the function is saved, when its executed what this is set to is determiend by where the function was saved";

prototypeChainReview;
// the approach above is not standard, but does provide the details to what the new keyword is doing under the hood

// the new keyword automates this bit of code
let newUser = Object.create(userFunctionStore);
// ...
 newUser;

newKeywordExplained;

//using the execution context from above to illustrate new
// note: the   let newUser = Object.create(userFunctionStore); line is completly removed

executionContext: userOne = newUserCreator("Ada", 6);

localMemory;
name: "Ada"; // parameter: argument
score: 6; // parameter: argument
// the new keyword will create a new object automatically
// the new object is returned automatically to userFunctionStore
// newUser is labeled: "this"
newUser = {
  name: "Ada",
  score: 6,
  // this proto property will link off to userCreator function's {prototype:{empty object}}
  hiddenProperty: __proto__,
}; // returned to userOne

// all functions in their object format automatically have a property called prototype : {empty object}

newKeywordExample;

// create the label: userCreator and store it in global
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

// these two fucntion expressions below, illustrate how the function is an object with a prototype property
// into which we can store an increment and login method

// create a new label increment in the empty object of userCreator
UserCreator.prototype.increment = function () {
  this.score++;
};

// create a new label login in the empty object of userCreator
UserCreator.prototype.login = function () {
  console.log("login");
};

// create new const: user1 and store it in global and at start unitiailized
// on right hand side just calling the userCreator
const user1 = new UserCreator("Ivar", 9);

// execute user1.increment
// note that the increment function is not on user1, but rather the userCreator function object combo property prototype object
user1.increment();

globalMemory(GlobalState);
// the function definition
userCreator = "F";
// plus the object to complete the function object combo
// the object with the property prototype with an empty object stored in it

{
  prototype: {
    increment: "F"; // create new label and store a function
    login: "F"; // create another new label and store a function
  }
}

user1 = {
  name: "Ivar",
  score: 9,
  __proto__,
};

executionContextFor: user1;
user1 = new userCreator("Ivar", 9);

localMemory;
name: "Ivar"; // parameter: argument
score: 9; // paramter: argument
// new creates an empty object
this = {
  name: "Ivar",
  score: 9,
  __proto__, // links to the userCreator function object combo, object part
};
// return this

// note, the function using new needs to be uppercased

classKeyword;
// just syntactic sugar

class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log("Login");
  }
}

let use33 = new UserCreator("Iva", 8);

use33.increment();
