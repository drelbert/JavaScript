//Iterables and Array Like Objects 

//Iterable 
    const Iterable = {
        technically: 'objects that implement iterable protocol and an @iterable method',
        basically: 'Objects where a for-of loop can be used',
        note: 'not all iterables are arrays'
    };

//Array-like objects 
    const is = {
        objects: 'with a length property and use indexes to access items',
        note: 'not all are objects, like NodeList and String'
    };

//Array creation 
  const number = [2, 55, 89, 77];

//another method 
const doNumbers = new Array();
//pasing one number that will be interpreted as array length


//Storage 
 ///data in arrays
//example array in array 
const nestedArray = [[4, 6], [7, 8], [6, 8]];

//mixed data 
const mixedData = [30, 'string', {moreData: []}];

//arrays are indexed based 
console.log(mixedData[1]);
    //returns 'string'

//then loop over array 
for (const data of nestedArray ) {
    //adding loop in a loop
    for (const loopData of data) {
        console.log(loopData);
    }
}

//Here are a set of array methods 


//Adding and removing elements 
 //push(), pop(), shift(), unshift()

 //adding data
const menu = ['Tacos', 'chips', 'burritos', 'enchiladas'];

// //add to start
// menu.unshift('El Pollo');

// //add to the end
// menu.push('El Carne Supreme');

// //remove the last 
// menu.pop();

// //remove the first, shifting all elements to the left  
// menu.shift();
// console.log(menu)

// //managing items internal to array
// //this replaces the element at index 1
// menu[1] = 'Pollo Nortenio';
 

//adding item between two elements 
//below 0 means start at index 0
//and the second 0 means delete and replace, here not deleting any items
menu.splice(0, 0, 'Grande Barbacoa')
console.log(menu)

//deleting an item or items thus 
//first value is start point and second is amount to delete
menu.splice(0, 1);
console.log(menu);


//Selecting Ranges and creating copies with slice()
    //good for returing a new array ===  copying 

    const bax = [5, 77, 8.3, 'Dave'];
    const bar = bax.slice();
    //to select a range
    //const bar = bax.slice(0, 3);

    bar.push('El G');

    console.log(bax, bar);


//Adding Arrays to Arrays with concat()
    //using example above but modified 
    const bax = [5, 77, 8.3, 'Dave'];
    const bar = bax.concat(['Go', 66]);

    bar.push('El G');

    console.log(bax, bar);

//Getting Indexes with indexOf() and lastIndex()
    //get the index of array item 

    const bax = [5, 6, 'Joan', 88];

    console.log(bax.indexOf('Joan'));
    //search from the end with lastIndex()

    //does not work if objects in the array 

//find() and findIndex() 
    //used with objects in arrays
    const baz = [{rate: 'excelent'}, {rate: 'average'}];

    //build an anaonymous function that JavaScript will execute for us to show the desired object
    const average = baz.find((rating, index, ratings) => {
        return rating.rate === 'average';
    });

    console.log(average);  

//Alternative to for loops is the forEach() method
    //

    const prices = [8, 6, 3, 8, 10, 7];
    //lets calculate tax on each item 
    const tax = 0.19;
    const taxAdjusted = [];
    
    //build a for loop, one way to do it 
    for (const price of prices) {
        taxAdjusted.push(price * (1 + tax));
    }

    console.log(taxAdjusted);

    //The alternative, to use for instance, to get the index
    //plus converting the array of numbers to an array of objects 
    prices.forEach((price, index, prices) => {
        const priceObject = { index: index, taxAdjusted: price * (1 + tax)};
        taxAdjusted.push(priceObject);
    });

    console.log(taxAdjusted);

//transforming data with map() 
    //easer way to convert items to objects 
    //using the same example as above 

    const prices = [8, 6, 3, 8, 10, 7];
    const tax = 0.19;

    const taxAdjusted = prices.map((price, index, prices) => {
        const priceObject = {index: index, taxAdjusted: price * (1 + tax) };
        return priceObject;
    });

    console.log(prices, taxAdjusted);


//sort() and reverse() 
    //Need to pass function to sort()
    //To reverse, just reverse the logic  
    const simpleSort = prices.sort((a, b) => {
        if ( a > b ){
            return 1; 
        } else if (a === b) {
            return 0;
        } else {
            return -1;
        }
    });
    console.log(simpleSort);

    //And very simplified version that does the same thing, only works with numbers
    prices.sort((a, b) =>  a - b);
    console.log(prices);

    //Example using array of objects 
        const people = [
            { name: 'Henie', value: 4 },
            { name: 'TUne', value: 5 },
            { name: 'Tor', value: 4 },
            { name: 'Sletemon', value: 6 },
            { name: 'aaul', value: 2 },
        ];

        //sort by value 
        people.sort((a, b) => {
            return a.value - b.value;
        });
        console.log(people)


        //sort by name
        people.sort((a, b) => {
            let nameA = a.name.toUpperCase(); //for ignoring upper/lowercase 
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0
        });

        console.log(people);


//filtering with filter() 
        //Makes new array and well, filters based on criteria


//arrow functions 
        //allow for simplification
    
//reduce() 
        //take a function with a few arguments/parameters to reduce array to simpler value
        
        const sum = prices.reduce((prevValue, curValue) => {
            return prevValue + curValue;
        });


//method chaining 
        const primoArray = [{price: 10.99}, {price: 12.989}, {price: 40.99}];
        const sum = primoArray.map(obj => obj.price).reduce((sumVal, curVal) => sumVal + curVal, 0);

        console.log(sum);



//Need to insert base notes here 


//maps, sets, arrays 


//working with sets
        //Is data storage that tells if it contains something or not 
        //Example using ids 

        const ids = new Set([1, 4, 7]);
        //access like this
        console.log(ids.has(4)); //true

//maps

        const personsOne = {name: 'Iris'};
        const personsTwo = {name: 'Gerry'};

