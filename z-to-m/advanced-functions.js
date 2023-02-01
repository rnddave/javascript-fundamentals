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

// COMPOSE

// act of putting 2 FUNCTIONS together to create a THIRD function where the OUTPUT of one is the INPUT of another ??????????????

// head hurts

const composeExample = (f, g) => (h) => f(g(h));
// wtf

// what is happening here? 
// f is a function
// g is a function (look at the colours)

const sumCompose = (num) => num + 1;

composeExample(sumCompose, sumCompose)(5); // 7

// what the actual fuck is going on here!

// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0-// -0-0-0-0- //

// important to remember

// avoid side affects
/*
DONT AFFECT OUTISDE WORLD IF POSSIBLE 
DONT USE FUNCTIONS TO UPDATE GLOBAL VARs FOR EXAMPLE 
 */

// function purity
/*
avoid side affects
return something
= DETERMINISTIC 

this means that if we always input X,Y parameters then we ALWAYS get the same thing returned

this avoids random bugs

*/




