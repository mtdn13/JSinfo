// Task 1: Set and decrease for counter
function makeCounter() {
  let innerCounter = function () {
    return innerCounter.count++;
  };

  innerCounter.count = 0;

  innerCounter.set = function (value) {
    innerCounter.count = value;
  };

  innerCounter.decrease = function () {
    innerCounter.count--;
  };

  return innerCounter;
}

let counter = makeCounter();

counter();
counter();
counter();
counter.set(10);
counter.decrease();

console.log(counter.count);

// Task 2: Sum with an arbitrary amount of brackets
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

alert(sum(1)(2)(3));

// Second task is copypasted from solutions, didn't have enough braincells to figure it our myself :(
