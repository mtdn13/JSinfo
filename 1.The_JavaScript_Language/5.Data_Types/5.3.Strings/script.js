// Task 1: Uppercase the first character
function ucFirst(str) {
  return (str = str[0].toUpperCase() + str.slice(1));
}

console.log(ucFirst("john"));

// Task 2: Check for spam
function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes("viagra") || str.toLowerCase().includes("xxx");
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

// Task 3: Truncate the text
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, 19) + "…";
  }
  return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));

// Task 4: Extract the money
function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120"));
