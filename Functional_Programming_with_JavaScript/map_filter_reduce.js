/*------------- map(), filter(), reduce() -------------

- map() -> The map()method creates a new array with the results of calling a provided function on every element in the calling array.
- ekta Array ke 1st theke last porjonto travers kora, traves kore oi array/ object ke modified kore new array/object return kore
- create new array

*/
//------------- normal ways -------
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var anotherArr = []
// for (var i = 0; i < arr.length; i++){
//     anotherArr.push(arr[i] * arr[i])
// }

// console.log(anotherArr)


//----------- use map function -----
//--------- code 1 -----------
/*
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function getSquare(item) {
    return item * item
}

var newArr = arr.map(getSquare)

console.log(newArr)
console.log(arr)
*/

//------------- code 2 -----------
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var newArr = arr.map(function (item) {
//     return item * item;
// })

// console.log(newArr)

//-------------- code 3 ----------
/*
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var newArr = arr.map(function (item, index, fullArr) {
    console.log('item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr)
})

*/

//------------- ES6 in Map ---------

/*
const newArr1 = arr.map(item => item * item)
console.log(newArr1)
*/


/* ----------------- Filter ----------------  */

//---------- normal way to use map -------

/*
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var newArr = arr.filter(function (item) {
    return item % 2 == 0

})
console.log(newArr)

*/
//----------------- ES - 6 -----------

/*
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newArr = arr.filter(item => item % 2 === 0)

console.log(newArr)

*/

//-------------- Reduce() -----------



//---------------- code 1 ---------------
// var arr = [1, 2, 3, 4]

// var total = arr.reduce(function (sum, item) {
//     return sum += item;
// }, 0)  // amra joto theke suru korte chaibo seta dibo

// console.log(total)

//------------- code 2 ---------------

var arr = [1, 2, 3, 4]
var total = arr.reduce(function (sum, item, index, fullArr) {
    console.log('Item: ' + item + ' and index: ' + index + ' .FullArray: ' + fullArr + ' and Sum: ' + sum)
    return sum += item
}, 0)

//------------ ES6 --------------

const t = arr.reduce((sum, item) => sum += item, 0)
console.log(t)