//Illustrating let and const
// let element = 'bar';
// let array;

// if (element === 'bar'){
//     array = ['bax', 'eab'];
//     console.log(array);
// }

// function buildPriority() {
//     let priority = 1;

//     console.log(element, priority);
// }

// console.log(element, array);

// buildPriority();


//Illustrating code execution 
// function identElement() {
//     return prompt('Add the element: ','');
// }

//use of arrow function syntax
let identElement = () => {
    return prompt('Add your element: ','');
}

function theArray() {
    const anElement = identElement();
    console.log(anElement + ' was added!');
}

theArray();

//the execution context order in the stack
    //prompt()  
    //identElement()
    //theArray()
    //(anonymous)  first in and last popped 