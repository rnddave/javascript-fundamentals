// 2017 release
// few more new features

// string PADDING

/*
.padStart()
.padEnd()
*/

'Turtle'.padStart(10);  // 10 spaces at start
'Turtle'.padEnd(10);    // 10 spaces at end

// ------------

// did something about ending comma (syntacticly nicer)

function fun(a,b,c,d,) { // see the final comma after d - prior to ES8 this was not allowed
                        // becomens useful when paramater list is very long
    console.log(a);
}

// ------------

// object.keys() vs object.entries vs object.values

// sometimes an object you are working with has poor key names for example 

let xmasObject = {
    username0: 'Santa',
    username1: 'father xmas',
    username2: 'St Nick',
    username3: 'Big Red'
}

Object.keys(xmasObject).forEach((key, index) => {           // kind of says for each item in the object
    console.log(key, xmasObject[key]);     // print the key and the key value
})
/*
username0 Santa
username1 father xmas
username2 St Nick
username3 Big Red
*/

Object.values(xmasObject).forEach(value => {
    console.log(value);
})
/*
Santa
father xmas
St Nick
Big Red
*/

Object.entries(xmasObject).forEach(entries => {
    console.log(entries);
})
/*
['username0', 'Santa']
['username1', 'father xmas']
['username2', 'St Nick']
['username3', 'Big Red']
*/

// don't just need forEach, can use any array methods (map, reduce, filter, etc) 

Object.entries(xmasObject).map(value => {       // for example, we want to remove the username from key
    return value[1] + value[0].replace('username', '');
})
/*
['Santa0', 'father xmas1', 'St Nick2', 'Big Red3']
0: "Santa0"
1: "father xmas1"
2: "St Nick2"
3: "Big Red3"
length: 4
*/


// ------------

// async // await

// such a big concept - needs own video

//////// - some ES8 PRACTICE \\\\\\\\\\\\\

/*
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = 'ðŸ¢';
let rabbit = 'ðŸ‡';

// it should look like this:
'     ||<- Start line'
'       ðŸ¢'
'       ðŸ‡'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
*/


// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = 'ðŸ¢';
let rabbit = 'ðŸ‡';

/* 
// it should look like this:
'     ||<- Start line'
'       ðŸ¢'
'       ðŸ‡'
 */

// when you do:
console.log(startLine);
console.log(turtle.padStart(11));
console.log(rabbit.padStart(11)); 

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); // 'ðŸ\x90¢====='
// the padEnd (9) = if the length of the string is not 9 char, then add second parameter to equal len 9
// therefore if it had said padEnd(15) there would be more === at the end
// for eg
let dog = '-||^>';
dog; // '-||^>'

dog2 = dog.trim().padEnd(15, ' woof');
dog2; // '-||^> woof woof' [ 15 chars inc dog & spaces ]

// The trim() method in JavaScript removes the whitespace from both ends of a string without changing the original string.

// ----------------

// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  // to this:
  // 'my name is Rudolf the raindeer'


Object.entries(obj).map(value => {       // for example, we want to remove the username from key
    return value[0] + ' ' + value[1];
}) // ['my name', 'is Rudolf', 'the raindeer']

Object.entries(obj).map(value => value.join(" ")).join(' ') // from the solution page
// my name is Rudolf the raindeer




