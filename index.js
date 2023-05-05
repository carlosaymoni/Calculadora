let result = document.getElementById('result');
let operation = document.getElementById('operation');

function updateResult(value) {
  operation.value += value;
}

function clearResult() {
  result.value = '';
  operation.value = '';
}

function calculateResult() {
  let expression = operation.value;
  if (expression) {
    result.value = eval(expression);
  }
}