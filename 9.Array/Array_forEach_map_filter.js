// forEach, map, filter

// ===== forEach ==========
// new array declear korte hoy.. tar moddhe value rakhte hoy.
// ekta function call kore

var numbers = [2, 3, 4, 5];

var squareNumbers = [];

numbers.forEach(function (x) {
    squareNumbers.push(x * x);
})

console.log(squareNumbers);


//============= map ===========
// ekta function return korbe..
// new array declear korte hoy na nije theke array create kore ney..

var numbers1 = [2, 3, 4, 5];

var squareNumber1 = numbers1.map(function (x) {
    return x * x;
})

console.log(squareNumber1);


//---------------- filter -----------
// filter onnek ta map er moto kaj kore
// filter e condition use kore data print kora jai

var numbers2 = [2, 11, 16, 50, 3, 4, 5];

var newNumbers = numbers2.filter(function (x) {
    return x > 10;
})

console.log(newNumbers);