// Task 1: Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("-webkit-transition"));

// Task 2: Filter range
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

// Task 3: Filter range "in place"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) continue;
    arr.splice(i, 1);
  }
}

let arr1 = [5, 3, 8, 1];

filterRangeInPlace(arr1, 1, 4);

console.log(arr1);

// Task 4: Sort in descending order
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);

console.log(arr2);

// Task 5: Copy and sort array
let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return [].concat(arr).sort((a, b) => a.localeCompare(b));
}

let sorted = copySorted(arr3);

console.log(sorted);
console.log(arr3);

// Task 6: Create an extendable Calculator
function Calculator() {
  this["+"] = function (a, b) {
    return a + b;
  };
  this["-"] = function (a, b) {
    return a - b;
  };
  this.calculate = function (str) {
    let splittedArray = str.split(" ");
    let leftOperand = +splittedArray[0];
    let rightOperand = +splittedArray[2];
    let operator = splittedArray[1];

    return this[operator](leftOperand, rightOperand);
  };
  this.addMethod = function (name, func) {
    this[name] = func;
  };
}

let calc = new Calculator();
console.log(calc.calculate("3 - 7"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("4 ** 3"));

// Task 7: Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

console.log(names);

// Task 8: Map to objects
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john1, pete1, mary1];

let usersMapped = users1.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
}));

console.log(usersMapped);

// Task 9: Sort users by age
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let users2 = [pete2, john2, mary2];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

sortByAge(users2);

console.log(users2);

// Task 10: Shuffle an array
let arr4 = [4, 1, 2, 3];

function shuffle(arr) {
  arr.sort(() => 0.5 - Math.random());
}

shuffle(arr4);
console.log(arr4);

shuffle(arr4);
console.log(arr4);

shuffle(arr4);
console.log(arr4);

// Task 11: Get average age
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let users3 = [john3, pete3, mary3];

function getAverageAge(arr) {
  return users3.reduce((sum, curr) => (sum += curr.age), 0) / users3.length;
}

console.log(getAverageAge(users3));

// Task 12: Filter unique array members
function unique(arr) {
  let tempArr = [];
  for (let item of arr) {
    if (!tempArr.includes(item)) {
      tempArr.push(item);
    }
  }
  return tempArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));

// Task 13: Create keyed object from array
let users4 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function usersById(arr) {
  return arr.map((item) => ({
    [item.id]: item,
  }));
}

console.log(usersById(users4));
