//------- Some Shorthand with AND, OR Operator ----------

//------------ shorthand one -------------

// jodi name e value thake tahole fullname = name hobe r na hole fullname = Saied Anwar hobe....

var name = ''  // --> falsey value
var fullname = name || 'Saied Anwar'
console.log(fullname)


var name2 = 'Mr.xyz'  //---> truethy value
var fullname2 = name2 || 'Saied Anwar'
console.log(fullname2)


//----------- Shorthand Two --------------

// jodi isOk variable tar value true hoy tokhon && er por er console.log ta kaj korbe. false hole kaj korbe na


var isOk = true

isOk && console.log('Everything is OK')


var name = true

'saied' && console.log('ok')