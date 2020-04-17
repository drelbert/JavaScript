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
// note the value of new execution context local memory each time allows for this next functions
var outputSecond = mult2(10);

console.log(output)


functionsWithMemories 

pointOne = "when functions are called -> local memory/variable environment or state = live data in the app currently, is created with a live store of data, for the execution context";

pointTwo = "when the function completes, local memory is deleted and value is returned";

concept = "how about holding onto data between executions?";

allowingFor = "function definitions have cache/persistent memory"

state = "live data in app in local memory";

thisIsPossibleWith = "returning a function from another function";


returningFunctions

rule = "functions can be returned from other functions in JavaScript"

//illustration
function createFunction() {  // createFunction in global memory
    // Execution context 
        // Local = multiplyBy2 as a function
        // Once run, this execution context deletes and the value of multiplyBy2 which is a function is returned to generatedFunc
        // In other words, generatedFunc is the result of the one time running of createFunction
    function multiplyBy2 (num) {
        return num*2;
    }
    return multiplyBy2;
}

var generatedFunc = createFunction();  // generatedFunc in global memory

bigNOTE = "generatedFunc and createFunction() are not related as the = indicates, but rather the result of the one time running of createFunction()"

var result = generatedFunc(3);   // result in global 



thisIsValuableFor = "saving a function inside another function = the returned function gets the most powerful property in JavaScript ->    "


nestedFunctionScope 

isAbout = "Calling a function in the same function call as it was defined"

locationOfFunction = "Where the function is defined, dtermines what data it has access to when called"



// illustration, enter into sandbox.js and add break points to see the vars and call stack

function outer (){
    let counter = 0;
    function incrementCounter (){
        counter ++;
    }
    incrementCounter();
}

outer();


returningFunctionMemory = "see diagram on paper and use in sandbox.js"


functionClosure 




closureTechnicalDefinition
see = "https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8"

theDetailsOfClosure = [
    "local memory = variable environment",
    "COVE = closed over variable environment (creation of the backpack)",
    "PLSRD = persistent lexical scope(rules for data available) referenced data (defines the presence of the Backpack and its journey)",
    "In JS this is known as putting the data into the functions Closure",
    "SO, as JS is a lexically scoped langauge, the function brings the data (in a backpack) wherever it goes",
    "backpack = closure"
]



multipleClosureInstances

point = "with a new const anotherFucntion() comes an all new execution context and a new backpack of data and method"



practicalApplications

closureAllows = [
    "give our functions persistent memories",
    "helper function = once -> for once and done specification",
    "memoization =  giving the function persistent memory of previous input/output combinations",
    "iterators and generators using lexical scoping and closure for contemporary patterns",
    "module pattern -> preserve state throughout app running without poluuting global namespace",
    "asyncronous JS -> callbacks and promises need closure to persist state in async envio"
]


//challenges 


linkToChallenges
"http://csbin.io/closures"

linkToSolutions
'https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/closures.js'

// Create a function that creates and returns a function and prints hello

function functionFactory() {
    function createdFunction() {
        console.log("hola");
    }
    return createdFunction;
}

const func1 = functionFactory();
func1();



// Create a function that accepts one input and returns a function

function createFunctionPrinter(input) {
    // let input = [];
    return function returnInput(){
        console.log(input)
    }

}

const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


//create a function that returns a function that will add an input by x

function addByX(x) {
    function addBy(num) {
        return num + x;
    }
    return addBy;
  }

const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3


// create a function that accepts a callback as input and returns a function 

function once(func) {
    let counter = 0;
    let onceVal;

    const innerFunc = val => {
        if (counter === 0) onceVal = func(val);
        counter++;
    }
    return innerFunc
}

var onceFunc = once(addByTwo);

console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6