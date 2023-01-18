// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

/* you should have at the end:
["Kiwi", "Oranges", "Blueberries"] */

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();          //1
array.sort();           //2
array.push('Kiwi');     //3
array.shift();          //4
array.reverse();        //5

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1][0] // had to look at solution for this answer as was trying array2.at([1][1][0]) which did not work