/*----------- JavaScript Switch --------
- The JavaScript switch statement is used to execute one code from multiple expressions. It is just like else if statement that we have learned in previous page. But it is convenient than if..else..if because it can be used with numbers, characters etc.



The signature of JavaScript switch statement is given below.

switch(expression){  
case value1:  
 code to be executed;  
 break;  
case value2:  
 code to be executed;  
 break;  
......  
  
default:   
 code to be executed if above values are not matched;  
}  

-----------------------------*/

// var color = 'yellow';

// if(color == 'blue'){
//     console.log('color is blue');
// }
// else if(color == 'red'){
//     console.log('color is red');
// }
// else if(color == 'green'){
//     console.log('color is green');
// }
// else if(color == 'white'){
//     console.log('color is white');
// }
// else if(color == 'magenta'){
//     console.log('color is magenta');
// }
// else if(color == 'yellow'){
//     console.log('color is yellow');
// }

// else{
//     console.log('color is black');
// }


// ---- same thing do by switch case ------

var color = 'yellow';
switch(color){
    case 'blue':
        console.log('color is blue');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');
}