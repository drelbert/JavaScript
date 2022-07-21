creatingAnObject;

// create and store function with pertinent data
// this illustrates encapuslation

// this is an object literal

var user1 = {
  name: "Floki",
  score: 44,
  increment: function () {
    user1.score++;
  },
};

user1.increment();

objectDotNotation;

// another method to create an object
// first create the object
var user22 = {};
// then assign properties to the object
user22.name = "Ana";
user22.score = 34;
user22.increment = function () {
  user22.score++;
};

objectCreate;

// another way to create but also maintain fine grained control

const user33 = Object.create(null);

user33.name = "Hammar";
user33.score = 39;
user33.increment = function () {
  user33.score++;
};

// point, code is not DRY
// problem, how to create new objects per person if there are 100 or 1000?

// solution = generate objects with a function

createObjectsWithFunctions;

// hard to add features
// high memory use

// each object will have its own function that does the same thing

//solution 1

// create in memory userCreator as a function
function userCreator(name, score) {
  let newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

// create in memory user999 and delay storing anything, remaining unitialized
const user999 = userCreator("Ada", 32);

// create in memory user805 and delay storing anything, remaining unitialized
const user805 = userCreator("Tromso", 78);

user999.increment();
