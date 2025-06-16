// Task1: What's the result of OR?
alert (null || 2 || undefined) // 2

// Task2: What's the result of OR'ed alerts?
alert (alert(1) || 2 || alert(3)) // 1 2

// Task3: What's the result of AND?
alert (1 && null && 2) // null

// Task4: What's the result of AND'ed alerts?
alert(alert(1) && alert(2)) // 1 undefined

// Task5: The result of OR AND OR?
alert(null || 2 && 3 || 4) // 3

// Task6: Check the range between
if (age >= 14 && age <= 90) {}

// Task7: Check the range outside
// #var1
if (!(age >= 14 && age <= 90)) {}
// #var2
if (age < 14 || age > 90) {}

// Task8: A question about "if"
if (-1 || 0) alert( 'first' ); // 'first'
if (-1 && 0) alert( 'second' ); // alert won't work
if (null || -1 && 1) alert( 'third' ); // 'third'

//Task9: Check the login
let userLogin = prompt("Enter your login", "");
if (userLogin === null || userLogin === "") {
    alert("Canceled");
} else if (userLogin === "Admin") {
    let userPassword = prompt("Enter your password", "");
    if (userPassword === null || userPassword === "") {
        alert("Canceled");
    } else if (userPassword === "TheMaster") {
        alert("Welcome");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I don't know you");
}