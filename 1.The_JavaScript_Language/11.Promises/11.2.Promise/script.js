// Task 1: Re-solve a promise
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // => 1

// Task 2: Delay with a promise
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}
delay(3000).then(() => alert("runs after 3 seconds"));
