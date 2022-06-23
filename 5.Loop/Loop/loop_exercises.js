//--- array ----------

const array = [6, 7, 8, 9, 10];
for (const number of array.reverse()) {
    console.log(number);
}


//--------- Implementing Custom Logic on an Array -------

const arr = [
    "a string",
    2,
    "another string",
    {
        text: "an object",
    },
    ["a", "nested", "array"],
    "last string"
];

const arrOfStrings = []

for (let index = 0; index < arr.length; index++){
    const element = arr[index];
    if (typeof element === "string") {
        arrOfStrings.push(element)
    }
}

console.log(arrOfStrings)
    
