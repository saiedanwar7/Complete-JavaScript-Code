/*--------------- Find Method ------------- 
- find - return value
- findIndex - return index


*/

//------------------ find ----------------

// var arr = [7, 4, 8, 6, 9, 2, 1, 60, 30]

// // declear callback function

// var result = arr.find(function (value) {
//     return value == 9
// })

// console.log(result)

//------------- findIndex -------------
// var arr = [7, 4, 8, 6, 9, 2, 1, 60, 30]

// var result = arr.findIndex(function (value) {
//     return value == 9
// })

// console.log(result)

//------------- Implement by callback function -------
var arr = [7, 4, 8, 6, 9, 2, 1, 60, 30]

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++){
        if (cb(arr[i])) {
            // return arr[i]  // arr[i] ta value return korbe
             return i  // sudu i ta index return korbe
        }
    }
}

var result = myFind(arr, function (value) {
    return value == 9
})

console.log(result)