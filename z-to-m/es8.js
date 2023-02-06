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
















