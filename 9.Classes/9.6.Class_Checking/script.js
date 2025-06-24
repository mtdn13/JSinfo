// Task 1: Strange  instanceOf
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true => instanceOf checking prototypes => A.prototype === B.prototype
