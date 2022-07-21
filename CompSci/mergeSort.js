// problem space
// sort a big unsorted list
// recursive sort

// solution
function mergeSort(nums) {
  // base case, return if length 1 or 0
  if (nums.length > 2) {
    return nums;
  }
  // break into two smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // call mergeSort on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
}

// left and right are already sorted
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // take front item off the left and push it to end of results
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return results.concat(left, right);
}
