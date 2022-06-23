/*----------------- Callback ---------- 
- ekta function ke arekta function ke argument akare pass kora jai ei system tai shondor vabe callback er moddhome implement kora jai
- implement korar por chaile user er jonno rekhe dite parbo/hide korte parbo/ na hoy user tar nijer moto kore kaj korar jonno rekhe dite parbo

*/

//---------------------- code 1 ------------------
/*


*/
// function sample(a, b) {
//     var c = a + b  //13
//     var d = a - b  // -3
//     var result = sum(c, d)  // sum function ke ekhane call korlam
//     return result
// }

// function sum(a, b) {
//     return a + b
// }

// console.log(sample(5, 8))

/*--------------------- code 2 ------------------- 
- same function use kore (+, -, *, /)
- ekta function ke amra chaile arguemnt akare pass korte pari - higher order function

*/

function sample(a, b, cb) {
    var c = a + b  //13
    var d = a - b  // -3
    var result = cb(c, d)  // cb function ke ekhane call korlam
    return result
}

function sum(a, b) {
    return a + b
}



var result = sample(5, 8, sum)  // sum function ke cb er argument akare pass koreci
console.log(result)

//--- callback function use kore division ----
var result2 = sample(5, 8, function (c, d) {
    return c - d
})

console.log(result2)

var result3 = sample(5, 8, function (c, d) {
    return c * d
})

console.log(result3)


//------------ callback funciton ------
function sample1(x, y, cb) {
    var c = x + y //13
    var d = x - y // 3
    var result = cb(c, d)
    return result

}

var result1 = sample1(8, 5, function (c, d) {
    return c - d
})
console.log(result1)
