//Getting Started with JS v 2 (Simpson)

const thePrimer = {
    parts: 'values, operations, vars, expressions and statements, decisions, loops, functions'
}

const values = {
    is: "most basic unit of information -> data that allows program to maintain state",
    twoTypes: "primitive and object",
    primitives: 
    {
    numbers: 4,
    strings: 'el cubano',
    booleans: true,  //or false 
    empty: 'null, undefined', // two different empty values 
    array: [1, 3, 6],
    null: "represents emptyness",
    undefined: "represents empty value"
    },
    objects: {
        arrays: ["string", "Karn", "Jose"]
    }
}


interpolation 

var launcher = "Sonja";

function thisIsInterpolation(){
    return`Launch missles ${ launcher }!`;
}
console.log(`Launch missles ${ launcher }!`);
//Launch missles Sonja!


operators 

const operators = {
    have: 'opperand = the thing that gets the action',
    binary: 5 < 7,
    uniary: !false,  //this is negation of the boolean value
    comparison: 5 == 5.0, //using the loose equality operator vs strict ===
    logical: true || false, //the complement to ||(or) is &&(and)
    assignment: '='
}


types 

const types = {
    are: 'number, string, bool, array, object, empty(null or undef) symbol',
    operator: 'typeof uniary operator returns type kind',
    is: 'type of a value: render with typeof',
    note: 'array is subtype of object'
}


variables

const vars = {
    isA: 'place in memory',
    pointerTo: 'address to the place in memory',
    equalSign: '= means assignment as in var name = Title',
    for: 'tracking, managing, fetching',
    proTip: 'the () is an operator and means function call right after a const',
    the: '; = end of the statement',
    operatorsWithVarsOnly: {
        //in this case the variable reasigns a value given an operator
        increment: '++', //means value plus 1 and then reasign value back to variable
        incrementBy: "+= bar" //means value plus bar
    },
}

//illustration of operator with variable
var age = 30;
age ++; //31
age += 2; //32

//call the variable, what is in it? 
age; //32


const expressionAndStatement = {
    expression: 'phrase, fragment of sentence',
    statement: 'assembled expressions'
}

// expressions  -> statement
var age = 30;  // an assignment expression
age = 1 + (age * 2);



ifAndElse

about = "making decisions"


ifStatements = "decisions with if statements"

var age = 30;  // assignment statement 

if (age >= 18) {  // if or test clause only does work is get true back
    regForDraft();
}


// if else allows for branching where true else false are possible
if (hasData()) {    //the test clause returns boolean
    shareInsights();  //function call to run if true
}
else {      //only executes if the test clause returns false
    talkToHumans();
}


// example illustrating the above, if else with boolean variable 
let hasCoffee = true;
if (hasCoffee) {
    console.log('Work on');
}
else {
    console.log('Break-time');
}
// returns 'Work on'


loops 

used  = "for repeating operation over and over "
iteratorConsumption = "often are for..of but also ... rest and gather"

iterationLoopStatements = ["for", "do..while", "while", "for..in", "for..of"]

// illustration for..of
var students = ['Mike', 'Loco', 'B805'];


countingForLoop

for (let i = 0; i < students.length; i++){
    greetStudent( students[i] );  
}


iteratingOverValues

for  (let student of students) {
    greetStudent( student );
}


iterables 
are = "a value that can be iterated over"
dataStructureBasicTypes = ["array", "strings", "maps", "sets", "others"];




whileLoop

used = "for evaluating true or false "

var students = ['Mike', 'Loco', 'B805'];

while (students.length > 0) {
    let student = students.pop();  // .pop removes items from array
    console.log(`Hi, ${student}.`); //returns message and names 
    console.log(students.length);
}



functions


details = [
    "collection of statemnets to be run at diff times",
    "collection of statements to be invoked one or more times = procedure",
    "collection of things we want it to do"
]

functionDeclaration = procedure
//note, no value is returned
function greetUser(user) {
    console.log(
        `Hola, ${user.name};`  // Interpolated string with expression ${}
    );
}

functionalExpression 
//note, returns a value
function timeDiff(first, elapsed){
    return first - elapsed;
  }
  
  var result = timeDiff(100, 50);
  
  console.log(result); // 50




// illustrating how functions receive parameters 
function greeting(elName) {
    console.log(`Hey some interpolation here ${ elName }!`);
}
greeting('Garcia');



// illustration of function returning values with "return"
function returnParam(coolParam) {
    return  `Hey Hey, ${ coolParam }!!!`;
}

var msg = returnParam("Param Name");
console.log(msg);




//3 Pillars Section 

pillarOne = "Types and Coercion"

const typesCoercion = {
    first: 'primitive types',
    then: 'converting types',
    last: 'checking equality',
    learnTypesCoercion() {
        return 
    }
}

const primitives = ['undefined', 'stirng', 'boolean', 'number', 'object', 'symbol'];

let strangeBehaviorType = ['null'];

const objectSubTypes = ['function and array'];

const variables = 'do not have types, values do ';
//so 
var v; 
typeof v;  //undefined

bax = 44;
typeof bax  //number

baz = function(){};
typeof baz;  //function


let Nan = {
    one: 'values that are generated where math operations go awry -> undefined values ',
    two: 'NaN also results from attempted coercion to numeric values of non-numeric values',
    practicePoint: 'test reuslts of math operations to ensure NaN not present'
}
const newKeyword = {
    is: 'a built in fundamental object',
    for:'fundamental objects' [
        object(),
        array(),
        'function()',
        date(),
        RegEx(),
        Error()
    ],
    notFor: 'type conversion functions'[
        String(),
        Number(),
        Boolean()
    ]
};

const coercion = {
    for: 'converting one type to another',
    plusOperator: 'will coerce a number to a string in the context of the operation'
}


const booleans = 'Concept = Truthy and Falsy, meaning which values when converted to a boolean become false ot true?';

const convertToFalse = [0, -0, null, NaN, false, undefined];

const convertToTrue = ['basically all else', 'foo', 23, {a:1}, true, function(){}]

//Explicit way to do a number comparison/coercion 
//keep looking as long as length > 0
    while (newStudents.length > 0) {
        enrollStudent(newStudents.pop());
    }

let pointOnCoercion = 'Quality JS program embraces coercion -> ensuring the types used are clear in every operation'

let clarity = 'example = where math operation is happenin, then be clear that types are numbers'


const bestPracticePoint = {
    better: 'when the reader understands the code ',
    useful: 'when reader is focused on what is important',
    dangerous: 'when reader cannot tell what will happen',
};


comparisons 

basis = "for making decisions requires making comparisons"
allAbout = "asking is the value of X the same as the value of Y"
simply = "type and value"

 equality = 'ask: is coercion allowed?'
    == 'allows coercion (where types are different)'
    == "described as coercive equality"
    == "first allows type conversions then compares value and type like === does"
    == 'not about comaprisons with unknown types'
    == 'is about comparisons with known types (optionally) where comparisons are helpful'

    === "checks value and type"
    === 'does not allow coercion, so can only use === when types are the same'

    == and === 'will result in true always, when the types are the same'


 point = 'BE CLEAR about types'

 relationalOperators = {
     for: "relational comparisons",
     likeCoerviceEquality: "in that abiding by strict if types match but allow coercion first if ypes are different",
     are: ["<", ">", "<=", ">="]
 }



 organizingInJS 

 isFor = "Organizing data and behavior"

 classes 

 inAProgram = "defines a type of custom data structure which has data and behavior to operate on the data"
 toGet = "the class must be instantiated with the new keyword"


 modules

 isAbout = "grouping data and behavior into logical units and include or access data and behaviors of other modules"

 var properties = {
     one: "outer function that runs at least once and returns an instance of the module with one or more functions exposed that operates on the module instances hidden data",
     encapsulate: "modules encapsulate data and behavior (methods) together and the state (data) of a module is held by its methods via closure",
     purpose: "track state over time"
 }





pillarTwo = "Scope and Closures"

scope

about = "where the JS looks for things" 

//consider 
var teacher = "TD";

function otherClass() {
    teacher = "Del Torro"; // scope defines that the variable is reset to Del Torro
    topic = "React";  // created in the same global scope but in an undeclared state (is this the hoisting metaphor???)
    console.log("Welcome");
}
otherClass();

teacher;  // Del Torro... note the override of "TD"
topic;  // React 


    
undefinedVUndeclared

concept = "of emptyness"

undefined = "a variable that has been declared but has no value";

undeclared = "a variable that has never been declared";



functionExpressions

var functionExpression = {
    is: 'function assigned as a value somewhere',
    makeUp: 'values that are assigned and passed as arguments or returned',
    firstClass: true
}


// Consider
var clickHandler = function(){
        //no name but assinged to function clickHandler
        //called an anonymous function expression
    },
    
var keyHandler = function keyHandler() {
        //assigned and with a name keyHandler
        //called a named function expression
    }

pointAboutAnanymous = "wont get a description of what the function does"

// Illustrated thus
var id = people.map(function getId(person){
    return person.id;
});


// Example promise chain
getPerson()
.then(function getDataFrom(person){
    return getData(person.id);
})
.then(renderData);



IIFE  
var user = 'Benites';

( function anotherUser(){
    let user = 'J-uan';
    console.log(user);  //J-uan
} )();  //This () is how the IIFE gets immedietly executed (invoked)

console.log(user); //Benites, not overwritten due to the IFEE!

ifeeBonus = "about using an IFEE is that we get a new block of scope "

goodFor = "encapsulation and not polluting the global scope"



blockScoping

about = [
   " Block scoping with let ",
   "  replaces the IFEE ",
]

// Snippet from above redone 
var user = 'Benites';

{
    let user = 'J-uan';
    console.log(user);  //J-uan
}

console.log(user) //Benites


varAndLetUsePoint = "allows for narrowly scoping = most hidden as possible"
useVar = "at the function level as it belongs to the function, to be clear about it belongs to function"

useLet = "only in blocks, to be clear that it beliongs to the block"



closure 
defined = [
    "is when a function 'remembers' the vars outside of it",
     "and only closure if the function is passed elsewhere = as an argument callback, return it, or assign it",
     "basically whenever we treat a function as if its a value"
]

// Illustrating passing a function as an argument callback
// waitUp has closure over the question variable 
function ask(question) {
    setTimeout(function waitUp() {
        console.log(question);
    }, 100);
}

ask("How long will I wait?");


//Illustrating return back a function
function ask(question) {
    return function holdQuestions(){
        console.log(question);
    };
}

var myQuestion = ask("What is closure?");

myQuestion(); 



pillarThree =  "this and Prototypes"

exploringThis

const elThis = {
    references: 'the execution context for that call',
    asDetermined: 'only by how the function was called',
    allAbout: 'the call, how the funct was called to determine what this is pointing at',
    thisAwareFunction: 'can have different this for each context in which it was called = dynamic context'
}

//illustration with an object using implicit binding
var workshop = {
    teacher: 'Mike',
    ask(question) { //method with this, so it's this aware
        console.log(this.teacher, question);
    },
};
workshop.ask('tell us about implicit binding.');

//illustration via explicit binding
function ask(question) {
    console.log(this.teacher, question);
}

function otherClass() {
    var myContext = {
        teacher: 'Duane'
    };
    ask.call(myContext, 'Why?');
}

otherClass();






