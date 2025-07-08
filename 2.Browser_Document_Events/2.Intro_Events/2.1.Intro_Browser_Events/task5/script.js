// Task 5: Create a sliding menu
let div = document.getElementById("container");

div.onclick = function () {
  document.getElementById("list").classList.toggle("hidden");
  document.getElementById("arrow-right").classList.toggle("hidden");
  document.getElementById("arrow-down").classList.toggle("hidden");
};
