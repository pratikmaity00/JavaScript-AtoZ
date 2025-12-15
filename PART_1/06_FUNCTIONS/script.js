//-------------Functions--------
//1. function create
function greet(){
    console.log("Hello !");
}
greet()

//2. Function Expression
const greet2 = function(){
    console.log("Hello !");
}
greet2()

// 3. Arrow Function
const greet3 = () => {
    console.log("Hello");
}
greet3()

// Prameter and argument
function abcd(char){ // char is aparameter
    console.log(`${char} is a Fronted Enginner.`)
}
abcd("Pratik") // argument
abcd("Rahul")  // argument
abcd("Ramesh")  // argument

// default parameter
function sum(num1=0,num2=0){
    console.log(num1+num2);
}
sum();

//rest parameter
function fun2(...val){
    console.log(val);
}
fun2(1,2,3,4,5); // -> [1,2,3,4,5]
function fun3(a,b,c,...val){
    console.log(a,b,c,val);
}
fun3(1,2,3,4,5,6); // -> 1 2 3 [4,5,6]

// return -Sends value back from function
function fun4(){
    return 12;
}


let res = fun4();
console.log(res);

// First class function -- means function treated like a variable
const fun5 = function(){
    console.log("hello world");
}
fun5();

// higher order function -- function that returns function
function createMultiplier(x) {
return function (y) {
return x * y;
};
}
let double = createMultiplier(2);
console.log(double(5));

// pure function -- function which given same input will always return same output and does not have side effects
function pureFunction(a,b){
    return a+b;
}
console.log(pureFunction(2,3)); // 5
console.log(pureFunction(2,3)); // 5

// impure function -- function which depends on external variable or state or has side effects
let c = 10;
function impureFunction(a){
    return a+c;
}
console.log(impureFunction(5)); // 15
c = 20;
console.log(impureFunction(5)); // 25

//closure -- function along with its lexical scope
function outerFunction() {
    let l = 2;
    function innerFunction() {
        console.log(l);
    }
}

// lexical scope -- function defined inside another function can access the variables of the outer function
function outerFunction2() {
    let m = 5;
    function innerFunction2() {
        console.log(m);
    }
    innerFunction2();
}

// IIFE -- Immediately Invoked Function Expression
(function(){
    console.log("IIFE executed");
})();

// Callback function -- function passed as an argument to another function
function callbackFunction(name){
    console.log(`Hello, ${name}`);
}
function higherOrderFunction(callback){
    const name = "Pratik";
    callback(name);
}   
higherOrderFunction(callbackFunction);
// Recursion -- function that calls itself
function factorial(n){
    if(n===0){ 
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5)); // 120

// hoisting -- function declarations are hoisted to the top of their scope
hoistedFunction(); 
function hoistedFunction(){
    console.log("This function is hoisted");
}
