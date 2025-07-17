// Task 1: Add an option to select

let select = document.getElementById("genres");

console.log(
  `Value : ${select.value}, Text: ${select[select.selectedIndex].textContent}`
);

let option = new Option("Classic", "classic", true, true);
select.append(option);
