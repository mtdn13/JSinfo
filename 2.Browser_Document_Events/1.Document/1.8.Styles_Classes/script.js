// Task 1: Create a notification
function showNotification(options) {
  let div = document.createElement("div");
  div.className = "notification";
  div.style.top = `${options.top}px`;
  div.style.right = `${options.right}px`;
  div.innerHTML = options.html;
  div.classList.add(options.className);
  document.body.append(div);
  setTimeout(() => {
    div.style.display = "none";
  }, 1500);
}

setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
    className: "welcome",
  });
}, 2000);
