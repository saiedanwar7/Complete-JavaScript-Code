/*-------- JavaScript while loop --------

The JavaScript while loop iterates the elements for the infinite number of times.
It should be used if number of iteration is not known. 
 
The syntax of while loop is given below.

while (condition)  
{  
    code to be executed  
}  

*/

// condition jodi true hoy tahole loop cholbe r jodi false hoy tahole loop ta r cholbe na...

//---------- code 1 --------

// var i = 0;

// while (i < 10) {
//     console.log('Saied Anwar')
//     i++;
// }


//-------- code - 2 ------------

var isRunning = true;

while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    } else {
        console.log('You have got ', rand)
    }
}