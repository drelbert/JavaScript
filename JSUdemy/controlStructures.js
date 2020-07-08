comparisonOperators;

ifStatements = [
  "all about conditinal code execution",
  "condition is just a boolean value",
  "boolean operator"[
    ("eqaility operator == -> all about value equality and allows coercion",
    "example: a == 'a' returns true",
    "inequality operator !=",
    "equality operator === -> about checks for value and type",
    "example a === 'a' reutrns false",
    "< > and etc")
  ],
];

condition = "simply has to be boolean value";

// example
function calcResult(calculationType) {
  let enteredNumber = getUserInput();
  let initialResult = currentResult;
  let mathOperator;
  if (calculationType == "add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else {
    currentResult -= enteredNumber;
    mathOperator = "-";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
