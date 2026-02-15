// Constructor Function - contructor function name should always start at capital letter
function Factory(name, price, color,) {
    this.name = name
    this.price = price
    this.color = color
}
Factory.prototype.brand = "TATA"

let car1 = new Factory("Nano", 80000, "yellow")
let car2 = new Factory("Neo", 450000, "red")

console.log(car1);
console.log(car2);
