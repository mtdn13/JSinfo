// Task1: Last loop value
let i = 3;

while (i) {
    alert(i--);
} // => 1

// Task2: Which values does the while loop show?
// #1 prefix form
let j = 0;
while (++j < 5) alert(j); // => 1, 2, 3, 4
// #2 postfix form
let k = 0;
while (k++ < 5) alert(k); // => 1, 2, 3, 4, 5

// Task3: Which values get shown by the "for" loop?
// #1 postfix form
for (let i = 0; i < 5; i++) alert( i ); // => 0, 1, 2, 3, 4
// #2 prefix form
for (let i = 0; i < 5; ++i) alert( i ); // => 0, 1, 2, 3, 4

// Task4: Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) alert(i);
}

// Task5: Replace "for" with "while"
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let l = 0;
while (l < 3) alert(`number ${l++}!`)

// Task6: Repeat until the input is correct
let userNumber;
do {
    userNumber = prompt("Enter you number", "");
    if (userNumber == 100 || userNumber === null || userNumber === "") {
        break;
    }
} while (userNumber < 100);

// Task7: Output prime numbers
let n = 100;
outer: for (let i = 2; i <= n; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    continue outer;
                }
            }
            console.log(i);
}
