//----------- Inner function -----------

// function something(greet, name) {
//     function sayHi() {
//         console.log(greet, name)
//     }


//     sayHi()
// }

// something('Good Morning', 'Saied Anwar')



//----------- Another Code ------------
// ekta function e jodi 2ta function thake tahole 1st function er variable e 2nd function er access thake.........

// function something(greet, name) {
//     function getFirstName() {
//         if (name) {
//             return name.split(' ')[0]
//         } else {
//             return ''
//         }
//     }

//     var message = greet + ' ' + getFirstName()
//     console.log(message)
// }


// something('Good Morning', 'Saied Anwar')


//------------ practices code ----------

function something(greet, name) {
    function getSecondName() {
        if (name) {
            return name.split(' ')[1]
        } else {
            return ''
        }
    }
    var message = greet + ' ' + getSecondName()
    console.log(message)
}


something('Good Morning', 'Saied Anwar')