// 1. create an obj
const student = {
    sName: {
        fname: "Pratik",
        lName: "Maity"
    },
    age: 21,
    isEnrolled: true
}

// 2. object key a number or bollean
const checkObj = {
    true: "yes",
    42: "Pass"
};
console.log(checkObj);

// dot vs []
const obg2 = {
    "first-Name": "Pratik",
    "last name": "Maity"
}
// console.log(obj2.fisrt-Name); // not accesed give error
console.log(obg2["first-Name"]);
console.log(obg2["last name"]);

//  deconstucr "fisrt-name"
const user = {
    "first-name": "Pratik"
};
let {"first-name": firstName} = user;
console.log(firstName);

// use object.entries() to print lkey value pairs as 
// title: JavaScript
// duraction: 4weeks
const course = {
    title: "JavaScript",
    duraction: "4weeks"
}
Object.entries(course).forEach(val => {
    console.log(val[0] + ":" + val[1]);
})

// how to access empty object with out giving erroe
const eobj = {};
console.log(eobj?.name?.name);
