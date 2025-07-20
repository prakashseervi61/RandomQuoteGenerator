const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

let currentInput = '';
let result = '';

function updateDisplay() {
    display.value = currentInput || result;  // false || true => true
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;

        if (value === 'AC') {
            currentInput = '';
            result = '';
        } else if (value === 'C') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            try {
                result = eval(currentInput);
                currentInput = ''; 
            } catch (error) {
                result = 'Error';
            }
        } else {

            currentInput += value;
        }

        updateDisplay();
    });
});