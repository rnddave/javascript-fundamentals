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
console.log(movieName.match(numRegex).length);              // 4

// The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

let movieName64 = "2001: A Space Odyssey";
let noNumRegex64 = /\D/g; // Change this line
let result64 = movieName64.match(noNumRegex64).length;
console.log(result64);          // 17   

// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine

/*
Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";

// ^            = ^negate anything before the brackets
// [a-z] [a-z]  = first 2 characters need to be a letter (a-z) and we are using the /i case-insensitive flag
// + \d         = + one or more digits
// + $          = + digit needs to be at the end
// |            = OR
// ^            = ^negate anything before the brackets
// [a-z]        = any letter (a-z) and we are using the /i case-insensitive flag
// + \d         = + one or more digits
// + $          = + digit needs to be at the end 
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let result67 = userCheck.test(username);
console.log(result67);
console.log(username.match(userCheck));

/*
You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v]. 
*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

// This match call would return [" ", " "].

// You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace67 = "Whitespace. Whitespace everywhere!"
let spaceRegex67 = /\s/g;
whiteSpace67.match(spaceRegex67);

// This match call would return [" ", " "]

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let resultWhite = sample.match(countWhiteSpace);

// Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let whiteSpace70 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex70 = /\S/g;
whiteSpace70.match(nonSpaceRegex70).length;

// The value returned by the .length method would be 32.

/* 
Specify Upper and Lower Number of Matches

Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.
*/

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

// The first test call would return true, while the second would return false.

// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}.no/g; 
let result73 = ohRegex.test(ohStr);
console.log(result73);

/*
Specify Only the Lower Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
*/

let A4_76 = "haaaah";
let A2_76 = "haah";
let A100_76 = "h" + "a".repeat(100) + "h";
let multipleA76 = /ha{3,}h/;
multipleA76.test(A4_76);
multipleA76.test(A2_76);
multipleA76.test(A100_76);

// In order, the three test calls would return true, false, and true.

let haStr79 = "Hazzzzah";
let haRegex79 = /Haz{4,}ah/; // Change this line
let result79 = haRegex79.test(haStr79);


/*
To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.
*/

let A4_79 = "haaaah";
let A3_79 = "haaah";
let A100_79 = "h" + "a".repeat(100) + "h";
let multipleHA79 = /ha{3}h/;
multipleHA79.test(A4_79);
multipleHA79.test(A3_79);
multipleHA79.test(A100_79);

// In order, the three test calls would return false, true, and false.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result82 = timRegex.test(timStr);

/*
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.*/

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

// Both uses of the test method would return true.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result85 = favRegex.test(favWord);

/*
Positive and Negative Lookahead

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.*/

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;      // is it there?
let qRegex = /q(?!u)/;      // is it NOT there?
quit.match(quRegex);
noquit.match(qRegex);

// Both of these match calls would return ["q"].

// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);






