//Coercion Section

//Abstract Operations
//In the Spec section 7 https://www.ecma-international.org/ecma-262/9.0/index.html#sec-abstract-operations

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
   procedure: 'ToNumber(string) invikes the ToPrimitve(number)'
}

//examples
// '' 0
// "0" 0
// ","  NaN (meaning we do not have a number)
// false 0
// true 1
// null 0
// undefined NaN

const toBoolean = {
    action: 'for any value that is not a boolean',
    lookUpTable: 'reutrns truthy or falsy',
    falsy: '0, -0, null, NaN, false, undefined',
    truthy: 'if not falsy then truthy, string, number',
    point: 'just a stright look-up, no ToPrimitive() procedure'
}

const coercion = {
    noCoercion: 'where one is trying to avoid coercion, === would be used',
    exampleOfCoercion: 'template strings'
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
    JS: 'sees the need for an object and makes the primitve into an object',

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