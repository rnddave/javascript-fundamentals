// advanced objects & ES6

// IMPORTANT THINGS: 
// Reference type
// context
// instantiation 

// -------------- // Reference type \\ ------------ \\

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; // true

object1 === object3 // false (different memory)

typeof(object1); // object

// -------------- // CONTEXT \\ ------------ \\

// gets confused with scope apparently 

// context vs scope

function booboo () {
    let a = 69; // local scope 
    console.log(this);
}

// how is context different? 
// tells us where we are within scope 

console.log(this); // returns the window object

// this = what is the object environment that we're in right now? 
// what is to the left of the dot

// expand on this 

const obj4 = {
    a: function() {
        console.log(this); 
    }
}

obj4 // "this" is now a function

// why is it important to us? 
// important for instantiation 

// -------------- // INSTANTIATION \\ ------------ \\

// make instances or copies of an object

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    intro() {
        console.log(`Hi i am ${this.name}, I am a ${this.type}`)
    }
}

class Wizzard extends Player {
    constructor(name, type) {
        super(name, type); //we want access to parents parameters
    }
    play() {
        console.log(`I am a ${this.type}`)
    }
}

// so now we see how to call them: 

const wiz1 = new Wizzard('Dave', 'Healer' );
const wiz2 = new Wizzard('Xiao', 'Dark Arts -er');

wiz1.play() // so I can access the methods in Wizzard
wiz1.intro() // andthe methods in Player