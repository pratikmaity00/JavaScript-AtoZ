// Data types - 1. Primitive & 2. Non-Primitive
// Primitive - string, number, boolean, null, undefined, symbol, bigint
// exact copy
let a = 2;
let b = a; // => 2
a = 3; 
console.log(a);

let str = "hello" // string
let num = 12.3  // number
let t = true    // boolean
let f = false   // boolean
let student = null; // null - no value change after
let id; // undefined by default
// Symbol
let obj = {
    uid: 101,
    name: "rj",
};
// obj.uid = 102;
let u1 = Symbol("uid");
obj[u1] = "1100";

// bigint
// Number.MAX_SAFE_INTEGER
let big = 1000782675265378237n;
big += 6n;
console.log(big);


// Non-Primitive - array [], objects {}, functions ()
// not copy but reference
let arr = [1,2,3]; // array
let arr2 = arr; // => 1,2,3 refenernce not exact copy
arr2.pop(3);
console.log(arr); // 1,2 - change in arr but i change in arr2

// object
let obj2 = {
    age: 29,
};
let obj3 = obj2;
obj3.age = 30; // change both value obj2 and obj3

// functions
function fun(){
    console.log("hello");
}



// Dynamic Typing - change data types further
let number = 20;
number = true;

// Type Coercion
console.log("1"+1); // = 11
console.log("2"-1); // = 1

// Confusions
console.log(true + false) // = 1 + 0 > 1
console.log(null + 1) // 0 + 1 = 1
console.log(5 + "4")  // 54
console.log(!!undefined)  // false

