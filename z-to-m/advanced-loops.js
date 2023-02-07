// https://academy.zerotomastery.io/courses/697434/lectures/12634744

const basket = ['banana', 'apple', 'oranges', 'grapes'];

// just a recap. 
// for (OG loop)

for (let i = 0; i <= basket.length; i++) {
    console.log(basket[i]);
}   // will print each item on own line

// forEach (tidier)

basket.forEach(elem => console.log(elem)); // does each item on single line

// ---------- NEW STUFF = for Of && for In   ------------   \\ 
//                                                          \\
// ----------                                ------------   \\ 

// ----------  for of = Arrays & Strings     ------------   \\ 
//                  WE ARE ITERATING                        \\

for (elem of basket => console.log(elem)); // this is not an arrow function

for (elem of basket) { 
    console.log(elem)
};  // this works but I don't like it as much as the forEach (personaly) 


// ----------  for In = objects              ------------   \\ 

// ----------  for In IS NOT ITERATING - we are ENUMERATING
//                  WE ARE ENUMERATING                      \\

const basket2 = {1: 'banana', 2: 'apple', 3: 'oranges', 4: 'grapes'};

for (elem in basket2) {
    console.log(basket2[elem]);
}
/*
banana
apple
oranges
grapes
*/