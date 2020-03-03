closureIntro 

enables = "pro level functions"

functionsGetNewMemory = "every run/invocation"

function mult2 (inputNumber) {
    // local var with the procedure 
    var result = inputNumber*2;
    // return it
    return result;
}

var output = mult2(7);
//or 
var outputSecond = mult2(10);

console.log(output)


functionsWithMemories 

pointOne = "when functions are called -> local memory is created with a live store of data, for the execution context";
pointTwo = "when the function completes, local memory is deleted";

concept = "how about holding onto data between executions?";

allowingFor = "function definitions have cache/persistent memory"

state = "live data in app in local memory";

thisIsPossibleWith = "returning a function from another function";


returningFunctions

rule = "functions can be returned from other functions in JavaScript"

//illustration
function createFunction() {  // createFunction = global memory
    // Execution context 
        // Local = multiplyBy2 as a function
        // Once run, this execution context deletes and the result is the the generatedFunc function
        // In other words, generatedFunc is the result of the one time running of createFunction
    function multiplyBy2 (num) {
        return num*2;
    }
    return multiplyBy2;
}

var generatedFunc = createFunction();  // generatedFunc in global 
var result = generatedFunc(3);   // result in global 

thisIsValuableFor = "saving a function inside another function = the returned function gets the most powerful property in JavaScript ->    "

