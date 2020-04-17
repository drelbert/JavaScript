whenToUseAVariable

understand = "at which point does a variable become available to use within its scope?"

// consider 
greeting();  // The function definitions name identifier to retrieve and execute a function reference
// Hello

function greeting() {  // The function declaration
    console.log("Hello");
}

ruleSet = [
    "one: all identifiers are registered to their scopes at compile time",
    "two: each identifier is created at the start of the scope it belongs too, each time that scope is entered",
    "hoisting = var is visible from the start of its enclosing scope"
]

functionHoisting = "when a function declarations name identifier is registered at the top of its scope"

hoistingRule = [
    "function hoisting only applies to formal function declarations, when they are outside of blocks",
    "function expressions are not hoisted"
]


hoistingAnotherMetaphor 

hoistingAssertion = "That hoisting refers to the compile-time operation(task) of generating runtime instructions to auto register variables at the beginning of its scope"

hoistingReally = "just a metaphor for how JS handles variable declarations during compilation"


reDeclaration

rule = "No re-declaration of variables in the same scope"

// Consider
var student = "Lupe";
console.log(student);

var student;
console.log(student);  // Some say this returns undefined

// In reality 
// Lupe 
// Lupe


constants

rules = [
"A const requires that the variable be initialized",
"create variables that cannot be re-assigned"
]

const empty;  // SyntaxError

const student = "Lupe";
console.log(student);

student = "Sven";  // TypeError


warningNote 
TypeError = "stops program execution due to a fault"
SyntaxError = "are faults that do not even allow the program to start execution"


loops 

point = "JS designed to not allow re-declaration of variables in the same scope"

useRules = [
    "const cannot be used with the general for loop due to the re-assignemnt requirement",
    "const ok with for of and for in = re-declaration",
    "let ok with for, for in, for of, and others"
]



unitializedVariables

rule = "var declarations the variable is hoisted to the top of scope and auto initiailzed to undefined to allow for use throughout scope"

and = "let and const do not fall into this rule"

// Consider 
console.log(name);
// ReferenceError

let name = "Dag"

whyTheError = "its not been initialized, so it cannot be used yet"

mustAsk = "how to initialize an unitialized variable"

response = "do so with an assignment attatched to a declaration statement"

// Consider 
let name = "Trine";
console.log(name);  // Trine

noteThis = "compiler removes the var, let, const declarations replacing them with the instructions at the top of each scope thus registering the correct identifiers"

TDZ = "period of time from the entering of a scope to the autp-initializations of the variable occurs"

letConst = "only have an observable TDZ"