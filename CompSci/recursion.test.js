// testing steps
// nav to directory CompSci
// use npm run test or yarn test
const nestedAdd = require("./recursiveSorts");

test("recursive sort", function () {
  const array = [5, 6, [11]];

  nestedAdd(array);

  expect(array).toEqual[22];
});
