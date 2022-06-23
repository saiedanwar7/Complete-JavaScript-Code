/*
----------------- Higher Order Function ---------

5. We can pass function as an Arguments
6. we can return Functions from Another Function

*/

// ekta function ke argument hishabe arekta function e provide korte pari
/*
- amra manipulate function er maddhome multiply function ke return korbo
- add(a, b) er value ke func te niye jabo

*/

//--------------- code-1 --------------
// function add(a, b) {
//     return a + b //7
// }

// function manipulate(a, b, func) {
//     var c = a + b  //7
//     var d = a - b //-1
    
//
    //add function er ans func e jabe 
    
//     function multiply() {
//         var m = func(a, b)
//         return c*d*m
//     }

//     return multiply
// }

// var multiply_result = manipulate(3, 4, add)
// console.log(multiply_result())

//----------- code 2 ------------
function add(a, b) {
    return a + b //7
}

function manipulate(a, b, func) {
    var c = a + b  //7
    var d = a - b //-1

    return function () {
        var m = func(a, b)
        return c*d*m
    }
}

var multiply_result = manipulate(3, 4, add)
console.log(multiply_result())

//--------------- code ------------
function mul(a, b) {
    return a * b
}

function manipulate1(a, b, func1) {
    var c = a + b
    var d = a - b

    return function () {
        var m = func1(a, b)
        return c*d*m
    }

}

var total_result = manipulate1(7, 5, mul)
console.log(total_result())


//-------------- repet code ---------------
function add3(a, b) {
    return a + b
}

function manipulate(a, b, func_add) {
    var c = a + b
    var d = a - b

    function multiply_number() {
        var x = func_add(a, b)
        return c*d*x
    }

    return multiply_number
}

const multiply_all_number = manipulate(8, 6, add3)
console.log(multiply_all_number())