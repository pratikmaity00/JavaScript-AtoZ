// setTimeout
setTimeout(function() {
    console.log("Run once after 2ms");
},2000);

// clearTimeout
let ct = setTimeout(function() {
    console.log("Run once after 2ms");
},2000);
clearTimeout(ct)

// setInterval
// setInterval(function(){
//     console.log('Runs continously after 2ms')
// },2000);

// clearInterval
let ci = setInterval(function(){
    console.log('Runs continously after 2ms')
},2000);
clearInterval(ci);


// counter
let count = 10;
let counter = setInterval(()=>{
    if(count>=0){
        count--;
        console.log(count);
    }else {
        clearInterval(counter); // off
        console.log("Done!");
    }
},1000)