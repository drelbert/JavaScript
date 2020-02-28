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
// requirement sqaure 10
function isADeclaration () {
    return 10 * 10;
}

isADeclaration();

// requirement sqaure 9, have to rewrite the above function 
// breaks the DRY principle 
function isADeclaration () {
    return 9 * 9;

}

isADeclaration();


//Let's generalize this function to make it reuseable

function squareNum(param){  // 
    return param * param;
}

squareNum(10);
squareNum(5);

pointIs = "create function to run at diff times using same parameters and different arguments"

parameterIs = "placeholder to delay defining the data to use until we need to run the function"
and 
argument = "is the actual value that gets provided when the function is run"

exampleOfNotDryCode = "Would have to rewrite function if the requirement changed"

function copyArrayAndMultiplyBy2(array) {  // in global memory
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }
    return output;
}

const myArray = [1, 2, 3];  // in global memory
const result = copyArrayAndMultiplyBy2(myArray);  // in global memory

theSolutionToRewritingFunctions = "and avoiding the DRY, pass in a function as a parameter"



higherOrderFunctions 

purpose = "pass in a function as a parameter"

example 

function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}
function multiplyBy2(input) { return input * 2; }

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);  // setting up a variable : with type object(function) with two arguments to use in the function 

// has these components
globalMemory = [
    'copyArrayAndManipulate', 
    'multiplyBy2',
    'const result'
];

executionContext =  [   // copyArrayAndManipulate 
    'localMemory' = [
        'array :[1, 2, 3',
        'instructions: multiplyBy2',
        'output: [1, 2, 3] which is a copy not the original'
    ]
]

callStack = [
    'copyArrayAndManipulate',
    'global'
]



callbacksAndHigherOrderFunctions

higherOrderFunction = {
    is: 'a function that takes in a function or returns one out',
    exampleFromAbove: 'copyArrayAndManipulate'
}

callback = {
    is: 'the functin that is inserted',
    exampleFromAbove: 'multiplyBy2'
}

theseAllowFor = 'Declarative style'


arrowFunctions 
// taking the function multiplyBy2 and using the arrow function
function multiplyBy2(input) {
    return input * 2;
}
// modified to use an => 
const multiplyBy2 = (input) => { return input*2 }



pairProgramming 

point = "researcher hits hard block and just researches, while the stackoverflower just relies blndly on SO"

resolveHittingABlock = "use debugger or console.log to reveal the issue with a block of code"
