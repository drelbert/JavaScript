// requirements
// flatten array
// use recurssion
// do not use .flat()

const dataStructure = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];

// use reduce + concat + isArray + recursion
function handleFlat(array, d = 2) {
  // condition, 2 greater than 0?
  return d > 0
    ? // expression that executes if true
      // in the form of an arrow function
      array.reduce(
        // acc is the previus value
        // val is the current value
        (acc, val) =>
          acc.concat(Array.isArray(val) ? handleFlat(val, d - 1) : val),
        []
      )
    : // expression that executes if false
      array.slice();
}

console.log(handleFlat(dataStructure));
