// 1. print 2nd fruit
let fruit = ["apple","guava","mango"];
console.log([fruit[1]]);

// 2. add "mango" at teh end and "pineapple" aat the beginning
let nFruits = ["apple","banana"];
nFruits.push("mango");
nFruits.unshift("pineapple");
console.log(nFruits);

// 3. replace "banana" with kiwi
let fruits2 = ["apple","banana"];
fruits2.pop()
fruits2.push("kiwi")
console.log(fruits2);

// 4. remove last element from array
let animal = ["tiger","lion","cow"]
animal.pop()
console.log(animal);

// 5. insert "red" 7 "blue" at index 1
let colors = ["green","yellow"];
colors.splice(1,0,"red","blue")
console.log(colors);

// 6. extract middile 3 elements  like 2,3,4
let items = [1,2,3,4,5,6]
let nitems = items.slice(1,4)
console.log(nitems);

// 7. sort the array alphabatically and then reverse it
let names = ["zara","arjun","mira","bhayava"]
// console.log(names.sort())
// console.log(names.reverse())
console.log(names.sort().reverse());

// 8. use map()  to square ecah number
let num = [1,2,3,4]
let newNum = num.map(function(val){
    return val**2
});
console.log(newNum);

// 9. use filter() to keep numbers greater then 10
let num2 = [5,12,8,20,3]
let newNum2 = num2.filter(function(val){
    if(val>10) return true;
})
console.log(newNum2)

// 10. use reduce() to find sum
let num3 = [10,20,30];
let ans = num3.reduce(function(acc=0,val){
    return acc+val;
})
console.log(ans);

// 11. use find() to get first num less than 10
let num4 = [12,15,3,8,20,3]
let fisrtNum = num4.find(function(val){
    if(val<10) return val;
})
console.log(fisrtNum);

// 12. use some() to check if any student has scored below 35
let marks = [45,60,28,90]
let ansMarks = marks.some(function(val){
    return val<35;
})
console.log(ansMarks);

// 13. use every() all are even number
let num5 = [2,4,6,8,10]
let even = num5.every(function(val){
    if(val%2 === 0) return val;
});
console.log(even);

// 14
let fullName = ['Pratik','Maity']
let [fname,lanme] = fullName;
console.log(fname)

// 15. merge using spread
let a = [1,2]
let b = [3,4]
let c = [...a,...b];
console.log(c);

// let d = a.concat(b,c);
// console.log(d);

// 16. Add "India" to the start of the array using spread
let countries = ["USA","UK"];
countries = ["INDIA",...countries]
console.log(countries);

// clone this array not reference
let orgArr = [1,2,3]
let dupArr = [...orgArr]