// Loader Js
window.addEventListener("load", () => {
  const loader = document.querySelector(".loading");
  const app = document.querySelector(".app");

  setTimeout(() => {
    loader.style.display = "none";
    app.style.display = "block";
  }, 1500);
});

// Default Color Input
const colors = document.querySelectorAll('.box');
const body = document.querySelector("body");

colors.forEach((box)=>{
    console.log(box);
    box.addEventListener('click',(e)=>{
        console.log(e.target.id);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }
    });
});