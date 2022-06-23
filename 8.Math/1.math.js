/*----------- math --------------
The JavaScript math object provides several constants and methods to perform mathematical operation. Unlike date object, it doesn't have constructors.
//-------- Methods -------------
// built-in math functions

1. Math.abs()
2. Math.floor()
3. Math.ceil()
4. Math.round()
 Math.random()
5. Math.max()
6. Math.min()
   Math.pow()
   Math.sqrt()
--------------------------------*/

/* The JavaScript math abs() method returns an absolute value of a given number. The abs() is a static method of Math.

1. math.abs()

*/
// 1. math.abs()

// const myNumber1 = -5;
// const output = Math.abs(myNumber);
// console.log(output);  // 5

/* The JavaScript math ceil() method increases the given number up to the closest integer value and returns it. If the given number is already an integer, the ceil() method returns it directly.

2. Math.ceil() -- kono ekta number upore nobe 

ceil hocche upore nibe..6.35 dile - 7 nibe 5.64 - dile -> 6 nibe eivabe kaj korbe

*/

// const myNumber = 6.0398;
// const output = Math.ceil(myNumber);
// console.log(output); // 7





/* ---------------- Math.floor() --------------------
The JavaScript math floor() method decreases the given number up to the closest integer value and returns it. If the given number is already an integer, the floor() method returns it directly.

math.floor() - eita ceil er biporit nicher dike nibe number ke
-------------------------------------------------*/
// const myNumber = 6.0398;
// const output = Math.floor(myNumber);
// console.log(output);  // 6






/*----------------- Math.round() ------------------
The JavaScript math round() method rounds up the given number up to the closest integer value and returns it. If the given number is already an integer, the round() method returns it directly.

math.round() --> example: 2.50 - er nicher number ke 2 dekhabe. r 2.50 theke number ke 3 dekhabe. kacher value ke print korbe

--------------------------------------------------*/
// const myNumber = 21.50;
// const output = Math.round(myNumber);
// console.log(output);
// console.log(Math.round(0.9)); // 1

// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); // output -> 6 6 5






/*--------------- Math.random() ------------------------
The JavaScript math random() method returns the random number between 0 (inclusive) and 1 (exclusive).

-> jotobar print korbo - 0 1 er moddhe number dekhabe
--------------------------------------------------------*/

// const output = Math.random();
// console.log(output);

// -- 2 ---
// const output = Math.random() * 10;  // eikhane joto number dibo setar nichermoddhe dekhabe..
// const rounded = Math.floor(output);
// console.log(rounded);

// ------- 3 -------
for(let i = 0; i <= 20; i++){
    const output = Math.random() * 6;
    const rounded = Math.round(output);
    console.log(rounded);
}

console.log(Math.round(Math.random() * 50 + 1))


//------------ min/ max ---------------
console.log(Math.max(400, 600))

console.log(Math.min(200, 500))

//---------- power -------------

console.log(Math.pow(2, 3))


//------------- Square-root ---------

console.log(Math.sqrt(9))

console.log(Math.sqrt(64))