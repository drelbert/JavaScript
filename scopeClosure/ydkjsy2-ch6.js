LimitScopeExposure;

goal = [
  "how to use different levels of function and block scopes",
  "why to use them",
  "organize program's variables to reduce scope over-exposure",
];

leastExposure;
rule = "functions define their own scope";

butBlocks = "why do they need to create their own?";

designPrinciple = {
  POLP: "principle of least priviledge",
  POLE: "principle of least exposure",
  for:
    "building a defensive posture into the architecture = component function with least access",
};

POLE = "for minimizing the exposure of the variables registered in each scope";

// Requirement: y is always > x to ensure result 0 <
// Note block scope tmp using let to the if block
function diff(x, y) {
  if (x > y) {
    // block
    let tmp = x; // let
    x = y;
    y = tmp;
  }
  return y - x;
}

var delta = diff(3, 7);

console.log(delta);

hidingInPlainScope;

practice =
  "hide the variables and function declarations in the lowest scope (deeply nested) possible";

howToHideThem;

withFunctionScoping = ["var", "function declaration"];

IFEEscoping(
  // Standalone IFEE

  // outer scope
  function () {
    // inner hidden scope
  }
)();

// more outer scope

notForUseIf = "using return, this, break or continue";

scopingWBlocks;

curlyBracePair =
  "{..} which is a statement that acts like a block, not necc as a scope";

blockToScope =
  "block to scope only occurs if a need to contain block-scoped declarations let or const";

// In practice
{
  // not a scope yet

  let nowAScope = true; // with this statement, was a block now a scope

  for (let i = 0; i < 5; i++) {
    // Also a scope activated each iteration
    if (i % 2 == 0) {
      // Only a block
      console.log(i);
    }
  }
}
// o 2 4

noteNotAllCurlyPairs = [
  "create block that are eligible to be scopes",
  "object literals {..}",
  "class uses { .. }",
  "function uses { .. } = actually a function scope",
  "the {..} in a switch statement is not block/scope",
];

explicitBlockScoping =
  "for creating a thin slice of scope for a couple or less variables";

// Illustration
if (someAction) {
  // Block but not a scope
  {
    let msg = someAction.message(); // This is both a block and an explicit scope
    notifyVader(msg);
  }

  reviveDeathStar();
}

varAndLet;

description = [
  "var indicates the variable belongs to the whole function and reserved for use in the top-level of the function",
  "var attatches to the nearest enclosing function scope no matter the location and even in a block",
  "var is insufficient to achieve block scoping",

  "let will not visually define the difference with the function-scope declaration",
  "let communicates and achieves block-scoping",

  "if function-scope and block-scope are needed in the program, use both",
];

whereToLet;

ask =
  " What is the most minimal scope exposure that is sufficent for this variable?";

answerWill =
  "define if a variable belongs in a block scope or the function scope";

declarationBlockScope = "use let";
orIf;
declarationFunctionScope = "use var";

whatsTheCatch;
again;
varDeclarations = "function scoped";

letAndConst = "signal block scoped declarations";

theCatch = "the exception is the catch clause";

fromES3 =
  "catch clause has used an additional block scope declaration cabability";

newInES2019 =
  "catch clauses changed do their declaration is optional, if omitted, the catch block is longer by default a scope, but still a block";

// Iluustrated
try {
  doOptionOne();
} catch {
  // Catch declaration omitted
  doOptionTwo();
}

functionDeclarationsInBlocks;

feature = "function declarations directly inside block = FIB";
ask = "are they function scoped like var is? = no and yes...";

// Consider
if (false) {
  function ask() {
    // JS Spec says this function declaration is block-scoped
    console.log("This run");
  }
}
ask();

note = [
  "to avaid any issue with FIB, dont use it by placing a function declaration directly inside any block",
  "rather place all function declarations in the top-level scope of a function or in the global scope",
  "BUT!!! its ok for a function expression to be placed inside a block",
];
