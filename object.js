/*
1. A javaScript object is an entity having state and behavior (properties and method). 
   For example: car, pen, bike, chair, glass, keyboard, monitor etc.

2. JavaScript is an object-based language. Everything is an object in JavaScript.

3. JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

*/

/*
-> There are 3 ways to create objects.

1. By object literal
2. By creating instance of Object directly (using new keyword)
3. By using an object constructor (using new keyword)


*/

// 1. JavaScript Object by Object Literal

// The syntax of creating object using object literal is given below:

// object={property1:value1,property2:value2.....propertyN:valueN}  

// emp = {id:101, name:"Saied Anwar", salary: 40000}
// document.write(emp.id+" "+emp.name+" "+emp.salary);




// 2 - By creating instance of Object
// The syntax of creating object directly is given below:

// var objectName = new Object()  // here, new keyword is used to create object.

// Let's see the example of creating object directly.

// var emp = new Object()
// emp.id = 102;
// emp.name = "Jakir Hossain";
// emp.salary = 50000;

// console.log(emp.id+" "+emp.name+" "+emp.salary);




// 3 - By using an Object constructor

/*
1. Here, you need to create function with argument.
2. Each argument value can be assigned in the current object by using (this keyword)
3. The (this keyword) refers to the current object
*/

// The example of creating object by object constructor is given below:

// function emp(id, name, salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary
// }

// e = new emp(103, "Saimun hossain", 60000);

// document.write(e.id+" "+e.name+" "+e.salary);




// Defining method in JavaScript Object
/*
We can define method in Javascript object. But before defining method,
we property in the function with same name as method.
*/
// The example of definin method in object is given below:

function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;


    this.changeSalary = changeSalary;
    function changeSalary(otherSalary){
        this.salary = otherSalary;
    }
}

e=new emp(103,"Sourve Pual",30000);
document.write(e.id+" "+e.name+" "+e.salary);
e.changeSalary(45000);

document.write('<br>'+e.id+" "+e.name+" "+e.salary);

