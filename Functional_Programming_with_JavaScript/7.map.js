/*-------------- Map ---------------- 
- ekta Array ke 1st theke last porjonto travers kora, traves kore oi array/ object ke modified kore new array/object return kore
- create new array
-forEach main array ke modified kore or Map main array ke modified kore new array create kore orginal array thik thake..
-

*/

// var arr = [1, 2, 3]

// var sqrArr = arr.map(function (value) {
//    // return Math.random() * 100
//     return value * value 
// })

// console.log(arr)
// console.log(sqrArr)

/*------------ note ---------------
- map function er argument hishabe value, index, array thakbe, amader sudu value lagbe
- jeta return korbe seta new ekta array hishabe return korbe, orginal array ta thik thakbe

*/

//-------------- code-1 -----------
// var arr = [1, 2, 3]

// function myMap(arr) {

//     var newArr = []
//     for (var i = 0; i < arr.length; i++){
//         var temp = arr[i] * arr[i]  // arr[i] = value
//         newArr.push(temp)
//     }
//     return newArr   // new create kora array ta return korbo
//  }


// console.log(myMap(arr))
 
/* uporer function diye jodi onno kaj korte jai tahole bar bar function ta change korte hobe,
ei jonno amra callback function use kore ei problem ta thik korte parbo, tokhon sei callback function use kore(+ - *, /) ja iccha tai korte parbo
*/

//----------- map with callback function ---------
/**
 callback function(value, index, array) thake argument hishabe
 */


var arr = [1, 2, 3]

function myMap(arr, cb) {

    var newArr = []
    
    for (var i = 0; i < arr.length; i++){
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr   // new create kora array ta return korbo
 }

// console.log(myMap(arr))

var qb = myMap(arr, function (value) {
    return value * value * value  // new array return korbe
})

var mten = myMap(arr, function (value) {
    return value * 10
})


console.log(arr)
console.log(qb)
console.log(mten) 