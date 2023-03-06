/*
This recursive function creates a stack overflow. How can you fix this code by still keeping the recursive call around, but only adding something that you have learned in this section to not cause this stack overflow.
*/

//fill array with 60000 elements

// ATTEMPT 1 >> 

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();
      if (list.length > 1) {
        removeItemsFromList();
    } 
};                         
removeItemsFromList();          // ERROR Maximum call Stack size exceeded


// ATTEMPT 2 >> 

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    while (list.length > 0) {
        removeItemsFromList();
    }
};

removeItemsFromList();          // ERROR Maximum call Stack size exceeded

// ATTEMPT 3 >> 

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    for (item = 0; item < list.length; item++) {
        list.pop(item);
    }
};

removeItemsFromList();          // THIS ONE = INTERESTING
/*
this one removed the items without memory issue, but because list.length changes, the code only removed 50% of the items before finishing
-------------------
list;

(30000) ['1', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', …]
*/

// ATTEMPT 4 >> 

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    const sizeOfList = list.length;                         // expect a number of 60000
    //console.log(sizeOfList);                              // just making sure that this is a fixed number

    for (item = 0; item < sizeOfList; item++) {             // cheating by referencing a fixed number
        list.pop(item);
        //console.log(`There are ${sizeOfList - item} items left in the Array` )  // not needed, just wanted to see the count
    }
};

removeItemsFromList();          // WORKS!! 




