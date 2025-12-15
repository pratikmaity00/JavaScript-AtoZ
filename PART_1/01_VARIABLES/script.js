// Variable types - var, let, const
// how to create a Variable ?
a = 2  // Don's use it 
var x = 2 // Don't use var as - 
/* 
    1. It add in Window
    2. Function Scope
    3. Redeclare same varible but don't give error
*/ 
var x = 3 // There is no error this is not good approach
let y = 2
const pi = 3.14 // You can't change value once it assign

// Declarations
let id
// Initialization
id = 101
// Declarations and Initialization
let iD = 101  // not same variable name otherwise showing error

// Scope - global, block, functional 
// Global Scope - access anywhere
var num1 = 40
// block scope - inside curly brackets like in loop, if,else part and you can't access it outside of bracket
{ 
    let num2 = 10 // It can't access outside bracket
    const num3 = 30 // It can't access outside bracket
    var num4 = 78 // It can access outside bracket | so this not a wright approach
}
// Function scope - access inside any function
function abcd() {
    var n1 = 1
}

// Temporal Dead Zone 
// console.log(f);
let f = 10; // error: can't access 'x' before intialization

console.log(z); // undefined
var z = 10;

// Hoisting impact per type
var m = 12;
var m = undefined;
console.log(m);
m = 12;


// Practice Example
// 1.
var number = 1;
{
    var number = 2;
}
console.log(number); // O/P - 2

// 2.
let number2 = 10; // global 
{
    let number2 = 20; // block
    console.log(number2); // => 20
}
console.log(number2); // => 10

//3.  Declare your name and city using const , and your age using let .
const name = "Pratik";
const city = "kolkata";
let age = 21;

// 4.
let q = 5;
let q = 10; // => Error 

// 5. 
console.log(count); // => undefined
var count = 42;

// 6.
const numbers = [1, 2, 3];
numbers.push(4);   // Works fine
console.log(numbers); // [1, 2, 3, 4]

// 7.
console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25;