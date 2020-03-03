//Getting Started with JS v 2 (Simpson)

const thePrimer = {
    parts: 'values, operations, vars, expressions and statements, decisions, loops, functions'
}

const values = {
    numbers: 4,
    strings: 'el cubano',
    booleans: true,  //or false 
    empty: 'null, undefined', // two different empty values 
    array: [1, 3, 6],
    object: {
        name: 'SixKiller'
    }
}

const operators = {
    have: 'opperand = the thing that gets the action',
    binary: 5 < 7,
    uniary: !false,  //this is negation of the boolean value
    comparison: 5 == 5.0, //using the loose equality operator vs strict ===
    logical: true || false, //the complement to ||(or) is &&(and)
    assignment: '='
}



const types = {
    are: 'number, string, bool, array, object, empty(null or undef) symbol',
    operator: 'typeof uniary operator returns type kind',
    is: 'type of a value: render with typeof',
    note: 'array is subtype of object'
}



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
var age = 30;  
age = 1 + (age * 2);



const ifElse = {
    for: 'making a decision',

}


ifStatements = "decisions with if statements"
//simply if 
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

// returns 'Work'



loops  = "for repeating operation over and over "

//examples 
var students = ['Mike', 'Loco', 'B805'];

// this is a for loop that counts 
for (let i = 0; i < students.length; i++){
    //greetStudent( students[i] );
    greetStudent( students[i] );  //returns list 
}

// this is a for of loop that goes over a list of values and returns all values = iterator 
for  (let student of students) {
    greetStudent( student );
}

// this is a while loop similar to the for, but evaluating true or false 
while (students.length > 0) {
    let student = students.pop();
    console.log(`Hi, ${student}.`); //returns message and names 
    console.log(students.length);
}


functions = [
    "collection of statemnets to be run at diff times",
    "group info into function: procedure",
    "collection of things we want it to do"
]

//example function declaration 
//note, no value is returned
function greetUser(user) {
    console.log(
        `Hola, ${user.name};`
    );
}

//functional expression 
//note, returns a value
function timeDiff(first, elapsed){
    return (first - elapsed)/ 2;
}

var result = timeDiff(100, 50);

console.log(result); // 25



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

const equality = 'ask: is coercion allowed?'
    == 'allows coercion (where types are different)'
    === 'does not allow coercion (where types are the same), so can only use === when types are the same'

    == and === 'will result in true always, when the types are the same'

    == 'not about comaprisons with unknown types'
    == 'is about comparisons with known types (optionally) where comparisons are helpful'

    const point = 'BE CLEAR about types'


//Pillar 2 Scope and Closures 
//Scope 
    //where to look for things 

//Undefined and undeclared in scope
//undefined is var that has been declared but now with no value 
//undeclared is one that has never declared 


//Function expressions
const functionExpression ={
    is: 'function defined as a value somewhere',
    makeUp: 'values that are assigned and passed as arguments',
    firstClass: true,
    clickHandler = function(){
        //no name but assinged to function clickHandler
        //called an anonymous function expression
    },
    keyHandler = function keyHandler() {
        //assigned and with a name keyHandler
        //called a named function expression
    }
}

//IIFE 
var user = 'Benites';

( function anotherUser(){
    let user = 'J-uan';
    console.log(user);  //J-uan
} )();  //This () is how the IIFE get immedietly executed (invoked)

console.log(user); //Benites, not overwritten due to the IFEE!

//The cool thing about using an IFEE is that we get a new block of scope 
//Good for encapsulation and not polluting the global scope


//Block scoping with let 
//reaplaces the IFEE 
//snippet above rewritten 
var user = 'Benites';

{
    let user = 'J-uan';
    console.log(user);  //J-uan
}

console.log(user) //Benites

//Closure 
//is when a function 'remembers' the vars outside of it even if the function is passed elsewhere



//Pillar 3 this and Prototypes
//this 

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

//prototypes 
//

//class{} ES6



//GO read connected section in YDKJSY