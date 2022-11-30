function calculator() {
    let numberBtn = document.querySelectorAll('.number'); // selecting all numbers on calc, assigning name numberBtn
    let operatorBtn = document.querySelectorAll('.operator') // selecting all operators, assigning name operatorBtn
    let clearBtn = document.querySelector('.clear') // just the single button selected
    let deleteBtn = document.querySelector('.delete') // ^
    let equalBtn = document.querySelector('.equal') // ^
    let screen = document.querySelector('.calc-screen') // ^ the display screen which records user input numbers from the current equation (also currentText)
    
    let currentAlgor = ''; // the current equation being stored and used (currentOperand)
    let algor = null;

    function handleButtons() { // function called HandleButtons
        numberBtn.forEach(btn => { // 
            btn.addEventListener('click', () => {
                console.log(btn);
                if (btn.textContent === '.' && currentAlgor.includes('.')) return // if there is a . already, dont add again
                currentAlgor += btn.textContent.toString() // takes equation, adds with btn text content, converts to string
                updateDisplay() // runs update display function
            })
        })
    }

    function updateDisplay() { // run this to update display
        screen.textContent = currentAlgor
    }

    handleButtons()
}

calculator()









// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function operate(num1, num2) {
//     switch(operator) {
//         case 'add':
//             return add(num1, num2);
//         case 'subtract':
//             return subtract(num1, num2);
//     }
// }



















// starting fresh
// let screen = document.querySelectorAll('.calc-screen');
// let displayValue = screen.textContent;
// let operator;
// let num1;
// let num2;

// let numbers = document.querySelectorAll('.number');
// for (let button of numbers) {
//     button.addEventListener('click', () => {
//         let digit = button.textContent;
//         if (displayValue == '0') {
//             displayValue = digit;
//         } else {
//         displayValue += digit;
//         }
//         screen.textContent = displayValue;
//     });
// }

// let operators = document.querySelectorAll('.operator');
// for (let button of operators) {
//     button.addEventListener('click', () => {
//         //If the user is stringing together operations and there is already a value in num1,
//         //store the current value in num2, find the solution to the first operation, store it in num1 and display it
//         if (num1) {
//             num2 = +displayValue;
//             displayValue = '';
//             num1 = operate(num1, num2, operator);
//             operator = button.id;
//             screen.textContent = num1;
//         } else {
//         num1 = +displayValue;
//         displayValue = '';
//         operator = button.id;
//         }
//     });
// }

// let equalBtn = document.querySelector('#equals');
// equalBtn.addEventListener('click', () => {
//     if(num1) {
//     num2 = +displayValue;
//     let solution = operate(num1, num2, operator);
//     screen.textContent = solution;
//     }
// });
