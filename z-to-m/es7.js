// not many changes in ES7

// includes()

let greet = 'helllllllooooooo';
greet.includes('o') // true

const thePetsArr = ['cat', 'dog', 'fish'];
thePetsArr.includes('fish') // true

// next addition was EXPONENTIAL

// if we wanted to square something for eg = ** 

const squared = (x) => x **2; 
squared(4);

// or cubed;
const cubed = (x) => x **3; 
cubed(4);

// now for some practice: 

/*
// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #3) Create a function that calulates the power of 100 of a number entered as a parameter


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

*/

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John'); // false (though I wasn't sure before running it if Johnathan would trigger it (it did not))

// --------------

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// I found this solution on StackOverflow
let John = dragons2.filter((item) => {
    return item.includes("John")
});
John; // ['Johnathan']

// --------------

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

function powerOfC (x) {
    bigNum = x**100;
    alert(`${x} to the power 100 is ${bigNum}`);
    console.log(bigNum); // 4.0656117753521525e+117
    //return x**100;
}

function getInput () {
    let inNum = prompt('give me a number you want to see the power of 100 for: '); 
    powerOfC(inNum);
}

// --------------

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

getInput(10000); // infinity :-0

// You can't calculate such large numbers solely with JavaScript, you will probably need to use a library for that.




