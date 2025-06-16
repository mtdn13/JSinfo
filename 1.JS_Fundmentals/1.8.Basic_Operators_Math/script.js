// Task1: The postfix and prefix forms
let a = 1, b = 1;

let c = ++a; 
let d = b++; 
// a = 2, b = 2, c = 2, d = 1

//Task2: Assignment result
let y = 2;
let x = 1 + (y *= 2);
// y = 4, x = 5

// Task3: Type convertions
"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

//Task4: Fix the addition
let k = prompt("First number?", 1);
let l = prompt("Second number?", 2);

alert(+k + +l); // 12 ==> 3
