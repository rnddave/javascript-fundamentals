
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!

alert('You will be asked for 2 numbers and an operator');
var num1 = prompt('enter the first number ');
var num2 = prompt('enter the second number ');
var oper = prompt('do you want to +, -, *, / ?');

if (oper === '+') {
    sum = num1 + num2;
    alert('the answer is: ' + sum);
} else if (oper === '-') {
    sum = num1 - num2;
    alert('the answer is: ' + sum);
} else if (oper === '*') {
    sum = num1 * num2;
    alert('the answer is: ' + sum);
} else if (oper === '/') {
    sum = num1 / num2;
    alert('the answer is: ' + sum);
} else {
    alert('you did not enter the correct inputs');
}

// this works fine!