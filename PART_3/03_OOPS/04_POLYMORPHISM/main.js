class A {
    greet() {
        console.log("Hi Guys !")
    }
}
class B extends A {
    greet() {
        console.log("Hello Guys !")
    }
}

let c = new A();
c.greet() // - Hi Guys !

let d = new B();
d.greet() // - Hello Guys !