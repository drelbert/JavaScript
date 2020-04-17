listTransformations

point = [
    "given an API, may not be able to control and data is not if form we need it",
    "will need to use functional utility methods to transform the list "
]
 

looping

allAbout = "repeating a procedure, repeat an action some number of times"



var crimeData = {
    suspects : [
    {
    name: "Rusty",
    room: "kitchen",
    weapon: "candlestick"
    },
    {
    name: "Fran",
    room: "Deck",
    weapon: "bat"
    }
  ]
};


// for loop good for use with arrays
function foo() {
    for (let i = 0; 
        i < crimeData.suspects.length;
        i++) {
            console.log(crimeData.suspects[i]);
        }
}

foo();

// Returns
// Object {name: "Rusty", room: "kitchen", weapon: "candlestick"}
// Object {name: "Fran", room: "Deck", weapon: "bat"}


// Destructure this into two variables by color 

var suspects = [
    {
        name: "Rus",
        color: "red"
    },
    {
        name: "Ingrid",
        coloe: "indigo"
    }
]

for (let {color: c} of suspects) {
    console.log(c);
}

// alternatively 
var [{color: firstColor}, {color: secondColor}] = suspects;

console.log(firstColor, secondColor);
