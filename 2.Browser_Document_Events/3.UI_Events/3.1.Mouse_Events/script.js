// Task 1: Selectable list
let ul = document.getElementById("ul");

ul.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

ul.addEventListener("click", (event) => {
  if (!(event.metaKey || event.ctrlKey)) {
    ul.querySelectorAll("li").forEach((item) => {
      item.classList.remove("selected");
    });
  }

  event.target.tagName == "LI" ? event.target.classList.add("selected") : null;
});
