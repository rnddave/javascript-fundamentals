// ternary operator

// looks like

/* 

condition ? expresion1 : expression2;



CONDITION ? 
ifTrue = expression1
else = expression2

example:

*/

function userValid(bool) {
    return bool;


}

var answer = userValid(true) ? 'Welcome' : 'Go away';

// type answer receive 'welcome'

// lets add to this

var autoAnswer = 'your account number is ' + ( userValid(false)  ? '88 09 79 23' : 'unavailable');

