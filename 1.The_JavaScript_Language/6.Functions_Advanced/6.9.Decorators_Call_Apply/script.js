// Task 1: Spy decorator
function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}

function spy(f) {
  return function work(...args) {
    if (!work.calls) {
      work.calls = [];
      work.calls.push(args);
    } else {
      work.calls.push(args);
    }
    f(...args);
  };
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

console.log(work.calls);

// for (let args of work.calls) {
//   alert("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// Task 2: Delaying decorator
function f(x) {
  alert(x);
}

function delay(f, ms) {
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

// f1000("test");
// f1500("test");

// Task 3: Debounce decorator
function debounce(func, ms) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, args), ms);
  };
}

let test = debounce(alert, 1000);

test("a");
setTimeout(() => test("b"), 200);
setTimeout(() => test("c"), 500);
