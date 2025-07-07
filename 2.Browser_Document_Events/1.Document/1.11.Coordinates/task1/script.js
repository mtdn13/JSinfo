// Task 1: Find window coordinates of the field
let field = document.getElementById("field");
let x = field.getBoundingClientRect().x;
let y = field.getBoundingClientRect().y;
let a = x + field.offsetWidth;
let b = y + field.offsetHeight;
let c = x + field.clientLeft;
let d = y + field.clientTop;
let e = x + field.offsetWidth - field.clientLeft;
let f = y + field.offsetHeight - field.clientTop;

console.log(x, y); // outer top left (1)
console.log(a, b); // outer bottom right (2)
console.log(c, d); // inner top left (3)
console.log(e, f); // inner bottom right (4)
