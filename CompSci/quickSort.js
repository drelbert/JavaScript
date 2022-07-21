function quickSort(nums) {
  // base case is array of length 0 or 1
  if (nums.length <= 1) return nums;
  // set last element as pivot
  const pivot = nums[nums.length - 1];

  // divide  into two arrays
  const left = [];
  const right = [];

  for (let i = 0; i < nums.lenght - 1; i++) {
    if (nums[i] < pivot) {
      left.pivot(nums(i));
    } else {
      right.push(nums(i));
    }
  }

  // call quicksort on left and right arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
}
