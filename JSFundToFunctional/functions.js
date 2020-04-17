usingFunctions

requirement = "go through a list and transform them"

point = [
    "function like a class",
    "a class is just a function that returns an object"
]

// Consider 
function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log("My name: ", name);
        }
    };
};

var suspects = [
    "Miss Scarlet",
    "Colonel Black",
    "Sra. Blanko"
];

// Hydrate the list  
var theList = [];

// With a for statement
for (var i = 0; i < suspects.length; i++){
    theList.push(CreateSuspectObjects(suspects[i]));
}

// The _.each = function utility 
// Replaces the for statement since its more readable 
_.each(suspects, function(name) {  // each takes two arguments = a list and a callback function 
let suspectsObj = CreateSuspectObjects(name);
theList.push(suspectsObj);
});



anatomyOfFunctions

var simple = function (one, two) {  // declaration/definition
    return one + two  // function body 
};

simple("Tasty", "burger", "taco");  // invocation/Call-time -> call function

// function name = "simple"
// parameters = one, two
// arguments = "Tasty", "burger", "taco"

console.log() // side effect and lives outside of the function



// practice 
var assembleTacos = function (name, adj) {
    return "Add" + name + adj;
};

$("body").hide();

tacoArr.forEach(function(val) {
    console.log(val);
});

$("button").on("click", function() {
    console.log("Stop that!");
});

// declarations = three
// function bodies = return and two console.logs
// function names in yellow
// innvocations = .log() .hide() .forEach() .on() $()
// params = name, adj, val
// arguments = button, body, click, function() on 71 and function() on 67
// return/side effect = return on 62, console.log, .hide()


arrowFunctions


projections

process = "filter then map data structure"

exampleRequirement = "take filtered data and wrap it into an array of strings"

have = "array of objects, need array of strings with just names"


spreadOperator 

builtTo = "allow for values that are not in the function parameters but passed as arguments"

// consider 
function buildTuples(a, b, c, d) {
    var setIs = [[a, c], [b, d]];
    return setIs;
}

buildTuples("No", "Tacos", "Anymore", "Henry", "Only Beets");

// "Only Beets" not included 


// Using spread operator
function buildTuples(a, b, c, ...d) {
    console.log(arguments);  //  Note presence of 'arguments'
    return [[a, c], [b, d]];
}

buildTuples("No", "Tacos", "Anymore", "Henry", "Only Beets");



defaultParameters 

about = [
    "recall that params of functions default to undefined",
    "may be good to have diff default value",
    "default params set a different default value"
];

// Example 
function mult(a, b = 1) {
    return a * b;
}

multiply(5); // 5

restParameter 

usedFor = "representing an indefinite number of arguments as an array";
// Example 
function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }
  
  var arr = multiply(2, 1, 2, 3);
  console.log(arr); 
  // [2, 4, 6]