//Section 5 
//ES5 v ES6+ syntax 
    //Ecma Script is the langauge behind JavaScript

    //let and const 
    //let -> creates a variable 
        //uses block scope 
    
    //where let or const are in {} then the variable is scoped to that block
        //this forces intentional development 
        
    //hoisting = looking for and registering functions and vars
    
    //strict mode 
        //if turned on allows for disabling of weird behavior
        //modern syntax eliminates the need to add "use strict" to files


//How JavaScript works 
    //browser parsing and interpreting 

    //what does the browser do? 
        //Given Chrome: V8 parses and executes
            const parts = {
                one: 'interpreter = reads code for execution but slow at this point',
                two: 'compiler = translates byte code (from interpreter) to machine code'
            };

        //Given f-fox: spidermonkey

    //inside the JavaScript engine 
            //this is what executes the code 
            //all about memory and execution steps 
            //concepts 
                const heap = {
                    is: 'long term memory',
                    does: 'storing of data in memory and manages it'
                }
                const stack = {
                    is: 'short term memory',
                    does: 'manages function calls and communication, aka program flow'
                }

//primitives v references 

        const primitives = {
            consistOf: 'strings, numbers, booleans, null, endefined, symbol',
            stored: 'in the stack',
            copying: 'the value is actually copied',
        }

        const referenceValues = {
            are: 'all (other) objects',
            stored: 'typicaly in the heap',
            pointer: 'or address to a location in memory',
            copying: 'a variable copies the pointer/reference',
            specifics: {
                modifyingTheCopy: 'use the spread and rest operator to add new elements to new object'
           },
            bigNote: 'even where the objects key: value pairs match, the objects are !=='
        }

//garbage collection

        const is = {
            about: 'how the heap deals with managing memory',
            chromeHas: 'v8 garbage collector = regularly checks the heap for unused objects (objects with no reference)',
            activity: 'removes unused objects',
            
        }
