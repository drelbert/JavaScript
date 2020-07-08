IllustratingLexicalScope 

marblesBucketsBubbles 

lexicalScope = [
    "the model to describe how scope is determined during compilation",
    "describes how a parser resolves variable names when functions are nested",
    "lexical = when lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available"
]

marbles = "variables"

buckets = "functions and blocks"

marbleColor = "determined under which scope(bucket) its created in"


keyTake-aways
"Variables are declared in specific scopes, which can be thought of as colored marbles from matching-color buckets.",

"Any variable reference that appears in the scope where it was declared, or appears in any deeper nested scopes, will be labeled a marble of that same color—unless an intervening scope shadows the variable declaration; see Shadowing in Chapter 3.",

'The determination of colored buckets, and the marbles they contain, happens during compilation. This information is used for variable (marble color) "lookups" during code execution.'



// illustrated 

//  global scope = red 
// nestedNote: engine asks global scope manager and it does know about it
var students = [  // this line allocates memory for the variable and labels it students
                  // then add a reference to an array
    { id: 14, name: "Kyle" },  // these are just basic JS value literals not affected by scope concerns
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
]

function getStudentName(studentID) {
    // function scope = blue

    for (let student of students) {
        // loop scope = green 
        // nestedNote: engine asks the function scope manager about students = it will not know about it, sooo to line X

        if (student.id == studentID){
            return student.name;
        }
    }
}

var nextStudent = getStudentName(112);
console.log(nextStudent) // "Frank"


conversations

compilation = [
    "first compiler asks",
    "then scope manager (for global, function, block) responds",
    "if no = scope manager creates a variable in that scope",
    "if yes = its skipped"
]

execution = [
    "first engine asks, is there a variable or function ot block accessible in the current scope?",
    "then scope manager (for global, function, block) responds",
    "if not, engine keeps looking elsewhere"
]




nestedScope 

aspectOfLexicalScope = "if an identifier reference cannot be found in current scope, the next outer scope in the nesting is consulted"


lookupFailures 

again 
variable = "can be a source or a target"

ifSource = "and where an unresolved identifier lookup = ReferenceError"

meanings = [
    "Not defined is not declared(undeclared)",
    "undefined really means variable was found/declared but has no value at the moment"
]


globalWhat

point = "usefulness of strict mode to force global scope manager to respond with a ReferenceError"


buildingOnMetaphors 

"The building represents our program's nested scope collection. The first floor of the building represents the currently executing scope. The top level of the building is the global scope",

"You resolve a target or source variable reference by first looking on the current floor, and if you don't find it, taking the elevator to the next floor (i.e., an outer scope), looking there, then the next, and so on. Once you get to the top floor (the global scope), you either find what you're looking for, or you don't. But you have to stop regardless."