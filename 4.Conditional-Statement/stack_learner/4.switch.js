//------- Switch Statement ----------
/*
The objective of a switch statement is to give an expression to evaluate and several different statements to execute based on the value of the expression. The interpreter checks each case against the value of the expression until a match is found. If nothing matches, a default condition will be used.

switch (expression) {
   case condition 1: statement(s)
   break;
   
   case condition 2: statement(s)
   break;
   ...
   
   case condition n: statement(s)
   break;
   
   default: statement(s)
}

The break statements indicate the end of a particular case. 
*/

//------------ find day by switch case -----------

/*
some logic
-------
0 - hole - Sunday
1 - Monday
2 - Tushday

*/

var date = new Date()

var today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    default: console.log('Not a Vaild Number')
}

// sothik value na poya gele default value set kore dite parbo


//----------- Another Code -----------
const pet = "dog";

if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}

//--------- use switch case ------------
const pet = "dog";
 
switch (pet) {
  case "lizard":
    console.log("I own a lizard");
    break;
  case "dog":
    console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("I own a snake");
    break;
  case "parrot":
    console.log("I own a parrot");
    break;
  default:
    console.log("I don't own a pet");
    break;
}