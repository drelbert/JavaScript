// sorting happens often
// 6 different types of sorting
// bubble, insertion, recurssion, merge, quick, radix(non-comparison)

// bubbleSort
// will never use, just a teaching tool

// steps
// 1. compare the first and second item
// 2. if first item is larger, then swap them
// 3. compare the second item to the third item
// 4. if second is larger then third, then swap them
// 5. repeat until end of data set is reached

var arr = [243, 45, 23, 356, 3, 5346, 35, 5];

function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort(arr));

module.exports = bubbleSort;

// insertion sort
// more useful
// good for an array that is mostly sorted

const nums = [3, 2, 5, 6];

// using for loops
function insertionSort(nums) {
  // first loop loops over the array starting with the first element
  // initialization, test/condition, increment
  for (let i = 1; i < nums.length; i++) {
    // the number to compare
    let numberToInsert = nums[i];
    // keeping track of the j number
    let j;

    // second inner loop that loops in reverse to determine where the element goes
    // j = i - 1: initial expression to take element one below the number to be inserted
    // so i = 3 and j = 2, initially

    // nums[j] > numberToInsert && j >= 0: condition to evaluate, asking is the number at that location greater than the number to insert  && is it greater than 0?

    // so is 2 greater than 3?

    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // if not then move the number backward in the array
      nums[j + 1] = nums[j];
    }
    // so move 3 to index 1 in the array

    // now 2 is ready to be inserted
    nums[j + 1] = numberToInsert;
  }
  return nums;
}

module.exports = insertionSort;
