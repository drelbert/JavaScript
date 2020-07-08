whatIsScope

scope = "rules for organizing and managing variables"


compiledVInterpreted 

compilation = [
    "set of steps that process the text of code, converting it to a list of instructions",
    "JS = compiled"
]

interpretation = ["transforms program into machine-understandable instructions"]


compilingCode 

point = "scope is primarily determined during compilation"

compilerTheory = [
    "programm is processed in three basic stages",
    [
        "tokenizing/lexing = break up the string into meaningful chunks = tokens",
        "parsing = building the stream of tokens into a tree of nested elements, representing the grammatical structure of the program -> AST",
        "code generation  = AST is turned into executable code"
    ]
]


vocabNote 
var a = 2
// this is a variable declaration
// child node identifier value of a 
// AssignmentExpression is a NumericLiteral value of 2


requiredTwoPhases

parsingCompilation

then 

execution



compilerSpeak 

rolesOfVariables = [
    "targets are about assignemnt",
    "variable is a target of an assignemnt"
    ["where there is a value being assigned to it"],

    "variable is source of a value",
    ["otherwise its a source as there is no value being assigned"],

    "note = for the JS engine to handle the variables it first must label them as target or source"
];



question = "how is a variable a target or source?"

response = "see code comments in program below" 
 

var students = [  // target assignment operation 
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {  // As a function declaration -> special case of target reference
    for (let student of students) {  // target assignment operation
                                     // source reference = students
        if (student.id == studentID) {   // source reference = student and studentID 
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73);  // target assignment operation
// Why?  The argument 73 is assigned to the paramter studentID
// source reference = getStudentName(73)

console.log(nextStudent);
// Suzy



lexicalScope 


JSScope = "determined at compile time = lexical scope"

keyIdea = "of lexical scope is managed only by the placement of functions, blocks and variable declarations and how they relate to each other"

compilationIsAbout = "creating a map of all the lexical scopes, but not created until runtime"
