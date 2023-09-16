const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';

updateDisplay();

function updateDisplay() {
  display.value = displayValue;
}