thinkLikeJS

scope = 'where to look for things';

scopeDetails = {
    ask: 'where to look for things 1. what are the identifiers? and 2. what scope does it belong to?',
    varRoles: {
        receiving: 'or target position, the assignemnt of the value',
        retrieving: 'or source position, a value from the variable'
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

    // Execution: Engine asks SM -> ever heard of the target reference for teacher? Sure thing, here is a red marble  

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
    // Execution: Engine asks SM -> ever heard of the source refernece for ask?  Yup, here is a red marble.  



// No more formal declarations and the compiler phase is complete
// So now there is an execution plan for the virtual machine/JS engine

bigNote = "All lexical scopes are determined at compile time"