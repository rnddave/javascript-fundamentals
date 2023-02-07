// new features ES10 - 2019

// flat()

let anAlreadyFlatArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
anAlreadyFlatArray.flat(); // would flatten the array, but as it's already flat, there is little to do here 

let aMultiDimensionArray = [[1, 2 ,3],[4, 5, 6],[7,8,9]]
console.log(aMultiDimensionArray);
/*
0: (3) [1, 2, 3]
1: (3) [4, 5, 6]
2: (3) [7, 8, 9]
*/
squashed = aMultiDimensionArray.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// however, good to know that default depth is 1. So a nested, nested array wouldn't be flattened by default

let deepArray = [1, [2, 3, [4, 5, 6, [7, 8, 9,]]]]; 
deepArray.flat() // (4) [1, 2, 3, Array(4)]
/*
(4) [1, 2, 3, Array(4)]
0: 1
1: 2
2: 3
3: Array(4)
    0: 4
    1: 5
    2: 6
    3: Array(3)
        0: 7
        1: 8
        2: 9
        length: 3
*/
// so we can pass depth parameters as well 

lessDeep = deepArray.flat(2); // (7) [1, 2, 3, 4, 5, 6, Array(3)]
lessDeeper = deepArray.flat(3); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// additional challenge - what if it's a really large array and you don't know how deep it goes, how would you flatten that in most efficient route possible? 

/// ahh my old friend infinity... 

let infiniteArray = [1, [2, 3, [4, 5, 6, [7, 8, 9,],],[1, [2, 3, [4, 5, 6, [7, 8, 9,],]],[1, [2, 3, [4, 5, 6, [7, 8, 9,]]]]]],[1, [2, 3, [4, 5, 6, [7, 8, 9,]]]],[[1, 2 ,3],[[1, 2 ,3],[4, 5, 6],[7,8,9]],[4, 5, 6],[7,8,9]]]; 

// now I just copy and pasted loads of existing array values into here, so I don't even know how deep it is. 

crushTheArray = infiniteArray.flat(Infinity); 
//(54) [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 7, 8, 9]

/// =========== FlatMap() =================== \\\ 

// a little hard to show with my examples, but allows you to both flatten an array and map at the same time, let's try it. 

let infiniteArrayMapper = [1, [2, 3, [4, 5, 6, [7, 8, 9,],],[1, [2, 3, [4, 5, 6, [7, 8, 9,],]],[1, [2, 3, [4, 5, 6, [7, 8, 9,]]]]]],[1, [2, 3, [4, 5, 6, [7, 8, 9,]]]],[[1, 2 ,3],[[1, 2 ,3],[4, 5, 6],[7,8,9]],[4, 5, 6],[7,8,9]]]; 

let mappyExample = infiniteArrayMapper.flatMap(elem => elem + ' thingy'); 
// interestingly this didn't do exactly as I thought it would as it add ' thingy' to each layer of the array rather than to each emelent in the array.

let infiniteArrayMapper = [1, [2, 3, [4, 5, 6, [7, 8, 9,],],[1, [2, 3, [4, 5, 6, [7, 8, 9,],]],[1, [2, 3, [4, 5, 6, [7, 8, 9,]]]]]],[1, [2, 3, [4, 5, 6, [7, 8, 9,]]]],[[1, 2 ,3],[[1, 2 ,3],[4, 5, 6],[7,8,9]],[4, 5, 6],[7,8,9]]]; 

let mappyExample = infiniteArrayMapper.flatMap(elem => elem + ' depth Marker'); 
// ['1 depth Marker', 
// '2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9 depth Marker', 
// '1,2,3,4,5,6,7,8,9 depth Marker', 
// '1,2,3,1,2,3,4,5,6,7,8,9,4,5,6,7,8,9 depth Marker']

// flattens to a depth of 1

/// =========== trimStart() & trimEnd() =================== \\\ 

// these get rid of whitespace 

const someUserInput0 = '            * david *'
const someUserInput1 = '            * david *              '
const someUserInput2 = '* david *             '

console.log(someUserInput0.trimStart());    // * david *
console.log(someUserInput1.trim());         // * david *
console.log(someUserInput2.trimEnd());      // * david *

// can trim just start, just end, or all wrapped whitespace 


/// =========== fromEntries() =================== \\\ 

// video example suggests that somehow we have received an array of user details, but would prefer it as an object. 

const gamePlayerDetails = [['david', 43, 'male', 'swindon'], ['xiao', 35, 'female', 'swindon'], ['colin', 5, 'male', 'swindon'], ['nolan', 1, 'male', 'swindon']];

// now we want to migrate this to an object so that we can easily update values in future perhaps? 
Object.fromEntries(gamePlayerDetails);  // {david: 43, xiao: 35, colin: 5, nolan: 1}
// however by default that assumes we only expect a single key:value pair and it seems to discard the others... 
// actually I was overzelous in my building of the example, it seems fromEntries only works on arrays of 2 (x: y, x: y)

/// =========== try & catch =================== \\\ 

try {
    4*5
} catch {
    console.log('there was an error');
}

// let's throw some simple things at it

try {
    true + ' Hi';
} catch {
    console.log('Nope, that does not work');
}

// in this case, it will do type coercion = converting true to a string and concat so the first condition will work
//  'true Hi'

// but if we throw something at it that it hasn't seen, like an undeclared variable: 

try {
    whoIsThisVariable + ' Hi';
} catch {
    console.log('Nope, that does not work');
}

// we get second condition, the catcher :   
//  Nope, that does not work

/// =========== PRACTICE TIME!!!!!!!!!!!!!!!! =================== \\\ 

/*

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

*/

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat(Infinity);   // (5) [1, 2, 3, 4, 5]

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
greeting.flat(); // this didn't work as output not exactly what was asked
// ['Hello', 'young', 'grasshopper!', 'you', 'are', 'learning', 'fast!']    // note the coma between words differs from exampe

const greeting2 = greeting.flatMap(elem => elem.join(' ')); // [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// needed help from solution for this.

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const greeting3 = greeting2.toString();     // not quite >>  [ 'Hello young grasshopper!,you are,learning fast!' ]
const greeting3b = greeting2.join(' ');     // 'Hello young grasshopper! you are learning fast!'    >> still have !
// checked solution, they do it a different way, but also have the ! at end of first array 

// solution =   >>      console.log(greeting.flatMap(x => x.join(' ')).join(' ')) 
// I noticed that they are still working on greeting, where as I am working on the output of an already converted greeting.

const greeting3c = greeting.join(' ');      // which wouldn't work  >>  'Hello,young,grasshopper! you,are learning,fast!'

const greeting3d = greeting.flatMap(elem => elem.join(' ')).join(' ');      //  'Hello young grasshopper! you are learning fast!'








