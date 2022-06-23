console.log('We are in tut7.js and lets discuss about arrays');
// const marks = [34, 23, 24, 93, 73, 25];
// const fruits = ['Orange', 'Apple', 'Pinapple']; 
// const mixed = ['str', 89, [3, 5]];

// const arr = new Array(23, 123, 34, 'Orange');

// console.log(arr);
// console.log(mixed);
// console.log(fruits[0]);
// console.log(fruits[1])

// //----- porparty ----
// console.log(arr.length);
// console.log(Array.isArray('Apple'));

// arr[0] = 'Saied'; // change Array value
// console.log(arr);


// Method of Array - indexOf--
// const marks = [34, 23, 24, 93, 73, 25];
// let value = marks.indexOf(34);
// console.log(value);

// Mutating or Modifying Arrays
//------ push add value on array end....
// const marks = [34, 23, 24, 93, 73, 25];
// marks.push(56);  // added value on array end;
// console.log(marks);


// -- unshift--add value on array starting

// const marks = [34, 23, 24, 93, 73, 25];
// marks.unshift(1001);
// console.log(marks);



//---------- pop -- delete value array end
// const marks = [34, 23, 24, 93, 73, 25];
// marks.pop();
// console.log(marks);


// -- shift -- delete value array starting---

// const marks = [34, 23, 24, 93, 73, 25];
// marks.shift();
// console.log(marks)

//----splice-- number of elemet delete
// const marks = [34, 23, 24, 93, 73, 25];
// marks.splice(1, 3);  // delete 1 index to 3 index
// console.log(marks);


//-------- reverse ------------

// const marks = [34, 23, 24, 93, 73, 25];
// marks.reverse();
// console.log(marks);


// --------- concat ------
let marks = [34, 23, 24, 93, 73, 25];
let marks2 = [1, 2, 3, 4, 5, 6, 7];
marks = marks.concat(marks2);  // adjest two arrays
console.log(marks);


//---------- Object in Javascript ------------
 let myobj = {
     name: 'Saied',
     channel: 'CodeWithHarry',
     isActive: true,
     marks: [1, 3, 4, 5, 7]
 }

 console.log(myobj);
 console.log(myobj['name']);
 console.log(myobj['channel'])
 console.log(myobj['marks'])
 console.log(myobj.name);
 console.log(myobj.isActive);