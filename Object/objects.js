/*------------- objects-------------
--- > JavaScript Objects
-- A javaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.

-JavaScript is an object-based language. Everything is an object in JavaScript.

- JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.
----------------------------------*/

/*----------------------------------
- Creating Objects in JavaScript

There are 3 ways to create objects.

1. By object literal
2. By creating instance of Object directly (using new keyword)
3. By using an object constructor (using new keyword)

----------------------------------*/


/*--------------------------------

1) JavaScript Object by object literal
The syntax of creating object using object literal is given below:

//---- Syntax ------

object={property1:value1,property2:value2.....propertyN:valueN}  

- As you can see, property and value is separated by : (colon).

- Let’s see the simple example of creating object in JavaScript.
------------------------------------*/
 
emp ={
    id:102,
    name:"Shyam Kumar",
    salary:40000
}  

console.log(emp.id+" "+emp.name+" "+emp.salary);  





/*------- Code by Programming Hero ------*/


//----- declear objects -------
/ object/


var student1 = {
    id: 115,
    name: 'Abir Adnan',
    mark: 81,
    phone: 879567
};

var mobile = {
    color: 'black',
    price: 19000,
    screenSize: 5,
    storage: '16gb' 
};

var book = {
    title: 'Start With Why',
    author: 'Simon Sinek',
    price: 200,
    pages: 246,
    publisher: 'penguin'
};