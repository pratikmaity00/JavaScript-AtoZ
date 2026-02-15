class Pencil {
    constructor(name, price, color) {
        this.name = name
        this.price = price
        this.color = color
    }

    write(txt) {
        let h1 = document.createElement('h1')
        h1.textContent = txt
        h1.style.color = this.color
        document.body.append(h1)
    }

    erase() {
        document.querySelectorAll('h1').forEach((elem) => {
            if(elem.style.color === this.color)
                elem.remove();
        });
    }
}

let p1 = new Pencil("apsara", 5, "black")
let p2 = new Pencil("doms", 8, "grey")

p1.write("hey")
p2.write("hey")
p1.write("hey")
p2.write("hey")
p1.write("hey")
p2.write("hey")

// p2.erase()