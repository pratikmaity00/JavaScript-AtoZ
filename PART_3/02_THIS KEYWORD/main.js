// global scope
console.log(this)

// function scope
function abc(){
    console.log(this)
}
abc()

// method 
let obj = {
    age: 20,
    id: 202,
    oFun: function () {
        console.log(this)
    }
}
obj.oFun()

// event handeler
document.querySelector("h1").addEventListener('click',function () {
    console.log(this)
})

// class
class A {
    constructor() {
        this.a = 0;
    }
    setVal(x) {
        this.x = x
    }
    show() {
        console.log(this.x)
    }
}
let obj1 = new A()
obj1.setVal(4)
obj1.show()

const person1 = {
  name: "Pratik"
};

const person2 = {
  name: "Shree"
};

function greet(age) {
  console.log("Hello " + this.name + " Age: " + age);
}

greet.call(person1, 21);
greet.call(person2, 25);

greet.apply(person1,[30])

let greetmsg = greet.bind(person2,35)
greetmsg()