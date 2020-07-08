listTransformations;
// (nested data structures)
point = [
  "given an API, may not be able to control and data is not if form we need it",
  "will need to use functional utility methods to transform the list ",
];

nesting;
let game = {};

game["users"] = [];

game.users.push({
  name: "Luic",
  id: 999,
});

//  will look like this
let game = {
  users: [
    {
      name: "Luic",
      id: "999",
    },
  ],
};

looping;

allAbout = "repeating a procedure, repeat an action some number of times";

var crimeData = {
  suspects: [
    {
      name: "Rusty",
      room: "kitchen",
      weapon: "candlestick",
    },
    {
      name: "Fran",
      room: "Deck",
      weapon: "bat",
    },
  ],
};

// for loop
// used often with arrays
// alternatives are map, forEach
function foo() {
  for (
    let i = 0; // defining the start var
    i < crimeData.suspects.length; // establishing a condition
    i++ // for every loop add one to the curr value
  ) {
    console.log(crimeData.suspects[i]);
  }
}

foo();

// Returns
// Object {name: "Rusty", room: "kitchen", weapon: "candlestick"}
// Object {name: "Fran", room: "Deck", weapon: "bat"}

challenge =
  "loop through the array properties and mark them as potentially guilty";

var container = {
  people: [
    {
      name: "Rus",
      color: "red",
    },
    {
      name: "Ingrid",
      color: "indigo",
    },
  ],
};

//challenge solution
function gameLoop() {
  for (let i = 0; i < container.people.length; i++) {
    console.log("outer loop");
    for (let key in container.people[i]) {
      console.log("inner loop");
      if (container.people[i][key] === "Rus") {
        console.log("Suspect found");
      } else {
        console.log("Not found");
      }
    }
  }
}

gameLoop();
// outer loop
// inner loop
// ..

// example for just returning the color
function bax() {
  for (let { color: c } of suspects) {
    console.log(c);
  }
}

bax();
// red
// indigo

// destructuring
// var defines the variables to unpack from the array literal suspects

challenge = "destructure the nested data structure into two variables";

var [{ color: firstColor }, { color: secondColor }] = suspects;

console.log(firstColor, secondColor);

// red  indigo
