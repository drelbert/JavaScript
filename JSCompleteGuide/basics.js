// Vars and Operators 

//Create two variables one with and one without a value

const swiftTitle = 99;

let largeSea;

// Use operators 
largeSea = 388 + swiftTitle;

largeSea = 9 * swiftTitle;

// Set alert to show
alert(largeSea);
alert(swiftTitle);

//More operators 
    // += is same as writing value = value + otherValue;
    // ++ is increment same as +1 
    // oo is -- decriment  = -1

    //typeOf = returns data type definition 


//Functions = code on demand  

// Declare the variables here first
const stateLending;

// Build it 
function loanFactor(privateLend, commercialLend, loanAmountDefaulted) {
    const result = privateLend + commercialLend / loanAmountDefaulted;
    // Return it and this ends the function
    return result;
}

//Then call it 
stateLending = loanFactor(stateValueFoo, stateValueBar, stateValueBaz);



//Build two functions, one with no params and one with
function noParams() {
    alert('Rando message')
};


function hasParams(loanData) {
    alert(loanData + 'For Utah');
};

//Call both functions 
noParams();
hasParams(584);

//More Functions

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


//Data types 
    //numbers, strings, booleans
    //Special Value = null, undefined, NaN

    //booleans good with conditional code 

    //arrays simply a list of data, can take any data type 

    //objects most important type for grouping data 
