// OBJECTS >>> Here is a sample of using dot notation (.) to read an object's property:

const myObj75 = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObj75.prop1;
const prop2val = myObj75.prop2;

/*
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
 
However, you can still use bracket notation on object properties without spaces.
 
Here is a sample of using bracket notation to read an object's property: */

const myObj76 = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

myObj76["Space Name"];
myObj76['More Space'];
myObj76["NoSpace"];

/*
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
 
Here is an example of using a variable to access a property:*/

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
// console.log("are you working?"); // yes it is now working...

const someObj = {
    propName: "John"
};

function propPrefix(str) {
    const s = "prop";
    return s + str;
}

// Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:


const someProp = propPrefix("Name");
console.log(someObj[someProp]);

// ^^^ 100% do not get this, what is the point of this, this seems very inefficient, perhaps just a bad coding example? 

//   You can add new properties to existing JavaScript objects the same way you would modify them.

// we can test this using the dogs object from earlier: 

console.log(dogs);
// { Fido: 'Mutt', Hunter: 'Doberman', Snoopie: 'Beagle' }

dogs.Scooby = "Great Dane";
console.log(dogs);
/*
{
  Fido: 'Mutt',
  Hunter: 'Doberman',
  Snoopie: 'Beagle',
  Scooby: 'Great Dane'
}
*/

/*
We can also delete properties from objects like this:

delete ourDog.bark;
*/

function phoneticLookup(val) {
    let result = "";

    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    }

    result = lookup[val];

    return result;
}

phoneticLookup("charlie");
console.log(phoneticLookup("charlie"))

/*
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
*/

/*
Manipulating Complex Objects

Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
*/

const ourMusic = [
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];

console.log(ourMusic);

//  JavaScript Object Notation or JSON is a related data interchange format used to store data.

//The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage.cabinet["top drawer"].folder2)

// basic-ja = 83% complete >>> new file = record-collection.js

// after record-collection.js == 84% complete

const ourArray84 = [];
let i = 0;

while (i < 5) {
  ourArray84.push(i);
  i++;
  console.log(ourArray84);
}

/* OUTPUT

[ 0 ]
[ 0, 1 ]
[ 0, 1, 2 ]
[ 0, 1, 2, 3 ]
[ 0, 1, 2, 3, 4 ] */

/*
For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.
*/

const ourArray85 = [];

for (let i = 0; i < 5; i++) {   // looks a bit like a lambda statement from python ?? 
  ourArray85.push(i);
}
console.log(ourArray85);
// ourArray85 will now have the value [0, 1, 2, 3, 4].


const myArray86 = [];

for (let j = 1; j < 6; j++) {
  myArray86.push(j);
}

const ourArray86 = [];

for (let i = 0; i < 10; i += 2) {       // count by 2 instead
  ourArray86.push(i);
}

const ourArray87 = [];

for (let i = 10; i > 0; i -= 2) {       // count backwards by 2
  ourArray87.push(i);
}

const arr88 = [10, 9, 8, 7, 6];

for (let i = 0; i < arr88.length; i++) {
   console.log(arr88[i]);
}

// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

const myArr88 = [2, 3, 4, 5, 6];

let total88 = 0;

for (let i = 0; i < myArr88.length; i++) {
  //console.log(myArr88[i])
  total88 += myArr88[i]
}

console.log(total88)

const arr89 = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr89.length; i++) {
  for (let j = 0; j < arr89[i].length; j++) {
    console.log(arr89[i][j]);
  }
}


// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
  let product = 1;

  for (let i88 = 0; i88 < arr.length; i88++) {
    for (let j88 = 0; j88 < arr[i88].length; j88++) {
      product *= arr[i88][j88];
      console.log(product)
    }
  }

  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/*
The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
*/

const ourArray89 = [];
let i89 = 0;

console.log(i89);

do {
  ourArray89.push(i89);
  i89++;
  console.log(i89);
} while (i89 < 5);

// Essentially, a do...while loop ensures that the code inside the loop will run at least once.

// RECURSIVE = recursive.js === this is complicated!! 

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum91(arr, n) {

  if (n <= 0) {
    return 0;
  }
  else {
    return sum91(arr, n - 1) + arr[n - 1];
  }
}

// aprox 91-92% == PROFILE-LOOKUP.JS

// profile-lookup.js is complete and working >>> (basic-js = 92% complete)

/* 
JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

Math.floor(Math.random() * 20);

We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.
*/

// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange94(myMin94, myMax94) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax94 - myMin94 +1)) + myMin94;
  // Only change code above this line
}


/*
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);
And here's an example:

const a = parseInt("11", 2);
The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
*/

// The following function uses an if/else statement to check a condition:

function findGreater95(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

// This can be re-written using the conditional operator:

function findGreater96(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

/*
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.
*/

function checkEqual97(a, b) {

  return a != b ? "Not Equal" : "Equal";

}

checkEqual97(1, 2);

// multiple conditional operators

function findGreaterOrEqual97(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

// It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read.


/* In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.
*/

function checkSign98(num) {

  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero";


}

checkSign98(10);

// 98% = recursion-countdown.js





