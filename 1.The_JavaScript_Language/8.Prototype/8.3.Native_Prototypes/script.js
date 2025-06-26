// Task 1: Add method "f.defer(ms)" to functions
{
  function f() {
    alert("Hello!");
  }

  Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
  };

  // f.defer(1000); // shows "Hello!" after 1 second
}

// Task 2: Add the decorating "defer()" function
{
  function f(a, b) {
    alert(a + b);
  }
  Function.prototype.defer = function (ms) {
    return (a, b) => {
      setTimeout(() => this(a, b), ms);
    };
  };
  f.defer(1000)(1, 2); // shows 3 after 1 second
}
