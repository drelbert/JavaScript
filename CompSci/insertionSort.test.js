const insertionSort = require("./iterativeSorts");

test("insertion sort", function () {
  const nums = [3, 5098, 2, 7, 33, 100, 1];

  insertionSort(nums);

  expect(nums).toEqual[(1, 2, 3, 7, 33, 100, 5098)];
});
