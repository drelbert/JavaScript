// from the docs/handbook typescript for js programmers
// example with pobject and interface
interface User {
  name: string;
  email: string;
  id: number;
}

const playerOne: User = {
  name: "Chuck",
  email: "chuck@chuck.gt",
  id: 999,
};

// using interface to annotate function params
function getAdmin(): User {
  //...
  return;
}

// composing types
// simple types make up complex types

// from the handbook
// basic types
// simplest units of data as in JS
// but with an extra enumeration looking like this -> someName: theType

// boolean
let isDone: boolean = false;

// number
let cost: number = 6;

// string
let userName: string = "Vader";

// mixing it up
let id: number = 77;
let greeting: string = `Successful login ${userName}, with ID ${id}`;

// array
let list: number[] = [567, 805, 202];

// tuple for expressing an array with fixed elements, known types but not same
let identifier: [string, number];
identifier = ["working", 99];
//  throws error identifier = ["not working", "why not"];

// unknown, to keep the opitons open
let notSure: unknown = 4;
notSure = "Maybe a sting, sometime?";

// set as boolean
notSure = false;

// any for when not all type info is available
declare function getValue(key: string): any;

// void the opposite of any
function marning(): void {
  console.log("Final warning!");
}

// never for representing values that never occur
function error(message: string): never {
  throw new Error(message);
}

// object to represent the non-primitive type
declare function create(o: object | null): void;
create({
  prop: 0,
});

// types
type Employee = {
  name: string;
};

let Employee = 88;

let user: string = "Vader";

// type asertions for when an override is needed
// two forms this one is the 'as'
// let someName: unknonwn = "User";
// let strLength: number = (someName as string).length;

// interfaces
// TS core principle: focus on the shape that the values have
// interfaces take care of naming interface types

// interfaces describe a wide range of shapes objects can take

// base example
// define simple interface to name the type of value
interface NamedValue {
  label: string;
}

function runLabeler(namedObj: NamedValue) {
  console.log(namedObj.label);
}

// optional properties: interfaces
interface SomeInterface {
  identifier?: string;
  anotherId?: number;
}

// function types
// like a function declaration with a return type provided
interface SearchFunc {
  // parameters
  (source: string, subString: string);
  // return type
  boolean;
}

// functions
// for building up layers of abstraction
// mimick classes
// hide data

// function types
// adding types to functions
// here adding types to the parameters and to the function itself to define the return type
function add(x: number, y: number): number {
  return x + y;
}
