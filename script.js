function calculator() {
    let numberBtn = document.querySelectorAll('.number'); // selecting all numbers on calc, assigning name numberBtn
    let operatorBtn = document.querySelectorAll('.operator') // selecting all operators, assigning name operatorBtn
    let clearBtn = document.querySelector('.clear') // just the single button selected
    let deleteBtn = document.querySelector('.delete') // ^
    let equalBtn = document.querySelector('.equal') // ^
    let screen = document.querySelector('.calc-screen') // ^ the display screen which records user input numbers from the current equation (also currentText)

    let currentAlgor = ''; // the current equation being stored and used (currentOperand)
    let firstInput = ''; // this is the first input by the user, currentAlgor moves data to here AFTER an operator has 
    let quikmafs = null; // this var stores current user selected math option e.g plus minus 

    function handleButtons() { // function called HandleButtons
        numberBtn.forEach(btn => { // loops through all buttons called in queryselec .number
            btn.addEventListener('click', () => { // event to listen for button click
                console.log(btn);
                currentAlgor === 0 ? currentAlgor = " " : ''; // if the current equation is equal to zero, leave string blank, dont do anything in this loop
                if (btn.textContent === '.' && currentAlgor.includes('.')) return; // if there is a . already, dont add again
                currentAlgor += btn.textContent.toString(); // takes equation, adds ontop of btn data, with btn text content it converts to string
                updateDisplay() // runs update display function each time eventListen is triggered
            })
        })

        operatorBtn.forEach(btn => { // loops through all buttons in operatorBtn query selector .operator
            btn.addEventListener('click', () => { // listen to button clicks
                if (currentAlgor === '') return; // if current equation is empty, dont decide on an operand
                console.log(btn)
                quikmafs = btn.textContent.toString(); // copies this var into text content to display plus/minus/divide/mulitply icon
                
                updateDisplay() // runs update display function each time eventListen is triggered
                operate() // runs operate which copies current algo to first input 
                updateDisplay() // runs update display function each time eventListen is triggered
                console.log(quikmafs)
            })
        })

        clearBtn.addEventListener('click', () => { // clear / ac button to reset all data points user can input
            currentAlgor = 0; 
            firstInput = '';
            quikmafs = null;
            updateDisplay()
        })
    }

    function updateDisplay() { // run this to update display
        if (quikmafs === null || ' ') { // if there is no plus, minus etc selected, only display currentAlgor
            screen.textContent = currentAlgor;
        } else { // else display all inputs
            screen.textContent = firstInput + currentAlgor; // current equation is copied to screen
        }
    }

    function operate() { // this assigns the current user input value an operation e.g plus minus etc
        if (currentAlgor === ' ') return;
        if (firstInput !== ' ') {
            calculateResults()
        }

        firstInput = `${currentAlgor} ${quikmafs}`;// copy current algor to first input, copy quikmafs to firstinput
        currentAlgor = ' '; // clear current algo 
    }

    function calculateResults() {
        console.log('results console log')
    }

    handleButtons() // running script when calculator() is run
}

calculator() // running on page load









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
