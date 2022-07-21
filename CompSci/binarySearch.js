// works only sorted arrays

// best done with a loop, iteratively
// big O is log n

// create binary search function to return index of given number
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

console.log(biSearch(arr, 6));

// create a binary search function to return an object given an id
const list = [
  { id: 1, name: "Sam" },
  { id: 3, name: "Sarah" },
  { id: 5, name: "John" },
  { id: 6, name: "Burke" },
  { id: 10, name: "Simona" },
  { id: 12, name: "Asim" },
  { id: 13, name: "Niki" },
  { id: 15, name: "Aysegul" },
  { id: 17, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 19, name: "Marc" },
  { id: 21, name: "Chris" },
  { id: 24, name: "Ben" },
];

function binarySearch(id, array) {
  let min = 0;

  let max = array.length - 1;
  let index;
  let element;
  while (min <= max) {
    // logic for finding if element is in the array
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }
  return void 0;
}

console.log(binarySearch(19, list));
