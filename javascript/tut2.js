console.log('tut3');

//variables in js
//var, let, const

//---var ----

// var is a global scope
// var is a changeable

var name = 'saied';
var channel;
var marks = 34
//channel = 'codewithharry'
console.log(name, channel, marks)

// Rules for creating Javascript Variable

/*
1. Cannot start with numbers
2. Can start with letter, numbers, _, or $
3. Are case sensitive

- for help cannot use _ or $ in variable,

*/

//var ^city = 'Dhaka' // show error
//var _city = 'Dhaka'  // this is ok but not usefull

// var $city = 'dhaka'
// console.log($city)

var city = 'Dhaka'
console.log(city);


// -------- const ----------

// const- variable not changeable

const ownerName = "Md Kalam";

//ownerName = 'Saied';  // show error - ncaught TypeError: Assignment to constant variable.

// const variable value cannot changeable
console.log(ownerName);

const fruit = 'Orange';
console.log(fruit);

//--------------- const on array -------------
// if const use on array then you can add value 
// but not redeclear array

const arr1 = [1, 12, 23, 44, 5];
arr1.push = (45);  // you can push value again

//arr1 = [23, 45, 34, 24];  // you cannot define again array

console.log(arr1)





//------------- let ----------------

// let is block level scope
// let work on { } block 
// let define local variable

{
    let city = 'banani';
    city = 'Feni';
    console.log(city)
}

console.log(city);


/* Most common programming case types:
  

1. camelCase 
2. kebab-case 
3. snake_case
4. PascalCase

*/


