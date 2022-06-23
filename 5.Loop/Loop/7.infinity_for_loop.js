//---------- Infinity For Loop ------------

let isRunning = true;

while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
        if(rand == 9){
            console.log('Winner Winner Chicken Dinner')
            isRunning = false
        } else {
            console.log('You have got ' + rand)
        }
    
}


//-------- some way we can use for loop --------

for (; ;){
    var num = Math.floor(Math.random() * 10 + 1)
    if (num == 9) {
        console.log('Winner Winner Chicken Dinner')
        break;
    } else {
        console.log('You have got '+ num)
    }

}