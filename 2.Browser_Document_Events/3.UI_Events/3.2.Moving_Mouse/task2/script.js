// Task 2: "Smart" tooltip

let clock = document.getElementById("elem");
clock.addEventListener("mouseover", showTooltip);
clock.addEventListener("mouseout", hideTooltip);

function showTooltip() {
  document.getElementById("tooltip").hidden = false;
}

function hideTooltip() {
  document.getElementById("tooltip").hidden = true;
}
