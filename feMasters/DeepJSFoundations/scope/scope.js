thinkLikeJS

scope = 'where to look for things';

scopeDetails = {
    ask: 'where to look for things 1. what are the identifiers? and 2. what scope does it belong to?',
    varRoles: {
        receiving: 'or target reference/position, the assignemnt of the value',
        retrieving: 'or source reference/position, a value from the variable'
    },
    JSasCompiledLangauge: 'aka parsed, where a processing step happens prior to execution occuring',
    compilerStages: [
        'lexing',
        'tokenization',
        'parsing to convert tokens into abstract syntax tree',
        'code generation -> build executable form of program'
    ],
    thinkAbout: 'the processing of scopes and preparing of plan for execution',
    aTwoPassSystem: {
        compile: 'what happens when the code is processed and scope is set up?',
        execute: 'based on scopes in form of functions and blocks'
    }
}


compilationAndScope 

scopeManager = 'bucket creation and drops marbles in right one'

compiler = 'processor of program -> I have an x color marble'

compilerToScopeManagerConversation
//  inner scope = blue bucket 
//  then inside that scope = blue and green buckets


var teacher = 'Gru'; 
    // Compile: Formal declaration: Compiler asks Scope Manager if they know about it, and since not, SM creates a red marble for Compiler

        // Note, teacher is in the target position, receiving an assignment

    // Execution: Engine asks SM -> ever heard of the target reference for var teacher? Sure thing, here is a red marble  

    // In execution, the next two declarations have been compiled away
function otherClass() {  
    // Compile: Another formal declaration: Compiler -> SM, ever heard of it?  Nope, so SM returns a red marble 
    // Note: Functions make scopes and this is recognized by Compiler
    var teacher = 'Sur';  
        // Compile: Formal declaration inside the new scope/blue bucket
        // Compile: Compiler -> SM, ever heard of teacher?  Nope, so SM returns a blue marble
        // Two vars with same name is shadowing

        // Execution: Engine asks SM -> I have a target reference, ever heard of it?  Yup, here is your blue marble
    console.log("Welcome");  
        // Not a formal declaration, no impact on scope
        // Execution: Engine goes up to global scope to ask SM, ever heard of the source reference for console?  Yup, here is a red marble
}

function ask() { 
    // Compile: Another formal declaration: Compiler -> SM, ever heard of ask?  Nope, so SM returns a red marble
    // Note the new scope based on function, so new green bucket is created

    // Execution: Engine asks SM -> Ever heard of the target reference for ask?  Yes, here is a green marble

    var question = "Why?"; 
    // Compile: Compiler -> SM, ever heard of question?  Nope, so here is a green marble
    console.log(question);   
}

otherClass();
    // Execution:  Engine asks SM -> ever heard of the source reference otherClass?  Sure, here is a red marble
    // So function execution occurs because of the ()
ask();
    // Execution: Engine asks SM -> ever heard of the source reference for ask?  Yup, here is a red marble.  



// No more formal declarations and the compiler phase is complete
// So now there is an execution plan for the virtual machine/JS engine

bigNote = "All lexical scopes are determined at compile time"

<<<<<<< HEAD


compilationReview

var teacher = "Kyle";
    //Compile
    //Compiler -> Hey SM(Global Scope), I have a formal declaration teacher that is a target, know it?
    //SM -> nope, so here is a red marble for the red bucket.

    //Execution
    //Engine -> Hey SM, I have an executable statement target reference, ever heard of it?
    //SM-> Yup, here is a red marble to assign Kyle to

function otherClass() {
    //Compile
    //Compiler -> Hey SM, I have a formal declaration otherClass creating a new scope, ever heard of it?
    //SM -> Nope here is a red marble

    //Complier -> but wait the function has created a new scope, can you create a new blue bucket?
    //SM -> Sure here it is, note no blue marbles will be issued

    teacher = "Sue";
    //Compile: 
    //Compler -> wait 'teacher' has no var, so not a formal declaration

    //Note that the value 'Sue' overrides the value of 'Kyle' since it was not a shadow var, it was never declared in otherClass

    //Execution
    //Engine -> Hey scope of otherClass, I have a target reference for teacher, ever heard of it?
    //otherClass/Blue bucket scope -> No
    //Engine -> Hey SM/Global scope, I have a target reference for teacher, ever heard of it?
    //SM/Global Scope -> Yes, here is a red marble
    topic = "React";
    //Compile 
    //Compler -> wait 'topic' has no var, so not a formal declaration  

    //Execution
    //Engine -> Hey scope of otherClass, I have a target ref for topic, know it?
    //otherClass/Blue bucket scope -> No
    //Engine -> Hey SM/Global scope, I have a target reference for topic, ever heard of it?
    //SM/Global scope -> Hey, its an auto-global so I just created one for you, here is a red marble

    console.log("Hola!");
    // Execution: Engine goes up to global scope to ask SM, ever heard of the source reference for console?  Yup, here is a red marble
}

otherClass();
    //Execution
    //Engine -> Hey SM/Global Scope I have a source reference, know it?
    //SM -> Yes, here is a red marble
    //SM -> Note that there is a reference to the function otherClass so return to that function to execute


teacher;
    //Execution
    //Engine -> Hey SM/Global scope, I have a source reference for teacher, ever heard of it? 
    //SM/Global scope -> Yup, here is your red marble with value of Sue

topic;
    //Execution
    //Engine -> Hey SM/Global scope, I have another soruce reference for topic, know it?  
    //SM/Global scope -> Yup, here is your red marble with value React
    //SM/Global scope -> and by the way its an auto global that was created at runtime not author time

    
strictMode = 'use strict'

conversationAbove = 'will be the same'
but = 'when Engine inquires about it, ultimatly the Global scope will respond with a ReferenceError'
reason = 'the variable cannot be found'

nestedScope = 'buckets inside buckets'

var teacher = "Kyle"  //Red marble

function otherClass() {  //Red marble
    var teacher = "Sue";    //Blue marble

    function ask(question) {    //Blue marble
        console.log(teacher, question);   //techer is blue marble, but question is green since its bucket is nested in the blue ask bucket
    }

    ask("Why?");
}

otherClass();
ask("???");   //ReferenceError

undefinedAndUndeclared = {
    undefined: "means = a variable exists, but at the moment it has no value",
    undeclared: "means = never formally declared, never had a marble, in strict resutls in a ReferenceError"
}


lexicalScopeElevator = {
    firstFloor: "current scope",
    topFloor: "global scope"
}