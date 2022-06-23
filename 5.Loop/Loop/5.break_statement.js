//------------- Break Statement ----------
/*
-> break statement jokhon khushi tokhon apnar condition er upor nivor kore code ke terminate kore dey...

*/

/* 
while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('Winner Winner Chicken Dinner')
        break
    } else {
        console.log('You have got ', rand)
    }
}

*/

//----------- code 2 --------
//-- i er value jokhon 5 hobe tokhon loop ta break korbe....

/* 
for (var i = 1; i < 10; i++){
    if (i % 5 == 0) {
        break
    } else {
        console.log(i)
    }
}

*/

//----------- break with while Loop --------
/*
-> program to find the sum of positive numbers
-> if the user enters a negative numbers, break ends the loop
-> the negative number entered is not added to sum

*/

// let sum = 0,number

// while (true) {
//     number = parseInt('Enter a number: ');

//     if (number < 0) {
//         break
//     }

//     // add all positive number
//     sum += number;
// }

// console.log('The sum is : ', + sum);

/*----------break with Nested Loop
When break is used inside of two nested loops, break terminates the inner loop. For example,

*/

//first loop
for (let i = 1; i <= 3; i++){

    //second loop
    for (let j = 1; j <= 3; j++){
        if (i == 2) {
            break;
        }
        console.log('i = ' + i, 'j =' + j);
    }
}

/*
In the above program, when i == 2, break statement executes. It terminates the inner loop and control flow of the program moves to the outer loop.

Hence, the value of i = 2 is never displayed in the output.

*/