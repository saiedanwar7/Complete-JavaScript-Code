/*------------------ Closure -------------------- 

- jodi kono scope e bairer kono scope theke data ashe and seta jodi argument akare na ashe,tokhon sei scope ke amra closure bolbo.

- ekta function er scope ke arekta function er scope use korle take closure bolbo

*/



//---------- code - 1 ----------
var b = 10

function a() {
    var x = 5

    return function () {
        console.log(x)
    }
}

var abc = a()
console.dir(abc)