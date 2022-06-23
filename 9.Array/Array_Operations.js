/* The array is a widely used data structure in JavaScript. */

/* The number of operations you can perform on arrays (iteration, inserting items, removing items, etc) is big. The array object provides a decent number of useful methods like array.forEach(), array.map() and more. */

/*----- Table of Contents ------*/
/* -----------------------------
1. Iterate
1.1 for..of cycle
1.2 for cycle
1.3 array.forEach() method

2. Map
2.1 array.map() method
2.2 Array.from() function
    
3. Reduce
3.1 array.reduce() method

4. Concat
4.1 array.concat() method
4.2 Spread operator

5. Slice
5.1 array.slice() method

6. Clone
6.1 Spread operator
6.2 array.concat() method
6.3 array.slice() method

7. Search
7.1 array.includes() method
7.2 array.find() method
7.3 array.indexOf() method

8. Query
8.1 array.every() method
8.2 array.some() method

9. Filter
9.1 array.filter()

10. Insert
10.1 array.push() method
10.2 array.unshift() method
10.3 Spread operator

11. Remove
11.1 array.pop() method
11.2 array.shift() method
11.3 array.splice() method
11.4 Spread operator

12. Empty
12.1 array.length property
12.2 array.splice() method

13. Fill
13.1 array.fill() method
13.2 Array.from() function
    
14. Flatten
14.1 array.flat() method

15. Sort
15.1 array.sort() method

-----------------------*/

/* ------ Iterate ----- 

1.1 for..of cycle
1.2 for cycle
1.3 array.forEach() method

----------------------*/

// 1.1 for..of cycle

// for(const item of items) cycle iterates over array items.

const colors = ['blue', 'green', 'white'];

for (const color of colors) {
    console.log(color);
}

// blue
// green
// white

//On each iteration, the variable color is assigned with the iterated item.

// Tips:

// You can stop iterating at any time using a break statement.



// 1.2 for cycle
// for(let i; i < array.length; i++) cycle iterates over array items using an incrementing index variable.

// for usually requires index variable that increments on each cycle:

//-------- code-2 ------------

const colors1 = ['blue', 'green', 'white'];

for (let index = 0; index < colors1.length; index++){
    const color = colors1[index];
    console.log(color);
}

// index variable increments from 0 until colors1.length - 1. This variable is used to access the item by index: colors[index].

//------ code 2 -------for-cycles

const names = ['hasan', 'korim', 'rakib'];
for (let i = 0; i < names.length; i++){
    const name = names[i];
    console.log(name);
}


/*-------- 1.3 array.forEach() method -------*/

// array.forEach(callback) method iterates over array items by invoking callback function on every array item.

// On each iteration callback(item [, index [, array]]) is called with arguments: iterated item, index and the array itself.

// forEach e ekta function create korte hoy...

//---------------- code - 3 --------------

const colors2 = ['red', 'yellow', 'black'];

colors.forEach(function callback(value, index) {
    console.log(value, index);
})

//-------- code 2 -------

const numbers = ['20', '30', '40'];

numbers.forEach(myFunction)

function myFunction(value, index) {
    console.log(value, index);
}


//-----------anonymous function way code - 3 -------

const numbers1 = ['one', 'two', 'three'];

numbers1.forEach(function (x) {
    console.log(x);
})


//-------- find squareNumber by forEach code - 4 ------
const numbers2 = ['10', '20', '30', '40'];
const squareNumber = [];

numbers2.forEach(function (x) {
    squareNumber.push(x * x);
})
console.log(squareNumber);

// --------- Every time increment by 5 ------

var numbers3 = [5, 10, 15, 20, 25];
console.log(numbers3);

numbers3.forEach(function (x, index, arr) {
    arr[index] = x + 5;

})

console.log(numbers3);


// 2. --------- Map ---------
// 2.1 array.map() method

// array.map(callback) method creates to a new array by using callback invocation result on each array item.

// On each iteration callback(item[, index[, array]]) is invoked with arguments: current item, index and the array itself.It should return the new item.

// Let's increment the numbers of an array:
// forEach function e newArray create kore kaj korte hoy/ map e newArray create korte hoy na...nije nije create kore ney..

const numbers4 = [0, 2, 4];

const newNumbers = numbers4.map(function increment(number) {
    return number + 1;
});

console.log(newNumbers);

//------------------map code - 2 -----------

// ekta function return korbe..
// new array declear korte hoy na nije theke array create kore ney..

var numbers11 = [2, 3, 4, 5];

var squareNumber11 = numbers11.map(function (x) {
    return x * x;
})

console.log(squareNumber1);