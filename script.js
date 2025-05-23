const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".calc-button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();

    switch (value) {
      case "C":
        currentInput = "";
        break;

      case "←":
        currentInput = currentInput.slice(0, -1);
        break;

      case "=":
        try {
          const expression = currentInput
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/\+/g, "+");

          currentInput = eval(expression).toString();
        } catch {
          currentInput = "Error";
        }
        break;

      default:
        currentInput += value;
        break;
    }

    screen.textContent = currentInput || "0";
  });
});
