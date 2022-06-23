/*----- The pattern programs are used to practice and boost programming skills like JavaScript loops and are also asked to create in programming interviews.


/*
1. Square star pattern in javascript

iiiii
***** j
***** j 
***** j
***** j
***** j

To create square star pattern run 2 nested for loop. Execute each loop for 'n' number of times, where 'n' is number of rows/columns in the square, i.e for(let i = 0; i < n; i++).

The internal loop will run for 'n' number of times which will print starts in a row and a newline at the end of the loop (\n) while the outer loop will run internal loop for 'n' number of times which will print starts in a columns

*/

/*
let n = 5
let string = "";

for (let i = 0; i < n; i++){  // external loop // column

    for (let j = 0; j < n; j++){ // internal loop work on row
        string += "*";
    }
    // newline after each row
    string +="\n"
   
}
console.log(string)

*/

/* --------2 Hollow square pattern------

*****
*   *
*   *
*   *
*****


Steps to create a hollow square star pattern are:

- Create a variable to store the string and assign it with an empty string
- Create a for loop to run for 'n' number of times, where 'n' is number of rows/columns in the square, i.e for(let i = 0; i < n; i++)
- Inside the loop, create a for loop that prints a star (*) at beginning and end of the line and space in between

- Also, keep in mind that the first and last row should have only stars
- Add a new line after each row

*/

/*

let n = 5;   // row or column count

let string = "";

for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        if (i === 0 || i ===  n - 1) {  // first and last row print
            string +="*"
        }

        else {
            if (j === 0 || j === n - 1) { // without first and last row
                string += "*"
            }
            else {
                string += " ";
            }

        }

    }
    //-- newline after each row
    string += "\n"
}

//printing the string

console.log(string)

*/

/*---- Left triangle pattern in javascript ----

*
**
***
****
*****
To create the left triangle pattern in javascript again run 2 nested for loop external loop will take care of columns of pattern and the internal loop will print rows of the pattern.

You can observe from the above-shown pattern that we need to run an external loop for 'n' time while the internal loop runs for 1 time in the first execution, 2 times in the second execution, and so on till 'n' times.

You can use the value of i from the external loop which will increase from 1 to 'n' inside the internal loop as a condition.

*/

/*

let n = 5
let string = ""

for (let i = 1; i <= n; i++){  // for column

    for (let j = 0; j < i; j++){ // for row star
        string += "*"  
    }  
    // for spacing
    string +="\n"
}

console.log(string);


*/

/* -------- Right triangle pattern in javascript
    *
   **
  ***
 ****
*****


To create a right triangle pattern in javascript you will have to deal with 3 loops, 1 of which is external and 2 are internal. The external loop will execute internal loops for 'n' number of times and the internal loop will design a pattern for each row.

From the above pattern, you can see each row has a series of stars and spaces. The number of stars in a row starting from 1 preceding with 'n-1' spaces and ends with 'n' star and 0 spaces.

Create 2 internal loops, 1st print n - i spaces and 2nd print i stars, where i is the number of times the external loop is executed.

*/


/*

let n = 5;
let string = ""

for (let i = 1; i <= n; i++){
    // printing spaces
    for (let j = 0; j < n - i; j++){
        string += " ";
    }

    // printing star
    for (let k = 0; k < i; k++){
        string += "*";
    }
    string += "\n";
}
console.log(string);


*/

/*------ Downward Triangle Star Pattern -------
*****
****
***
**
*


To create a downward triangle star pattern use a nested loop, it is also known as a reverse star pattern. From the above-shown pattern, you can see the number of stars decreases from 'n' to 1.

Run a for loop inside an external loop whose number of iterations decreases from 'n' to 1.



--------------------------------------*/

/*-------------------
let n = 5;
let string = ""

for (let i = 0; i < n; i++){ //1

    // printing star

    for (let j = 0; j < n - i; j++){
        string +="*"
    }
    string += "\n";
}
console.log(string);


*/

/*----- Hollow Triangle Star Pattern
*
**
* *
*  *
*   *
******
Steps to create a hollow triangle star pattern are:

Run 2 nested loops, 1st for 'n' times and 2nd for 1 time for the first row, 2nd for 2 times for the second row, and so on till 'n' times
Print star for first and last position in each row and space for other positions
IN the last line print star at each position



*/

let n = 6;
let string = "";

for (let i = 1; i <= n; i++){
    // star
    for (let j = 0; j < i; j++){
        if (i === n) {
            string +="*"  // for last line
        }
        else {
            if (j == 0 || j == i - 1) {  // for first 2 line
                string += "*";  
            }
            // speacing
            else {
                string += " "
            }
        }
    }
    string += "\n";
}
console.log(string);