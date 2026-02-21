const reset = document.getElementById('reset');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const display = document.getElementById('display');

const span = document.createElement('span');
display.appendChild(span)

let count = 0;

minus.addEventListener('click',function () {
    if (count === 0) return;
    count--;
    console.log(count);
    span.textContent = count;
});

plus.addEventListener('click',function () {
    count++;
    console.log(count);
    span.textContent = count;
});

reset.addEventListener('click',function () {
    count = 0;
    span.textContent = '';
})