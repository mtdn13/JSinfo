// Task 2: Up/down button

let arrow = document.getElementById("arrowTop");

document.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight) {
    arrow.hidden = false;
  } else if (window.pageYOffset < window.innerHeight) {
    arrow.hidden = true;
  }
});
arrow.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
