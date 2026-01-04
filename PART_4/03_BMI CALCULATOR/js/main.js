
const main = document.querySelector('.main');
const form = document.querySelector('form');
let inps = document.querySelectorAll('input');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    // Remove old result if exists
    const oldResult = document.querySelector('.res');
    const oldStat = document.querySelector('.stat');
    if (oldResult) oldResult.remove();
    if (oldStat) oldStat.remove();

    const result = document.createElement('h2');
    result.classList.add('res')
    const stat = document.createElement('p');
    stat.classList.add('stat');
    main.appendChild(result);
    main.appendChild(stat);

    if(weight === "" || weight <= 0 || isNaN(weight)) {
        result.textContent = "Please Provide a valid Weight";
    }else if(height === "" || height <= 0 || isNaN(height)) {
        result.textContent = "Please Provide a valid Height";
    }else {
        const bmiResult = (weight/(height/100)**2).toFixed(2);
        result.textContent = `Result is ${bmiResult}`;
        // Optional: add BMI category
        if (bmiResult < 18.5) {
            stat.textContent = "Category: Underweight";
        } else if (bmiResult < 25) {
            stat.textContent = "Category: Normal weight";
        } else if (bmiResult < 30) {
            stat.textContent = "Category: Overweight";
        } else {
            stat.textContent = "Category: Obese";
        }

    }

    inps.forEach(function(inp){
        if(inp.type !== 'submit') {
            inp.value = "";
        }
    });
})



