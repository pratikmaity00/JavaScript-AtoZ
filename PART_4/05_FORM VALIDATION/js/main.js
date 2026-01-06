let mail = document.querySelector('#email');
let pass = document.querySelector('#password');

let form = document.querySelector('#loginForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    document.querySelector('#emailError').textContent = "";
    document.querySelector('#passError').textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let eAns = emailRegex.test(mail.value);
    let pAns = passwordRegex.test(pass.value);

    let isvalid = true;
    if(!eAns) {
        document.querySelector('#emailError').textContent = "Email is not Valid" ;
        document.querySelector('#emailError').style.display = 'initial';
        isvalid = false;
    }
    if(!pAns) {
        document.querySelector('#passError').textContent = "Password is incorrect";
        document.querySelector('#passError').style.display = 'initial';
        isvalid = false;
    }

    if(isvalid) {
        document.querySelector('.result-message').textContent = "Logged In";
        document.querySelector('.result-message').style.display = 'block';
    }
})