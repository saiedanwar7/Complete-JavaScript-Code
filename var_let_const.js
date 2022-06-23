// variable Example
// var, let, const Difference and Scope
//------- var -------------

//---------- Scope of var ..........
/* 
1. Scope essentially means where these variables are available for use. 
   var declarations are globally scoped or function/locally scoped.

2. The scope is global when a var variable is declared outside a function. 
   This means that any variable that is declared with var outside a function block 
   is available for use in the whole window.

3. var is function scoped when it is declared within a function. 
   This means that it is available and can be accessed only within that function.   
*/


// ------Global Scope of (var) keyword

/*
var carName = "Volvo";

   // code here can use carName

function myFunction() {
    // code here can also use carName
}

*/

// ------ Example - global scope of var keyword ------------

// var carName = "BMW";

// myFunction();

// function myFunction(){
//     console.log('I can display ' + carName); // use var keyword inside the function
// }

// console.log(carName); // also var print outside the function


// --------- Function Scope/locally fo var keyword ---------

/*

Variables declared Locally (inside a function) have Function Scope.
Local variables can only be accessed from inside the function where they are declared.

*/


/*

// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName


*/
//------- example 1 - of var keyword function scope -------
// myFunction();

// function myFunction(){
//     var carName = "BMW";
//     document.write('I can display ' + carName);
// }
// document.write(carName);


//------------ another example -----------

// var tester = "hey hi";
    
// function newFunction() {
//     var hello = "hello";
// }
// console.log(hello); // error: hello is not defined

// We'll get an error which is as a result of hello not being available outside the function.



/* 
-> var variables can be re-declared and updated

*/
//------- 1 ----------
// var greeter = "hey hi";
// var greeter = "say Hello instead";


// //---- 2 -----
// var greeter = "hey hi";
// greeter = "say Hello instead";


/*
----------- Hoisting of var -----------

 Hoisting is a JavaScript mechanism where variables 
 and 
 function declarations are moved to the top of their scope before code execution. 
 This means that if we do this:

*/

// console.log(greeting);
// var greeting = 'say Hi';


// it is interpreted as this:

var greeter;
console.log(greeter);
greeter = "say hello";

/* So var variables are hoisted to the top of their scope and
   initialized with a value of undefined.
*/






// ----------- Problem with var --------------
// There's a weakness that comes with  var. I'll use the example below to explain:

// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//     var greeter = "say Hello instead"; 
// }

// console.log(greeter) // "say Hello instead"

/*-----------------------------------------------------
So, since times > 3 returns true, greeter is redefined  to "say Hello instead". 
While this is not a problem if you knowingly want greeter to be redefined,
it becomes a problem when you do not realize that a variable greeter has already been defined before.

If you have used greeter in other parts of your code, you might be surprised at the output you might get.
 This will likely cause a lot of bugs in your code. This is why let and const are necessary


-----------------------------------------------------*/




// ------------ variable (let) ---------------------

/*

let is block scoped
A block is a chunk of code bounded by {}. A block lives in curly braces. 
Anything within curly braces is a block.

So a variable declared in a block with let  is only available for use within that block.
 Let me explain this with an example:

*/


// let greeting = 'say Hi';
// let times = 4;

// if(times > 3){
//     let hello = "day Hello instead";
//     console.log(hello); // "say Hello instead"
// }
// console.log(hello) // hello is not defined

/*
We see that using (hello) outside its block (the curly braces where it was defined)
returns an error. This is because (let) variable are block scoped.

*/





// (let) can be updated but not re-declared.
/* Just like var,  a variable declared with let can be updated within its scope. 
   Unlike var, a let variable cannot be re-declared within its scope.
   So while this will work:

*/

// let greeting = "say Hi";
// greeting = 'say Hello instead';


// //this will return an error:

// let greeting = 'say Hi';
// let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared







/*
However, if the same variable is defined in different scopes, 
there will be no error:

*/

// let greeting = 'say Hi';
// if (true){
//     let greeting = 'say Hello instead';
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

/*
1. Why is there no error? 
   This is because both instances are treated as different variables since they have different scopes.

2.This fact makes let a better choice than var. 
  When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.


*/







// ---------------------- Const  keyword ----------------------
/* 

Variable declared with the (const) maintain constant values.
const declarations share some similarities with (let) declarations.

*/

// --------- const cannot be updated or re-declared ------------

/*
This means that the value of a variable declared with (const) remains the same
within its scope. It cannot be updated or re-declared. So if we declare a variable
a variable with (const), we can neither do this:
*/

// const greeting = "Say Hi";
// greeting = "say Hello instead"; // error: Assignment to constant variable.

// nor this:

// const greeting = "say Hi";
// const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

// Every const declaration, therefore, must be initialized at the time of declaration.

/*
This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, 
the properties of this objects can be updated. Therefore, if we declare a const object as this:

*/

// const greeting = {
//     message: "say Hi",
//     times: 4
// }

// while we cannot do this:
// greeting = {
//     words: "Hello",
//     number: "five"
// } // error:  Assignment to constant variable.

// we can do this:

// greeting.message = "say Hello instead";

// This will update the value of greeting.message without returning errors.


/*
Hoisting of const
Just like let, const declarations are hoisted to the top but are not initialized.

So just in case you missed the differences, here they are:

1. var declarations are globally scoped or function scoped while let and const are block scoped.

2. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; 
   const variables can neither be updated nor re-declared.

3. They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.

4. While var and let can be declared without being initialized, const must be initialized during declaration.


*/