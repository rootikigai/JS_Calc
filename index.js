const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
function updateDisplay(value) {
  display.textContent = value || "0";
}

function handleInput(value) {
  if (value === "C") {
    currentInput = "";
    updateDisplay(currentInput);
  } 
  else if (value === "=") {
    try {
      currentInput = eval(currentInput).toString();
      updateDisplay(currentInput);
    } catch {
      updateDisplay("Error");
      currentInput = "";
    }
  } 
  else {
    currentInput += value;
    updateDisplay(currentInput);
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.textContent);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    handleInput(key);
  } 
  else if (key === "Enter" || key === "=") {
    handleInput("=");
  } 
  else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
  } 
  else if (key.toLowerCase() === "c") {
    handleInput("C");
  }
});

document.querySelector('.delete').addEventListener('click', () => {
  currentInput = currentInput.slice(0, -4);
  updateDisplay(currentInput);
});