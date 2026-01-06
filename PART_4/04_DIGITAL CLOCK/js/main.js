const clock = document.querySelector('.clock');
const date = document.querySelector('.date');

// let date = new Date();
// console.log(date);
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());
setInterval(()=>{
    let time = new Date();
    // console.log(date.toLocaleTimeString());
    clock.textContent = time.toLocaleTimeString();
    date.textContent = time.toLocaleDateString();
},1000); // 1sec


// let d = new Date()
// date.textContent = d.toLocaleDateString();