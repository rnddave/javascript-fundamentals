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

