/*------- Ternary Operator -------- */

/*
-> Ternary operator?
A ternary operator evaluates a condition and executes a block of code based on the condition.

Its syntax is:

condition ? expression1 : expression2
The ternary operator evaluates the test condition.

If the condition is true, expression1 is executed.
If the condition is false, expression2 is executed.

The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.
*/

//--------- use if_else ---------

var n = 10
var str = ''

if (n % 2 == 0) {
    str = 'EVEN'
} else {
    str = 'ODD'
}

console.log(str)

//------- Ternary Operator --------
/*
Its syntax is:

condition ? expression1 : expression2

condition ? true side : false side
*/


// var result = n % 2 == 0 ? 'EVEN' : 'ODD'
// console.log(result)


// Program to check pass or fail

let marks = 35

let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`)

// check the age to determine the eligibility to vote


let age = 15
let ability;

if (age >= 18) {
    ability = "You are eligible to vote."
} else {
    ability = 'You are not eligible to vote yet.'
}

console.log(ability);

//----------- ternary operator --------
let age1 = 15
let ability1 = (age >= 18) ? 'You are eligible to vote' : 'you are not eiligible to vote'

console.log(ability1)