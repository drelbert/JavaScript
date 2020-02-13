//Coercion Section

//Abstract Operations
//In the Spec section 7 https://www.ecma-international.org/ecma-262/9.0/index.html#sec-abstract-operations


const theListAbstractOperations = {
    ToPrimitve,
    toString,
    toNumber,
    toBoolean
};


const abstractOperations = {
    are: 'there are a few and fundamental way to do type conversion',
    typeConversion: '= coercion',
    firstOne: ToPrimitve(hint),
    notAFunction: 'actually conceptual operation and involves a set of algorythmic steps',
    takes: 'an optional type hint, for example if numerical operation, hint will be number type',
   bigNOTE: 'algorithims in JS are inherently recursive = if no primitive is returned, then it invokes again until one is',
   twoMethods: 'hint number = valueof() toString() or hint string toString() valueOf()',
   ifUse: 'math or concatination = the ToPrimitive() algorithym is at play'
}

const toString = {
    action: 'takes any value and returns it in string form',
    procedure: 'ToString(object) invokes the  ToPrimitve(string)'
}

//examples
//array
// [] ""
// [1, 2, 3]  "1, 2, 3";

//object
//{}   "[object Object]"
//{toString(){return 'X;}}   "X"

const toNumber = {
   action: 'for when we need a numerical operation without numbers present, invoke toNumber()',
   procedure: 'ToNumber(string) invokes the ToPrimitve(number)'
}

//examples
// ''  0
// "0" 0
// " 009"  9
// "."  NaN (meaning we do not have a number)
//"0xaf"  175

// false 0
// true 1
// null 0
// undefined NaN

const toBoolean = {
    action: 'for any value that is not a boolean but there is a need for a boolean',
    justALookUp: 'less algorithym, reutrns truthy or falsy',
    doesNot: 'invoke, ToPrimitive, toNumber, or toString',

    falsy: '0, -0, null, NaN, false, undefined',
    truthy: 'if not falsy then truthy, string, number, object, array',
    point: 'just a stright look-up, no ToPrimitive() procedure'
}

//the abstract operations lays the foundation for coercion

const coercion = {
    noCoercion: 'where one is trying to avoid coercion, === would be used',
    note: 'this is not a good practice',
    exampleOfCoercion: 'template literal strings'
}


//example of  implicit coercion 
var templateStrings = 805;

console.log(
    `Why use anything else, ${templateStrings}.`
);


//example of explicit coercion with number
var numTacos = 16;

console.log(
    `We have ${String(numTacos)} tacos!`
);


//example of turning something into a number 
//use case is input field DOM element value is a string
function addTacos(numTacos) {
    return numTacos + 1;
} 

addTacos(
    Number(userInputElem.value)
);
//17

//boolean: need to study this more

var boolean = 'being implcit with boolean coercion can be useful'

Boolean(undefined); //false 
Boolean(null); //false
Boolean({}) //true


const boxing = {
    for: 'allows for the access of the .length of a string',
    does: 'coerce a primitive to an object',
    is: 'form of implcit coercion',
    JS: 'sees the need for an object and makes the primitve into an object, this is good since at some point will need to access properties and methods',
    theBenefitOf: 'since conversion/coercion so prevalent; string to number, number to boolean',

    noteIt: 'DOM element values are always a string',
    
}

//example 
if (studentNameElem.value.length > 50) {
    console.log("Name too long!");
}



coercionCornerCase = '' //returns 0

//illustration
studentsInput.vlaue = '';  //..

Number(studentsInput.value);  //0


studentsInput.value = '    \t\n';  //white space string here

Number(studentsInput.value);   // 0

Number(true) //1
Number(false) //0

//see the example of < > chain 