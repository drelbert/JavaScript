// typing functions

// explicitly stating return types
function sum(a: number, b: number): number {
  // adding : number above will cause the error to show up in one place

  // not at the function call site below
  return a + b;
}

const renderAdd = sum(4, 5);

// typing objects
// create it
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2002,
};

// typing to describe the structure
let auto: {
  make: string;
  model: string;
  year: number;
  // adding an optional property
  voltageForCharge?: number;
};

// index signatures
// allows for representing type for dictionaries

// array types
const fileExt = [".md", "ts"];

// tuples
// tuple = multi-element, ordered data-structure

let elAuto = [2015, "Toyota", "FJ40"];

const [year, make, model] = elAuto;
