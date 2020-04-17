higherOrderFunctionsCallbacks

aFunctionIs = "data = can pass them around and return without invoking"

higherOrderFunctions 

about = "treated like any other variable, passed as argument, returned by a function, and assigned as a value to a variable"

definition = "a function that returns a function is a higher-order function"

higherOrderRules = [
    "can take a function as an input(argument)"
]

// Higher irder function: Assign a function to a variable
var launchTasks = function launchTasks() {
    console.log("Launched!")
}

launchTasks(); // Invoke it using the variable
// Launched


// Return a function = definite higher-order function
// Using a variable to return the "Name updated" message
function updateName() {
    return function() {
        console.log("Name updated");
    }
}

var higherOrderFunction = updateName();
higherOrderFunction();



callbacks 

about = [
    "any executable code that is passed as an argumnet to other code",
    "a function passed into another function as an argument, then invoked inside the outer function to complete a routine or action"
]

//  Function taking (passing) a function as an input(argument) 
function addName() {  //  The callback function
    return "Name added";
}
function addedName(nameMessage, name) {
    console.log(nameMessage() + name);
}

addedName(addName, "Sonja");  // Pass addName as an argument to addedName


// Example of passing a function as an argument
// Run in dev tools to use web browser features (API's)
function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);
}

function calcProduct(num1, num2) {
    return num1 * num2;
}

function calcSum(num1, num2) {
    return num1 + num2;
}

alert(calculate(calcProduct, 5, 15));
alert(calculat(calcSum, 5, 15));

// Example function passed into another function as an argument
// An asynchronous callback, is executed immediately
// Run in dev tools to use web browser features (API's)
function insertId(id) {
    alert('Id ' + id + ' inserted successfully!');
}

function processId(callback){
    var id = prompt("Please enter your Id.");
    callback(id);
}

processId(insertId)


reduce 

