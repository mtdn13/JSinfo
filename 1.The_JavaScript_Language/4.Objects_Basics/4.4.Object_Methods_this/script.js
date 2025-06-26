// Task 1: Using "this" in object literal
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // What's the result? => "this" == Window || "this" === undefined so it will return error or '' in non strict mode because Window.name == ''.

// Task 2: Create a calculator
let calculator = {
  read() {
    this.a = prompt("Enter number a", 0);
    this.b = prompt("Enter number b", 0);
  },
  sum() {
    return +this.a && +this.b
      ? +this.a + +this.b
      : alert("Provided values are invalid.");
  },
  mul() {
    return +this.a && +this.b
      ? +this.a * +this.b
      : alert("Provided values are invalid.");
  },
};

calculator.read();
console.log(calculator.mul());
console.log(calculator.sum());

// Task 3: Chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
