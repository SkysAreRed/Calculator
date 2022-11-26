//const numberButtons = document.querySelectorAll('[data-number]')
//const dataOperation = document.querySelectorAll('[data-operation]')
//const equalsButton = document.querySelector('[data-equals]')
//const deleteButton = document.querySelector('[data-delete]')
//const allClearButton = document.querySelector('[data-all-clear]')
//const dataOperandTextElement = document.querySelector('[data-operand]')

let result;
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a = b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2) {
    switch(operator) {
        case 'add':
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
    }
}


//let operator;

const num1 = parseFloat(prompt('Insert first number'));
const num2 = parseFloat(prompt('Insert second number'));
const operator = prompt('Choose between Add or Subtract');
operate()