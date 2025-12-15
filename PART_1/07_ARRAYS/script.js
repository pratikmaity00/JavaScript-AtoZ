// create a array
let arr = [1,2,3,4];

// access array elements
console.log(arr[0]); // 1
console.log(arr[1]); // 2

// modifiy array
arr[3] = 8;
console.log(arr) // [1,2,3,8]

// array methods
arr.push(5); // [1,2,3,8,5]
arr.pop(); // [1,2,3,8]
arr.shift(); // [2,3,8]
arr.unshift(1); // [1,2,3,8]
arr.splice(2,1) // [1,2,8]

// slice can't change main array
let newArr = arr.slice(0,1);
console.log(newArr); // [1]

let palindrome = ['m','o','n'];
console.log(palindrome.reverse()); // ['n','o','m']
let unorderArr = [8,2,5,1,3];
console.log(unorderArr.sort()); // [1,2,3,5,8]

let srArr = unorderArr.sort(function(a,b){
    return b - a; // desending order 
    // return a- b ; // asending order
});
console.log(srArr); 


// forEach
let numArr = [11,22,3,4,25];
numArr.forEach(function(val) {
    console.log(val);
    console.log(val + 1);
})

// map()
let mapArr = [10,62,3,4,15];
let nMapArr = mapArr.map(function(val) {
    if(val > 10) return val;
});
console.log(nMapArr); // [11, 62, undefined, undefined, 15]

// filter 
let farr = [1,2,3,4,5,6,7,8];
let nFarr = farr.filter(n => {
    if(n>4) return true;
})
console.log(nFarr); // [5,6,7,8]

// reduce()
let redArr = [1,2,3,4,5,6]
let ans = redArr.reduce(function(accumulator, val){
    return accumulator + val;
}, 0); // acumulator = 0
console.log(ans); // 21

// find()
let findArr = [1,2,3,1,5,7];
let ansFindArr = findArr.find(function(val) {
    if(val === 1) return val;
});
console.log(ansFindArr); // first match

// some()
let sArr = [10,30,32,90];
let ansSArr = sArr.some(function(val) {
    return val>85;
});
console.log(ansSArr); // true

// every()
let eArr = [10,30,32,90];
let ansEArr = eArr.every(function(val) {
    return val>85;
});
console.log(ansEArr); // false

// 1. destructuring
let darr = [1,2,3,4,5];
let [a,b, ,c] = darr;
console.log([a,b, ,c])

// 2. spread operato
let sparr = [1,2,3,4];
// let copyarr = sparr; // not copy refernece create
let copyarr = [...sparr];
console.table([sparr,copyarr]);
copyarr.pop();
console.table([sparr,copyarr]);