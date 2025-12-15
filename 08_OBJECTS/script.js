let student = {
    fName: "Pratik",
    age: 21,
    isLoggedIn: true
};
console.log(student);
console.log(student.fName);
console.log(student['age']);

// nesting and deep access
const user = {
    fName: "Chandrima",
    address: {
        city: "kolakata",
        pin: 700135,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};
console.log(user.address.location.lng);

// Object Destructuring
let {lat,lng} = user.address.location;
console.log(lat);

// looping through object
let obj = {
    fullName: "Pratik Maity",
    age: 21,
    email: "abc@gmail.com"
};
for(let key in obj) {
    console.log(key ,obj[key]);
}
console.log(Object.keys(obj)); // ['fullname', 'age', 'email']
console.log(Object.entries(obj)); // array inside sub array
console.log(Object.values(obj)); // provide key values by array

// copy object
const newObj = {
    logo: "RCB",
    state: "Bengaluru",
    cup: 1
};
const copyObj = {...newObj};
console.log(copyObj);

// another approach 
let obj3 = Object.assign({}, newObj);
console.log(obj3);
let obj4 =  Object.assign({leader: "King kohli"}, newObj);
console.log(obj4);

// Deep Copy
const player = {
    stats: 1003,
    runs: 43002,
    domestic: {
        fisrtClass: 101,
        odis: 70,
        t20is: 35
    }
}
const deepcopy = JSON.parse(JSON.stringify(player));
console.log(deepcopy);
deepcopy.domestic.fisrtClass = 300;
console.log(deepcopy); // changes done
console.log(player); // exact 

// optional chaining
// console.log(player.international.t20is);
console.log(player?.international?.t20is); // undefined no error provide

// computer properties
let role = "Manager"
const obj5 = {
    email: "demo@edu.com",
    address: "none",
    [role]: "Alice" // role assigns manager
}
console.log(obj5);
