function abcd() {
    let c = 0
    return function () {
        c++
        console.log(c)
    }
}

let resFun = abcd()
resFun()
resFun()
resFun()
resFun()

let resFun2 = abcd()
resFun2()
resFun2()
resFun2()
resFun2()
resFun2()