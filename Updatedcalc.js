const display = document.querySelector(".display");

const buttons = document.querySelectorAll(".button");

let currentInput = ""; 

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch {
                display.textContent = "Error";
                currentInput = "";
            }
        } else if (value === "AC") {           
            currentInput = "";
            display.textContent = "";
        } else if (value === "DEL") {           
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
        } else {           
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
