// Task 2: Edit TD on click

let table = document.getElementById("bagua-table");

table.addEventListener("click", (event) => {
  if (event.target.tagName != "TD") return;
  let cell = event.target;
  let textArea = document.createElement("textarea");
  textArea.value = cell.innerHTML.trimStart();
  cell.replaceWith(textArea);
  textArea.focus();

  textArea.addEventListener("blur", () => {
    cell.innerHTML = textArea.value;
    textArea.replaceWith(cell);
  });
});
