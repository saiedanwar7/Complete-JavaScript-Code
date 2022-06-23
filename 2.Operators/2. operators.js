/* 
--------------- JavaScript Operators ----------------

-> What is an Operator?

- In JavaScript, an operator is special symbol used to perform operations
  an operands (values and variables). For Example:

 
2 + 3; // 5 
 Here + is an operator that performs addition, and 2 and 3 are operands

*/



/*
------------- JavaScript Operator Types -----------
1. Assignment Operators
2. Arithmetic Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. String Operators
7. Other Operators

*/



/*
----------- JavaScript Assignment Operators --------------

*/

// const x = 5;

// Here, the = operator is used to assign value 5 to variable x.

// a = 7;  //  7               -> Assignment operator
// a += 5; //  a = a + 5       -> Addition assignment
// a -= 4; //  a = a - 4       -> Subtraction Assignment
// a *= 6; //  a = a * 6       -> Multiplication Assignment
// a /= 8; //  a = a / 8       -> Division Assignment
// a %= 2; //  a = a % 2       -> Remainder Assignment
// a **= 2; // a = a**2        -> Exponentiation Assignment




/* 
------------ JavaScript Arithmetic Operators --------------

1. Addition         -->  x + y
2. subtraction      -->  x - y
3. Multiplication   -->  x * y
4. Division         -->  x / y
5. Remainder        -->  x % y
6. Increment(increments by 1)  -->  ++x or x++
7. Decrement(decrements by 1)  -->  --x or x--
8. Exponentiation(Power)       -->  x ** y

*/

// let x = 5;
// let y = 3;

// ----- Addition ------
// console.log('x + y = ', x + y);   // 8

// ------- Subtraction -----------
// console.log('x - y = ', x - y);  // 2

// ------ Multiplication ------------
// console.log('x * y = ', x * y);  // 15

// --------- Division ------------
// console.log('x / y = ', x / y);  // 1.6667

// ----------- Remainder ---------
// console.log('x % y = ', x % y);  // 2

// --------- Increment -------------
// console.log('++x = ', ++x);  // x is now 6
// console.log('x++ = ', x++);  // prints 6 and then increased to 7
// console.log('x = ', x);   // 7

// ------- decrement ----------
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // prints 6 and then decreased to 5
// console.log('x = ', x);     // 5

// ------------ Exponentiation --------
// console.log('x ** y =', x ** y);



/* ----------- JavaScript Comparison Operators -------------

-> Comparison operators compare two values and return a boolean value,
   either true or false. For Example:

*/

// const a = 3, b = 2;
// console.log(a > b); // true

/*
1. Equal to:         x == y
2. Not equal to:     x != y
3. Strict equal to:  true if thier operands are equal and  ->  (x === y)
                      of the same type.


4. Strict not equal to : true if the operands are equeal and         (x !== y)
                         but of different type or not equal at all 


5. Greater than :               a > y

6. Greater than or equal to     x >= y

7. Less than                    x < y

8. Less than or equal to        x <= y


 */


// --------- Equal operator -------------
// console.log(2 == 2);     // true
// console.log(2 == '2');  // true

// ---------- not equal operator --------
// console.log(2 != 2);   // true
// console.log('hello'  !='Hello');  // true

// ---------- strict equal operator ------
// console.log(2 === 2);  // true
// console.log(2 === '2'); // false

// console.log(2 !== '2');  // true
// console.log(2 !== 2);   // false

// console.log(2 !== '3');   // true








/* 
--------------- JavaScript Logical Operators -------------

-> Logical operators perform logical operations and return a boolean value,
   either true or false. For Example:
   
*/

const x = 5, y = 3;
(x < 6) && (y < 5); // true

/* 
1. Logical AND: if both are true, else returns false    ---->  x && y

2. Logical OR: if one of the operands is true           ---->  x || y

3. Logical NOT: true if the operands is false           ----> !x 

*/

// ---------- logical AND ----------

console.log(true && true);  // true
console.log(true && false);  // false


//------------- Logical OR ---------
console.log(true || false);   // true


//-------------- logical NOT -----------
console.log(!true);   //false
console.log(!false);  // true