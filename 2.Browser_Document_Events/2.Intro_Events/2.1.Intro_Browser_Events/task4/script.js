// Task 4: Move the ball across the field

let ball = document.getElementById("ball");
let field = document.getElementById("field");

field.onclick = function (event) {
  let rect = field.getBoundingClientRect();
  let x = event.clientX - rect.left - field.clientLeft - ball.offsetWidth / 2;
  let y = event.clientY - rect.top - field.clientTop - ball.offsetHeight / 2;

  // Clamp x and y to keep the ball fully inside the field
  x = Math.max(0, Math.min(x, field.clientWidth - ball.offsetWidth));
  y = Math.max(0, Math.min(y, field.clientHeight - ball.offsetHeight));

  ball.style.left = x + "px";
  ball.style.top = y + "px";
  console.dir(field);
};
