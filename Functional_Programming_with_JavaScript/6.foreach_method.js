/*------------- ForEach Method -------------- 
- ekta array function er 1st theke sesh porjonto travas kora

- What makes the forEach( ) method different?

- The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop".

- The forEach method passes a callback function for each element of an array together with the following parameters:

- Current Value (required) - The value of the current array element
- Index (optional) - The current element's index number
- Array (optional) - The array object to which the current element belongs

*/

//-------------- code 1 -----------
// var arr = [1, 2, 3, 4, 5]

// arr.forEach(function (value, index, arr) {
//     console.log(value, index, arr)
// })
//--------------- code 2 --------

// var arr = [1, 2, 3, 4, 5]

// var sum = 0
// arr.forEach(function (value, index, arr) {
//     sum += value
// })

// console.log(sum)

//----------- code 3 ------------
var arr = [1, 2, 3, 4, 5]

function forEach(arr, cb) {  // eita hocche array er implemention
    for (var i = 0; i < arr.length; i++){
        cb(arr[i], i, arr) // ja ja dekhte chai seta cb te provide korbo
    }
}

//nicher foreach ta amader nijer create kora

var sum = 0

forEach(arr, function (value, index, arr) {
    console.log(value, index, arr)
    sum += value
})

console.log(sum)

// ekhon amader create kora forEach function diye ja iccha tai korte parbo

forEach(arr, function (value, index, arr) {
    arr[index] = value + 5
})

console.log(arr)

//---------------- Another Code ---------

// normally array te access kora ways 1

// var arr2 = [2, 4, 6, 8, 10]

// arr2.forEach(function (value, index) {
//     console.log(value, index, arr2)
// })


//----------- code 2 -------
// array call koarar ways-2
// var arr2 = [2, 4, 6, 8, 10]

// function forEach(arr2) {
//     for (var i = 0; i < arr.length; i++){
//         console.log(arr2[i])
//     }
// }

// forEach(arr2)



//----------- use callback function -------
var arr3 = [1, 3, 5, 7, 9]

function forEach(arr3, cb2) {
    for (var i = 0; i < arr3.length; i++){
        cb2(arr3[i], i, arr3)
    }
}

forEach(arr3, function (value, index, arr3) {
    arr3[index] = value + 5
})

console.log(arr3)

var sum = 0

forEach(arr3, function (value, index, arr3) {
    sum += value
    
})

console.log(sum)