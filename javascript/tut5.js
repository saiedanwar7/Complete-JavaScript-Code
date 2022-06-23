// Type conversion and type coercion

console.log('Welcome to tut5');

let myVar;
myVar = String(34);  // convert int to string
//console.log(myVar, (typeof myVar));

//let booleanVar = true;
let booleanVar = String(true);
//console.log(booleanVar, (typeof booleanVar));



// let date = new Date(); // new this is object type
// console.log(date, (typeof date));  

let date = String(new Date());  // now this is string types
//console.log(date, (typeof date));  

// let arr = [1, 3, 4, 5, 6, 7];  // object
// console.log(arr, (typeof arr));

let arr = String([1, 3, 4, 5, 6, 7]);  // string include coma
//console.log(arr.length, (typeof arr));


let i = 8;
//console.log(i.toString())

//let stri = "354"  // String
//console.log(stri, (typeof stri));

// let stri = Number("456");  // convert number
// console.log(stri, (typeof stri));

// let stri = Number("456");
// stri = Number("343d4");  // NaN
// stri = Number(true);    // true-1, fales-0
// console.log(stri, (typeof stri));


// let number = parseInt('34');   // convert int number
// console.log(number, (typeof number));

// let number = parseFloat('34.032');  // convert float number
// console.log(number, (typeof number));


let number = parseFloat('16.65654');
console.log(number.toFixed(3), (typeof number)); // toFixed print 3 number after (.)



// ---------------- Type Coercion ----------------

//----------- example 1 ------------
let mystr = "698";
let mynum = 34;

console.log(mystr + mynum);


// ------- example 2 ---------

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);