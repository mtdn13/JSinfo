// Task 6: Add a closing button

let buttons = document.querySelectorAll(".remove-button");

buttons.forEach((button) => {
  button.onclick = function () {
    let message = this.parentElement;
    message.style.display = "none";
  };
});
