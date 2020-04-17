ScopeChain 

creationOfScopeChain = [
    "a new scope is created when a function is defined (declaration or expression)",
    "since scopes are nested inside each other, a natural scope hierarchy is created in the program"
]

scopeChainControl = "manages variable access, directionally, oriented upward and outward"

newScope = "has a clean slate/space to hold its own set of variables"

shadowing = "occurs if a variable name is repeates at various levels of the scope chain, limiting access to the outer var from that point inward"


functionNameScope 

// Creation of a function declaration 
// for illustration sake is in the global scope 

// has identifier = askQuestion
function askQuestin() {
    // ..
}

// Creation of a function expression
// is a function declaration 
// for illustration sake is in the global scope 
// used as a value not a standalone declaration
// function expressions do not hoist

// the identifier ofInstructor 
// is declared inside the function itself 
// but rules of implied scope are present

// and is read-only
var askQuestion = function ofInstructor() {
    // ..
}