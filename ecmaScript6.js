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
for (var i = 0; i < 3; i++) {
  numArray01.push(i);
}
console.log(numArray01);
console.log(i);

// Here the console will display the values [0, 1, 2] and 3.
