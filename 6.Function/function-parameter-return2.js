
/*---------Function Parameters--------

A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.

--------------------------------------*/
//-------- code - 1 -------------

// function bringSingara(taka){
//     console.log('Singara er jonno diche',taka);
//     console.log('Mama singara den');
// }

// bringSingara(100);  // when we call function, submit there value also


//--------- function declear by variable --------
function bringSingara(taka){
    console.log('Singara er jonno diche',taka);
    console.log('Mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 250;

var singara = bringSingara(money);
console.log("Ai nen Singara", singara);


/*------ Multiple parameter add------

-----------------------------------*/