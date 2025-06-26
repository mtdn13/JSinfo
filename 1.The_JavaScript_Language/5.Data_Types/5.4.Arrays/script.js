// Task 1: Is array copied?
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // ? => 4, arrays are copied as object by reference.

// Task 2: Array operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");

console.log(styles);

// Task 3: Calling in array context
let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2](); // ? => "a,b,function(){}"

// Task 4: Sum input numbers
function sumInput() {
  let arr = [];
  let userInput;
  let sum = 0;

  do {
    userInput = prompt("Enter a number", "");
    if (userInput == null || userInput == "" || isNaN(userInput)) break;
    arr.push(+userInput);
  } while (true);

  for (let item of arr) {
    sum += item;
  }

  return `Sum of ${arr} is ${sum}`;
}

console.log(sumInput());

// Task 5: A maximal subarray
function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let item of arr) {
    currentSum += item;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    } else {
      currentSum = item;
    }
    console.log(`Max sum = ${maxSum}, current sum = ${currentSum}`);
  }
  return maxSum;
}

let testArr = [1, -2, 3, 4, -9, 6];
let negArr = [-1, -2, -3];
let test2Arr = [100, -9, 2, -3, 5];

getMaxSubSum(testArr);
getMaxSubSum(negArr);
getMaxSubSum(test2Arr);
