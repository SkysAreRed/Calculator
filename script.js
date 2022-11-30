function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
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
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
    }
}

let screen = document.querySelectorAll('.calc-screen');
let displayValue = screen.textContent;
let operator;
let num1;
let num2;

let numbers = document.querySelectorAll('.number');
for (let button of numbers) {
    button.addEventListener('click', () => {
        let digit = button.textContent;
        if (displayValue == '0') {
            displayValue = digit;
        } else {
        displayValue += digit;
        }
        screen.textContent = displayValue;
    });
}

let operators = document.querySelectorAll('.operator');
for (let button of operators) {
    button.addEventListener('click', () => {
        //If the user is stringing together operations and there is already a value in num1,
        //store the current value in num2, find the solution to the first operation, store it in num1 and display it
        if (num1) {
            num2 = +displayValue;
            displayValue = '';
            num1 = operate(num1, num2, operator);
            operator = button.id;
            screen.textContent = num1;
        } else {
        num1 = +displayValue;
        displayValue = '';
        operator = button.id;
        }
    });
}

let equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', () => {
    if(num1) {
    num2 = +displayValue;
    let solution = operate(num1, num2, operator);
    screen.textContent = solution;
    }
});
