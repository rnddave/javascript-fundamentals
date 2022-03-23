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

// the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
// let power = raiseToPower(exp, base);   // THIS IS THE WRONG WAY ROUND
let power = raiseToPower(base, exp);
console.log(power);

/*
Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined.

When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors: 
*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
    console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
    console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
    console.log(alphabet[k]);
}

// The first example here loops one too many times, and the second loops one too few times (missing the first index, 0). The third example is correct.

/*
Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
*/

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray

        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);                    // [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ]

// change to >>> 

function zeroArray_b(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray_b = [];
    let row_b = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray

        //console.log(newArray,'\n');
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray_b.push(row_b);
        //console.log(newArray,'\n');
    }
for (let j = 0; j < n; j++) {               // I have moved this to outisde the first for loop
        // Pushes n zeroes into the current row to create the columns
        row_b.push(0);
    }
    return newArray_b;
}

let matrix_b = zeroArray_b(3, 2);
console.log(matrix_b);                      // [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]


/*
The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.

There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the while loop inside loopy(). Do NOT call this function!

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}

It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.
*/



