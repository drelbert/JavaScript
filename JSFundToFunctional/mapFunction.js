theMapFunctionDiscussion


mapArrayMethod = "returns a new array of the return value by executing callback on each array item"

similarTo = [
    "forEach, but each does not return anything",
    "executes callback on every array item and returns undefined"
]

// Example 
let a = ['a', 'b', 'c']
a.forEach(function(element) { console.log(element) })
// logs each item in turn


mapDetails =[
    "returns an array each time",
    "take a list and transform them to a new array"
]

// Form of map
// map(callback[, thisObject])

// Example 
let a1 = ["a", "b", "c"]  // the list 
let a2 = a1.map(function(item){  // the callback function
    return  item.toUpperCase() 
})

console.log(a2)
// logs ["A", "B", "C"]



// Practice 
var weapons = ["stick", "revolver", "pipe"]

var makeBroken = weapons.map(function(item){
    return `The ${item} is broken.`;
});

var brokenStuff = makeBroken;

console.log(brokenStuff);
