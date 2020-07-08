whatIsClosure;

theAnswer =
  "when a function is able to remember and access its lexical scope(the free variables aka outside itself),  even when the function executes in a different scope";

partOne =
  "is just lexical scope = function references vars outside itself, going up scope chain to find it";

secondPart =
  "the critical part that actually makes up closure = the preservation or linkage back to the original scope where it was defined no matter where the value is passed, that value is retained/preserved";

setTimeoutExampleOfClosure;

function ask(question) {
  setTimeout(function waitASec() {
    // waitASec is closed over the varaible question
    console.log(question);
  }, 100);
}

ask("Is this closure?");

closureNote =
  "nothing special to do, but simply access the variable outside and pass the function someplace to 'observe' that closure exists ";

closureWithFunctionCallback;

function ask(question) {
  return function holdQuestions() {
    //holdQuestions closed over variable question
    console.log(question);
  };
}

var myQuestion = ask("What is closure?"); // The callback function ask() passed as a value to the variable myQuestion

myQuestion(); // Here, stil have access to the variable

closingOverVariables;

notCapturingAValue;

var isNot = [
  "capturing or closing over a value",
  "not having to do with values",
  "not closing over value",
];

var closureIs = [
  "closing over a variable",
  "have a linkeage to the variable",
  "preserving access to variables",
];

// illustration
var teacher = "K";

var myTeacher = function () {
  console.log(teacher);
};

teacher = "S-Juan";

myTeacher(); // "S-Juan"

rampUpToModules = "lexical scope > closure > module pattern";

modulePattern;

about = [
  "is not the namespace pattern",
  "requires the concept of encasulation(hidding data and behavior)",
  "modules encasulate data and behavior(methods) together",
  "idea of a modules is things private(cannot be touched) and things public(avail through the publicAPI)",
  "the state(data) of a module is held by its methods via CLOSURE!",
  "no closure = no module",
  "PURPOSE of module -> track state over time",
];

// illustration of object with data and function = namespace pattern -> a primitive data structure
// point -> all the properties and functions that exist are public
// is an example of a primitive data pattern
var workshop = {
  teacher: "Ky",
  ask(question) {
    console.log(this.teacher, question);
  },
};
workshop.ask("Is this a module?"); //Ky Is this a module?

revealingModulePattern = [
  "the classic module pattern",
  "Modules encapsulate data and behavior(methods) together.",
  "The state(data) of a module is held by its methods via closure",
];

// illustration of the module pattern using an IFEE pattern aka singleton
// outer enclosing function
var workshop = (function Module(teacher) {
  // The function pattern means an IFEE using the ()'s
  var publicAPI = { ask }; // publicApi object exposing the ask function
  return publicAPI;

  //  the inner function that is closed over the teacher variable
  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");

// this line is preserving the state from being GC'd
workshop.ask("This is a module, right?");

noteOnModulePurpose =
  "track state over time and closes over that state and allowing access via the publicAPI";

// illustration of the factory function, another way to make modules
// workshop module factory function
function WorkshopModule(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
}

var workshop = WorkshopModule("Kyle"); // Calling the function WorkshopModule = callsite

workshop.ask("Module, right?");
// Kyle Module, right?

question = "how to see state in a function?";

ES6ModulePatterns;

about = [
  "node and TC39 missed comms so need a hack to make ES6 module pattern syntax and node modules work together",
  "this pattern produces only singletons, run once and other instances only ref the original",
];

// example note the file extension workshop.ejs
var teacher = "Hy";

export default function ask(question) {
  console.log(teacher, question);
}

ES6ModuleSyntax;

importingModules = [
  "one type = named import syntax(more modern approach), to literally import identifiers into scope",

  "second type = namespace import more traditional",
];

// first, the workshop.js file
var teacher = "Kyle";

export default function ask(question) {
  console.log(teacher, question);
}

//  Named import illustrated  = java like
// import into useModule.js
import ask from "workshop.js"; // top level scope here with ask in it and this is referenced bound to ask function in the module = workshop.js file

ask("This is a default import, right?");
//  Kyle This is a default import, right?

// Namespace import illustrated
import * as workshop from "workshop.js";

workshop.ask("This is a namespace import, right?");
// Kyle This is a namespace import, right?
