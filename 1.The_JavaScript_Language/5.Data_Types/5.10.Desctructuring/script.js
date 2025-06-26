// Task 1: Destructuring assignment
let user = {
  name: "John",
  years: 30,
};

let { name, years, isAdmin = false } = user;
console.log(name);
console.log(years);
console.log(isAdmin);

// Task 2: The maximal salary
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxSalaryPerson = null;

  for (let [key, value] of Object.entries(salaries)) {
    if (value > maxSalary) {
      maxSalaryPerson = key;
      maxSalary = value;
    }
  }

  return maxSalaryPerson;
}

console.log(topSalary(salaries));
console.log(topSalary({}));
