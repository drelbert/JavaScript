//Functions

//Basic function expression with parameter
/*
const dbl = function(z) {
    return z * z;
};

console.log(dbl(4));
*/


//Write function to identify ratings that are <= 4
//let ratings = [2, 4, 5, 4, 4, 5];
//console.log(ratings);

/*
function ninjaStatus(value) {
    return function(element, index, array) {
        return (element >= value);
    }
}

let ratings = [2, 4, 5, 4, 4, 5, 3, 3, 3].filter(ninjaStatus(4));
console.log(ratings);
*/


//Function min that takes two arguments and returns minimum 
//Using function declaration
/*
function min(a, b){ 
    if (a < b) return a;
    else return b;
}

console.log(min(0, 10));
*/

// An average function for an array.

/*
function avgArray(arr) {
    var sum = 0;
    for (var i =0, j = arr.length; i < j; i++) {
        sum += arr[i];
    }
    return sum /arr.length;
}

avgArray([2, 3, 4, 5]); 

console.log(avgArray);
*/



