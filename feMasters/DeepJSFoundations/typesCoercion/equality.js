coercionPoint = 'often has to do with the + operator and note,  it is loaded to implicitly coerce type to a number and this causes confusion'

+"3" //returns 3 -  typeof number
+true //returns 1 - typeof number



thinkLikeJS



doubleAndTriple

equality = "== vs. ==="

//These two statements are not the whole story
== 'checks for value (loose) equality'

=== 'checks for value and type (strict)'

//the spec presents at 7.2.14
//think in these terms 
== "Abstract Equality Comparison"
    
=== "Strict Equality Comparison"

== "allows coercion (different types)"

=== "disallows coercion (types same) -> spec: if Type(x) is different from Type(y), return false"

rule = "when the types match -> == and === behave the same"

 function doNotDoThis(array, number, object, string, undefined) {
    if (number == string);
    return 'this will cause problems since this function takes all different types'

}

function doThis() {
    return 6 == "6"
};

//illustration using two diff objects where structure and values are the same
var temp1 = {
    name: 'Fast Water'
};

var temp2 = {
    name: 'Fast Water'
};

if (temp1 == temp2) {
  // not equal
}

if (temp1 === temp2){
  // not equal
}


coerciveEquality
// ask! just like other operations, is coercion helpful in an equality comparison or not?

ifIKnowTheTypes = 'is coercion helpful?'

// compare null and undefined
var x = null;

var y = undefined;

let compBax = x == y ;

console.log(compBax); // returns true

// compare number and string
var g = 33;

var m = 'title';

let compT = g == m ;

console.log(compT);  //returns false


doubleEqualsAlgorithm

coerciveEquality = 'given strings numbers and booleans it prefers numeric comparison'

coercionNeverInvoked = 'where the types are the same'


doubleEqualsWalkThrough

// really bad example of coercion, resulting in a nonsensical comparison
var calledOne = 42;
var calledTwo = [44];

// the algorithm steps are 
// if (calledOne == calledTwo) {
// if (42 == "42") {
// if (42 === 42) {  // here === prevents dev from seeing this comparison should never have occured
  if(true) {
    //Yes
  }

summary ='of =='
where = 'types are the same, === will be used'

where = 'if null and undefined are present, they are equal'

when = 'non-primitive are present, the ToPrimitve will be used to make them into a primtive'

prefered = ToNumber();


doubleEqualsCornerCases
[x] == ![x];   //this would never be used in a program 


cornerCasesBooleans 

var workshopTools = [];

// do 
if (workshopTools) {
  // yes
}

// do not do either of these constructs 
if (workshopTools == true) {
  // Nope
}

if (workshopTools == false) {
  // yes
}



summaryAndAvoid

// dont use == with 0, "" or "   "
// dont use == with non-primitives  -> only use for coercion among primitives
// dont use ==true or ==false but rather use ToBoolean or the ===

caseForPrefering = '=='

point = 'knowing types is always better than not knowing them',
and = 'static Types is not only way to know our types'

doubleEquals != ' about comparisons with unknown types'
doNot = 'use == with unkown types'

itIs = '== about comparisons with known types, optionally where conversions are a help'

summary = 'if you know the types... no matter if they match or not, == is more sensible'

whereTypesAreNotKnown = {
  means: 'code is not fully understood',
  point: 'there will be times when comparisons happen with uncertainty',
  practice: 'refactor so the types are known',
  makeItObvious: 'that there is uncertainty present with regard to a comparison',
  notKnowingTypes: 'is the same as assuming type conversion will happen',
  
  andNowFor: 'when there is uncertainty, === is the most obvious signal'
}

thinkLikeJS
