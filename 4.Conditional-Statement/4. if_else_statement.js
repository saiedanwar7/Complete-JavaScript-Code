// ---------------- JavaScript if_else Statement ---------
/*
In JavaScript, there are three forms of the if...else statement.

1. if statement
2. if...else statement
3. if...else if...else statement


*/

/*
--------------- JavaScript if Statement -------------

The syntax of the if statement is:

if (condition) {
    // the body of if
}

The if statement evaluates the condition inside the parenthesis ().

1. If the condition is evaluated to true, the code inside the body of if is executed.
2. If the condition is evaluated to false, the code inside the body of if is skipped.

*/

/* Condition is true

         let number = 2;
         
         if(number > 0){
         // code     // if true go to .. code
         }

         // code after if
*/


/*
Condition is false

          let number = -2;
          
          if(number > 0){
              //code
          }
          // code after if   // if code after false come here
*/


// number compare by if

// if (3 < 5){
//     console.log('Yeah I will be excecuted!');
// }


// -------- string compare ------

// var myName = 'Saied Anwar';

// if (myName == 'Saied Anwar'){
//     console.log('You are allowed!');
// }


// var myName = 'Saied Anwar';

// if(myName === 'karim'){
//     console.log('You are Allowed!'); // this is false so print nothing!!

// }



// check if the number is positive

// const number = prompt("Enter a number: ");

// // check if number is greater than 0
// if(number > 0){
//     // the body of the if statement
//     console.log("The number is Positive");
// }

// console.log("The if statement is Easy");

/*
Note: Since console.log("The if statement is easy");
      is outside the body of the if statement, it is always executed.

*/

// ------------- 

// var myAge = 20;

// if(9 > 10){
//     console.log('Greater');
// }

// if(myAge >= 20){
//     console.log('You are Adult!');
// }

// if(myAge < 20){
//     console.log('You are not Adult!');
// }


// -------- Another Example -------------

// var myAge = 21;

// if(myAge > 20 && myAge < 60){
//     console.log('You are a Young Person');
// }


/*
JavaScript ----------- if...else statement ----------
An if statement can have an optional else clause. 
The syntax of the if...else statement is:

if (condition) {
    // block of code if condition is true
} else {
   // block of code if condition is false
}

*/

/*
The if..else statement evaluates the condition inside the parenthesis.

-> If the condition is evaluated to true,

1. the code inside the body of if is executed
2. the code inside the body of else is skipped from execution

-> If the condition is evaluated to false,

1. the code inside the body of else is executed
2. the code inside the body of if is skipped from execution

*/


// example-1 : if...else statement

// const number = prompt("Enter a number: ");

// if(number > 0){
//     console.log("The Number is Positive");
// }
// else{
//     console.log("The Number is either a negative number or 0")
// }
// console.log("The if...else statement is easy");


// Example-2: if...else statement

// var age = 21;

// if(age > 18){
//     console.log("Now You are Adult");
// }
// else{
//     console.log("No You are not aged enough to be a Adult");
// }




/*
----- JavaScript if...else if statement -------------
The if...else statement is used to execute a block of code among two alternatives. 
However, if you need to make a choice between more than two alternatives, if...else if...else can be used.


*/

/*
The syntax of the if...else if...else statement is:
if (condition1) {
    // code block 1
} else if (condition2){
    // code block 2
} else if(condition3){
    // code block 3
} else {
    // code block 4
}

*/


// Example 1: if...else if Statement

// check if the number if positive, negative or zero

// const number = prompt("Enter a number: ");

// if (number > 0){
//     console.log("The number is positive");
// }

// else if(number == 0){
//     console.log("The number is 0");
// }
// // if number is neither greater than 0, nor zero
// else{
//     console.log("The number is negative");
// }

// console.log("The if..else if...else statement is easy");

// Example 2: if..else if Statement

// var whatDate = 'Friday';

// if( whatDate === 'Friday' ){
//     console.log("It is closed today");
// }else if ( whatDate === 'Thursday'){
//     console.log('It is partially closed');
// }else if( whatDate === 'Saturday' ){
//     console.log('Some Offices are closed');
// }else{
//     console.log('It is Normal Working Day!!');
// }


/*
---------- Nested if...else Statement ----------

-> You can also use an if...else statement inside of an if...else statement.
   This is known as nested if...else statement.

*/

// Example 1: Nested if...else Statement

// check if the number is positive, negative or zero

// const number = prompt("Enter a number: ");

// if(number >= 0){
//     if (number == 0){
//         console.log("You entered number 0");
//     } else{
//         console.log("You entered a positive number");
//     }
// } else{
//     console.log("You entered a negative number");
// }


// Example 2: Nested if...else Statement

//      // var num = 10;
// var num = prompt("Enter a number: ");

// if(num > 1){
//     if(num > 10){
//         console.log("Greater than 10");
//     } else {
//         console.log('Somewhere between 2 - 10');
//     }
// }




// Example 3: Nested if...else Statement

var age = 32;

if(age > 18 ){
    if(age > 30){
        console.log("You are a Complete man!")
    } else if (age > 60){
        console.log("You are old man!")
    } else {
        console.log("you are Young man!")
    }
}else {
    console.log('You are a Child');
}