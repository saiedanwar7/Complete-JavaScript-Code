// Find Maximum values


//---------- code 1 ------------

// const business = 450;
// const minister = 350;
// const army = 600;
// if(business > minister){
//     console.log('Business person is bigger');
// }
// else{
//     console.log('minister persion is bigger');
// }



// ------------ code 2 -------------------
// multiline comment -> shift + alt + a

/* const business = 450;
const minister = 350;
const army = 600;

if(business > minister && business > army){
    console.log('Business person is bigger');
}
else if(minister > business && minister > army){
    console.log('minister persion is bigger');
}
else{
    console.log('Army person is bigger');
} */


//------------ code - 3 -----------
// max() method

/* const business = 450;
const minister = 350;
const army = 600;

var max = Math.max(business, minister, army);
console.log('Largest is:', max); */

//---------------- code - 4 ---------------
// using function
// 2 numbers
/* function findLargest(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
    
}

const largest = findLargest(260, 360);
console.log('Largest is:', largest); */




// ------------- code 5 ------------
// largest number of three;
/* function getLargest(first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if(second > first && second > third){
            return second
        }
  
    else{
        return third;
    }
}


const largest = getLargest(20, 10, 40);
console.log('Largest is:', largest);
 */



//--------------- code - 6 ------------
// smallest number of three;


function findsmallest(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < third && second < first){
        return second;
    }
    else{
        return third;
    }
}

const smallNum = findsmallest(20, 30, 45);
console.log('Smallest Number is:', smallNum);