class Students {
    constructor(id, uName) {
        this.id = id
        this.uName = uName
    }
}

class Teacher extends Students {
    constructor(id,uName) {
        super(id, uName)
        this.des = "teacher"
    }
}

let obj1 = new Teacher(101,"pratik")
console.log(obj1)