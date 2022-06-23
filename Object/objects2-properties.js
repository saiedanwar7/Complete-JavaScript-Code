/*------ objects-properties ------- */

//--------- code 1 ----------

// var computer = {
//     price : 29000,
//     storage: '156gb',
//     color: 'silver',
//     processor: 'intel i5'
// }

// console.log(computer);
// console.log(computer.processor);  // show object property value

// var computerPrice = computer.price;
// console.log(computerPrice);


//--------- code 2 ----------

// set a object property value/ change object property value

/* set property value in 3 ways

1.-> object_name.property_name = set_value; example: computer.price = 22000;

2. --> object_name["property_name"] = value; example: computer["price"] = 23000;

3.--> delcear -> var new_variable = "property_name" 
- object_name["new_variable"] = set_value;

example: 
var priceProperty = "price";
computer["pricePropery"] = "price";
--------------------------*/

// var computer = {
//     price : 29000,
//     storage: '156gb',
//     color: 'silver',
//     processor: 'intel i5'
// }


// computer.price = 22000;
// console.log(computer)



//------------- code -3 -------------
// different ways to set a value of an object property

var computer = {
    price : 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}


computer["price"] = 23000;  // set property value
console.log(computer);

//------------- code -4 -------------
// different ways to set a value of an object property


var computer = {
    price : 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

var priceProperty = "price";

computer[priceProperty] = 30000; // set property value
console.log(computer);


//------- Rivision all property declearation -----

//------------ ways -1 -------

var computer = {
    price : 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

var storageProperty = 'storage';
computer[storageProperty] = '512gb';

console.log(computer);


//-------- ways -2 ----------
var computer = {
    price : 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

computer['storage']  = '1tb'  

console.log(computer);


// ---------- ways -3 ------
//-------- ways -2 ----------
var computer = {
    price : 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

computer.storage = '5tb';  

console.log(computer);
