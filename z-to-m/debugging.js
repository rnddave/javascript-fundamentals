// some JS debugging material

// lot of time as dev is spent debugging 

// so you arrive in work and someone says this isn't working, what to do. ... ... ...
const flattened = [[0,1],[2,3],[4,5]].reduce((a, b) => a.concat(b), []);

// STEP 1. just read it 

// looks like a nested array
// looks like we want to flatten it
// looks like they want to reduce it and push it to an empty array []

// let's change names so things are easier to read 
const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator, array) => accumulator.concat(array), []);

// next we might want to remove from a single line, add some console logs to see if items are appearing as we expect them
const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator, array) => {
    console.log('array', array);
    console.log('accumulator', accumulator);
    return accumulator.concat(array)
}, []);

/*
// what this will do is go through each nested array, so we expect 3 runs 

array (2) [0, 1]                // first array
accumulator []                  // accumulator is empty (correct)
array (2) [2, 3]                // second array (second run)
accumulator (2) [0, 1]          // but the accumulator has now collected the elements from first run 
array (2) [4, 5]                // third run through
accumulator (4) [0, 1, 2, 3]    // accumulator has collected the 2 previous runs of elemenets into that new array 
                                // at this point the accumulator would be updated to include elements from 3rd run, but output is not shown 
*/

// so that's one way, but actually, instead of using console.log, we can use debugger 

const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator, array) => {
    debugger;
    return accumulator.concat(array)
}, []);

// what this will do is allow you to step through each step, so you would also see the three runs through the array. 
// the demo of this didn't work on my browser console. 