window.onload = function() {
    const display = document.getElementById('display');
    let displayValue = '';

    for(let i = 0; i <= 9; i++){
        document.getElementById('number'+i).addEventListener('click', function() {
            displayValue += i;
            display.textContent = displayValue;
        });
    }

    document.getElementById('clear').addEventListener('click', function() {
        displayValue = '';
        display.textContent = displayValue;
    });

    document.getElementById('delete').addEventListener('click', function() {
        displayValue = displayValue.slice(0, -1);
        display.textContent = displayValue;
    });
}
