// Task 3 Place the ball in the field center

function centerBall() {
  let ball = document.getElementById("ball");
  let field = document.getElementById("field");
  ball.style.left = (field.clientWidth - ball.clientWidth) / 2 + "px";
  ball.style.top = (field.clientHeight - ball.clientHeight) / 2 + "px";
}
