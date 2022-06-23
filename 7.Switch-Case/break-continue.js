//---- code 1 ----

// var i = 0;
// while(i < 15){
//     console.log(i);
//     if(i == 5){
//         break;
//     }
//     i++;
// }

//------- code 2 --------

// for(var i = 0; i < 20; i++){
//     console.log(i);
//     if(i == 8){
//         break;
//     }

// }

//--------------- code 3 -------------

// var numbers = [54, 35, 53, 98, 23, 101, 45, 67];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number); 
//     if(number > 100){
//         break;
//     }
// }


// ------------------ code 4(continue) ----------
/*--------------------------------
Note: The break statement terminates the loop entirely. However, the continue statement only skips the current iteration.
--------------------------------*/
var numbers = [54, 35, 53, 98, 23, 101, 45, 67];
/ berak /
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 90){
        continue;
    }
    console.log(number); 

}