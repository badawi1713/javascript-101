// global scope

const defaultResult = 0;
// let currentResult, jika tidak diinisialisasi / memiliki nilai makan variabel menghasilkan nilai undefined
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value || 0);
}

function createAndWriteOutput(
  operator,
  resultBeforeCalculation,
  calculationNumber
) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
  outputResult(currentResult, calculationDescription);
  userInput.value = "";
  userInput.focus();
}

function add() {
  // local/block scope, only works inside of this func
  //   const result = num1 + num2;
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  // currentResult = currentResult + enteredNumber;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  //   return result;
  const logEntry = {
    operation: "ADD",
    prevResult: +initialResult,
    number: enteredNumber,
    result: currentResult,
  };
  // metode array untuk memasukkan data terbaru dari indeks terakhir
  logEntries.push(logEntry);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

// taking as text not as a calculation
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// currentResult = ((currentResult + 10) * 3) / 2 - 1;
// currentResult = currentResult + 10
// short version: currentResult += 10 ;

let errorMessage = "An error " + "occured!";

// indirect function example
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// run a function
