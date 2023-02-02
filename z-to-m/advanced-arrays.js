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
























