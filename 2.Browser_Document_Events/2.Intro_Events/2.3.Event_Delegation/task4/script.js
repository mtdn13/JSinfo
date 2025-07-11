// Task 4: Tooltip behaviour

document.addEventListener("mouseover", (event) => {
  if (!event.target.dataset.tooltip) return;
  showTooltip(event.target, event.target.dataset.tooltip);
});

document.addEventListener("mouseout", (event) => {
  if (!event.target.dataset.tooltip) return;
  removeTooltip(".tooltip");
});

function showTooltip(anchor, html) {
  let tooltip = document.createElement("div");
  tooltip.innerHTML = html;
  tooltip.classList.add("tooltip");
  document.body.append(tooltip);

  let coords = anchor.getBoundingClientRect();

  let left = coords.left + (anchor.offsetWidth - tooltip.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltip.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + anchor.offsetHeight + 5;
  }

  tooltip.style.left = left + "px";
  tooltip.style.top = top + "px";
}

function removeTooltip(className) {
  document.querySelector(className).remove();
}
