// https://academy.zerotomastery.io/courses/697434/lectures/24955213

// child scope always has access to parent scope

const parentFunc = () => {
    const greet = 'I\'m a parent';
    const childFunc = () => {
        alert(greet);
    }
    return childFunc;
}

const newParent = parentFunc();

newParent();

// this calls parentFunc() which instantiates a greet constant and then calls childFunc() which 'ALERT' the greet constant.


// closure

// function ran, will never run again, but will remember there are references to those variables. The child Scope always has access to parent scope


//children alway have access to parent scope, 
// parents do NOT always have access to their child scope

// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0- //

// CURRYING

// process of converting a function that takes multi arguments into a function that takes 1 at a time

// example

const multiply = (a, b) => a*b; // this takes multiple arguments

// currying means only take one at a time: 
const curriedMultiply = (a) => (b) => a*b; // think of each arrow as it's own function 
// but WHY ? because I don't know. makes it look way more complicated to me!!!! 

curriedMultiply(3)(7); // I need to pass to different separate parameters, one for each function

// example continues 

// the reason to do this is that you can make it more extensible 

const multiplyByPi = curriedMultiply(3.14);

// essentially I have given half the argument, (3.14) so now can call as such

multiplyByPi(15); // 47.1 [ 15 * 3.14 ]

// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0- //






