background;

customIterators =
  "useful tool, but creating them calls for care to maintain consistent state";

henceGenerators = [
  "allow for defining an iterative algorythm by writing a single function whose execution is not continuous",
  "generators are written with the function* syntax",
];

globalMemory;
____________;
createFlow() = "F"
returnNextElement : {next : "F"} 
element1 : 4


output: returnNextElement = createFlow() // note no execution context
// running createFlow returns a generator object {next : F} and is sent to returnNextElement in global 
// the {next : F} object has a tight bond to its place of origin createFlow()
// now the returnNextElement has a next method on it

action: element1 = returnNextElement.next() // will open execution context of createFlow
// the function from the {next : F} will initiate this 

executionContext: createFlow()
localMemory = "no memory allocation but..."

yield 4 // keyword to suspend the execution context essentially a return statement
// 4 gets yielded out as the output

 

function* createFlow() {
  // td 1, create a new generator function with no parameter and store it in global memory
  yield 4;
  yield 5;
  yield 6;
}

var returnNextElement = createFlow();  // the callsite/call to createFlow()
// td 2, creating a new variable and setting its value equal to createFlow
var element1 = returnNextElement.next();
// td 3, creating a new variable and setting its value equal to returnNextElement
var element2 = returnNextElement.next();
// td 4, creating a new variable and setting its value equal to returnNextElement


mdn = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"
