whatIsClosure 

theAnswer = "when a function is able to remember and access its lexical scope(the free variables aka outside itself),  even when the function executes in a different scope"

partOne = "is just lexical scope = function references vars outside itself, going up scope chain to find it"

secondPart = "the critical part that actually makes up closure = the preservation or linkage back to the original scope where it was defined no matter where the value is passed, that value is retained/preserved"

setTimeoutExampleOfClosure

function ask(question) {
    setTimeout(function waitASec(){
        console.log(question);
    }, 100);
}

ask("Is this closure?");

closureWithFunctionCallback

function ask(question) {
    return function holdQuestions(){
        console.log(question);
    };
}

var myQuestion = ask("What is closure?");

myQuestion();  // What is closure?


closingOverVariables 

notCapturingAValue

var isNot = [
    "capturing a value", 
    "not having to do with values", 
    "not closing over value"
];

var closureIs = [
    "closing over a variable", 
    "preserving access to variables"
];

// illustration
var teacher = "K";

var myTeacher = function() {
    console.log(teacher);
};

teacher = "S-Juan";

myTeacher();  // "S-Juan"


rampUpToModules = "lexical scope > closure > module pattern";

modulePattern 

isNot = [
    "the namespace pattern"
];

// illustration
var workshop = {
    teacher: "Ky",
    ask(question) {
        console.log(this.teacher, question);
    },
};
workshop.ask("Is this a module?")  //Ky Is this a module?