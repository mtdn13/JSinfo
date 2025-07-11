// Task 3: Image gallery
let root = document.getElementById("thumbs");
let largeImage = document.getElementById("largeImg");
root.addEventListener("click", (event) => {
  event.preventDefault();
  largeImage.setAttribute("src", event.target.closest("a").href);
});
