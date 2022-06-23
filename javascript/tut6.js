//Strings_Properties, Methods & Template Literals in JavaSc

// console.log('We are at tut 6');
// const name = "Saied";
// const greeting = "Good Morning";
// console.log(greeting+' '+ name);

// String Function -- Concat----

// let html;
// html = '<h1> This Is Heading</h1>'+
//         '<p> This Is Para</p>';

// html = html.concat('this', ' str2');
// console.log(html.length);  // print length


// // toLowerCase, toUpperCase
// console.log(html.toLowerCase());  // convert to tower case
// console.log(html.toUpperCase());  // convert to Upper case
// console.log(html);


//-------- To more example ---------


// let html;
// html = '<h1> This Is Heading</h1>'+
//         '<p> This Is Para</p>';

// console.log(html);
// console.log(html[1]);  // print value index


// console.log(html);
// console.log(html.indexOf('Heading'));
// console.log(html.indexOf('<'));  
// console.log(html.lastIndexOf('>'));
// console.log(html.charAt(5));  // print by index number

// console.log(html.endsWith('Para')); // print false
// console.log(html.endsWith('>'));  // print true
// console.log(html.includes('is')); // print true/false
// console.log(html.substring(1,6));

// console.log(html.slice(0, 4));
// console.log(html.split(' ')) // print string like arry
// console.log(html.split('>'))
// console.log(html.replace('This', 'it'));





//Template Literals in JavaScript

//  let name = 'Saied';
//  let fruit1 = 'Orange\'';
//  let fruit2 = 'Apple';
//  let myHtml = `Hello ${name}
//                 <h1> This is "my" heading </h1>
//                 <p> You Like ${fruit1} and ${fruit2}
                
//                 `;

// document.body.innerHTML = myHtml;

//---------example 2 ------

// name = "Saied"
// code = `<h1> Hello ${name}</h1>`  // there are use (``), for template Literals
// document.body.innerHTML = code;



// -------- example 3 --------

let car1 = 'BMW';
let car2 = 'Audi';
let myCar = ` I like ${car2} but My Favourite car is ${car2}`;
document.body.innerHTML = myCar;
// let car1 = 'BMW';
// let car2 = 'Audi';
// let lanHtml = ` I like ${car1} but my favourite car is ${car2}`;
// document.body.innerHTML = lanHtml;