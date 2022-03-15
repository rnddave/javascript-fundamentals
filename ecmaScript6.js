/*
ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.

Most of the JavaScript you've learned up to this point [basic-js] was in ES5 (ECMAScript 5), which was finalized in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.

ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.
*/


/*
If you are unfamiliar with let, check out this challenge.

When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

For example:
*/

var numArray01 = [];
for (var i01 = 0; i01 < 3; i01++) {
  numArray01.push(i01);
}
console.log(numArray01);
console.log(i01);

// Here the console will display the values [0, 1, 2] and 3.

//With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:

var numArray01b = [];
var i01b;
for (i01b = 0; i01b < 3; i01b++) {
  numArray01b.push(i01b);
}
console.log(numArray01b);
console.log(i01b);

// Here the console will display the values [0, 1, 2] and 3.

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

/*
Here the console will display the value 3.

As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. */

let printNumTwo01b;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo01b = function() {
      return i;
    };
  }
}
console.log(printNumTwo01b());
console.log(i);

// the console will display the value 2, and an error that i is not defined.

// CONST

// objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

const s01 = [5, 2, 7];
console.log(s01);
s01.sort()
console.log(s01);
/*
[ 5, 2, 7 ]
[ 2, 5, 7 ]
*/

// const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad";           // basically these lines are just ignored
  obj.newProp = "Test";
  console.log(obj); 

// { name: 'FreeCodeCamp', review: 'Awesome' }

/*
>>> Use Arrow Functions to Write Concise Anonymous Functions

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";
This code will still return the string value by default.
*/

// Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
doubler(4);
console.log(doubler(4));                // 8
console.log(doubler(1234));             // 2468

// It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2));          // 8

/*
Set Default Parameters for Your Functions

In order to help us create more flexible functions, ES6 introduces default parameters for functions.
*/

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// The console will display the strings Hello John and Hello Anonymous.

/*
Use the Rest Parameter with Function Parameters

In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
*/

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));

//  The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

//The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

// kind of like the *args in python ?? 

// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);
// maximus would have a value of 89.
// ...arr returns an unpacked array. In other words, it spreads the array. 

/*
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

const {today: highToday} = HIGH_TEMPERATURES;
const {tomorrow: highTomorrow} = HIGH_TEMPERATURES;

/*
One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

The console will display the values of a and b as 1, 2.
*/

// We can also access the value at any index in an array with destructuring by using commas to reach the desired index

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);                       // 1 2 5


const [a40, b40, ...arr40] = [1, 2, 3, 4, 5, 7];
console.log(a40, b40);
console.log(arr40);
/*
1 2
[ 3, 4, 5, 7 ]
*/

/*
A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
*/

const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  const greeting2 = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting2);

  /*
  Hello, my name is Zodiac Hasbro!
  I am 56 years old.
  */

 /*
 Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList);

/* 
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
] 
*/


/*
ES6 provides a new syntax to create objects, using the class keyword.

It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

n ES5, we usually define a constructor function and use the new keyword to instantiate an object.

var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

Note: UpperCamelCase should be used by convention for ES6 class names
*/

class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }

  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

  








