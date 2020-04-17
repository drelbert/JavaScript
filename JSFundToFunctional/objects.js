objectDestructuring

// Consider 
var person = {
    first: "Lupe",
    last: "Vialle"
}

// Access
var first = person.first;

useDestructuring

var crimeData = [
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
];


arrayDestructuring

var [one, two] = crimeData;

console.log(one); // returns the first object


objectDestructuring

var person = {
    name: "Jon",
    role: "Design"
}

var {name} = callIt;

console.log(name);


forOfIterationDestructuring

var crimeData = [
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
];


for (let {room: r} of crimeData) {
    console.log(r);
}