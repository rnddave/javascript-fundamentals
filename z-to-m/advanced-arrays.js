// advanced arrays (ES6 extras) 

const array = [2, 4, 6, 8];

const arrSqrd = []; // making my empty array

const newArr = array.forEach((elem) => { // for each element do the arrow function
    // console.log(elem*elem); // console.log (elem^2)
    arrSqrd.push(elem*elem); // populate the previously defined empty array
})

arrSqrd;