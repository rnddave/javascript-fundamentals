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

// Also, it is possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let myRegex9 = /[a-z0-9]/ig;
console.log(jennyStr.match(myRegex9));

/*
[
  'J', 'e', 'n', 'n',
  'y', '8', '6', '7',
  '5', '3', '0', '9'
]
*/

let quoteSample10 = "Blueberry 3.141592653s are delicious.";
let myRegex10 = /[h-s2-6]/ig; 
let result10 = quoteSample10.match(myRegex10); 
console.log(result10);

/*
To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
*/

let quoteSample11 = "3 blind mice.";
let myRegex11 = /[^aeiou1-9]/ig; 
let result11 = quoteSample11.match(myRegex11); 
console.log(result11);

let difficultSpelling = "Mississippi";
let myRegex12 = /s+/g;              // this will find any sequences of more than 1 's'
let result12 = difficultSpelling.match(myRegex12);          // 'ss' 'ss'

/*
There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/ /*;     // I added this extra comment line else this will uncomment
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

*/

// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

// However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.


// In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));     // false
console.log(notFirst);

// The first test call would return true, while the second would return false.

// You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));         // false

// The first test call would return true, while the second would return false.

/*
Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_). */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// All four of these test calls would return true.

//You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let shortHand52 = /\W/;
let numbers52 = "42%";
let sentence52 = "Coding!";
numbers52.match(shortHand52);
sentence52.match(shortHand52);

// The first match call would return the value ["%"] and the second would return ["!"].

/*
You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result58 = movieName.match(numRegex).length;
console.log(movieName.match(numRegex).length);          // 4










