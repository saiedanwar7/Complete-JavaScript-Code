/* JavaScript Program to Swap Two Variables */

// var first = 5;
// var second = 7;
// console.log(first, second);




/*--------------------------
Here,

1. We created a temp variable to store the value of a temporarily.
2. We assigned the value of b to a.
3. The value of temp is assigned to b

As a result, the value of the variables are swapped.

Note: You can also swap strings or other data types using this method.
------------------------------*/
// var first = 5;
// var second = 7;
// var temp = first;

// first = second;
// second = temp;
// console.log(first, second);




/*------------ Another way Swap variable by destructuring ----------------
Here, a new es6 feature, called destructuring assignment [a, b] = [b, a], is used to swap the value of two variables.
 
If [a, b] = [1, 2, 3], the value of a will be 1 and value of b will be 2.

First a temporary array [b, a] is created. Here the value of [b, a] will be [2, 4].
The destructuring of the array is done, i.e [a, b] = [2, 4].
As a result, the value of the variables are swapped.

-------------------------------------------------------*/
//--destructuring ---
var first = 5;
var second = 7;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);