let previousOperand = document.querySelector('.one');
let currentOperand = document.querySelector('.two');

function input(numbers) {
    if (numbers == '.' && currentOperand.value.includes('.')) return;
    currentOperand.value += numbers;
}

function clearCurrent() {
    currentOperand.value = '';
}

function clearAll() {
    currentOperand.value = '';
    previousOperand.value = '';
}

function del() {
    currentOperand.value = currentOperand.value.slice(0, -1);
}

let previousValue;
let operator;

function divide() {
    if (currentOperand.value == '') {
        return;
    }
    if (previousOperand.value != '') {
        calculate();
    }
    previousValue = currentOperand.value;
    operator = '÷';
    previousOperand.value = `${previousValue} ${operator}`;
    currentOperand.value = '';   
}

function multiply() {
    if (currentOperand.value == '') {
        return;
    }
    if (previousOperand.value != '') {
        calculate();
    }
    previousValue = currentOperand.value;
    operator = 'x';
    previousOperand.value = `${previousValue} ${operator}`;
    currentOperand.value = '';
}

function subtract() {
    if (currentOperand.value == '') {
        return;
    }
    if (previousOperand.value != '') {
        calculate();
    }
    previousValue = currentOperand.value;
    operator = '-';
    previousOperand.value = `${previousValue} ${operator}`;
    currentOperand.value = '';
}

function add() {
    if (currentOperand.value == '') {
        return;
    }
    if (previousOperand.value != '') {
        calculate();
    }
    previousValue = currentOperand.value;
    operator = '+';
    previousOperand.value = `${previousValue} ${operator}`;
    currentOperand.value = '';
}

function calculate() {
    if (currentOperand.value == '') {
        return;
    }
    if (operator == '÷') {
        result = Number(previousValue) / Number(currentOperand.value);
        currentOperand.value = result;
    }
    else if (operator == 'x') {
        result = Number(previousValue) * Number(currentOperand.value);
        currentOperand.value = result;
    }
    else if (operator == '-') {
        result = Number(previousValue) - Number(currentOperand.value);
        currentOperand.value = result;
    }
    else {
        result = Number(previousValue) + Number(currentOperand.value);
        currentOperand.value = result;
    }
}