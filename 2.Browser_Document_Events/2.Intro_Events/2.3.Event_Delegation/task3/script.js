// Task 3: Sortable table
let table = document.getElementById("grid");
let tbody = table.querySelector("tbody");

table.addEventListener("click", (event) => {
  if (!event.target?.dataset?.type) return;
  let sortedRows = sortTable(tbody, event.target.dataset.type);
  showSortedTable(tbody, sortedRows);
});

function sortTable(table, key) {
  let rowsArr = Array.from(table.rows);
  if (key == "string") {
    rowsArr.sort((a, b) =>
      a.cells[1].textContent.localeCompare(b.cells[1].textContent)
    );
  } else if (key == "number") {
    rowsArr.sort((a, b) => +a.cells[0].textContent - +b.cells[0].textContent);
  } else return;
  return rowsArr;
}

function showSortedTable(anchor, rows) {
  anchor.innerHTML = "";
  rows.forEach((item) => anchor.append(item));
}
