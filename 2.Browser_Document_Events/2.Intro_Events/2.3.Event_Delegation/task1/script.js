// Task 1: Hide messages with delegation

let container = document.getElementById("container");
container.addEventListener("click", (event) => {
  let article = event.target.closest(".pane");
  if (!article) return;
  event.target.className === "remove-button" ? (article.hidden = true) : null;
});
