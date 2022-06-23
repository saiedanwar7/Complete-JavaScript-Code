
/*--------------- JavaScript For loop ----------

The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. The syntax of for loop is given below.

for (initialization; condition; increment)  
{  
    code to be executed  
}  


<script>  
for (i=1; i<=5; i++)  
{  
document.write(i + "<br/>")  
}  
</script>  


*/
//--------- code 1 -------

for (var i = 0; i < 100; i++){
    console.log((i + 1) + ' Saied Anwar')  // 100 bar print hobe
}



//---------- code 2 -------


var n
for (n = 1; n < 10; n++){
    console.log((n + 1) + ' javascirpt')
}



//Note- ekta single line e multiple statement use korte hobe (;) semicolon dite hobe

//-------------code - 3-----------

for (var j = 0; j < 1000; j += 100){
    console.log(j + ' saied anwar')
}



//------ print as negative way-----------
// protibar k er man ke - e niye print korteci

for (var k = 0; k < 1000; k -= 100){
    console.log(k + ' Saied')
}


//------- print  100 number ----

for (var i = 1; i <= 100; i++){
    console.log(i)
}


//--------- find odd number ---------


for (var i = 1; i <= 100; i++){
    if (i % 2 == 1) {
        console.log(i)
    }
}


//--------- find even number ----------

for (var i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        console.log(i)
    }
}


//----------- 1 to 10 sum -----

var sum = 0;

for (var i = 1; i <= 10; i++){
    sum += i
    console.log(sum)
}


//---- another way -------

var sum = 0;

for (var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum + i))
    sum += i;
}

console.log('result = ' + sum)


//----------- plus even number from 100 -------

var sum = 0
for (var i = 1; i <= 100; i++){
        if (i % 2 == 0) {
            console.log(i + sum)
            sum = sum + i
        }
    }