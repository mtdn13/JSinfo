// Task 2: Catch links in the element
let root = document.getElementById("contents");
root.addEventListener("click", (event) => {
  let confirm = window.confirm(`Leave for ${event.target.closest("a").href} ?`);
  if (!confirm) event.preventDefault();
});
