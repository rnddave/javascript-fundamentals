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

////////////////////

// SWITCH STATEMENT

function moveCommand(direction) {
    var whatHappens; 
    switch (direction) { // kind of say 'IF direction =
        case 'forward': // IF forward THEN
            whatHappens = 'you found the monster';
            break;
        case 'back':    // IF back THEN
            whatHappens = 'shhh the monster can hear you clattering about';
            break;
        case 'left':
            whatHappens = 'can you smell the fear?';
            break;
        case 'right':
            whatHappens = 'it\'s a long dark hallway';
            break;
        default:    // if none of these conditions match, then this is a default message
            whatHappens = 'don\'t talk gibberish to me';
    }
    return whatHappens;

}

