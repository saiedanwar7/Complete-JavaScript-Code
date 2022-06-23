/*
------ JavaScript Variables and Constants ----

 In this tutorial, you will learn about JavaScript variables and constants,
 and also how to initialize and use them with the help of examples.


*/

// JavaScript Declare Variables
// In JavaScript, We use either var or let and const keyword to declare variables.
// For Example:

var x;
let y;


/*----------- some concept ----------

1. var is a changeable
2. let is a changeable
3. const is not changeable


// here, x and y are variables.

/*
-------- JavaScript var Vs let -----------

--> Both var and let are used to declare variables.
    However, there are some differences between them.

1. var is the older version of javascript.
1. let is the new version of javascript(ES6 / ES2015)

2. var is function scoped
2. let is block scoped


 Note: It is recommended we use let instead of var. 

 */

 // JavaScript Initialize Variables
 
let x;
x = 5;

// here, 5 is assigned to variable x.


// You can also initialize variables during its declaration.
let x = 5;
let x = 6;

// In JavaScript, it's possible to declare variable in a single statement:

let x = 5, y = 6, z = 7;
console.log(x,y,z);


// Note: If you use a variable without initializing it, it will have an (undefined) value.

let num; // num is the name of the variable

console.log(num) // undefined

/*
Here x is the variable name and 
since it does not contain any value, it will be undefined.

*/






/* --------- Change the Value of Variables -----
--> It's possible to change the value stored in the variable.For Example:

*/
//---------- let ----------

let x = 5;  // 5 is assigned to variable x
console.log(x);

x = 3;       // value of variable x is changed
console.log(x)  // 3



//------------ var --------------

var num = 56;
console.log(num)

num = 70;
console.log(num)





// ---------- const ----------------
const number = 80;
console.log(number)

number = 90;
console.log(number)  // error because const is not change able - Uncaught TypeError: Assignment to constant variable.

/* 
Note : var and let is Changeable, const is not changeable.

*/




/*
---------- JavaScript Constants(const) Variable

The const keyword was also introduced in the ES6/ES2015 version to create Constants.
*/
const num = 5; // Once a constant is initialized, it's value cannot be changeable.

num = 20;    // Error! constant cannot be changed.  Uncaught TypeError: Assignment to constant variable.
console.log(x)



// Also, you cannot declare a constant without(value) initializing(=) it.
const x;
x = 23;
console.log(x) // Error! Missing initializer in const declaration.


/*
Note: If you are sure that the value of a variable won't change throughout
      the program, it's recommended to use (const).
*/




// ---- Rules for Naming JavaScript Variables ----------

/* 
1. Variable names must start with either a letter, an underscore _, or the dollar sign $.
   For example,
*/

//valid

let a = 'hello';
let _a = 'hello';
let $a = 'hello'


// 2. Variable names cannot start with numbers. For Examples.

//invalid

let 1a = 'hello';  // this show an error


// 3. JavaScript is Case-Sensitive. So y and Y are different variable.

let y = "hi";
let Y = 5;

console.log(y); // hi
console.log(Y); // 5

// 4. Keywords cannot be used as variable names. For example

// invalid

let new = 5; // Error! new is a keyword.