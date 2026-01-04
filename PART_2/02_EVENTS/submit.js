// form submit
let form = document.querySelector('#form');
let inps = document.querySelectorAll('input');
let main = document.querySelector(".main")

form.addEventListener('submit',function (dets){
    dets.preventDefault(); // stop reload when form sumbit

    let card = document.createElement('div');
    card.classList.add("formCard");

    let profile = document.createElement('div');
    profile.classList.add('dp');

    let img = document.createElement('img');
    img.setAttribute('src', inps[0].value);

    let h3 = document.createElement('h3');
    h3.textContent = inps[1].value;

    let h4 = document.createElement('h4');
    h4.textContent = inps[2].value;

    let p = document.createElement('p');
    p.textContent = inps[3].value;

    let remove = document.createElement('button');
    remove.textContent = "Remove";
    remove.addEventListener('click',()=>{
        alert('are you sure.');
        card.style.display = "none"
    })

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(remove);

    main.appendChild(card);

    inps.forEach(function(inp){
        if(inp.type !== 'submit') {
            inp.value = "";
        }
    });
});