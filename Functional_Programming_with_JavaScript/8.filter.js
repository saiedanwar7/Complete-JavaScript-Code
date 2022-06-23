/*---------------- Filter --------------
- The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method. 

Syntax: 

array.filter(callback(element, index, arr), thisValue)

*/
/*
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// find even and odd
var filteredArr = arr.filter(function (value) {
    return value % 2 == 0
})

console.log(filteredArr)  //[ 2, 4, 6, 8, 10 ]

var filteredArr1 = arr.filter(function (value) {
    return value % 2 == 1
})

console.log(filteredArr1)  // [ 1, 3, 5, 7, 9 ]

*/

//----------------- Filter Implement ---------
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function myFilter(arr) {

//     var newArr = []
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(myFilter(arr))
// ei same function diye ek sathe ekadik kaj korte problem hobe tai amra callback function use korbo

//--------------- Use Callback Function ------------

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function myFilter(arr, cb) {
    
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        if (cb(arr[i], i, arr)) {
            
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilter(arr, function (value) {
    return value % 2 == 1
}))

console.log(myFilter(arr, function (value) {
    return value < 5
}))