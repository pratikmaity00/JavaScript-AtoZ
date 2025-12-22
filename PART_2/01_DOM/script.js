//--------------------DOM----------------
// DOM Manipulation
/* 1. Selecting Elements
    - getElementById
    - getElementsByClassName
    - querySelector (used most now)
    - querySelectorAll (used most now)
*/
let id = document.getElementById("heading"); // select by Id
// console.log(id);
// console.dir(id);

let cls = document.getElementsByClassName("head"); // select by class name

let q = document.querySelector("h1"); // first h1 element
let qAll = document.querySelectorAll("h1"); // all h1 element

/* 2. change text
    - innerHTML
    - innerText
    - textContent
*/
let h2 = document.querySelector("h2");
console.dir(h2)
// h2.textContent = "main hu Doremon";
// h2.innerText = "main hu Doremon";
h2.innerHTML = "<i>Doremon</i>"
h2.hidden = true; // hide the element

/* 3. Attribute Manipulation
    - getAttribute
    - setAttribute
    - removeAttribute
*/
let a = document.querySelector("a");
// a.href = "https://getbootstrap.com/"
a.setAttribute("href","https://getbootstrap.com/");
console.log(a.getAttribute("href"));
a.removeAttribute("href");

/*  Dynamic DOM Manipulation 
    - createElement
    - appendChild
    - removeChild
    - prepend
*/
let btn = document.createElement("button");
btn.textContent = "Click Me";
document.querySelector("body").append(btn); // append end of the body
btn.remove();

let p = document.createElement("p");
p.textContent = "lorem 4"
document.querySelector("div").appendChild(p)

/*
    Style Update
    - .style
    - classList(add,remove,toggle)
*/ 
let h3 = document.querySelector("h3");
h3.style.color ="red";
h3.style.backgroundColor ="yellow";
h3.style.fontSize ="40px";

let h4 = document.querySelector("h4");
h4.classList.add("jsClass");
h4.classList.remove("htmlClass");
h4.classList.toggle("htmlClass"); // toggle helps to add class if it removed or vice-versa