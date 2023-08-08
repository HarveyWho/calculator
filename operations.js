window.onload = function() {
    const display = document.getElementById('display');
    let displayValue = '';
    let firstValue = '';
    let secondValue = '';
    let currentOperator = null;

    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            appendNumber(button.textContent);
        });
    });

    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            chooseOperator(button.textContent);
        });
    });

    document.getElementById('equals').addEventListener('click', calculate);
    document.getElementById('clear').addEventListener('click', clear);
    document.getElementById('delete').addEventListener('click', deleteNumber);

    function appendNumber(number) {
        if (displayValue.includes('.') && number === '.') return;
        displayValue += number;
        display.textContent = displayValue;
    }

    function chooseOperator(operator) {
        if (displayValue === '') return;
        if (firstValue !== '') calculate();
        firstValue = displayValue;
        currentOperator = operator;
        displayValue = '';
    }

    function calculate() {
        if (firstValue === '' || currentOperator === null) return;
        secondValue = displayValue;
        display.textContent = operate(currentOperator, firstValue, secondValue);
        displayValue = display.textContent;
        firstValue = '';
        secondValue = '';
        currentOperator = null;
    }

    function operate(operator, a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) return 'Error';
                return a / b;
        }
    }

    function clear() {
        displayValue = '';
        firstValue = '';
        secondValue = '';
        currentOperator = null;
        display.textContent = '0';
    }

    function deleteNumber() {
        displayValue = displayValue.slice(0, -1);
        display.textContent = displayValue;
    }
    
}
