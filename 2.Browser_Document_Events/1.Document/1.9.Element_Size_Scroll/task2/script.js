// Task 2: What is the sctroll bar width

function showScroll() {
  let div = document.getElementById("scroll");
  let scrollWidth = div.offsetWidth - div.clientWidth;
  console.log(scrollWidth);
}
