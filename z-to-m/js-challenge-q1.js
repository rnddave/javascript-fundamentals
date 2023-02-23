// Optional Exercise: Javascript Logic

// quick side challenge from LinkedIn

const obj1 = {a:1, b: {c: 2}};
const obj2 = {...obj1};
obj2.b.c = 3;
console.log(obj1.b.c);
/* 
Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/

const arrayBegin = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]; 
// let's sort the array first. 
arrayBegin.sort(function(a, b) {    
    return a - b;
});
// sortedArr;   // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]
// console.log(arrayBegin);

function cleanTheRoom (arr) {
    let startCount = 0;     // review this

    arr.forEach(function(num, i) {  // checks the element one by one AND count
        if (arr[i] === arr[i + 1]) {
            startCount++;
        }
        else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {  // but where does it end? 
            // then create a new array
            arr[i - startCount] = arr.slice(i - startCount, i + 1);
            startCount = 0; // counter is 0'd for next duplicate(s)
        }
    });
    arr.forEach(function(num, ind) {
        while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
            arr.splice(ind + 1, 1);
        }
    });
}

// did I even need to sort the array first? 
arrayUnsorted = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, [1,1,1], [20,20]]
// yes, sorting was needed.


// but what happens if we add string data to the array? 
const arrayBeginWithStr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20, 'd', 'a', 'v', 'i', 'd']; 

function sortMyArr(arr) {
    arr.sort(function(a, b) {    
        return a - b;
    });
}
arrayBeginWithStr;  // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591, 'd', 'a', 'v', 'i', 'd']
// interesting this canno't work on strings, but then it was a bonus question, so perhaps that was to be expected. 

// just to view this again....
const arrayHasStrData = [1,2,4,'d', 591,392, 'a',391,2,'v',5,10,'i',2,1,'d',1,1,20,20, 'd', 'a', 'v', 'i', 'd']; 
sortMyArr(arrayHasStrData); // this still works unexpectedly 
// [1, 1, 1, 1, 2, 2, 2, 4, 'd', 5, 10, 391, 392, 591, 'a', 'v', 'i', 'd', 20, 20, 'd', 'a', 'v', 'i', 'd']
// we can see that some of the letters are sorted if in middle of the pack
// what does CleanTheRoom do? 

cleanTheRoom(arrayHasStrData); 
arrayBeginWithStr;  // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591, 'd', 'a', 'v', 'i', 'd']
// mind blown! 
// it sorts, but doesn't create the new nested arrays and removes the string values in the middle of the array for some reason? 

// ------------ MOVING ON ------------ \\ 

/* 
Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3] 
*/

function doesItSum (arr, goal) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === goal) {
                return console.log(`${arr[i]} + ${arr[j]} = ${goal}`)
            }
        }
    }
}

const arrForSum = [1,2,3,4,5];
doesItSum(arrForSum, 7);

// this kind of works, but, it does allow the i to be duplicated... 
/*
doesItSum(arrForSum, 7);
2 + 5 = 7

doesItSum(arrForSum,9); 
 4 + 5 = 9

doesItSum(arrForSum,15);
undefined

doesItSum(arrForSum,10);
 5 + 5 = 10

doesItSum(arrForSum,3);
 1 + 2 = 3

doesItSum(arrForSum,2);
 1 + 1 = 2
*/

// ------------ MOVING ON ------------ \\ 

/*
Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. */


// FIRST ATTEMPT - I WILL FIRST DECIDE IF I RECEIVED A HEX CHAR
function hexToRgb (val) {
    if (val.includes(A || B || C || D || E || F)) { // not sure if can use .includes() like this? 
        console.log('has it');
    }
}

// SECOND ATTEMPT - thought of a simpler check - how many chars did I get? 
function hexToRgb (val) {
    let stringy = val.toString();   // initially I want the input to be a string no matter what
    // console.log(typeof(stringy));    // no longer needed, just testing 

    if (stringy.length > 6) { 
        console.log('this is a lazy check to see if I received a 6 char HEX value or a 9 char RGB value');
        // okay so now I have more than 6 char's and we're assuming RGB
        // how do we splice this?

    } else {
        console.log('this must be a HEX');
    }
}