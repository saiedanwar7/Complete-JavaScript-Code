//-------------- Logical Operator ----------
/*
&& ->(And) when both are true it's return true

A && B
true && true = true
true && false = false
false && true = false
false && false = false

|| (OR) -> when both are false it's return false
A || B

true && true = true
true && false = true
false && true = true
false && false = false


!  -> not

Logical Operators Only used when we have two or More conditions and Result Comes from both of their Participation

*/

//-------- AND ----------

var a = 10
var b = 20
var c = 30
var d = 40

if (a > b && c > d) {
    console.log('A is greater than B and C is greater than D')
} else {
    console.log('At least one condition is false')
}

//------- OR -------- 
if (a > b || c > d) {
    console.log('A is greater than B and C is greater than D')
} else {
    console.log('Two condition is false')
}


//-------- NOT --------


var check = !(a > b)
console.log(check)  // true

var check1 = !!(a > b)
console.log(check1) // false 

