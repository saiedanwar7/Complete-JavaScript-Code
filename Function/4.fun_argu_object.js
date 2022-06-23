//---------------- Function Argument Object ---------
/*
- Argument ke print kore Array like data Structure return kore 

- (function, argument) ei 2ta keyword function theke provide kora ache

*/



function test(a, b, c) {
    console.log(JSON.stringify(arguments))
    // console.log(typeof a)
}

test(10, 20, 30) 

//----- Argument er value gula ke dekhte chaile loop er maddhome dekhte parbo ------


// function test1(x, y, z) {
//     for (var i = 0; i < arguments.length; i++)
//         console.log(arguments[i])
// }

// test1(20, 40, 60)

//function e jodi parameter bole na o di tao baire theke argument pass korte parbo

// function test1() {
//     for (var i = 0; i < arguments.length; i++)
//         console.log(arguments[i])
// }

// test1(20, 40, 60)

//------------------------------
function test11() {
    for (var i = 0; i < arguments.length; i++)
        console.log(arguments[i])
}

test11(20, 60, 50)




//--------------- parameter define chara loop er maddhome value excute kora ----------------

function addAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(1, 2, 3)
addAll(1, 2, 3, 4, 5, 6, 7, 8)