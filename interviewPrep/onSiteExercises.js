gitHubLink = "https://github.com/young/frontend-interviewing"


onSiteOverview

strings

about = [
    "is one of the ES6 basic data structure types",
    "are immutable, if change it, creating a new string", 
    "is a primitive type = one of the basic units of a program, allows for maintianing state",
    "useful methods" [
        ".split(), .toLocaleLowerCase, .substring(), .startsWith()"
    ],
    "good practice to turn string into an array, manipulate it and then turn it back into a string"
];

reversingAString

var string = "stop";

function reverseString(){
    return string.split('').reverse().join('');
}

console.log(string.split('').reverse().join(''))



arrays = "data structure"

about = [
    "convert an item into an array" [
        Object.entries(),
        Array.from(),
        "spread: [...item]"
    ],
    "built-ins" [
        "isArray(), .filter(), .pop(), push(), .map(), reduce()",
        "new array? = .filter(), .reduce(), .concat(), .map()"
    ]
]

programmingIs = [
    "50% of programming is map(iterate over something).reduce(reduce it to the object)",
    "the other 50% is reading something from a db"
]


onSiteExampleQuestions

removeDuplicatesExercise

var string = "This is is a new new set of state";

function removeDuplicates(string){
    var array = string.split(" ");  // create an array from the string

    var set = new Set(array);   // get a new array of every string using set (which cannot have duplicates)

    var newString = [...set].join(" "); // using the spread operator to convert the set back into an array , then into a string
    return newString;
}

console.log(removeDuplicates(string));

proTip = "where the requiremnt is for unique values, use Set()"




flattenArrayExercise

using = "reduce + concat + isArray + recursivity"

const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arr, Infinity));


scope 

know = [
    "how to change the scope",
    "three ways to do change scope when referencing 'this'"
    [
        ".call(gets elements) = executes the function",  
        ".apply(gets an array) = executes the function", 
        ".bind(part of the app)= returns part of the function"
    ],
    "for example use in React to bind()"
]


implementBindExercise

// Implement Function.prototype.bind()

rulesToFollow = [
    "follow the explcicit binding invocation pattern",
    "use .call to invoke the function in the execution context of baz"
]


var foo = function() {
    console.log(this.bar);
}

let baz = foo.bind({
    bar: "Hello"
 }
)

baz()  // Hello 


// Jem's solution 
function bind(fn, context) {
    
    return function() {
        fn.call(context);
    }
}


timing 

know = [
    "about scheduling things in JS",
    "the two ways",
    "serInterval()",
    "setTimeout()",

    "debounce = throttle or slow down"
]


debounceExercise

// execute debounceFn() in maybe an event listener
function debounce(fn, time) {

    return function() {

    }
}

// need to add code above  


trees 

know = [
    "propertyOne = root",
    "propertyTwo = nodes" [
        "node properties break into",
        "parent",
        "children identified left to right 0, 1, etc",
        [0, 1]
    ],
    "DOM is common occurance of a tree"
]

// Given two identical DOM trees A and B
// DOM A has a button and we know its location 
// Create a function to find that same element in tree B

// this is a reverse path algorithm 

function reversePath(element, root){
    var path = [];
    let pointer = element;  // initalize the pointer

    while (pointer.parent)  // runs the loop until it gets to the parent 
        var index = pointer.parent.children.indexOf(pointer);  // get to the correct position in the array
        path.push(index);

        pointer = pointer.parent;  // move the pointer up to the parent

    // element.parent
    // element.parent.children.indexOf(element);
    pointer = root;  // replay into B tree 

    while (path.length){  // iterate down the tree
        pointer = children[path.pop()];  // move down the tree
    }
}



rendering 

goal = "render something smoothly, how to animate it"

requestAnimationFrame() 

know = [
    "globally available on the window object",
    "with each render there is a call to rquestAnimationFrame() "
]



promises

know = [
    "mdn = promise is a proxy for a value not neccessarily known when it was created",
    "promise to return something eventaully",
    "use to have to use callbacks"
]