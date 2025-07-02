let liElems = [...document.querySelectorAll("li")];

liElems.forEach((elem) => {
  console.log(elem.firstChild.textContent.trim());
});
console.log("Number of all nested 'li' elements: " + liElems.length);
