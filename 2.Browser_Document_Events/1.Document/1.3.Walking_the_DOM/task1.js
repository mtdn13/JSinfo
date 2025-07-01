// Task 1: DOM children

console.dir(document.body.firstElementChild);
console.log(document.body.lastElementChild);
console.log(document.body.lastElementChild.lastElementChild);

// Task 2: The sibling question

/*
  If elem – is an arbitrary DOM element node…

  Is it true that elem.lastChild.nextSibling is always null? ==> True
  Is it true that elem.children[0].previousSibling is always null ? ==> False
*/
