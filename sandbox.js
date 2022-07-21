// to run cd to  dev/Javascript
// in terminal 'node sandbox.js'

console.log("Working");

// add code to test below this line

const arr = [6, 200, 212, 435, 805, 808, 969];

function biSearch(array, item) {
  // init the low value to first index
  let low = 0;
  // init the high to last index
  let high = array.length - 1;

  while (low <= high) {
    // expression
    // set the value of mid to the found middle item
    const mid = Math.floor((low + high) / 2);

    const guess = array[mid];

    if (guess === item) {
      return `The value ${item} is at index ${mid}`;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return `${item} not found.`;
}

console.log(biSearch(arr, 200));
