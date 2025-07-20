const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".numbers");
const clear = document.querySelector(".clear");
const negation = document.querySelector(".negation");
const percentage = document.querySelectorAll(".percentage");
const decimal = document.querySelector(".point");

const buttonHandleClickSyntax = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("clear")) {
        clearButton();
      } else if (button.classList.contains("negation")) {
        negationButton();
      } else if (button.classList.contains("percentage")) {
        percentageButton();
      } else if (button.classList.contains("point")) {
        decimalButton();
      } else {
        if (display.textContent === "0") {
          display.textContent = button.textContent;
        } else {
          display.textContent += button.textContent;
        }
      }
    });
  });
};

const clearButton = () => {
  display.textContent = 0;
};

const negationButton = () => {
  let currentValue = Number(display.textContent);
  if (currentValue !== 0) {
    display.textContent = currentValue * -1;
  }
};

const percentageButton = () => {
  let currentValue = Number.parseFloat(display.textContent);
  if (isNaN(currentValue)) {
    return 0;
  } else {
    display.textContent = currentValue / 100;
  }
};

const decimalButton = () => {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
};

const init = () => {
  buttonHandleClickSyntax();
};

init();
