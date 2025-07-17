// Task 3: Keyboard-driven mouse

let mouse = document.getElementById("mouse");
mouse.tabIndex = 1;

mouse.addEventListener("focus", () => {
  mouse.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowRight":
        moveMouse("right");
        break;
      case "ArrowLeft":
        moveMouse("left");
        break;
      case "ArrowUp":
        moveMouse("up");
        break;
      case "ArrowDown":
        moveMouse("down");
        break;
      default:
        break;
    }
  });

  function moveMouse(direction) {
    let currentPos = mouse.getBoundingClientRect();
    switch (direction) {
      case "left":
        mouse.style.left = currentPos.x - currentPos.width + "px";
        mouse.style.top = currentPos.y + "px";
        break;
      case "right":
        mouse.style.left = currentPos.x + currentPos.width + "px";
        mouse.style.top = currentPos.y + "px";
        break;
      case "up":
        mouse.style.left = currentPos.x + "px";
        mouse.style.top = currentPos.y - currentPos.height + "px";
        break;
      case "down":
        mouse.style.left = currentPos.x + "px";
        mouse.style.top = currentPos.y + currentPos.height + "px";
        break;

      default:
        break;
    }
  }
});
