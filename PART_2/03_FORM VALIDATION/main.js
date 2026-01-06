let uname = document.querySelector('#name');
let form = document.querySelector('form');

form.addEventListener('submit',(dets)=>{
    dets.preventDefault();
    
    let error = document.querySelector('small');
    if(uname.value.length < 5) {
       error.textContent = 'Please provide at least 5 characters' ;
       error.style.display = 'block';
    }else {
        error.style.display = 'none';
    }
})

// regex
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9._]{2,19}$/;

function isValidUsername(username) {
  console.log(usernameRegex.test(username));
   
}
 
isValidUsername("jhon.de2");