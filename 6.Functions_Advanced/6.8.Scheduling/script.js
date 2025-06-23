// Task 1: Output every second

function printNumbers1(from, to) {
  let timerId = setTimeout(function f() {
    console.log(from++);
    if (from == to) {
      setTimeout(() => console.log(from), 1000);
      clearTimeout(timerId);
    } else {
      setTimeout(f, 1000);
    }
  }, 1000);
}

function printNumbers2(from, to) {
  let timerId = setInterval(() => {
    console.log(from++);
    if (from == to) {
      setTimeout(() => console.log(from), 1000);
      clearInterval(timerId);
    }
  }, 1000);
}

// printNumbers1(1, 10);
// printNumbers2(1, 10);

// Task 2: What will setTimeout show?
let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
// 1.After the loop => 100000000
