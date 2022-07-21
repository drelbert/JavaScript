gitHub = https://github.com/young/frontend-interviewing

sections:
prescreen
code test
phone screen
on-site interview

# prescreen content

1. diff in let const and var

   const = no changing of the pointer, but value can be updated
   let = pointer can be changed and only scoped to whatever the closure is
   var = hoisted to top

2. prototypical inheritance

   the properties and methods that are inherited by an object created based on the prototype object

3. this in JaaScript

   refers to the current function's execution context
   applied where the function is instanciated

   the global context that is available to access
   all objects that are available

4. DOM data structure

   a tree

5. what is a stack and a queue
   how would those be created in JavaScript

   are a type of data structure

   context of the event loop
   a. the queue contains the messages from the heap that are then
   first in first out
   b. placed in the stack
   last in first out

   c. an implementation in JavaScript is an array using the proper array methods
   or in the event loop

6. how to tell if an image has loaded on a page?

view the onLoad element
look for the html <img> element tag within the document tree

7. what are call() and apply()?

way to chnge the scope of the calling function

call() takes a series of args
apply() is an array of args

8. event delegtion

as event handlers cna be applied to elements
event delegation is one(parent) event listener is at the top
upon event, that listener bubbles up to the parent to handle

for performance, have just one per page

9. what is a worker? when to use

use in the browser for offloading a computationaly intense feature to a diff thread

10. what is closure?

11. what are promises and how are they used?

12. explain the CSS box model

13. how does React work?

14. what is the virtual DOM in React and what problem does it solve?

15. what is Big-O

worst case
longest amount of time a function will take, given the worst case scenario of input

    time = y axis
    n of elements = x axis

    O(n!) = the most time(number of operations)
    O(2n) = the second most time(number of operations)

    O(n log n) = the median number of time(number of operations)
    O(n) = slightly less time(number of operations)

    O(log n) second lowest time(number of operations)
      this is log time: example is a tree, no need to iterate over whole tree
    O(1)  the least time(number of operations)
      this is constant time

find big O
for (let i; i< arr.length; i++) { // just this for loop would mean O(n)
for (let x = 0; x < arr2.length; x++){

}
}

so just count the loops: result = O(n2)

16. what are strings?
    primitive data type
    have methods for manipulation
    immutable ordered sequence
    16-bit values
    syntax = "" or ''
    turn string to array to manipulate

17. what are arrays?
    fundatmental data type, special type of JavaSctip object
    indexed set of elements of any type
    has array methods, some of which are mutable
    untyped
    zero based
    dynamic

# code test

Make your code as readable as possible
Comment your code
Don’t over complicate the architecture
Don’t import too many libraries
If you have time, add unit tests
Ask questions!

# phone screen

see phoneScreen.js

# on-site interview

see
emoveDuplicates.js
falttenArray.js
and others
