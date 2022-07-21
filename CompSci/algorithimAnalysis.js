BigOComplexity;

const section = "Algorithm Analysis";
// tools to look at algorithms

bigO = "way to talk about algorithm efficiency";

allowsFor = "the identification of the important/big aspects of an algorithm";

// applied to math
("3n2 + x + 1");
// here are three terms and the first term is the important part

// applied to a function
// need to ask
// given the length of an array, how many instructions will be given?

// an O(n) example also called big O of n or linear time
function crossAdd(input) {
  // this only executes once
  var answer = [];
  // the loop will execute as many itmes as there are array elements in input

  // look for the loops
  // one loop will equal n
  for (var i = 0; i < input.length; i++) {
    var goUp = input[i];
    var goDown = input[input.lenth - 1 - i];
    answer.push(goUp + goDown);
  }
  // this only executes once
  return answer;
}

// a constant time example aka O(1)
function getMiddleNumber(array) {
  // one instruction, get the middle number and divide by 2
  return array[Math.floor(array.length / 2)];
}

SpatialComplexity;
// also known as time complexity, but not always
// idea - how much more cpu cycles will be used with more inputs?
// cpu cycles relates to time so with more inputs more time is needed

spacialComplexity = "how much ram/space is needed for an algorithm?";

spacialComplaxityTypes = ["linear", "logrithmic", "contrant", "quadratic"];

bigOTradeOffs;
// review guiding principles

mostImportant = ["readablity", "maintainability"];
point = "code is communication";
haveA = "performance problem before trying to optimixe for it";
