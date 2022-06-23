/*------------- Sort ---------- */

var arr = [4, 8, 1, 6, 7, 9, -8, 0, -2, 4, 3, 5, 6, 2, 1, 7, -4]

//------ normal ways -----
/**
 ei vabe sort korle o pura puri sorting hoy na,
 */
arr.sort()
console.log(arr)


//assending and dessending


arr.sort(function (a, b) {
    if (a > b) {
        return 1  
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})

console.log(arr)

// ------------ implement by callback function -------

var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
   
]

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }

})

console.log(persons)

//-----------  every() --------
/*
- every() - true r false return kore 

- some - ekta number o nagetive ache kina check kore
*/
var arr2 = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 2, 1, 7]

var rest1 = arr.every(function (value) {
    return value % 2 == 0  // sob gula number even number ki na
})
console.log(rest1)

var rest2 = arr.every(function (value) {
    return value === 0  // positive number kina
})
console.log(rest2)