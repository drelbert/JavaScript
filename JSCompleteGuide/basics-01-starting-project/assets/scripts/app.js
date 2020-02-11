//Global variables
const defaultResult = 0;
let currentResult = defaultResult;
//Initialize
let logEntries = [];

//Refactoring to a function that only holds the parseInt logic
function getUserInputNumber() {
    return parseInt(userInput.value);
}

//Refactoring to create and write output
function createAndWriteOutput(
  operator, 
  resultBeforeCalc, 
  calcNumber) {
        const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
        //Const from the original functions (add, subtract, ..)
        outputResult(currentResult, calcDescription)
    }

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
    const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}


//New function to illustrate conditionals 
function calculateResult (calculationType) {
//Adding if block to illustrate AND/OR operators
    const enteredNumber = getUserInputNumber();
    if (
        calculationType !== 'ADD'  &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY'  && 
        calculationType !== 'DIVIDE'  ||
        //this enteredNumber === 0 is same as below
        !enteredNumber
    ) {
        return;
    }

   // const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    let mathOperator; 
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }


    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


