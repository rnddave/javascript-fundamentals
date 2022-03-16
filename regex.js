// Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.


// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));        // The test method here returns true.







