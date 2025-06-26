// Task 1: Syntax check
let user = {
  name: "John",
  go: function () {
    alert(this.name);
  },
};
user.go(); // => Error (no semicolon);

// Task 2: Explain value of "this"
let obj, method;

obj = {
  go: function () {
    alert(this);
  },
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined => same as method = obj.go => method() this lost

(obj.go || obj.stop)(); // (4) undefined => obj.go returns Reference => any operator except "()" make it just a value and loses this
