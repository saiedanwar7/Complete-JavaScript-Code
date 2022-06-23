/*
- Real life e sob somoy console log kora lagbe na
- console.log testing purpose e use korbo


*/





// function addAll() {
//     var sum = 0
//     for (var i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }

// var result = addAll(1, 2, 3)
// console.log(result)


//----------- repet the code --------------

// function addNumber() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++){
//         sum += arguments[i]

//     }
//     return sum;
// }

// var final_result = addNumber(4, 6, 9)
// console.log(final_result)

//-------------- repet code again -------

function addAllNumber() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

var final_All_Number_Result = addAllNumber(6, 7, 9)
console.log(final_All_Number_Result)


//---------------- Another code ............

function person(name, email) {
    return {
        name: name,
        email: email
    }
    // return sob somoy function er sob kisu sesh er pore return korte hobe...onno kisu korle return korbe na.

    
    console.log('I will never be shown')
    // return object
    
}


var p1 = person('Saied', 'saied.anwar@gmail.com')
console.log(p1)