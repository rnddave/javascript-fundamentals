/* 
Convert Celsius to Fahrenheit

The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

*/

function convertToF_06(celsius) {
    let fahrenheit = 0;

    fahrenheit = (celsius * 9) / 5 + 32;
    console.log(fahrenheit);                // 86

    return fahrenheit;
}

convertToF_06(30);

/*
Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
    console.log(str);

    let newArr = []           // an array
    newArr = str.split('');   // string to array
    console.log(newArr);      // what does it look like?

    newArr.reverse();         // now to reverse the array
    console.log(newArr);      // look like

    str = newArr.join('');    // back to a string (need the '' to avoid comma between char)
    console.log(str)          // look like          //  olleh

    return str;
}

reverseString("hello");

/*
Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    console.log(num);
    let factor = 1;
    for (let i = 2; i <= num; i++) {
        factor *= i;
        console.log(factor);
    }
    return factor;
}

factorialize(5);

/*
Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


function findLongestWordLength(str) {
    console.log(str.length);  // look like

    let newArr = []           // an array
    newArr = str.split(' ');  // string to array
    console.log(newArr);      // look like

    let longest = 0;          // string length = 0

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length > longest) {
                            // if element.length is longer than 0 then (1st)
                            // if next loop length is bigger than longest then
            longest = newArr[i].length;
                            // record the length
        }

    }
    console.log(longest);       // 6
    return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");













