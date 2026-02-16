fetch("https://randomuser.me/api/")
.then((raw) => {
    return raw.json();
})
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err);   
})