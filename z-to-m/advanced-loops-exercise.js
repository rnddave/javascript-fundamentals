/*
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {

}

function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

}
*/

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    let bigBoy = 0;
    for (let i=0; i < arr.length; i++) {
        if ((arr)[i] > bigBoy) {
            bigBoy = arr[i];
        }
    }
    return bigBoy;  
}
// array    100
// array2   4
// array3   0

function biggestNumberInArray2(arr) {
    let bigBoy = 0;
    arr.forEach(element => {
        if ((arr)[element] > bigBoy) {
            bigBoy = arr[element];
        }
    });
    return bigBoy;
}
// array    100
// array2   4
// array3   0

function biggestNumberInArray3(arr) {
    let bigBoy = 0;
    for (elem of arr) { 
        if (elem > bigBoy) {
            bigBoy = elem;
        }
    }; 
    return bigBoy;
}
// array    100
// array2   4
// array3   0

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
  }
/* 

THIS IS MINE - DIDN'T WORK

  function checkBasket(basket, lookingFor) {
    for (elem in basket) {
        console.log(lookingFor in basket);
    }
  } 
*/

// SOLLUTION 

function checkBasket(basket, lookingFor) {
    for (item in basket) {
      if (item === lookingFor) {
        return `${lookingFor} is in your basket`
      }
    }
    return 'that does not exist in your basket'
  }

  
//  checkBasket(amazonBasket, 'books');
//  'books is in your basket'















