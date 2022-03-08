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

let myVar2 = 1;
myVar2 += 5;
console.log(myVar2);
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

let a2 = 11;
let b2 = 9;
let c2 = 3;

a2 -= 6;
b2 *= 15;
c2 += 1;

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

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";

// concatinate

const ourStr = "I come first. " + "I come second.";

// another option >> 

let myStr3 = "This is the first sentence. ";
myStr3 += "This is the second sentence.";

// more examples

const ourName4 = "freeCodeCamp";
const ourStr4 = "Hello, our name is " + ourName4 + ", how are you?";

const myName4 = "secret name here";
const myStr4 = "My name is " + myName4 + " and I am well!";

// more building strings examples >> 

const anAdjective5 = "awesome!";
let ourStr5 = "freeCodeCamp is ";
ourStr5 += anAdjective5;

const someAdjective = "boom-diggy";
let myStr6 = "Learning to code is ";

myStr6 += someAdjective;

// getting to the useful bits - finding lengths >> 

// You can find the length of a String value by writing .length after the string variable or string literal.

console.log("Alan Peter".length);           // 10

//-------------------------

// Use Bracket Notation to Find the First Character in a String

const firstName = "Charles";
const firstLetter = firstName[0];       // C

// In JavaScript, String values are immutable, which means that they cannot be altered once created.

/*

let myStr = "Bob";
myStr[0] = "J";

cannot change the value of myStr to Job, because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. 

The only way to change myStr would be to assign it with a new string, like this:

let myStr = "Bob";
myStr = "Job";
*/

// getting the last char >>> 

const firstName2 = "Ada";
const lastLetter2 = firstName2[firstName2.length - 1];         // a

// this does seem more complicated than in python ??? 

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "the Apple " + myNoun + " is the latest " + myAdjective + " thing to hit the stores. Our intrepid reporter " + myVerb + " " + myAdverb + " to interview people eager to buy it.";

console.log(wordBlanks)             // printing to terminal is harder than in python!
/*
Store Multiple Values in one Variable using JavaScript Arrays

With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:
*/
const sandwich = ["peanut butter", "jelly", "bread"];       // looks like a list - is this different?

/*
Modify Array Data With Indexes

Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
*/

const ourArray = [50, 40, 30];
ourArray[0] = 15;

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  arr[3];
  arr[3][0];
  arr[3][0][1];

/* OUTPUT  
arr[3] is [[10, 11, 12], 13, 14], 
arr[3][0] is [10, 11, 12], 
arr[3][0][1] is 11.
*/

// --- --- --- --- --- --- --- ---

/*
Manipulate Arrays With push()

An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.
*/

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

/*
Manipulate Arrays With pop()

Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

/*
Manipulate Arrays With shift()

pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
*/

const ourArray7 = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray7.shift();

/*
Manipulate Arrays With unshift()

Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
*/

const ourArray8 = ["Stimpson", "J", "cat"];
ourArray8.shift();
ourArray8.unshift("Happy");

// functions

function functionName() {
    console.log("Hello World");
  }

  functionName();

/*
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.
*/

function testFun(param1, param2) {
    console.log(param1, param2);
  }

testFun("this is one param", "this is another")

// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

function plusThree(num) {
    return num + 3;
  }
  
const answer9 = plusThree(5);
console.log(answer9)

/*
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const
*/

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

/*
Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
*/

// >>>>>>>>>>> IF STATEMENTS  <<<<<<<<<<<

// The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. 

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
  test(true);
  test(false);

  /* 
  The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
  */

  function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }

/*
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
*/













