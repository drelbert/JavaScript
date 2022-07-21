// radix sort
// non-comparison sorting

//  big O = no faster than log n

// comparing number of places not comparing numbers directly
// places, 4000 = 4, 44 = 2 309 = 3

// method
// sort by one place, then tens and so on

array = [39885, 78, 7674, 33, 101, 908, 805];

// helper function, passing in three parameters
// these parameters will be used to import argumetns/values as input to the function
// eg number = 1987, place = 0, longestNumber = 4
// getDigit will get back a specific number
function getDigit(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string(place - mod) || 0;
}

// helper function to get the longest number in the array
function getLongestNumber(array) {
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    // statemnet to execute in the loop
    // first a constant
    const currentLength = array(i).string().length;
    // second a ternary operator
    longest = currentLength > longest ? currentLength : longest;
  }

  return longest;
}

function radixSort(array) {
  // find longest number
  const longestNumber = getLongestNumber(array);
  // create number of buckets needed
  // will be an array of arrays
  // creating the data structure = buckets
  // this will create an array of 10 empty arrays
  const buckets = new Array(10).fill().map(() => []);

  // for loop to dertermine number of iterations
  for (let i = longestNumber - 1; i >= 0; i--) {
    // while statement
    // while there is na element in the array
    while (array.length) {
      // pull first element off the array
      const current = array.shift();
      // enqueing elements into one of the 10 arrays
      // all numbers from array will then be sorted
      buckets(getDigit(current, i, longestNumber)).push(current);
    }
    // inside the for loop, enqueue the numbers into buckets
    // for loop for each bucket
    // dequeueing all elements off the front of the buckets to push them onto the array
    for (let j = 0; j < 10; j++) {
      // inside,  dequeue all items out of the bucket

      while (buckets(j).length) {
        array.push(buckets(j).shift());
      }
    }
  }
}
