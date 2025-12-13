// Operators Type - Arithmetic, Comparison, Logical, Assignment, unary, Ternary

// Arithmetic ---  + - * / % **

// Comparison ---  = == === < > <= >= ! != !==
12 != 13; // true
12 !== "12"; // true
12 !== "12"; // false

// Assignment -- = += -= /= *= %=
let a = 20;
a += 5; // 25

// Logical ---  ! && ||
!12; // false
!!12 + // true
  // Unary --- + - ! typeof ++ --
  "2" - // 2 in number
  2; // -2
let x = 2;
console.log(x++); // 2
console.log(++x); // 3

// Ternary (like if else ) ---   ?:
12 > 13 ? console.log("true") : console.log("false"); // false

// Practice
console.log("10" + 1); // 101
console.log("10" - 1); // 9
console.log(true + false); // 1+0 =1
console.log(!!"Sheryians"); // true

// 2.
let str = "42";
let num = +str; // 42
console.log(num); // 42

// 3.
let age = 17;
let msg = age >= 18 ? console.log("Adult") : console.log("Minor"); // Minor

// 4. calculator
function calc(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      // Handle division by zero safely
      return b !== 0 ? a / b : "Error: Division by zero";
    default:
      return "Invalid operator";
  }
}

// Examples:
console.log(calc(10, 5, '+')); // 15
console.log(calc(10, 5, '-')); // 5
console.log(calc(10, 5, '*')); // 50
console.log(calc(10, 5, '/')); // 2
console.log(calc(10, 0, '/')); // "Error: Division by zero"
console.log(calc(10, 5, '%')); // "Invalid operator"

// 5.
let l = 10;
let k = 20;
if(l>5 && k <25){
    console.log("A"); // execute
    
}else {
    console.log("B");  
}

// 6. 
let isAdmin = true;
let loggedIn = false;
if(isAdmin || loggedIn) {
    console.log("Access Granted"); // execute
}else {
    console.log("Access not granted");
}

// 7.
let temp = 35;
if(!(temp < 30)){
    console.log("Hot"); // execute
}else {
    console.log("Pleasent");
}

// 8.
let  number = 0;
if (number) {
    console.log("Truthy"); 
}else {
    console.log("falsy"); // exeecute
}

// 9.
let s = 78;
let g = s >= 90 ? console.log("A+") : s >= 75 ? console.log("B") : s >= 60 ? console.log("C") : console.log("fail"); // B

// 10.
let log = true;
let hastokken = false;
let access = log && hastokken ? console.log("Allow") : console.log("Deny"); // Deny

// 11.
let m = 5;
let res = m++ + ++m;
console.log(res); // 5 + 7 = 11

// 12.
let like = 100;
function likePost() {
    return ++like;
}
console.log(likePost()); // 101
console.log(like); // 101

// 13.
let c = 5;
if(c-- == 5) // 5 == 5 true
    console.log("matched"); // matched
else 
    console.log("not matched");
     
