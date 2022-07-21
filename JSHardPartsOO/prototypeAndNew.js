avoidDuplicationwithProtptype;
// solution 2

// use of prototype chain to allow the storing of a function for use across multiple objects

prototypeWalkthrough;

// declare a function with two parameters and store it in global
function userCreator(name, score) {
  let newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// declare a const userFunctionStore object and store it in global
const userFunctionStore = {
  increment: function manageScore() {
    this.score++;
  },
  login: function auth() {
    console.log("Logged in!");
  },
};

// declare a const user1 and set its value to the function userCreator
const user1 = userCreator("Jane", 7); // invocation

// declare a const user2 and set its value to the function userCreator
const user2 = userCreator("Ventura", 8); // invocation

user2.increment();

globalMemory(GlobalState);
userCreator = "F";
userFunctionStore = {
  increment: "F",
  login: "F",
};

user1 = {
  name: "Jane",
  score: 7,
  // here is the bond to userFunctionStore
  // this is the prototypal feature of JS, providing a chain to userFunctionStore.increment
  // using this
  __proto__,
};

user2 = {
  name: "Ventura",
  score: 8,
  // the bond to userFunctionStore
  // this is the prototypal feature of JS, providing a chain to userFunctionStore.increment
  // using this
  __proto__,
};

executionContext: user1 = userCreator;
name: "Jane";
score: 7;
// return this object value to user1 in global
newUser = {
  name: "Jane",
  score: 7,
  // hidden property reference to userFunctionStore
  __proto__,
};

executionContext: user2 = userCreator;
name: "Ventura";
score: 8;
// return this object value to user2 in global
newUser = {
  name: "Ventura",
  score: 8,
  // hidden property reference to userFunctionStore
  __proto__,
};

newAndThisKeyword;

functionsAreObjectsAndFunctions;
// all functions have a default property on their object version: "prototype"
// this is also an object
// and can replace the functionStore object

// illustration

// as soon as multiplyBy2 is declared, it gets an object attatched to it
// resulting in the function/object combo
function multiplyBy2(num) {
  return num * 2;
}

// accessing the object portion with dot notation
// .stored is a property on the function object, like .name or .arguments
multiplyBy2.stored = 5;

// accessing the function portion with ()
multiplyBy2(3); // 6

multiplyBy2.prototype; // { }

newKeywordAndShareFunctionsWPrototpye;

// the more typical approach
// solution 3

// td create new function userCreator
// and by default an object is created
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

// accessing the prototype object to store the increment function in the empty object
userCreator.prototype.increment = function () {
  this.score++;
};

// accessing the prototype object to store the login function with the increment function
userCreator.prototype.login = function () {
  console.log("login");
};

// td declare the const user1 and set the const to uninitialized
// new is calling the userCreator
const user1 = new userCreator("Eva", 6);

// td calling the function increment
user1.increment();

globalMemory(GlobalState);
userCreator = "F";
// plus
userCreatorFunctionObject = {
  prototype: {
    // this object is the replacement for userFunctionStore above
    increment: "F",
    login: "F",
  },
};

// the returned object as a result of new
user1: {
  name: "Eva";
  score: 9;
  __proto__;
}

executionContext: user1 = new userCreator("Eva", 6);
// new keyword will insert automatically an empty object, set __proto__, and auto return the object
// the object is assigned the label "this"

localMemory;
name: "Eva";
score: 9;

// this is not related to the instance in the user1.increment execution context
this = {
  name: "Eva", // property: argument
  score: 6,
  // the hidden property with a link to the prototype object
  __proto__: "userCreator.prototype",
};

scopeAndThis;
callingPrototypeMethods;
// NOTE - this section is here since it is a continuation of solution 3

executionContext: user1.increment();
threadOfExecution;
// the implicit parameter/placeholder that refers to the pertinent object: this
this.score++;
// evaluates to
user1.score++;
// lookup = not on user1, look out to global, its on user1 object line 145,
// and 9 is incremented to 10

localMemory;
this;
("user1");
// as soon as this method is called/execution context is created, "this" is added to local memory
// at that time "this" points to the object on the left hand side of the dot, user1.increment()

// note this is not happening in the user1 = new userCreator() execution context above
// since that is just assigning data
// not executing a function/method

thisKeywordScopingIssues;
