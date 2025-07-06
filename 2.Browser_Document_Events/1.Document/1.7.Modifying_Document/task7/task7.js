// Task 7: Create a calendar
function createCalendar(elem, year, month) {
  let date = new Date(year, month - 1);
  let firstDay = date.getDay() - 1;
  if (firstDay < 0) firstDay = 6; // Adjust for Sunday
  let lastDate = new Date(year, month, 0).getDate();

  let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  let dayCounter = 1;

  function createRow(isHeader, start, end) {
    let row = document.createElement("tr");
    for (let j = 0; j < days.length; j++) {
      let cell;
      if (isHeader) {
        cell = document.createElement("th");
        cell.textContent = days[j];
      } else {
        cell = document.createElement("td");
        if (j < start || dayCounter > end) {
          cell.textContent = "";
        } else {
          cell.textContent = dayCounter++;
        }
      }
      row.append(cell);
    }
    return row;
  }

  let table = document.createElement("table");
  table.append(createRow(true)); // Header row

  // First week row
  table.append(createRow(false, firstDay, lastDate));

  // Remaining week rows
  while (dayCounter <= lastDate) {
    table.append(createRow(false, 0, lastDate));
  }

  elem.append(table);
}

let container = document.getElementById("calendar");
createCalendar(container, 2012, 12);
