// and we're into loops

/* 
JAVASCRIPT LOOPING
-----------------
for
while
do 
forEach (new in ECMAScript 5) 
*/

var todoList = [
    'vacuum the downstairs',
    'vacuum the upstairs',
    'clean the hard floors',
    'check for cobwebs and remove',
    'move the switch and switch games out of reach',
    'shoulkd we get some toys from conservatory?'
];

// so how would we go through this array of todo items? 

for (var item=0; item < todoList.length; item++) { // this will run through each item in the array
    console.log(todoList[item]);
}

// lets say we want to have a 'done lis
donelist = [];
for (var item=0; item < todoList.length; item++) {
    donelist.push(todoList[item] + ' DONE');
    //console.log(donelist);
}

// lets say we wanted to cut things off the array

for (var item=0; item < todoList.length; item++) {
    todoList.pop();
    console.log(todoList);
}

// this actually DOES NOT do as we might first imagine
/* 
the first time the for loop runs, item = 0, list length = 6
    pop the end item
next time the loop runs, item = 1, list length = 5
    pop the end item
next time the loop runs, item = 2, list length = 4
    pop the end item
next time the loop runs, item = 3, list length = 3

now the loop item is no longer less than the list lengh so the loop ends
HOWEVER there are 3 items remaining

an alternative would be to define the list.lenght as a variable before the first loop runs:
*/

var lengthOfList = todoList.length;

for (var item=0; item < lengthOfList; item++) {
    todoList.pop();
    console.log(todoList);
}

// this now performs as expected.