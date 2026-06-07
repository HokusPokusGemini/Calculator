const display = document.getElementById("display");
display.style.textAlign = "right";

let justCalculated = false;

function appendToDisplay(value) {
    // If we just calculated, clear the display when starting a new number
    if (justCalculated && !isOperator(value) && value !== '(' && value !== ')') {
        display.textContent = value;
        justCalculated = false;
        return;
    }
    
    // If display is "0" and we're appending a number, replace "0"
    if (display.textContent === "0" && !isOperator(value) && value !== '(' && value !== ')') {
        display.textContent = value;
        return;
    }
    
    display.textContent += value;
    justCalculated = false;
}

function isOperator(value) {
    return value === '+' || value === '-' || value === '×' || value === '÷' || value === '%';
}

function clearDisplay() {
    display.textContent = "0";
    justCalculated = false;
}

function calculate() {
    try {
          let expression = display.textContent
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

      let result = eval(expression);
          display.textContent = result;
          justCalculated = true;
    } catch (err) {
          display.textContent = "Error :(";
          justCalculated = true;
    }
}
