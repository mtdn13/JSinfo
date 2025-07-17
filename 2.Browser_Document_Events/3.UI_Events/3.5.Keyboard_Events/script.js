// Task 1: Extended hotkeys

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener("keydown", (event) => {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener("keyup", (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(() => alert("Hello!"), "KeyQ", "KeyW");
