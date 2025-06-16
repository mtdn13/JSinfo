// Task1: is "else" required?
function checkAges(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
} // => not required

// Task2: Rewrite the function using '?' or '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge1(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
}
function checkAge2(age) {
    return age > 18 || confirm("Did parents allow you?");
}

// Task3: Function min(a, b)
function min(a, b) {
    return a <= b ? a : b;
}
console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);

// Task4: Function pow(x, n)
function pow(x, n) {
    return x ** n;
}

