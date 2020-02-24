JavaScriptPlatform = {
    memory: 'holds data and functionality = parameter:arguments, functions, outputs',
    executionContext: 
    [
        'created at the global and function levels, red>blue buckets',
        'has two parts local memory and execution space where thread runs into and out of',
        'will return value to memory as an output'
    ],
    callStack: 'tracks what function is currently running = first in first out'
}



generalizedFunctions

function isADeclaration () {
    return 10 * 10;
}

isADeclaration();

//Let's convert this function to make it reuseable

function squareNum(num){
    return num * num;
}

squareNum(10);
squareNum(5);

pointIs = "create function to run at diff times using same parameters and different arguments"

parameterIs = "placeholder to delay defining the data to use until we need to run the function"
and 
argument = "is the actual value that gets provided when the function is run"

higherOrderFunctions = "pass in a function as a parameter"

example 

function copyAndManipulateArray(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}
function multiplyBy2(input) { return input + 2 }
const result = copyAndManipulateArray([1, 2, 3], multiplyBy2);

