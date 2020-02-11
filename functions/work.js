
const work = [
    {
        "date": "May 1",
        "hours": 3,
        "completed": "Designed form input."
    },
    {
        "date": "May 2",
        "hours": 2,
        "completed": "Connected form to list input to output."
    },
    {
        "date": "May 3",
        "hours": 5,
        "completed": "Built project model."
    },
    {
        "date": "June 2",
        "hours": 7,
        "completed": "Built ui color pallete."
    }
    ];




//Original function to sum work.hours

function addUp(totalHours){
    return totalHours.reduce((x,y) => {
        return {hours : x.hours + y.hours}
    })
}
console.log(addUp(work));  
//and also try 
//console.log( work.length )


//Attempt at using functional programming 
/*
var add = function(x, y) {
    return x + y;
};

var hours_a = 2;
var hours_b = 2;

var total = add(hours_a, hours_b);

console.log(total);
*/






//map (from github @ https://github.com/divyanshu-rawat/Functional-Programming-JS)
//Higher-order map function to map work to a new array.
/*
const datesWorked = work.map(
    function(worked){
        return worked.date;
    });

console.log(datesWorked);
//Array(4) ["May 1", "May 2", "May 3", "June 2"]
*/

//Rewritten aka reduced to this.
/*
const datesWorked = work.map(worked => worked.date);

console.log(datesWorked);
//Array(4) ["May 1", "May 2", "May 3", "June 2"]
*/

//filter 
/*
const longDay = work.filter(worked => worked.date == 'May 3' && worked.hours > 2);

console.log(longDay);
//Array(1) [Object]
*/

//reduce
/*
var totalHours = work.reduce((prev, cur) => prev.hours + cur.hours, 0);

console.log(totalHours);
//NaN
*/



/*
//FP model 
function foo( x, ...args ) {
    console.log( x, args );
}

    foo( ...work );

// Returns 
// Object {date: "May 1", hours: 2, completed: "Designed form input."}
// Array(3) [Object, Object, Object]
*/


