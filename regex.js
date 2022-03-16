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


/*
You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// find the vowels 

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[a|e|i|o|u]/ig; // Change this line
let result7 = quoteSample.match(vowelRegex); // Change this line
console.log(result7);

// finding a range (whole alphabet...)

let quoteSample8 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result8 = quoteSample8.match(alphabetRegex); // Change this line
console.log(result8);
/*
[
  'T', 'h', 'e', 'q', 'u', 'i', 'c',
  'k', 'b', 'r', 'o', 'w', 'n', 'f',
  'o', 'x', 'j', 'u', 'm', 'p', 's',
  'o', 'v', 'e', 'r', 't', 'h', 'e',
  'l', 'a', 'z', 'y', 'd', 'o', 'g'
]
*/
console.log(typeof result8);        // object

result8.sort();
console.log(result8);
/*[
  'T', 'a', 'b', 'c', 'd', 'e', 'e',
  'e', 'f', 'g', 'h', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'o', 'o',
  'o', 'p', 'q', 'r', 'r', 's', 't',
  'u', 'u', 'v', 'w', 'x', 'y', 'z'
]*/







