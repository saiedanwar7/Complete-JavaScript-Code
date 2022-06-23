// ----------- JavaScript Type Conversions ------------

/* 
In Programming, type conversion is the process of converting data of one type to another type.
For Example: converting String data to Number.
*/

/*
There are two types of type conversion in JavaScript.

1. Implicit Conversion - Automatic Type Converison
2. Explicit Conversion - Manual Type Conversion

*/


/*
------------------- JavaScript Implicit Conversion -------------------
In certain situations, JavaScript automatically converts one data type to another (to the right type).
This is known as implicit conversion.

*/




/*

Example 1 : Implicit Conversion to String

Numeric String Used with + gives string type

 */


// let result;

// result1 = "3" + 2;
// console.log(result1) // 32

// result2 = '3' + true;
// console.log(result2);  // "3true"

// result3 = '3' + undefined;
// console.log(result3);    // "3undefined"

// result4 = '3' + null; 
// console.log(result4); // "3null"


/*
Note: When a number is added to a string,
      JavaScript converts the number to a string before concatenation.

*/




/*

Example 2: Implicit Conversion to Number

Numeric String used with ( - , / , * ) results number type

*/


// let result;

// num1 = '4' - '2';
// console.log(num1); // 2

// result1 = '4' - 2;
// console.log(result1); // 2

// result2 = '4' * 2;
// console.log(result2);  // 8


// result3 = '4' / 2;
// console.log(result3);  // 2



/* 
Example 3: Non-numeric String Results to NaN

--> Non-Numeric String Used with ( - , / , * ) result to NaN

*/

// let result;

// result = 'hello' - 'world';
// console.log(result);  // NaN

// result1 = '4' - 'hello';
// console.log(result1);  // NaN


/*
Example 4: Implicit Boolean Conversion to Number

If boolean is used, true is 1, false is 0

*/

// let result;

// result = '4' - true;
// console.log(result);  // 3  (because here true is 1 and false is 0 count)

// result1 = 4 + true;
// console.log(result1); // 5

// result2 = 4 + false;
// console.log(result2);  // 4

/*
Note : JavaScript considers 0 as false and all Non-zero number as true.
       And, if true is converted to a number, the result is always 1.

*/





/*
Example 5: null Conversion to Number
----------
          null is 0 when used with number

*/

// let result;
// let result1;

// result = 4 + null;
// console.log(result);  // 4

// result1 = 4 - null;
// console.log(result1);  // 4




/*
Example 6: undefined used with number, boolean or null
----------
-> Arithmetic Operation of undefined with number, boolean or null gives NaN.

*/

// let result;

// result = 4 + undefined;
// console.log(result);  //NaN

// result = 4 - undefined;
// console.log(result);  // NaN

// result = true + undefined;
// console.log(result);  // NaN

// result = null + undefined;
// console.log(result);  // NaN








// ---------------------- JavaScript Explicit Conversion -------------------

/*
You can also convert one data type to another as per your needs. 
The type conversion that you do manually is known as explicit type conversion.

In JavaScript, explicit type conversions are done using built-in methods.
Here are some common methods of explicit conversions.

*/


/*
1. --------------------- Convert to Number Explicity -----------------

-> To convert numeric strings and boolean values to numbers.
   you can use Number(). For Examples:

*/

// let result;

// -------- string to number ----------

// result = Number('324');
// console.log(result);  // 324

// result = Number('324e-1')
// console.log(result);   // 32.4


//------- boolean to Number------

// result = Number(true);
// console.log(result);  // 1

// result = Number(false);
// console.log(result); // 0



/*
In JavaScript, empty strings and null values return 0. For Example:

*/

// let result;

// result = Number(null);
// console.log(result);  // 0

// result = Number(' ');
// console.log(result);  // 0

/*
If a string is an invalid number, the result will be NaN. 
For example,

*/

// let result;
// result = Number('hello');
// console.log(result); // NaN

// result = Number(undefined);
// console.log(result); // NaN

// result = Number(NaN);
// console.log(result); // NaN





/*
You Can also Generate Numbers from Strings using 
1. parseInt()
2. parseFloat(),
3. unary operator +
4. Math.floor()
5. toFixed()

*/

// let result;

// result = parseInt('20.01');
// console.log(result);  // 20

// result = parseFloat('20.001');
// console.log(result); 

// result = +'20.01';
// console.log(result);  // 20.01

// result = Math.floor('20.001');
// console.log(result); //20// ----- toFixed() ---------
// how many number show after (.)

// let number = parseFloat('35.6549871');
// console.log(number.toFixed(3), (typeof number));


/*
---------------- Convert to String Explicity --------------------
To convert other data types to strings, you can use either String() or toString(). 
For example,

*/

// number to string

let result;

// result = String(324);
// document.write(typeof result+' '+ result);  // "324"

// result = String(2 + 4);
// console.log(result);   // "6"


// Other data Types to String
// result = String(null);
// console.log(result); // "null"

// result = String(undefined);
// console.log(result); // "undefined"

// result = String(NaN);
// console.log(result); // "NaN"

// result = String(true);
// console.log(result); // "true"

// result = String(false);
// console.log(result); // "false"


// -------- using toString() -------

// result = (324).toString();
// document.write(typeof result+' '+result);   // "324"

// result = true.toString();
// console.log(result);  // "true"


/*
Note: String() takes null and undefined and converts them to string.
     however, toStrings() gives error when null are passed.

*/


/*------------- 3. Convert to Boolean Explicitly ------------
To convert other data types to a boolean, you can use Boolean().
In JavaScript, undefined, null, 0, NaN, '' converts to false.
For Example:

*/


// let result;

// result = Boolean('');
// console.log(result); // false

// result = Boolean(0);
// console.log(result); // false

// result = Boolean(undefined);
// console.log(result); // false

// result = Boolean(null);
// console.log(result); // false

// result = Boolean(NaN);
// console.log(result); // false


/*
All other values give true. number, string, " " 
For example,
*/

// result = Boolean(324);
// console.log(result); // true

// result = Boolean('hello');
// console.log(result); // true

// result = Boolean(' ');
// console.log(result); // true





/*
--------------- CodeWithHarry ---------------------

--------- Type Conversion and Type Coercion -------

*/

// let myVar;
// myVar = 34;
// console.log(myVar, (typeof myVar));  // this is number type


// convert to string
// let myVar;
// myVar = String(34);
// console.log(myVar, (typeof myVar));


// ----- boolean Convert to String ------
// ----------- String() Funciton -----------

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));



// let date = new Date();
// console.log(date, (typeof date)); // Now this is "Object"


// date convert to String

let date = String(new Date());
console.log(date, (typeof date));


// ------- work with Array --------

// let arr = [1, 2, 3, 4, 5];   // now this is Array object, length-5
// console.log(arr.length, (typeof arr)); 

// convert to string


let arr =String([1, 2, 3, 4, 5]);   // now this is Array object, length-9
console.log(arr.length, (typeof arr)); 

// Note: String Count Characters and Array Count Element


// String Convert by toString() Function 

let i = 8;
console.log(i.toString());

let j = true;
console.log(j.toString());

// toString use to everything for convert to String



//--- Number Function ------

// let stri = Number('3264');
// console.log(stri, (typeof stri));

let stri = Number("345d6");  // NaN number
let str1 = Number([1, 2, 3, 4, 5, 6, 7]); // Nan number
console.log(stri, (typeof stri));
console.log(str1, (typeof str1));

// Note: String, Array never work in Number



// use parseInt to pass integer

// let num = '34';

// console.log(num, (typeof num));


// let num = parseInt('34');

// console.log(num, (typeof num));


// convert to Float number

let num = parseFloat('34.098');
console.log(num, (typeof num));



// ----- toFixed() ---------
// how many number show after (.)

let number = parseFloat('35.6549871');
console.log(number.toFixed(3), (typeof number));


// -------- Type Coercion --------

// when we declear string with number in javascript, it's convert number to a String

// let mystr = "695";
// let mynum = 35;

// console.log(mystr + mynum);

// if we change by number than output will change

let mystr = Number("695");
let mynum = 35;

console.log(mystr + mynum);  // 730
