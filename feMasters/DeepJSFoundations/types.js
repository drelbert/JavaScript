//Deep JavaScript Foundations 

//YDKJSY connection to first three books

//Intro 
    //dive into understanding my code 
    //understand by using the spec 

    //goal: understand the dna of JS 
    //go to the spec 

var threePillars ={
    one: 'types/coercion',
    two: 'scope',
    three: 'objects (oriented) '
}


//Types section

var content = [
    'primitive types',
    'abstract operations',
    'coercion',
    'equality',
    'TypeScript, Flow, etc'
];

primitiveTypes = 
    'number', 
    'boolean', 
    'undefined', 
    'string', 
    'object',
       'function'  //refered to as subtype to object with behavior
       'array'  //also subtype also with behavior
    'symbol', //create for psudo private keys 

    'undeclared',
    'null',

    'biginit'

    x = 41  //means dev expects certain behavior from number 

    const rule = 'values have types, not variables'

askForType = 'typeof'  //always returns some string which comes from a known list 

kindsOfEmptyness = {
    undefined: 'definetly a variable and  at the time of call it has no value',
    undeclared: 'never been created in any scope we can access',
    unitialized: 'TDZ = certain vars never get initialized and until they leave that state, in the TDZ'
}

specialValues = {
    NaN = 'is an invalid number... means special value indicating invalid',
    noteNaN: 'only value not equal to itself',
    NaNcoercion: 'isNaN utility coerces values to numbers prior to the NaN  check'
    //Number.isNaN: 'does not coerce and is better code to use'
}



const fundamentalObjects = 'built-in objects or native functions'
const are = 'not really types, this is case where Java-like gets bolted on'
const useCase = 'where the new keyword is used, to construct a new object(), array(), function() and others'

//How this looks
var yesterday = new Date('Feb 4, 2020');
yesterday.toUTCString();

