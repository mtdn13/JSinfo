// Task 1: Sum the properties
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  return Object.values(obj).reduce((sum, item) => sum + item, 0);
}

console.log(sumSalaries(salaries));

// Task 2: Count properties
let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user));
