// Task 1: Hello, Object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task 2: Check for emptiness
function isEmpty(obj) {
  for (let prop in obj) {
    return true;
  }
  return false;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

// Task 3: Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(obj) {
  let sum = 0;
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      sum += obj[prop];
    } else continue;
  }
  return sum;
}

console.log(sumSalaries(salaries)); // 390

// Task 4: Multiply numeric property values by 2
function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    } else continue;
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(menu);

multiplyNumeric(menu);

// after the call
console.log(menu);
