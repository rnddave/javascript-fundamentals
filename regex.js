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

// using Match to extract the matched item... 

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex); 
console.log(result4);

/*
the output for this is unexpected >>> 

[
  'coding',
  index: 18,
  input: "Extract the word 'coding' from this string.",
  groups: undefined
]
*/

/*
So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the g flag.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
And here match returns the value ["Repeat", "Repeat", "Repeat"]

*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
let result5 = twinkleStar.match(starRegex); 
console.log(result5);                           // [ 'Twinkle', 'twinkle' ]


// the [ dot \\ . \\ period ] = wild card >>

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result6 = unRegex.test(exampleStr);
console.log(result6)
