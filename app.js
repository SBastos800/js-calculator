const answer = document.querySelector('.answer');
const buttons = document.querySelectorAll('.button');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equal');
const reset = document.querySelector('.clear');

let secondNumber;
let firstNumber;
let operator;

reset.addEventListener('click', () => {
    answer.innerHTML = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = 0;
});

numberButtons.forEach((button) => {
   button.addEventListener('click', (event) => {
       if (firstNumber) {
         secondNumber = (event.target.value)
       } else {
         firstNumber = (event.target.value);
    }
   })
});

numberButtons.forEach((n) => {
    n.addEventListener('click', (event) => {
       answer.innerHTML = event.target.value
   } )
});

operatorButtons.forEach((o) => {
   o.addEventListener('click', (event) => {
       answer.innerHTML = event.target.value
   })
});

operatorButtons.forEach((button) => {
button.addEventListener('click', (event) => {
    operator = (event.target.value);
   })
});

equalButton.addEventListener('click', () => {
    answer.innerHTML = calculate(firstNumber, operator, secondNumber)
});

const calculate = (firstNumber, operator, secondNumber) => {
const firstFloat = parseFloat(firstNumber);
const secondFloat = parseFloat(secondNumber);
switch (operator) {
    case "+":
        return firstFloat + secondFloat;
    case "-":
        return firstFloat - secondFloat;
    case "/":
        return firstFloat / secondFloat;
    case "*":
        return firstFloat * secondFloat;
}
}