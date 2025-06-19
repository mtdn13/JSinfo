// Task 1: Sum numbers from visitor
function sumNumbers() {
  let firstNumber = prompt("Enter first number", "0");
  let secondNumber = prompt("Enter second number", "0");
  return isFinite(firstNumber) && isFinite(secondNumber)
    ? `Sum is ${+firstNumber + +secondNumber}`
    : "Provided data is incorrect!";
}

// console.log(sumNumbers());

// Task 2: Repeat until the input is a number
function readNumber() {
  let userInput;

  do {
    userInput = prompt("Enter a number", "");
    if (userInput == null || userInput == "") return null;
    else if (isFinite(userInput)) return +userInput;
  } while (true);
}

// console.log(readNumber());

// Task 3: A random number from min to max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 10; i++) {
  // console.log(random(4, 8));
}

// Task 4: A random integer from min to max
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

for (let i = 0; i < 10; i++) {
  console.log(randomInteger(4, 8));
}
