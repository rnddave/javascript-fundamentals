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

