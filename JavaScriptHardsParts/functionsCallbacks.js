JSPrinciples

threadOfExecution
// plus
functions

function principles() {
    return `Thread of execution, goes line by line, after compilation phase and the Memory saves the data like primitives and objects`;
};

var defineExecution = principles();
console.log(defineExecution);



// illustration 
const num = 3;
function multThe2 (inputNumber){  // Creates the global execution context 
                                  // inputNumber = parameter -> the placeholder to allow for data decisions at function run time 
                                  // 3 = argument
    const result = inputNumber*2;
    return result;
}

const output = multThe2(num); // The callback function a command using () creates the first execution context and local memory 
const newOutput = multThe2(10); // Another callback which creates a new execution context and local memory


 callstack 
 does = "keeping track of what is running, in the stack form, last in first out for keeping track of the thread of execution"




functionsAndCallbacks

generalizedFunctions

stepOne = "Toward higher order functions and creating functionality that can be run later"

function squareTen(input) {
    return input*input
}

squareTen(10);
squareTen(5);


repeatingFunctionality
 
examples = "presented three different function definitions that only slightly changed but all three were needed for their functionality"

higherOrderFunctions

allAbout = "generalizing the function to allow for passing of specific instructions at a given time"

 
example = "see notebook diagram"



callbacksAndHigherOrderFunctions

//example 
function copyAndManipulate(array, instructions) {  // The higher order function
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions[array(i)]);
    }
    return output;
}

function multThe2(input) {return input * 2;} // The callback function

const result = Map([1, 2, 3], multThe2);  // In the [] are the arguments



arrowFunctions
why = "shorthand way to save functions"

// consider
function multBy2(input) {
    return input * 2;
}  // this is the same as ablove on line 73

// arrow function syntax fully loaded
const multBy2 = (input) => { return input*2 }

// arrow function syntax with only one return value and the {} and return are inserted automatically
const multBy2 = (input) => input*2

// arrow function syntax with no {} due to only one paramater 
const multBy2 = input => input*2


midLevelCheck = [
    "define a variable",
    "create a function, four ways",
    "add a CSS style",
    "implement a sort algorithm (bubble, merge, etc)",
    "add a method to an objects prototype",
    "describe the event loop in JavaScript",
    "define callback functions",
    "implement filter",
    "handle collisions in a hash table"
]


link = "http://csbin.io/callbacks"



