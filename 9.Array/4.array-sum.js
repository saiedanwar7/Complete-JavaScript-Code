// Array sum all numbers

// const numbers = [44, 32, 45, 56, 67, 43, 90];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     const sumAllNum = numbers[i];
//     sum = sum + sumAllNum;
//     }

// console.log(sum);

// --------- using function -------------

function arrayTotal(num){
    let sum = 0;
    for(let i = 0; i< num.length; i++){
        const element = num[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([20, 30, 56]);
console.log('Total sum:', total);