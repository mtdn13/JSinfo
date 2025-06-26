// Task 1: Error in setTimeout?

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// It won't catch it, because error happens asynchrously in setTimeout callback, not directly in Promise executor function
