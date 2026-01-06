let progressFill = document.querySelector('#progressFill');
let progressText = document.querySelector('#progressText');

let count = 0;
let sec = 5;

let interval = setInterval(()=>{
    if(count<=99){
        count++;
        progressFill.style.width = `${count}%`;
        progressText.textContent = `${count}%`;
    }else {
        clearInterval(interval);
        document.querySelector('h2').textContent = 'Downloaded'
    }
},(sec * 1000) / 100);