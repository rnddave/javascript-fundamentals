// let and const

// we don't use the var anymore in reality 

const player = 'bobbyOrange';
let exp = 200;
let wizardLevel = false;

if (exp > 90) {
    // let wizardLevel = true; // this won't work as this is a local variable
    wizardLevel = true;
}

// we should use let for variables

// what is a const

// const is a constant and cannot be changed

// why useful? 

// lots of bugs come from no knowing where the variable has been changed

// using const ensures the value remains as expected, so if you believe it won't change, then use a const 


// ------------------

// DESTRUCTURING

const playObj = {
    player: 'bobbyOrange',
    experiencePoints: 100,
    wizardLevel: false
}

// if you wanted to change all of these in old way: 

const player = playObj.player;
const experiencePoints = playObj.experiencePoints;
let wizardLevel = playObj.wizardLevel;

// but now can do: 

const { player, experiencePoints } = playObj; // does same as first 2 lines from above
let { wizardLevel } = playObj; // just need to get used to it

// what about TEMPLATE STRINGS - backticks `` 

const name = 'sally';
const age = 34;
const studying = 'z2m';

const greetingsTemplate = `hello ${name} I know you are aged by ${age} and are studying ${studying}` ;

// or even more interesting when in a function; 

function greetMe(name='', hasChildren=Boolean, from='') { // these are basically default values
    if (hasChildren === true) {
        return `Hey ${name}, how is it in ${from} and how are the kids?`
    } else {
        return `Hey ${name}, how is it in ${from}?`
    }
}

// so I can call greetMe() and will receive "Hey  how is it in  ? 

// if I pass greetMe('david', true, 'UK') I get the first IF statement

// or can call greetMe('John', false, 'America') and will get second IF statement

// so I could improve my defaults: 

function greetMe(name='DaWei', hasChildren=Boolean, from='UK') { // these are basically default values
    if (hasChildren === true) {
        return `Hey ${name}, how is it in ${from} and how are the kids?`
    } else {
        return `Hey ${name}, how is it in ${from}?`
    }
}


/* greetMe()
'Hey DaWei, how is it in UK?'
greetMe('David', true, 'China')
'Hey David, how is it in China and how are the kids?'
greetMe('John', false, 'America')
'Hey John, how is it in America?' */

// -0-0-0-0-0-0-0-0-0-0-0-0-0-

// javascript TYPES = SYMBOL 

// not really used very often

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3; // false - refer to unique memory objects

let string1 = 'foo';
let string2 = 'foo';

string1 === string2; // true - different objects but still match? 

// this is really not seen very often in the wild tbh. 

// -0-0-0-0-0-0-0-0-0-0-0-0-

// ARROW FUNCTIONS

// we've seen this in REACT already, but wasn't clear before 

// previously 

function addAB(a, b) {
    return a+b;
}

// arrow function would make it look like this

const addAb = (a, b) => a + b;

/*
function addAB(a, b) {
    return a+b;
}

const addAb = (a, b) => a+b;


addAB(4, 5);
9

addAb(5, 4);
9
*/
