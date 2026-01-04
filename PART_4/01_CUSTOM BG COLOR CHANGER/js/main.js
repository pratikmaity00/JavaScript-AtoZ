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
const body = document.querySelector("body");


// custom color input
const inpCol = document.querySelector("#customColor");
const colBox = document.querySelector(".colorPicker");

colBox.addEventListener("click", () => {
  inpCol.click();
});
inpCol.addEventListener("change", () => {
  const color = inpCol.value;
  console.log(color); // print in console
  if (color) {
    colBox.textContent = color;
    body.style.backgroundColor = color;
  } else {
    alert(`Sorry color can't be genarated`)
    body.style.backgroundColor = 'white';
  }
  
});

// Reset Button
const rbtn = document.querySelector("button");
rbtn.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  colBox.textContent = 'Make Your Own Color';
});
