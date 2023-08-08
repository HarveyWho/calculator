window.onload = function() {
    const fullInput = document.getElementById('full-input');
    const currentValue = document.getElementById('current-value');

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
        currentValue.textContent = displayValue;
        fullInput.textContent += number;
    }
    

    function chooseOperator(operator) {
        if (displayValue === '') return;
        if (firstValue !== '') calculate();
        firstValue = displayValue;
        currentOperator = operator;
        displayValue = '';
        fullInput.textContent += ` ${operator} `;
    }
    

    function calculate() {
        if (firstValue === '' || currentOperator === null) return;
        secondValue = displayValue;
        currentValue.textContent = operate(currentOperator, firstValue, secondValue);
        displayValue = currentValue.textContent;
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
        currentValue.textContent = '0';
        fullInput.textContent = '0';
    }    

    function deleteNumber() {
        displayValue = displayValue.slice(0, -1);
        currentValue.textContent = displayValue;
    }
    
}
