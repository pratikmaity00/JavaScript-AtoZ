let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let random = Math.floor(Math.random() * 10);
        if(random > 5) res("resolved " + random)
        else res("rejected " + random)
    }, 1000);
});

async function abcd() {
    try {
        let val = await pr;
        console.log(val);
    } catch(err) {
        console.log(err);
    }
}

abcd()