// 1. select all <li> elements and print their text
let lis = document.querySelectorAll("li");
lis.forEach((val) => {
  console.log(val.textContent);
});

// or,1. using a for loop
for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].textContent);
}

// 2. slect paragraph and change the text like <i>Hi</i> How are you?
let p1 = document.querySelector(".p1");
p1.innerHTML = "<i>Hi</i> How are you?";

// 3. how to update href
let at1 = document.querySelector(".a1");
// at1.href = "#"
at1.setAttribute("href", "https://getbootstrap.com/");

// 4. add title into div
let div1 = document.querySelector("div");
div1.setAttribute("title", "hey");

// 5. rmove diasble attribute from button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// 6. create a new list item <li>New List</li> and add it to the end of a <ul>
let newLi = document.createElement("li");
newLi.textContent = "New List";
document.querySelector(".ul2").append(newLi);

// 7. create a new image elemnt withh a placeholder and it at the top of a div.
let img1 = document.createElement("img");
img1.src =
  "https://images.unsplash.com/photo-1765871319901-0aaafe3f1a2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img1.classList.add("placeHolder");
document.querySelector(".div2").prepend(img1);


// 8. select a first item in a list and delete it from DOM
let ul3 = document.querySelector(".ul3");
ul3.querySelector("li").remove()

// 9. change bg color 
let bg1 = document.querySelector(".bg");
bg1.style.backgroundColor = "tomato"

// 10. highlight color to every even item in list
let ul4 = document.querySelectorAll(".ul4 li:nth-child(2n)");
ul4.forEach(v => {
    v.classList.add("highlighter")
})

