/*
Debugging is the process of going through your code, finding any issues, and fixing them.

Issues in code generally come in three forms: 

syntax errors that prevent your program from running, 
runtime errors where your code has unexpected behavior, 
logical errors where your code doesn't do what you intended.

*/

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});

/*
string
number
object
object
*/

// JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

/*
Branching programs, i.e. ones that do different things if certain conditions are met, rely on if, else if, and else statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.

This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the =, or assignment operator. This leads to unexpected control flow in your program.

As covered in previous challenges, the assignment operator (=) in JavaScript assigns a value to a variable name. And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).

The code below assigns x to be 2, which evaluates as true. Almost every value on its own in JavaScript evaluates to true, except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

let x = 1;
let y = 2;
if (x = y) {

} else {

}
In this example, the code block within the if statement will run for any value of y, unless y is falsy. The else block, which we expect to run here, will not actually run.
*/









