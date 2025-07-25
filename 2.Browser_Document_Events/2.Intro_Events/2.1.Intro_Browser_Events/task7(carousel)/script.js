// Task 7: Carousel

let width = 130; // image width
let count = 3; // visible images count

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // ribbon scroll position

carousel.querySelector(".prev").onclick = function () {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function () {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
