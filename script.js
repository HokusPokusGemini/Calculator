const display = document.getElementById("display");
display.style.textAlign = "right";

function appendToDisplay(value) {
    display.textContent += value;
}

function clearDisplay() {
    display.textContent = "0";
}

function calculate() {
    try {
          let expression = display.textContent
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

      let result = eval(expression);
          display.textContent = result;
    } catch (err) {
          display.textContent = "Error :(";
    }
}
