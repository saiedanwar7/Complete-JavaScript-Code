/*-------------- function return ---------- */

function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + '!'
    }

    return greetings
}

/*
variable gula ek ekta function hoye geche 
*/
var gm = greet('Good Morning')
var gn = greet('Good Night')
var hello = greet('Hello')
// console.log(typeof gm)

// var msg = gm('HM Nayem')
console.log(gn('Twinkle Cats'))
console.log(gm('HM Nayem'))
console.log(hello('Saied Anwar'))

/* 
- ekta function theke arekta function return korar maddhome power ber kora 

*/

function base(b) {
    return function (n) {
        var result = 1
        for (var i = 0; i < b; i++){
            result *= n
        }

        return result
    }
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(3))