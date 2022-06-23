//What is Pure Function?

// ` * It Returns the same result if given the same arguments`- joto bar e arguments dibo protibar same result dibe

// ` * It does not cause any observable side effects` - eita pura function er r kothay o kaj korbe na

// ei 2ta na manle eita pure function na


function sqr(n) {
    return n*n
}

console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))

//---------- code-2 ------------
// this is not a pure function 
var n = 10

function change() {
    n = 100
}
change()

console.log(n)
/*
ei function ta pure function na karon eita bairer variable ke change kore de
*/

// 100

//----------- code-3 ---------
// this is not a pure function
/*
eita object er value ta ke o change kore de, tai eta ke pure function bola jabe na

*/
var point = {
    x: 45,
    y: 30
}

function printPoint() {
    point.x = 100
    point.y = 200

    console.log(point)
}

printPoint(point)

console.log(point)

// { x: 100, y: 200 }
// { x: 100, y: 200 }