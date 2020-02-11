//Functions 

//parameters vs arguments 
const parameters = 'variables specified between parentheses in function definition';
function doThis(action) {
    //action is the parameter
}

const arguments = 'concrete values passed to the function when calling the function';
doThis('Enter Data');

//So 'Enter Data' is the argument for the function for
    //the action parameter

//Functions v methods 
    //so 
        const objectTitle = {
            //This is a method
            someAction: function greet() {
                console.log('Greetings');
            }
        };

//Functions are objects 
        //stored in the heap



//Function expression 
        //These produce a value (function object) that need to be stored manually at some location

        //anonymous function
        const heavy = function () {
            console.log('Some message');
        };

        heavy();

//function expression or function declaration 

        //function declaration/function statement 
        lofotenLight();
        //is hoisted to the top and can be declared anywhere in the file
        //as illustrated by the location of the call above
        function lofotenLight(a) {
            return a;
        }


        //function expression 
        //hoisted to top but not initialized and cannot be declared anywhere
        const lofotenLight = function(a) {
            return a;
        }

        lofotenLight();

//Anonymous functions 
        //Use when the function is used rarely/only once
        //And where passing in a reference to  function to another function 

        //example here the addEventListener is taking a function as an argument
        startGameBtn.addEventListener('click', function() {
            console.log('Game is starting');
        });

//=> functions 
        //bonus - allows for use of tenary expression 
        //advantage is - if only one expression, then omit curly braces and 'return' keyword

        //example 
        //from 
        const add = (a, b) => {
            return a + b;
        }
        //now is 
        const add = (a, b) => a + b;

//default arguments in functions 

//rest operator (as opposed to the spread operator (a, ...))

        //used in the paramter list and merges values into an array 
        //example 
            const sumUp = (a, b, ...numbers) => {
                let sum  = 0;
                for (const num of numbers) {
                    sum += num;
                }
                return sum;
            };

            console.log(sumUp(4, 6, 6, 4));

//Functions in functions 
            //practice point, better to use functions at the root level
            //example 
            const sumUp = (a, b, ...numbers) => {
                const validateNumber = (number) => {
                };
                console.log(number);
                
                let sum  = 0;
                for (const num of numbers) {
                    sum += num;
                }
                return sum;
            };

            console.log(sumUp(4, 6, 6, 4));


//Callback function 
            // is a function passed to another as an argument 
            // invoked inside the outer function for a routine or action 
                const greeting = (name) => {
                    alert('Message Here' + name);
                }

                const processGretting = (callback) => {
                    const name = prompt('Enter X here');
                    callback(name);

                }

                processGretting(greeting);

//bibd() 
                //to prepare functions with event listeners or callbacks 