/*-------- JavaScript do while loop --------------

The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false.

The syntax of do while loop is given below.

do{  
    code to be executed  
}while (condition);  


//--- while loop e jodi condition ta false hoye jai tahole loop er body er moddher kono code excute hobe na...

//-- do_while loop e jodi condition false o thake ta o atlest ek bar/first time code excute hobe

*/


//------- code - 1---------

//------- while loop ----

var isRunning = false

while (isRunning) {
    console.log('I am Running')
}

//-- here isRunning is false so the code is not excute from body

//---------- do-while loop ------------
// at first excute code then check the conditions

do {
    console.log('I am Running')
}while(isRunning)
