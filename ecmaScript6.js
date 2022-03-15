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

