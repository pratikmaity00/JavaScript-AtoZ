// 1.
function fun1(a,b,c) {
    console.log(a); // 2
    console.log(b); // 3
    console.log(c); //undefined 
}
fun1(2,3);

// 2. use rest parameter to accept any number of scores and return their sum
function sumScores(...scores) {
    let sum = 0;
    scores.forEach(function(score) {
        sum += score;
    });
    return sum;
}
const total = sumScores(10, 20, 30, 40);
console.log("Total Scores:", total); // Total Scores: 100   

// 3.
function checkAge(age){
    if(age<18) return "not allowed";
    return "allowed";
}
console.log(checkAge(19));

// 4. 
function f() {
    return;
}
console.log(f()); // undefined

// 5. can u assign a function inside a variable and then call .
let call = function(){
    return "a";
}
console.log(call());

// 6. pass a function into another function and execute it inside
function fun6(val){
    val();
}
fun6(function(){
    console.log("hi");
})

// 7. pure or not
let t = 0;
function addTotal(num){
    t += num;
    console.log(t); // 5 not pure override the value 0
}
addTotal(5);

// 8. convert question 7 into pure fun
let s = 0;
function pure(num){
    let newS = s;
    newS += num;
    console.log(newS); // 5
}
pure(5)

// 9. BMI Calculator
function bmiCal(weight,height){
    return weight / (height*height);
}
console.log(bmiCal(42,5.7)); // 1.292705...
console.log(bmiCal(42,5.7).toFixed(2)); // 1.29

// 10. discount calculator using HOF
function discountCal(discount){
    return function(price) {
        return price - price * (discount / 100);
    }
}
let ten = discountCal(10);
let twenty = discountCal(20);

console.log(ten(100)); // 90
console.log(twenty(100)); // 80

// 11. counter function using clousure
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
let co = counter();
console.log(co()); // 1
console.log(co()); // 2
console.log(co()); // 3

let d = counter();
console.log(d()); // 1
console.log(co()); // 4

// 12. iife to isolate varibale
(function(){
    const passkey = "ama12";
    console.log(passkey);
})();
console.log(passkey); // error as you cant access the varible outside iife function
