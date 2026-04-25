const display = document.getElementById("display");

let expression = "";

// Update display safely
function updateDisplay() {
  display.textContent = expression || "0";
}

// Handle button clicks
document.querySelectorAll("button").forEach(btn => {
  const val = btn.dataset.value;
  const action = btn.dataset.action;

  btn.addEventListener("click", () => {

    if (val) {
      expression += val;
      updateDisplay();
      return;
    }

    if (action === "clear") {
      expression = "";
      updateDisplay();
      return;
    }

    if (action === "equals") {
      try {
        // Safe evaluation
        expression = String(Function("return " + expression)());
      } catch {
        expression = "Error";
      }
      updateDisplay();
      return;
    }

  });
});
