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

