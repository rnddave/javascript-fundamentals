var arrayNo1 = ['dog', 'cat', 'fish', 'bird'];

arrayNo1

// remove first item

arrayNo1.shift();

// remove the last item

arrayNo1.pop(); 

// add element to end of array 

arrayNo1.push('elephant')

// can I remove a different item? 

arrayNo1.shift(1); // yes I can

// this will let me add a number of elements to the array

arrayNo1.concat(['dog', 'cat', 'fish', 'bird']) // at this stage array has 6 elements 

// sort the list: 

arrayNo1.sort() // NB this will not work how I thought it would

// this only sorted the original list that had only 2 items in it now... 
// output = ['elephant', 'fish']
// to get round this, we would need to define a new variable for the concat array 

var arrayNo2 = arrayNo1.concat(['dog', 'cat', 'fish', 'bird']);
arrayNo2.sort();
// bird, cat, dog, elephant, fish, fish

