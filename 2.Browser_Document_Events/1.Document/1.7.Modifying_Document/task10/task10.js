// Task 10: Sort the table
function sortByName() {
  let table = document.querySelector("tbody");

  let rowsArr = Array.from(table.rows);
  rowsArr.sort((a, b) =>
    a.cells[0].textContent.localeCompare(b.cells[0].textContent)
  );
  table.innerHTML = "";
  rowsArr.forEach((item) => {
    table.append(item);
  });
}
