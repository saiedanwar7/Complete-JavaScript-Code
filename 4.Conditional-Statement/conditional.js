/* 
--> conditional statement in JavaScript

1. ifstatement

2. if...elsestatement

3. if...else ifstatement

*/


// ---1 ---

// var isFoodReady = true;

// if(isFoodReady == true){
//     console.log('I will eat now.');
// }



//--2--

// var isFoodReady = false;
// if (isFoodReady == true){
//     console.log('I will eat now')
// }



//--3--

// var myName = 'Saied';
// if(myName === 'Saied'){
//     console.log('You are allowed!');
// }



//---4---

// var iphonePrice = 70000;
// var myBudget = 15000;

// if(iphonePrice < myBudget){
//     console.log('I will buy iPhone Plus!!!')
// }



//---- 5 ----

// var iphonePrice = 70000;
// var myBudget = 115000;

// if(iphonePrice < myBudget){
//     console.log('I will buy iPhone Plus!!!')
// }

//--- 6 ----

// var iphonePrice = 70000;
// var myBudget = 15000;

// if(iphonePrice > myBudget){
//     console.log('My Samsung is best!!');
// }

/* ------ if else ------------ */


//--- 1 ----
// var chickenPrice = 180;
// var myMoney = 50;

// if(chickenPrice < myMoney){
//     console.log('Yes! I will eat Chicken!!')
// }
// else{
//     console.log('Now I will eat only Rice!');
// }

//--- 2 ----
// var chickenPrice = 180;
// var myMoney = 500;

// if(chickenPrice < myMoney){
//     console.log('Yes! I will eat Chicken!!')
// }
// else{
//     console.log('Now I will eat only Rice!');
// }


/* ------------ Multi-Contistions -----------*/

//-- 1 --

// var gotJob = false;

// if(gotJob == true){
//     console.log('Go to the Office!');
// }
// else{
//     console.log('Go to the Home!!!');
// }

//--2 ---

// var gotJob = true;
// var moneySaved = 250000;

// if(gotJob == true && moneySaved > 100000){
//     console.log('Cholo biya kore feli!!');
// }
// else{
//     console.log('Tor kopale biya nai!!!')
// }

// -- 3 --

// var gotJob = false;
// var moneySaved = 250000;
// var hasFlat = false;

// if(gotJob == true && moneySaved > 100000 && hasFlat ==  true){
//     console.log('Cholo biya kore feli!!');
// }
// else{
//     console.log('Tor kopale biya nai!!!')
// }


// OR --- 1 ----------
// var gotJob = false;
// var moneySaved = 50000;
// var hasFlat = false;

// if(gotJob == true || moneySaved > 100000){
//     console.log('Cholo biya kore feli!!');
// }
// else{
//     console.log('Tor kopale biya nai!!!')
// }


//----2 ----

// var gotJob = true;
// var moneySaved = 50000;
// var hasFlat = false;
// var hasHouse = false;

// if((gotJob == true && moneySaved > 10000) || (hasHouse == true)){
//     console.log('Cholo biya kore feli!!');
// }
// else{
//     console.log('Tor kopale biya nai!!!')
// }

//----3 ----var gotJob = true;
// var gotJob = false;
// var moneySaved = 50000;
// var hasFlat = false;
// var hasHouse = true;

// if((gotJob == true && moneySaved > 2210000) || (hasHouse == true)){
//     console.log('Cholo biya kore feli!!');
// }
// else{
//     console.log('Tor kopale biya nai!!!')
// }


/*------ Multi stage condition and nested conditions ---*/

//--- 1 ---

// var danishPrice = 50;
// var butterBreadPrice = 25;
// var toastBiscuitPrice = 10;
// var myBudget = 100;

// if(danishPrice < myBudget){
//     console.log('I will eat Danish!!');
// }
// else if(butterBreadPrice < myBudget){
//     console.log('I will also eat Butter with tea!');
// }
// else if(toastBiscuitPrice < myBudget){
//     console.log('I will also eat ToastBiscuit!!')
// }
// else{
//         console.log("I don't eat");
// }



//--- 2 ---
// var danishPrice = 50;
// var butterBreadPrice = 25;
// var toastBiscuitPrice = 10;
// var myBudget = 40;

// if(danishPrice < myBudget){
//     console.log('I will eat Danish!!');
// }
// else if(butterBreadPrice < myBudget){
//     console.log('I will also eat Butter with tea!');
// }
// else if(toastBiscuitPrice < myBudget){
//     console.log('I will also eat ToastBiscuit!!')
// }
// else{
//         console.log("I don't eat");
// }

// --- 3 --
// var danishPrice = 50;
// var butterBreadPrice = 25;
// var toastBiscuitPrice = 10;
// var myBudget = 7;

// if(danishPrice < myBudget){
//     console.log('I will eat Danish!!');
// }
// else if(butterBreadPrice < myBudget){
//     console.log('I will also eat Butter with tea!');
// }
// else if(toastBiscuitPrice < myBudget){
//     console.log('I will also eat ToastBiscuit!!')
// }
// else{
//         console.log("I don't eat");
// }


/* ----- nested conditions -----*/

//---1 ---

// var danishPrice = 50;
// var butterBreadPrice = 25;
// var toastBiscuitPrice = 10;
// var myBudget = 100;
// var packedWell = true;

// if(danishPrice < myBudget){
//     if(packedWell == false){
//         console.log('I will Eat Danish')
//     }
//     else{
//         console.log('Dahish khamu na!')
//     }
// }

//--- 2-- 

// var danishPrice = 50;
// var butterBreadPrice = 25;
// var toastBiscuitPrice = 10;
// var myBudget = 100;
// var packedWell = true;

// if(danishPrice < myBudget){
//     if(packedWell == true){
//         console.log('I will Eat Danish')
//     }
//     else{
//         console.log('Dahish khamu na!')
//     }
// }

/*-------- recap ------------*/

var eggPrice = 32;
var myBudget = 32;

if(eggPrice <= myBudget){
    console.log('I eat egg');
}
if(eggPrice >= myBudget){
    console.log('lebu diye vat khabo');
}