
let h1 = document.querySelector("h1");
function click() {
    h1.style.color = "red";
}
// add event listner
h1.addEventListener("click",click);
// remove event listner
h1.removeEventListener("click",click)

// types of event
// input
let inp = document.getElementById("search");
inp.addEventListener("input",function(dets) {
    // console.log(dets.data);
    if(dets.data !== null) {
        console.log(dets.data);
    }
});

// change
let sel = document.querySelector("select");
let h3 = document.querySelector("#device");
sel.addEventListener("change",function(dets) {
    // h3.textContent = "Device Selected";
    h3.textContent = `${dets.target.value} Device Selected`
});

// keydown
let p1 = document.querySelector(".p1");
window.addEventListener("keydown",function(dets) {
    if(dets.key === " ") {
        p1.textContent = "SPC";
    }else {
        p1.textContent = dets.key;
    }
})


// custom file
let fileInp = document.querySelector('#file');
let customFile = document.querySelector('.btn');

customFile.addEventListener('click',() => {
    fileInp.click();
});

fileInp.addEventListener('change',(dets) => {
    const file = dets.target.files[0];
    if(file) {
        customFile.textContent = file.name;
    }
});

// mouseover and mouseout
let redBox = document.querySelector('.redBox');

redBox.addEventListener('mouseover',()=>{
    redBox.style.backgroundColor = "yellow";
});
redBox.addEventListener('mouseout',()=>{
    redBox.style.backgroundColor = "red";
})

// mousemove
let movediv = document.querySelector('.movediv');

window.addEventListener('mousemove',(dets)=>{
    movediv.style.top = dets.clientY + "px";
    movediv.style.left = dets.clientX + "px";
})