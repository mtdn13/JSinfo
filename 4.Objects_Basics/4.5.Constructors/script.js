// Task 1: Two functions - one object
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a == b); // true

// Task 2: Create new Calculator
function Calculator() {
  this.read = function () {
    this.a = prompt("Enter number a", 0);
    this.b = prompt("Enter number b", 0);
  };
  this.sum = function () {
    return +this.a && +this.b
      ? +this.a + +this.b
      : alert("Provided values are invalid.");
  };
  this.mul = function () {
    return +this.a && +this.b
      ? +this.a * +this.b
      : alert("Provided values are invalid.");
  };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());

// Task 3: Create new Accumalator
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let userValue = prompt("Enter new value", 0);
    if (userValue === null || userValue === "" || !+userValue) {
      alert("Invalid value");
      return;
    }
    this.value += +userValue;
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values
