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

/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    let anotherNewArray = [];

    for (let i = 0; i < arr.length; i++) {
        let tempNum = arr[i];
        let bigOnes = -Infinity;

        for (let j = 0; j < tempNum.length; j++) {
            if (tempNum[j] > bigOnes) {
                bigOnes = tempNum[j];
            }
        }
        anotherNewArray.push(bigOnes);
    }
    console.log(anotherNewArray);
    return anotherNewArray;

    //return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])

/*
[ 5, 27, 39, 1001 ]
[ 25, 48, 21, -3 ]
*/

/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    console.log(str.indexOf(target, str.length - target.length) !== -1);    //true
    return str.indexOf(target, str.length - target.length) !== -1;
}

confirmEnding("Bastian", "n");

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str38, num38) {
    let newString = '';

    if (num38 > 0) {
        for (let i = 0; i < num38; i++) {
            newString += str38;
            console.log(newString);
        }
        return newString;
    }
    else {
        return newString;
    }

}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", -3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str50, num50) {
    //let newString44 = '';

    if (str50.length > num50) {
        //newString44
        console.log(str50.slice(0, num50) + '...');
        return str50.slice(0, num50) + '...';
    } else {
        return str50;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);





