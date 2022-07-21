// variable declarations

// variable declaration
// ID: number is infered by TS
let ID = 999;

// TS will make a more specific assumption
// given the use of const and a number wich is an immutable value type
// ident is literally 101
const ident = 101;

// implicit any
let startTime = new Date();
// endTime is created without a type hence the type :any
let endTime;

// to be more safe
// add a type annotation
let endtime: Date;

// note this :foo is the type annotation syntax

// type annotations in functions

// no type annotation
function handler(a, x) {
  return a / x;
}

// with type annotations
function handleCreator(a: number, x: number) {
  return a / x;
}

const result = handleCreator(5, 6);
