/*
//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
*/

//#1
[2] === [2]     // false
{} === {}       // false

//#2 what is the value of property 'a' for each object.
const objectZ1 = { a: 5 };   // 4
const objectZ2 = objectZ1;    // 4
const objectZ3 = objectZ2;    // 4
const objectZ4 = { a: 5};    // 5
objectZ1.a = 4;              

console.log(objectZ1, objectZ2, objectZ3, objectZ4);

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color, sound) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.sound = sound;
    }
}

class Mamal extends Animal{
    constructor(name, type, color, sound) {
        super(name, type, color, sound);
    }
    whatAmI () {
        console.log(`I am a ${this.color} ${this.type} and my name is ${this.name}, I make a ${this.sound} sound`);
        //console.log(Mamal.common());
    }
}

const cow = new Mamal('Flossie', 'cow', 'brown', 'moo');
cow.whatAmI();