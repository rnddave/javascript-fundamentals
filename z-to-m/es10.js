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










