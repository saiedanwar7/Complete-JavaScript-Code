/*----------- First Class Function ----------

- First Class Function er jonno kisu rules ache jeta javascript function mene chole 

*/




/*
1. A function can be stored in a variable
2. A function can be stored in an Array
3. A function can be stored in an Object
4. We can Create Function as Need

5. We can pass function as an Arguments
6. we can return Functions from Another Function


*/

//1. A function can be stored in a variable
//-- javascript e function ke ekta variable e store kora jai
 
function add(a, b) {
    return a + b
}

var sum = add

console.log(sum(5, 6))
console.log(typeof sum)


//2. A function can be stored in an Array

function add1(a, b) {
    return a + b
}
var arr = []
arr.push(add1)
console.log(arr)
console.log(arr[0](5, 3))

// 3. A function can be stored in an Object

function add2(a, b) {
    return a + b
}

var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(7, 9))


//--- 4. we can create function as Need -----

setTimeout(function () {
    console.log('I have created ...')
}, 5000)