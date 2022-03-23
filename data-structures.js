/*
The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
The console.log call displays 7.

All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length. A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
*/

const ARRAY_LENGTH = 3
let yourArray01 = []; // Change this line
for(let i = 0; i<ARRAY_LENGTH; i++) {yourArray01.push(Math.random())}
console.log(yourArray01);           //  [ 0.0756827638410218, 0.1836435905978453, 0.34861557436391033 ]
yourArray01.push(true, 'blah')
console.log(yourArray01);

/*
[
  0.0756827638410218,
  0.1836435905978453,
  0.34861557436391033,
  true,
  'blah'
]
*/














