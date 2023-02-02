// advanced arrays (ES6 extras) 

const array = [2, 4, 6, 8];

const arrSqrd = []; // making my empty array

const newArr = array.forEach((elem) => { // for each element do the arrow function
    // console.log(elem*elem); // console.log (elem^2)
    arrSqrd.push(elem*elem); // populate the previously defined empty array
});

arrSqrd;

// lets look at MAP, FILTER, REDUCE
// probably most commonly used arrays in JS

const mapArr = array.map((elem) => {
    return elem*elem;
});

// whats the difference between forEach and Map? 
// if you're going through an array and want a new array - use MAP() 
// map() has a restriction on operation, it EXPECTS a RETURN 

// map iterates, apply the operation on each element and then store the result into a new collection 
// in other words map transfors the array (creates a new array)

// VS foreach() which can do any number of actions, but it doesn't have to return anything
// remember to avoid sideaffects , foreach can introduce side affects
// VS with map(), side affects are theoretically gone because have to return something 

// we're never mutating the original data in this example 

/* BTW - IMPORTANT TO NOTE THESE ALTERNATIVES

const mapArr = array.map(elem => { // NOTE THIS elem IS NO LONGER IN BRACKETS, as only one parameter, don't need the brackets here
    return elem*elem;
});

// but we can improve on this further still >>>> 

const mapArr = array.map(elem => elem*elem); // how much tidier does this look?

*/

const mapArr2 = array.map(elem => elem*elem);

// -0-0-0- -0-0-0-0- -0-0-0- -0-0-0-0- -0-0-0- \\ 

// FILTER \\

const filteredArr = mapArr2.filter(elem => elem > 10); // create a new array that filters out only the elements that are greater than 10


// -0-0-0- -0-0-0-0- -0-0-0- -0-0-0-0- -0-0-0- \\ 

// REDUCE \\

const arrayForReduce = [ 1, 3, 5, 6, 7, 8,9,2,4,3,1,232,32,4,5,6565,7,8,9 ];

arrayForReduce.sort(); // interestingly this did not sort as I expected, it sorted it by first digit, therefore seeing 1, 2, 232, 3 as being an appropriate order, which was not as I imagined
// FROM DOCS >> the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

// let me try this: 

arrayForReduce.sort((a, b) => a - b); // THIS DOES INDEED WORK AS I IMAGINED 

// JavaScript’s reduce method is one of the cornerstones of functional programming. 
// Use it when: You have an array of amounts and you want to add them all up.

const arrayHasReduced = arrayForReduce.reduce((total, elem) => total + elem);

// so what this does is essentially do a running total, read like this
// total = 0
// get first element = 1
// add element to total = 1
// total = 1
// get the next element = 1
// add element to total = 2
// total = 2
// and so on until all elements have been added to the total

// from VIDEO

// can do filtering and mapping (somehow) 
// const newArray = array.reduce((accumulator, element))

// you can specify a default value for the accumulator 

const newReducedArray = array.reduce((accum, elem) => accum + elem, 5); // the 5 at the end changes accumulator from 0 to 5 (don't know why you want to do this )

// the Reduce Method In JavaScript​ gives you a mini CodePen where you can write whatever logic you want. It will repeat the logic for each amount in the array and then return a single value.

// you don’t always have to return a single value. You can reduce an array into a new array.

const anotherNewArryBoo = arrayForReduce.reduce((accum, elem) => {accum.push(elem*elem), []}); // can't get this to work as a one liner, will try breaking it up a bit. 

const anotherNewArray = arrayForReduce.reduce((accum, elem) => {
    accum.push(elem*elem);
    return accum;
}, []);

/*
anotherNewArray
(19) [1, 1, 4, 9, 9, 16, 16, 25, 25, 36, 49, 49, 64, 64, 81, 81, 1024, 53824, 43099225]
*/
























