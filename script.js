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

        deleteBtn.addEventListener('click', () => { // delete each integer per each input
            let temp; // create a temporary variable holder
            if (currentAlgor === 'l0l') { // if current algor is the same as error message, make current = 0, make temp copy algor
                currentAlgor = 0;
                temp = currentAlgor;
            } else {
                temp = currentAlgor.toString().slice(0, -1); // otherwise temp copies current algor, makes string, slices single digit
            }

            if (temp === '' || temp === 0) { // if temp is empty or zero, make zero, current algor copies temp = 0, update display to show results
                temp = 0;
                currentAlgor = temp;
                updateDisplay()
            } else { // else, parsefloat copies current algor and changes it to the floating point number, then update display
                currentAlgor = parseFloat(temp) 
                updateDisplay()
            }
        })

        equalBtn.addEventListener('click', () => {
            calculateResults() // added two of the same so that screen updates for first completed version of calc, will remove later
            updateDisplay()
            calculateResults()
        })
    }

    function updateDisplay() { // run this to update display
        if (quikmafs === null || ' ') { // if there is no plus, minus etc selected, only display currentAlgor
            screen.textContent = currentAlgor;
        } else { // else display all inputs
            screen.textContent = firstInput + currentAlgor; // current equation is copied to screen
        }
    }

    function operate() { // this assigns the current user input value a quikmafs e.g plus minus etc
        if (currentAlgor === ' ') return; // cancel anyone who tries to add an operator without any numbers 
        if (firstInput !== ' ') { // dont cancel anyone, then calc results
            calculateResults()
        }

        firstInput = `${currentAlgor} ${quikmafs}`;// copy current algor to first input, copy quikmafs to firstinput
        currentAlgor = ' '; // clear current algo 
    }

    function calculateResults() { // turn on the boss music baby 
        let curr = parseFloat(currentAlgor); // curr is gonna be where i store the currently worked user input
        let firs = parseFloat(firstInput); // firs is the first input by user, copied over from curr AFTER an operator has been chosen
        let results; // create results variable

        if (isNaN(curr) || isNaN(firs)) return; // make sure to put a number in

        quikmafs === '+' ? results = firs + curr // if quikmafs is equal to add, i want the result to be equal to let firs PLUS let curr
        : quikmafs === '-' ? results = firs - curr // else if the quikmafs is equal to minus, now i want the result to be equal to let firs MINUS let curr
        : quikmafs === 'x' ? results = firs * curr // else if the quikmafs is equal to multiply, now i want the results to be equal to the let firs MULITIPLIED by let curr
        : quikmafs === '/' ? results = firs / curr // else if the quikmafs is equal to divide, now i want the results to be equal to let firs DIVIDED by let curr
        : quikmafs === '/' && curr === 0 ? results = 'l0l' // else if quikmafs is equal to divide, AND, let curr is equal to zero, i want the results to be equal to l0l
        : ''; // else empty string

        currentAlgor = results; // copy results into current algor, so that it can be seen on display
        quikmafs = null; // reset which equation to use
        firstInput = ''; // clear text in firstInput
    }

    handleButtons() // running script when calculator() is run
}

calculator() // running on page load




// this is my first attempt at creating different functions to calculateResults()

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




// example code taken from online tutorial, not mine, just learning

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