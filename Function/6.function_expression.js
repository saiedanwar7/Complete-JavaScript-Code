// ekta variable er moddhe function ke jevabe rakha jai setake bola hoy function expression.
//------------- code -1 ---------
// add function ta use na korle o pari
var division = function add(a, b) {
    return a - b
}

division(50, 40)

//---------- code 2 ------------
// jokhon kono function er naam dibo na tokhon seta ke bolbo anonymos function

// var addition = function(x, y) {
//     return x + y
// }

// addition(10, 40)

// setTimeout(function () {
//     console.log('I will call after 5 second')
// }, 5000)


// var another = addition
// console.log(another(7, 8))

var addition = function (x, y) {
    return x + y
}

var another = addition
console.log(another(7, 10))


// anonymous function 
setTimeout(function () {
    
}, 4000)