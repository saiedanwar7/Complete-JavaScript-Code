/*----------- function ------------
-Benefits of Using a Function

1. Function makes the code reusable. You can declare it once and use it multiple times.

2. Function makes the program easier as each small task is divided into a function.

3. Function increases readability.
---------------------------------*/

/* ------ function Syntax -------
1. A function is declared using the function keyword.
2. The body of function is written within {}.

function nameOfFunction () {
    // function body   
}

-------------------------------*/
//---------- Code by Programming Hero ------------

// function declaration 

function startFan(){
    console.log('Walk towards the switch');
    console.log('Press the switch');
}

startFan();

console.log('Eat breakfast');
console.log('Drink tea');
console.log('take a shower');
startFan();

var country = 'Bangladesh';
var city = 'Dhaka';
startFan();


