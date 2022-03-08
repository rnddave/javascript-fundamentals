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

function test(myCondition) {
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


Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false

*/

// typeof (like type() in python ??)

/*
Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
*/

// The inequality operator (!=) is the opposite of the equality operator. 

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

/*
Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/

/*
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:
*/
if (num > 5) {
    if (num < 10) {
        return "Yes";
    }
}
return "No";

/*
will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:
*/

if (num > 5 && num < 10) {
    return "Yes";
}
return "No";


// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false

if (num > 10 || num < 5) {
    return "No";
}
return "Yes";

// else

if (num > 10) {
    return "Bigger than 10";
} else {
    return "10 or Less";
}

// Introducing Else If Statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}

// -->> GOLF-CODE.js <<--

// Selecting from Many Options with Switch Statements

switch (lowercaseLetter) {
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
}

/* 
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.

Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case 1:
            answer = "alpha";
            break;
    }

    switch (val) {
        case 2:
            answer = "beta";
            break;
    }

    switch (val) {
        case 3:
            answer = "gamma";
            break;
    }

    switch (val) {
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}

caseInSwitch(1);

// definitely don't get this case/switch shit

/*
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

switch (num) {
 case value1:
   statement1;
   break;
 case value2:
   statement2;
   break;
...
 default:
   defaultStatement;
   break;
}
*/

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    // Only change code above this line
    return answer;
}

switchOfStuff(1);

/*
Multiple Identical Options in Switch Statements

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch(val) {
 case 1:
 case 2:
 case 3:
   result = "1, 2, or 3";
   break;
 case 4:
   result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.


Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High
*/

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);

/*
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
*/

/*
Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}
*/

// >>> CARD-COUNTING.JS <<<

















