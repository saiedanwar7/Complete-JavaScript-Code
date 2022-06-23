//------------------------- scope of Function -------------
/*
- global variable sobar kach theke accessable
- ekta child function er kono data te tar parent function access ney
- global er kache function er bitorer kono access ney
- but function er kache global data er access ache 
- child tar parent er sob access pabe

*/

//------------- code - 1 ----------
// var a = 'abc'

// if (true) {
//     if (true) {
//         var b = 'I am B'
//     }
// }


// console.log(b)

//------------- code 2 ---------------
/*
- je kono child function tar parent function e access korte parbe
- parent tar child er data te access pabe na 

*/
var a = 'abc'

function x() {
    var a = 20
    function y() {
        var a = 10
         console.log(a) // print 10
    }
    console.log(a)  // print 20
    y()
}
console.log(a) // print abc
x()



//-------------- Another Code -----------------
 
function test(n) {
    
    
    function a() {
        return n%3 === 0
    }

    function b() {
        return n%5 === 0
    }

    if (a() && b()) {
        console.log(n + ' is divisible by both 3 and 5')
    } else {
        console.log('Not a valid Number')
    }
}



//------------ Another code of function scope ------
function even_odd(n) {
    
    function even() {
        return n%2 == 0
    }

    function odd() {
        return n%2 == 1
    }

    if (even()) {
        console.log(n + ' is even')
    }else if (odd()) {
        console.log(n +' is odd')
    } else {
        console.log('Not a valid Number')
    }
}

even_odd(13)