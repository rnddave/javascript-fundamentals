// Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.


// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));        // The test method here returns true.


let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;         // this is the OR option (will return true)
let result = petRegex.test(petString);
console.log(result);                        // true

/*
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
*/

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;         // i = case insensitive
let result3 = fccRegex.test(myString);
console.log(result3);                   // true



