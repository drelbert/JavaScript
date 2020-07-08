FEMasters-Content


objectsOrientedSystem = {
    one: "this",
    two: "class{}",
    three: "prototypes"
}



thisKeyword 

defined = [
    "a function's this references the execution context for that call",
    "determined entirely by how the function was called",
    "a this aware function can thus have a different context each time its called",
    "which makes it more flexible & reuseable"
]


thisIsFor = "invoking functions in various different contexts"


question = "where is 'this' pointing to?"
response = "where is the callsite?"


// example 
function ask(question) {
    console.log(this.teacher, question);  // the function is this aware given this line
}

function otherClass() {
    var myContext = {  // the myContext object with one property
        teacher: "Sur"
    };

    ask.call(myContext, "Why?");  // does not matter that ask is called here, its how its being called
                                  // ask.call means that 'this' points to myContext
                                  // ask.call indicates, use the myContext object as the 'this' keyword and invoke the function in that context 
    // Sur Why?
}

otherClass();


theMDNDetails

// example mdn 
var test = {
    prop: 42,
    func: function() {
        return this.prop;
    },
};

console.log(test.func());

value = "the property of an execution conext"



fourWaysToInvokeFunctions = [
    "implicit binding" [
        "useful to share behavior among contexts",
        "the most important of all the rules"
    ],
    "explicit binding with .call" [
        "this is explicit as the call keyword show the context in which to invoke the function"
    ], 
    "new keyword" [
        "for invoking function with this keyword in a whole new empty object"
    ],
    "default binding" [
        "adheres to strinct mode rules"
    ],

    "each of these will answer the question, what is 'this' keyword?, in a different way"
]


implicitAndExplicitBinding

thisImplictBinding = "implicit only,  plus this is how sharing between contexts occurs"

// starter example which is the name space pattern
var workshop = {
    teacherProperty: "Kyle resoponds",
    askMethod(question) {
        console.log(this.teacherProperty, question);  // the method is 'this' aware given this line
    },
};

workshop.askMethod("'this' is pointing to the object used to invoke it"); 
// here is the callsite and it defines where 'this' points to, the object used to invoke it known as workshop
// workshop.ask says, invoke ask with a 'this' keyword pointing to workshop



sharingBehaviorExample = "useful to share behavior between contexts and is illustrated below"
function ask(question) {
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Kile",
    ask: ask  // making a reference to the ask function, sharing the ask function here
}; 

var workshop1 = {
    teacher: "Pile",
    ask: ask  // making a reference to the ask function, sharing the ask function here too 
}; 

workshop1.ask("Share the method?")  // the callsite
                                    // Invoking the ask function in the execution context of workshop1
// Kile Share the method?
workshop2.ask("Share the method?")  // the callsite
                                    // Invoking the ask function in the execution context of workshop2
// Pile Share the method?



thisExplcitBinding = "using .call  or .apply to be explicit and invoke it in a particular context, I will specify"

function ask(question) {
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher = "Mattias",
};

var workshop2 = {
    teacher: "Sonja",
};

ask.call(workshop1, "Set explicit context with .call");  // the callsite
                                                         // Invoke the ask function with the execution context of workshop1
// Mattias Set explcit context with .call

ask.call(workshop2, "Set explicit context with .call");  // the callsite
                                                        // Invoke the ask function with the execution context of workshop2
// Sonjsa Set explicit context with .call



theNewKeyword

fourStepsOfNew = [
    "one: allows for invoking a function and create/use a whole new empty object",
    "two: links that object to another object",
    "three: calls function with this keyword set to the new object",
    "four: if function does not return an object, assume return of this",

    "note: using the new keyword results in the same as function.call{} to invoke the function in the context in a new empty object"
]

again = "invoke a function with a new empty object"

function ask(question) {
    console.log(this.teacher.question);
}

var newEmptyObject = new ask("What does new do?");  // the callsite



defaultBinding = "the fallback if none of the other three match"

var teacher = "Sami";

function ask(question) {
    console.log(this.teacher, question);
}

function askAgain(question) {
    "use strict";
    console.log(this.teacher, question);
}

ask("What's the default?");  // the callsite, 
                             // a normal function call, 
                             // note no context object, .bind, .call, or new 
// Sami What's the default?

askAgain("What's the default?");  // same as above function call 
// TypeError = because trying to access a property on the undefined value


note = "look to the callsite(look at how the function is being called) to determine what this keyword is pointing at"



arrowFunctionsLexicalThis

// example 
var workshop = {  // Object with one property and one method
    teacher: "Steve",
    ask(question) {
        setTimeout(() => {  // Making a callback to setTimeout with the =>
                            // Pointing a the workshop object
                            // This is lexical this behavior
            console.log(this.teacher, question);  //  Spec = no this in an arrow function ref: 14.2.16
            // So lexically have to go up to the ask() function which is the next lexical scope 
            // This is known as resoving lexically
            // Meaning that it has to go up until it finds a function that defines a 'this' keyword
        }, 100);
    },
};

workshop.ask("Is this lexical 'this'?");  // This is ask's definition of the this keyword
// Callsite with implicit binding
// Steve Is this lexical 'this'?

rule = [
    "arrow functions are this-bound (.bind()) to its parent function",
    "https://www.ecma-international.org/ecma-262/9.0/index.html#sec-arrow-function-definitions-runtime-semantics-evaluation"
]

resolvingThisInArrowFunctions

onlyUse = "the => when lexical this is needed"



es6ClassKeyword

class {} "by far the most prevalent pattern used"

classKeyword = "essentially syntactic sugar layered on the prototype system"

// a model 

class Workshop {  // the class keyword and a name
    constructor(teacher) {    // Optional 
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

var deepJS = new Workshop("Larri");  // Instanciating the class with new, plus there is the method call
var reactJS = new Workshop("Bjorn");  // Instanciating the class with new, plus there is the method call

deepJS.ask("Is 'class' a class?");
// Larri Is 'class a class?

reactJS.ask("Is this class OK?");
// Bjorn Is this class OK?


theExtendsBlock
class AnotherWorkshop extends Workshop {  // The extends caluse and the rest is inherited
    speakUp(msg) {  // Defining a new method
        this.ask(msg);
    }
}

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.speakUp("Classes getting better?"); // Invoke the method 
// Kyle Classes getting better?