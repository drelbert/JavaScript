const factorial = require("./recursiveSorts");

test("recursive factoral", function () {
  const n = 5;

  factorial(n);

  expect(n).toEqual[210];
});
