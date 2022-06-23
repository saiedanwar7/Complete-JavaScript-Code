/*
JavaScript array is an object that represents a collection of similar type of elements.


There are 3 ways to construct array in JavaScript

1. By array literal
2. By creating instance of Array directly (using new keyword)
3. By using an Array constructor (using new keyword) 

*/


// ---------- Programming hero - Array -------------

//------------- part-1 of hero ---------


// var friendsAge = [11, 13];

// var muriChanaCurFree = [34, 55, 221, 3];

// var hero = ['cr7', 'messi', 'neymar']

// var oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers)
// console.log(oddNumbers.length);


// var vowels = ['a', 'e', 'i', 'o', 'u']
// console.log(vowels);
// var vowelsCount = vowels.length;
// console.log(vowelsCount);


//----------------------- part -2 Array Methods --------------------

/* 
1. indexof()
2. index()
3. length()
4. push()
5. pop()
6. unshift()
7. shift() 

*/


/* 1. indexOf() -	searches an element of an array and returns its position */

// var bookPages = ['hablu', 'bolod', 'Chouddogosti', 'battery', 'peracitamol', 'gymansium'];

// var batteryIndex = bookPages.indexOf('battery');
// console.log(batteryIndex);

// var numbers = [14, 54, 59, 12, 35, 67, 98, 75];
// var index = numbers.indexOf(67);

/* if any element not exist in array, than show (-1) */   

// var index = numbers.indexOf(676); 
// console.log(index);


/* find value by index number */

//  var names = ['saimun', 'sourve', 'jakir', 'Saied', 'nayem', 'Emon'];
//  var namePosition = names[5];
//  console.log(namePosition);



 /*-------- change array value by index ---------*/

//  var numbers = [14, 54, 59, 12, 35, 67, 98, 75];
//  console.log(numbers)
//  numbers[3] = 60;
//  numbers[4] = 64;
//  console.log(numbers);



 /* ----------- Add or Remove Element from Array using push, pop ------------ 
 
 push() - aads a new element to the end of an array and returns the new length of an array
 pop() - removes the last element of an array and returns the removed element

 */

/* ------- push/pop string -----------*/

 var lastBench = ['korim', 'Rohim', 'Miraz'];
//  console.log(lastBench);
 lastBench.push('Sobuz');
 lastBench.push('Mahin');
 lastBench.push('Jakir');
//  console.log(lastBench);


/*----------push/pop number ---------*/
/* -- push -- */
// var friendsAge = [11, 23, 34, 45];
// friendsAge.push(50);
// console.log(friendsAge);

/* ---- pop ------- */
// pop remove last element from array

var friendsAge = [11, 23, 34, 45];
// friendsAge.pop();
// console.log(friendsAge);

// var lastItem = friendsAge.pop();  //put pop value in another variable.
// console.log(friendsAge);
// console.log(lastItem);


/*------ shift ---------------*/
// shift - remove first element from items.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

/*--------- unshift --------------*/
// 	adds a new element to the beginning of an array and returns the new length of an array

var mynumbers = [2, 3, 4, 5, 6, 7]
mynumbers.unshift(1);
console.log(mynumbers);