// Task 1: Search for elements

console.log(document.getElementById("age-table"));
console.log(document.querySelectorAll("#age-table label"));
console.log(document.querySelector("#age-table td").innerHTML);
console.log(document.querySelector("form[name='search']"));
let formInputs = document.querySelectorAll("form[name='search'] input");
console.log(formInputs[0]);
console.log(formInputs[formInputs.length - 1]);
