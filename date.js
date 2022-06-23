//---------- Date Functions ----------------
/*

JavaScript Get Date Methods ; The getTime() Method. The getTime() method returns the number of milliseconds since January 1, 1970

*/
// new Date()  --> show current time and date
//date.toDateSting() --> day month year in string


var date = new Date()
console.log(date)   // show current time

console.log(date.toDateString())  //date stream day month year

console.log(date.toTimeString())  // time stream

console.log(date.toLocaleString())  // local time stream

//------ find current year -----

console.log(date.getFullYear())


//------- find current month -----
console.log(date.getMonth())  // 0 january

//-------- find current date ----

console.log(date.getDate())


//-------- find current hours ------
console.log(date.getHours())

//------------- current minutes --------
console.log(date.getMinutes())

//------- find current seconds -----
console.log(date.getSeconds())