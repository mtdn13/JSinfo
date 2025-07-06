// Task 1: What's the scroll from the bottom

function showScroll() {
  let div = document.getElementById("scroll");
  let scrollBottom =
    getComputedStyle(div).overflow != "scroll" ||
    div.scrollHeight - div.scrollTop - div.clientHeight < 1
      ? 0
      : div.scrollHeight - div.scrollTop - div.clientHeight;
  console.log(div.scrollTop);
  console.log(scrollBottom);
}
