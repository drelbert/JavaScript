classAndOOPIntro 

oop = [
    "paradign for structuring complex code",
    "prototype chain = feature that supports emulation of oop but a complex tool itself",
    "there is a difference betweem __proto__ and prototype",
    "the keywords: new and class = tools to automate object and method creation"
]

coreOfDevelopment = [
    "1. save some data",
    "2. run code using the data"
]

problem = [
    "how to structure properties and functions correctly so that its correctly connected?",
    "how to store data and functions together?",
    "OOP exists to answer this problem"
]

codeEndState [
    "1. easy to reason about",
    "2. easy to add features to = new functions",
    "3. always efficient and performant"
]


oopStructures 

objectDotNotation

encapsulationIllustrated 

var user909 = {
    name: "Doc",
    score: 5,
    increment: function() { user909.score++; }
};

user909.increment();

creatingNewUserWithDotNotation

var user999 = {}; // Returns/creates an empty object

user909.name = "Toco",  // Property name = property value
user909.score = 99,
user909.increment = function() {
    user909.score++;
};



creatingNewUserWithObject.create

var user805 = Object.create(null);  // Returns/creates an empty object

user805.name = "Eva",
user805.score = 24,
user805.increment = function() {
    user805.score++;
}

// Note code is getting repetative 
// Solution is this...

factoryFunctions
about = "Generate objects using a functio = not useful in practice"

solution1 = "using factory functions"

// see written diagram 

about = [
    "easy to reason about",
    "problem: each new user takes up space in memory",
    "functions are just copies",
    "features have to be added manually to each user"
]


prototypeChain 
about = [
    "store the function in just one object and have the interpreter look up that object",
    "using the __proto__ property",
    "the link is established via Object.create() approach"
]

solution2 = "using the prototype chain"

function userCreator (name, score) {
    var newUser = Object.create(userFunctionStore);  // Linked to the userFunctionStore object
    // Object.create accepts the argument __proto__ aka creates an empty object with a hidden __proto__ property
    newUser.name = name;  // first into local memory in the execution context
    newUser.score = score;  // second into local memory in the execution context
    return newUser;  // third intot the local memory in the execution context
                     //  creating an empty object with a link to the userFunctionStore
}

var userFunctionStore = {  // Two methods that are available to many different objects via the __proto__ link
    increment: function(){this.score++},  // ensure 'this' is witten to access the object on which the function is being executed
    // this is the object on the right hand side of the . seen below user1.increment()
    login: function(){console.log("Logged in");}
};

var user1 = userCreator("Dean", 5); 
var user2 = userCreator("Tune", 6);
user1.increment()


hasOwnPropertyMethod

JSHas = [
    "the Object.Prototype"
]



solution3 = "using the new keyword"

thePointHere = "create an object"

function userCreator(name, score){    // Creating an object with a property called Prototype which is empty
                                      // this is the implicit creation of a function object combo
                                      // note, this is replaced when using the class keyword below
                                      // access via userCreator.prototype.something
// technical description 
// here is a function definition
// creating a label called the userCreator
// which has a function object combination
// the object has a property prototype : with an empty object

    this.name = name;
    this.score = score;
}

// These next two lines will result in two functions placed in the userCreator.prototype object
userCreator.prototype.increment = function(){ this.score++ };  
// the technical description 
// looking for userCreator and going to the userCreator object of itself
// look for the prototype property which when found is an empty object
// then create a new label called increment in the object and store a function/method

userCreator.prototype.login = function(){ console.log("login"); }; 
// technical description 
// looking up userCreator and going to the userCreator object of itself
// look for the prototype property which again is an empty object 
// then create a new label called login in the object and store a function/method 

var user1 = new userCreator("Ella", 9);
// declare a constant user1
// then on the right hand side call/execute/run the userCreator
// and now user1 is unitialized 

user1.increment()



classKeywordExample 

solution4 
// using syntactic sugar, notice the capitalized identifier
class UserCreator {  
    // technical description 
    // class creates the function object combo 
    constructor (name, score){
        // constructor can be thought of the function from solution 3 example 
        this.name = name;
        this.score = score;
    }
    increment () { this.score++; }
    login (){ console.log("login"); }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();