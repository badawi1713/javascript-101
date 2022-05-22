// global scope

const defaultResult = 0;
// let currentResult, jika tidak diinisialisasi / memiliki nilai makan variabel menghasilkan nilai undefined
let currentResult = defaultResult;

function add() {
  // local/block scope, only works inside of this func
  //   const result = num1 + num2;
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
  userInput.value = "";
  //   return result;
}

// taking as text not as a calculation
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// currentResult = ((currentResult + 10) * 3) / 2 - 1;
// currentResult = currentResult + 10
// short version: currentResult += 10 ;

let errorMessage = "An error " + "occured!";

// indirect function example
addBtn.addEventListener("click", add);

// run a function
