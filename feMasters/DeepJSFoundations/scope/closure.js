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

about = [
    "is not the namespace pattern",
    "requires the concept of encasulation(hidding data and behavior)",
    "modules encasulate data and behavior(methods) together",
    "the state(data) of a module is held by its methods via CLOSURE!",
    "no closure = no module",
    "PURPOSE of module -> track state over time"
];

// illustration of object with data and function = namespace pattern -> a primitive data structure
// point -> all the properties and functions that exist are public
var workshop = {
    teacher: "Ky",
    ask(question) {
        console.log(this.teacher, question);
    },
};
workshop.ask("Is this a module?")  //Ky Is this a module?

// illustration of the module pattern using an IFEE pattern aka singleton
var workshop = (function Module(teacher){    // The (function pattern means an IFEE
    var publicAPI = { ask, };
    return publicAPI;

    //
    function ask(question) {
        console.log(teacher, question);
    }
})("Kyle");

workshop.ask("This is a module, right?");

// illustration of the module factory, another way to make modules
// workshop module factory function
function WorkshopModule(teacher){
    var publicAPI = { ask, };
    return publicAPI;

    function ask(question) {
        console.log(teacher, question);
    }
};

var workshop = WorkshopModule("Kyle");

workshop.ask("Module, right?");
// Kyle Module, right?


question = "how to see state in a function?"

ES6ModulePatterns

about = [
       "node and TC39 missed comms so need a hack to make ES6 module pattern syntax and node modules work together",
       "this pattern produces only singletons, run once and other instances only ref the original"
]

// example note the file extension workshop.ejs 
var teacher = "Hy";

export default function ask(quetion) {
    console.log(teacher, question);
};


ES6ModuleSyntax 

importingModules = [
    "one type = named import syntax(more modern approach), to literally import identifiers into scope",
    "second type = namespace import more traditional"
]