//---- Function Arguments And Parameters add Countdown in 1 -------

function add(a, b) {
    var result = a + b
    console.log(result)
}

add(10, 20)
add(7, 3)
add(500, 700)

//-------- another code ------

var arr1 = [6, 4, 5]
var arr2 = [3, 5, 9, 10] 
var arr3 = [2, 5, 7, 10, 20]


// var sum1 = 0

// for (var i = 0; i < arr1.length; i++){
//     sum1 += arr1[i]
// }
// console.log(sum1)



// //------ same code ------

// var sum2 = 0

// for (var i = 0; i < arr2.length; i++){
//     sum2 += arr2[i]
// }
// console.log(sum2)

// // --- same code ---

// var sum3 = 0

// for (var i = 0; i < arr3.length; i++){
//     sum3 += arr3[i]
// }
// console.log(sum3)

function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)

}

sumOfArray (arr1)
sumOfArray (arr2)
sumOfArray (arr3)



//-------- Another Code -------------------

var arr11 = [6, 4, 5]

function sumOfArray1(arr11) {
    var sum1 = 0;
    for (var i = 0; i < arr11.length; i++){
        sum1 = sum1 + arr11[i]
    }
    console.log('total sum', sum1)
}

sumOfArray1(arr11)

