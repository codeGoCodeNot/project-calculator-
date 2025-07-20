const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const clear = document.querySelector(".clear");
const negation = document.querySelector(".negation");
const percentage = document.querySelectorAll(".percentage");
const decimal = document.querySelector(".point");
const operations = document.querySelectorAll(".operations");
const equal = document.querySelector("#equal");

let firstNumber = null;
let operator = null;
let secondNumber = null;

const buttonHandleClickSyntax = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "equal") return;

      if (button.classList.contains("clear")) {
        clearButton();
      } else if (button.classList.contains("negation")) {
        negationButton();
      } else if (button.classList.contains("percentage")) {
        percentageButton();
      } else if (button.classList.contains("point")) {
        decimalButton();
      } else if (button.classList.contains("operations")) {
        buttonHandleClickOperations(button.textContent);
      } else {
        if (!operator) {
          firstNumber =
            (firstNumber === null ? "" : firstNumber) + button.textContent;
        } else {
          secondNumber =
            (secondNumber === null ? "" : secondNumber) + button.textContent;
        }
        displayText();
      }
    });
  });
};

const clearButton = () => {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  display.textContent = 0;
};

const negationButton = () => {
  if (!operator) {
    firstNumber = (Number(firstNumber) * -1).toString();
  } else if (secondNumber !== null) {
    secondNumber = (Number(secondNumber) * -1).toString();
  }
  displayText();
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
  let currentNumber = operator ? secondNumber : firstNumber;

  if (!currentNumber?.includes?.(".")) {
    currentNumber = (currentNumber ?? "0") + ".";
  }

  if (!operator) {
    firstNumber = currentNumber;
  } else {
    secondNumber = currentNumber;
  }
  displayText();
};

const buttonHandleClickOperations = (operations) => {
  operator = operations;
  displayText();
};

const operationsButton = (num1, operations, num2) => {
  switch (operations) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "÷":
      if (num2 === 0) return "Undefined";
      return num1 / num2;
    default:
      return num2;
  }
};

const equalButton = () => {
  if (firstNumber !== null && operator !== null && secondNumber !== null) {
    const result = operationsButton(
      Number(firstNumber),
      operator,
      Number(secondNumber)
    );

    display.textContent = result;

    firstNumber = result;
    operator = null;
    secondNumber = null;
  }
};

const displayText = () => {
  display.textContent = `${firstNumber ?? ""} ${operator ?? ""} ${
    secondNumber ?? ""
  }`.trim();
};

const init = () => {
  buttonHandleClickSyntax();
  equal.addEventListener("click", equalButton);
};

init();
