// Task1: If(a string with zero)
if ("0") {
    alert("Hello");
} // "0" => True => alert will be shown

// Task2: The name of Javascript
if (prompt(`What's the "official" name of Javascript?`, "") == "ECMAscript") {
    alert("Right");
} else {
    alert(`You don't know? "ECMAscript"`);
}

// Task3: Show the sign
let userNumber = +prompt("Type a number", "");
if (userNumber > 0) {
    alert(1);
} else if (userNumber < 0) {
    alert(-1);
} else {
    alert (0)
}

// Task4: Rewrite 'if' into ?
let result = a + b < 4 ? 'Below' : 'Over';

/* let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

// Task5: Rewrite 'if..else' into ?
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

