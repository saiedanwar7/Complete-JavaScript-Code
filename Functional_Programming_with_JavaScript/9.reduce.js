/*---------------- Reduce Method --------------
- The arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

Syntax:

- array.reduce( function(total, currentValue, currentIndex, arr), 
initialValue )

*/
//------------------ basic Reduce function -------------
/*
var arr = [1, 2, 45, 3, 4, 5]

var sum = arr.reduce(function (prev, curr) {
    return prev + curr
}) 

var max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr)
})

var min = arr.reduce(function (prev, curr) {
    return Math.min(prev, curr)
})

console.log(sum)
console.log(max)
console.log(min)

*/

//---------------- Reduce Implement with callback function ----------------
/*
acc - accmulation / initializar 
init - initializer- orginal value eita chilo

*/
var arr = [6, 1, 2, 45, 3, 4, 5]

function myReduce(arr, cb, init) {
    
    for (var i = 0; i < arr.length; i++){
        init = cb(init, arr[i])
    }
    return init
}

var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 0)

var max = myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr)
}, arr[1])

var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr)
}, arr[1])

console.log(sum, max, min)