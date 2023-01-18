// simplest of functions

function myFirstFunc() {
    alert('this is a function that just simply calls an alert');
}

myFirstFunc();

// a function expression 

var sayBye = function() {   // this is an anonymous function
    alert('Goodbye');
}

sayBye()

// passing an argument

function singSong(song) {
    console.log(song)
}

singSong('singing a song for santa');
singSong('lalalalalalalala');

// some simple math

function multiply (a, b) {
    console.log(a * b);
}

multiply(54, 72);

// with a return
function multiply2 (a, b) {
    sum = a * b;    // dont need this, can be simplified
    return sum
}

multiply2(54, 72);

// return simplified
function multiply3 (a, b) {
    return a * b;
    }
multiply3(54, 72);

// a function can be a variable as well - don't really know why, but here goes

var a99 = function multiply4(a, b) {
    return a*b;
}
a99(7, 12);