functions;

concept = "wrap a piece of a program in a value is useful";

definingFunctions;

// example with and without params and with or without return value
var completeRegistration = function () {
  console.log("Complete!");
};

completeRegistration();
// Complete!  this is a side effect

var allowReg = function (student, balance) {
  let register = "Procede";
  for (let factor = 4; factor <= balance; factor++) {
    register == student;
  }
  return register;
};
console.log(allowReg("Tony", 4));
// produces a value 4

bindingsAndScopes;

point = "all about where binding is declared allowing for access";
point2 = "each scope can loop out into the scope around it";

nestedScope;
is =
  "blocks and functions created inside other blocks and functions = multiple layers of locality";

bindingApproach = "lexical scoping";

function hummus(factor) {
  function ingredient(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  }
  ingredient(1, "can", "chickpeas");
  ingredient(2, "box", "spice");
}

closure;
feature =
  "reference a specific instance of a local variable in an enclosing scope";
functionReferencing = "variables from local scopes around it == closure";

allowingFor = [
  "elimination of lifetime of variables/bindings",
  "allowing for functions to be used in innovative ways",
];

//simple example

function registerStudent(r) {
  var register = r; // local variable
  return function register() {
    register = register + 1;
  };
}

var completeRegistration = registerStudent(101);
var renewRegistration = registerStudent(202);

recursion;

about = "function that calls itself";

defined =
  "function that calls itself until a base consition is true and execution stops";

not = "always just an inefficient alternative to looping";

point =
  "running a loop is typically cheaper than calling a function multiple times";

useCase =
  "Often problems that have to do with processing several branches is where recussion shines";

requirement =
  "write a function that, given a number, tries to find a sequence of such addition and multiplications that produce said number";

function findSolution(target) {
  function find(current, history) {
    // currently current is 1 and history is "1"
    // find does the actual recursing, has two arguments
    if (current == target) {
      //  here current is 1 and target is 24
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));

growingFunctions;
see = "code evolution example in book";

point = "only be clever if the result will be used";

functionsAndSideEffects;

twoCategories =
  "functions that are called for their side effects and those called for their return value";

functionsThatCreateValues =
  "are easier to combine in new ways v those that just do side effects";

pureFunction = [
  "value-producer",
  "no reliance on or generator of side-effects",
  "when called with the same arguments, it produces the same value",
];

summary;
// define f to hold a function value
var f = function (a) {
  console.log(a * 2);
};

// declare g to be a function
function g(c, f) {
  return c * f * 3.5;
}

// less verbose function value
let h = (a) => a % 3;

Practice;
("https://eloquentjavascript.net/code");

minumum;

function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));

recursion;

build =
  "a function that calls itself to accespt one parameter and return a Boolean";

function isEven(num) {
  if (num % 2) return true;
  else if (num == 1) return false;
  else if (num < 0) return isEven(-num);
  else return isEven(num - 2);
}

//alternatively

function isEven(num) {
  if (num % 2 == 0) return `Es verdad ${num} is even`;
  else return `El numuro ${num} es odd`;
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

beanCounting;

build =
  "a function countBs which takes a string as the argument and returns a number to indicate how many 'Bs' are in the phrase";

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  //  could remove this function and just pass a second argument with the letter
  return countChar(string, "B");
}

console.log(countBs("BBC"));

console.log(countChar("Ruddderdank", "d"));
