//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const oneLineFunction = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // GUESS = [ 13 ] { CORRECT }

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // GUESS = [ 31 ] { CORRECT }


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // GUESS = [ 17 ] { CORRECT }

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // GUESS = [ 16 ] { CORRECT }


//What are the two elements of a pure function?

// AVOID SIDE AFFECTS 
// ALWAYS RETURN SOMETHING