/*------ Multiple parameter add------

-----------------------------------*/

//---------- code-1 ----------- 

// function addTwoNumbers(num1, num2){
//     console.log(num1, num2);
//     var total = num1 + num2;
//     return total;  // function return na korle ans undefined dekhabe..
 
// }

// var firstNumber = 35;
// var secondNumber = 47;


// var result = addTwoNumbers(secondNumber, firstNumber);
// console.log('result value:', result);


//---------- code-2 - multiplication ----------- 

// function multiplyTwoNumbers(num1, num2){
//     var result = num1 * num2;
//     return result;
// }


// var total = multiplyTwoNumbers(5, 10);

// console.log('Total after Multiplication:', total);


// -------- code -3 ---Subtraction -----

function subTwoNumbers(num1, num2){
    var total = num2 - num1;
    return total;
}

firstnumbers = 30;
secondnumbers = 50;

var result = subTwoNumbers(secondnumbers, firstnumbers);
console.log('Result After Subtraction:', result);


// -------- code -4 ---division -----

function divTwoNumbers(div1, div2){
        var total = div1 / div2;
        return total;
}


var result = divTwoNumbers(100, 20);
console.log("Reuslt After Division:", result);