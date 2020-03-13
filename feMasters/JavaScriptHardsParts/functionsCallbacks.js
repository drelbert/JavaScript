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
                                  // inputNumber = parameter
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

function squareTen(input) {
    return input*input
}

squareTen(10);
squareTen(5);




link = "http://csbin.io/callbacks"



