function lexicalScope(ruleSet) {
    
    return 
} 

var aboutLexicalScope = [
    {
        content: "definition: scopes nested within each other",
        ruleNumber: 1,
        confirmed: true
    },
    {
        content: "role Of Compiler = figurie out the scopes prior to execution",
        ruleNumber: 2,
        confirmed: true
    },
     {
         content: "authorTime: fixed at author time to put one function inside another",
         ruleNumber: 3,
         confirmed: true
     },
     {
         content: "isFixed = since its built at compile time then it cannot be modified, not dynamic",
         ruleNumber: 4,
         confirmed: false
     }
];

functionScoping 

builtFor = 'establishment of pattern';

// Bad example 
var teacher = "Jose";

// Mistake -> creating name coliision
var teacher = "Guadalupe";
console.log(teacher);  // Overiding the original

console.log(teacher);

// Guadalupe for both is returned


// A little better... add a function 
// Still have a naming collision
var teacher = "Jose";

function anotherTeacher() {
    var teacher = "Lupe";
    console.log(teacher);
}

anotherTeacher();

console.log(teacher);


principleOfLeastPrivledge = {
    says: "default to keeping all private and expose the minimum",
    allowsFor: "avoidance of naming collision",
    and : "if hidden, then other dev cannot use",
    third : "core principle = protect the refactoring process"
}
point = "when variable is exposed, someone will use it = now restricted in ability to refactor"

buildInPrincipleOfLeastPrivledge = [
    "use scope principles",
    "take the function and place it inside ()",
    "hence the IFEE pattern"
]


IIFEPattern 

var teacher = "Jose";

( function anotherTeacher() {  // Not a function declaration but a function expression, since function is not the first item in the statement  
    var teacher = "Lupe";
    console.log(teacher);
} ) ();  // A function expression that is immediatly invoked with ()

console.log(teacher);


blockScoping
using = " the {} not the () as above"

asAn = "alternative to the IIFE ( function ... ) above"


// Example using the function above now block scoped
var teacher = "Jose";

{
    let teacher = "Lupe";
    console.log(teacher);  // Lupe
}

console.log(teacher); // Jose


aboutBlocks = {
    are: "lightweight and less side effects, no redefining",
    not: "expressions",
    noVar: "use let (or const) for making a declaration inside a block, turning the block into a scope",
    mustUse: "let or const in order to convert block to scope"
};

howBlockScopeFits = {
    letUse: "to signal the presence of a block",
    useOnly: "where it already makes sence to block scope (maybe where var is already)"
};


// Let use example 
function diff(x, y) {
    if ( x > y ) {
        let temp = x;  // Correct use of let inside block scope
        x = y;
        y = temp;
    }
    return y - x;
}


choosingLetOrVar

// Example illustrating use of both 
function repeat(fn, n) {
    var result;  // var used here because it is part of the entire function's scope 

    for (let i = 0; i < n; i++) {  // This let was origininally a var
        result = fn( result, i );
    }
    return result;
}

useVar = "where making scope dis-ambiguous is needed"

useLet = "to block scope and indicate a lovalized use of the variable"

explicitBlockScope = "go ahead and create a block scope to contain the let"


constSection 

constDiscussion = "const over let, but const does not carry its own weight"

detailsConst = {
    point: "some are confused that const means a thing that does not change",
    reality: "const was desigined to hold a var that cannot change",
    use: "use in small blocks",
    constSays: "for the rest of this block, there will be no reassignemnt",
    use: "when assigning a value that is already a primitive immutable values: string, number, boolean.  Use as sematic placeholder for literals"
}

// Examples
const myTeacher = teacher;
myTeacher = "Juan";  // TypeError

const teachers = ["Kri", "Sue"];
teachers[1] = "Steve";    // Allowed


hoisting

notAThing = "metaphor to discuss the idea of lexical scope, without getting detailed about it";
usedFor = "describing the parse and execute phase without getting into the details";

// Illustration 
firstPass = "compiler"
secondPass = "execution"
findingVarDeclarations = "parsing"

student;
teacher;
var student = "value";
var teacher = "coolValue";


letDoesNotHoist

debunking = "let does not hoist"

rule = "let and const only hoist to a block, var hoists to a function"

whenScopeStarts = [
    "var initializes to undefined",
    "let and const do create location but state is uninitialized until the block where they exist is run"
]
seeSpec = "13.3.1"