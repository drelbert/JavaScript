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

principleOfLeastPrivledge = {
     says: "default to keeping all private and expose the minimum",
     allowsFor: "avoidance of naming collision",
     and : "if hidden, then other dev cannot use",
     third : "core principle = protect the refactoring process"
}

IIFEPattern 

var teacher = "Ky";

( function anotherTeacher() {
    var teacher = "Zuzy";
    console.log(teacher);
} ) ();

console.log(teacher);


blockScoping


asAn = "alternative to the IIFE ( function ... ) above"

var teacher = "Ky";

{
    let teacher = "Gane";
    console.log(teacher);
}

console.log(teacher);

aboutBlocks = {
    are: "lightweight and less side effects, no redefining",
    not: "expressions",
    noVar: "let (or const) for making a declaration inside a block, turning the block into a scope"
};

howBlockScopeFits = {
    letUse: "to signal the presence of a block",
    useOnly: "where it already makes sence to block scope (maybe where var is already)"
};

useLet = "To block scope"

// Let use example 
function diff(x, y) {
    if ( x > y ){
        let temp = x;
        x = y;
        y = temo;
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


explicitBlockScope = "go ahead and create a block scope to contain the let"

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
student;
teacher;
var student = "value";
var teacher = "coolValue";

debunking = "let does not hoist"

seeSpec = "13.3.1"