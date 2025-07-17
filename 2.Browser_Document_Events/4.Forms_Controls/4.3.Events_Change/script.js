// Task 1: Deposit calculator

let afterBar = document.getElementById("height-after");
let form = document.forms.calculator;
let input = document.getElementById("money-before");
let output = document.getElementById("money-after");
let depositInput = document.querySelector("input[name='money']");
let monthSelect = document.querySelector("select[name='months']");
let interestInput = document.querySelector("input[name='interest']");

showCalculations();
showBecomesBar();

form.addEventListener("input", () => {
  showCalculations();
  showBecomesBar();
});

function calculateDeposit(initial, months, interest) {
  let years = months / 12;
  interest = interest / 100;
  return Math.round(initial * (1 + interest) ** years);
}

function showCalculations() {
  input.textContent = depositInput.value;
  output.textContent = calculateDeposit(
    depositInput.value,
    monthSelect.value,
    interestInput.value
  );
}

function showBecomesBar() {
  let height = (output.textContent * 100) / input.textContent;
  afterBar.style.height = height + "px";
}
