// synchronus js
console.log("first");
console.log("second");
console.log("third");


// Asynchronus js
console.log("first");
setTimeout(() => {
    console.log("second");
},2000)
console.log("third");