// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

// attempt 1:

/* 
var age = prompt('what is your age?');

if (age < 18) {
    alert('Sorry, you are too young to drive this car. Powering off.');
} else if (age === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride');
} else {
    alert('Powering on. Enjoy the ride!');
} 

THIS ONLY RECOGNISED UNDER 18 or OVER 18, did not recognise 18 */

/* 

ATTEMPT 2

var age = prompt('what is your age?');

if (age < 18) {
    alert('Sorry, you are too young to drive this car. Powering off.');
} else if (age === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride');
} else if (age >18) {           // tried adding an else if here - but this seems inefficient as the last else should catch
    alert('Powering on. Enjoy the ride!');
} 

THIS DID NOT WORK -- ONLY RECOGNISED UNDER 18 or OVER 18, did not recognise 18

I suspect this is because the === is looking for a number but receiving a string
*/



/* 

ATTEMPT 3 - convert input to number

var age = prompt('what is your age?');

Number(age);    // trying to convert input to number before if/else

if (age < 18) {
    alert('Sorry, you are too young to drive this car. Powering off.');
} else if (age === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride');
} else if (age >18) {           
    alert('Powering on. Enjoy the ride!');
}  

same problem as previous attempts, i will instead change the if/else for the 18 catcher */

// ATTEMPT 4

var age = prompt('what is your age?');

if (age < 18) {
    alert('Sorry, you are too young to drive this car. Powering off.');
} else if (age > 17 && age < 19) {  // is this too much?
    alert('Congratulations on your first year of driving. Enjoy the ride');
} else {
    alert('Powering on. Enjoy the ride!');
} 

// attempt 4 is a winner, but now to see a suggested anser from the course. 

/* 
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
*/