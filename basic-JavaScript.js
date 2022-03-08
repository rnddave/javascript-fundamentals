// we're starting with comments

/* 
another comment 
*/

var myName;     // camel case seems odd after python stuff I was following, additionally the need for semi-colon is odd

// BEST PRACTICE >> Write variable names in JavaScript in camelCase

var a;
a = 7;          // assigning value to a variable, but can you assign at point of creation? 
var myVar = 0;  // yes, you can!!

var myFirstName = "first name"              // strange that fcc tests allowed this to pass without using the semi-colon 
var mySecondName = "second name"            // is the semi-colon optional?

/* 
IF THERE ARE ERRORS AT RUN TIME 
LOOK ABOVE THIS SECTION
AS THE FCC TESTS ALLOWED THIS TO PASS 
WITHOUT THE SEMI-COLON
*/

/*
JavaScript uses a (generally disliked) method called Semicolon Insertion, where it will allow you to omit semicolons.

In general, do not rely on semicolon insertion. It is a poorly thought out feature and will hurt you before it helps you.
*/

/* When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of undefined. */

var camper = "James";
var camper = "David";
console.log(camper);

// difference between var & let, var can be overwritten, I think let cannot be over written

/* 
The main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).

https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
*/

// what about CONST >>> 

/*
variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned 

It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). */

const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

/*
>>> Increment a Number with JavaScript

You can easily increment or add one to a variable with the ++ operator.

i++;
is the equivalent of

i = i + 1;
Note: The entire line becomes i++;, eliminating the need for the equal sign.

>>> Decrement a Number with JavaScript

You can easily decrement or decrease a variable by one with the -- operator.

i--;
*/

// The remainder operator % gives the remainder of the division of two numbers.

let myVar = 1;
myVar += 5;
console.log(myVar);
// 6 would be displayed in the console.

/*
Compound Assignment With Augmented Subtraction
Like the += operator, -= subtracts a number from a variable.

myVar = myVar - 5;
will subtract 5 from myVar. This can be rewritten as:

myVar -= 5;

ALSO WORKS WITH

myVar += 5;
myVar *= 5;
myVar /= 5;
*/

let a = 11;
let b = 9;
let c = 3;

a -= 6;
b *= 15;
c += 1;

/*
Escaping Literal Quotes in Strings
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
*/

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// escape characters >>> 

/*
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// concatinate

const ourStr = "I come first. " + "I come second.";

// another option >> 

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// more examples

const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

const myName = "secret name here";
const myStr = "My name is " + myName + " and I am well!";

// more building strings examples >> 

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;







