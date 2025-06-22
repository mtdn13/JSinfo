// Task 1: Sum all numbers till the given one
function sumTo1(n) {
  let sum = 0;
  while (n) {
    sum += n--;
  }
  return sum;
}

console.log(sumTo1(100));

function sumTo2(n) {
  return n == 1 ? 1 : n + sumTo2(n - 1);
}

console.log(sumTo2(100));

function sumTo3(n) {
  return (n * (1 + n)) / 2;
}

console.log(sumTo3(100));

// Task 2: Calculate factorial
function factorial(n) {
  return n == 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));

// Task 3: Fibonacci numbers
function fib(n) {
  let a = 1;
  let b = 1;
  let c = a + b;
  while (n !== 3) {
    a = b;
    b = c;
    c = a + b;
    n--;
  }
  return c;
}
console.log(fib(77));

// Task 4: Output a single-linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList1(obj) {
  do {
    console.log(obj.value);
    if (obj.next !== null) {
      obj = obj.next;
    } else break;
  } while (true);
}

// printList1(list);

function printList2(obj) {
  console.log(obj.value);
  if (obj.next == null) return;
  printList2(obj.next);
}

// printList2(list);

// Task 5: Output a single-linked list in reverse order
function printReversedList1(obj) {
  let tempArr = [];
  do {
    tempArr.push(obj.value);
    if (obj.next !== null) {
      obj = obj.next;
    } else break;
  } while (true);
  tempArr.reverse().forEach((item) => console.log(item));
}

// printReversedList1(list);

function printReversedList2(obj) {
  let tempArr = [];
  function innerPrintReversedList(obj) {
    tempArr.push(obj.value);
    if (obj.next == null) {
      tempArr.reverse().forEach((item) => console.log(item));
      return;
    }
    innerPrintReversedList(obj.next);
  }
  innerPrintReversedList(obj);
}

printReversedList2(list);
