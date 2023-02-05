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

// -------------- // cloning objects \\ ------------ \\

// let's look at some simple variables: 

var a1 = 'a1';
var a2 = a1;

a1 === a2; // true

// so at this stage a1 and a2 are pointing to the same memory location. but...

a2++; 
a1 === a2; // false

// at this stage, the a2 seems to be cloned in to a new memory location, allowing them to contain unique values
console.log(a1, a2); // uahh, I broke this, because I can't really increment a string, forgot that I instantiated a1 as a string 'a1'
console.log(a1, a2); // a1 NaN

// so to try again and ensure it is easier to observe....


var a3 = 1;
var a4 = a3;

a3 === a4; // true

a4++; 
a3 === a4; // false
// cloned in to a new memory location, allowing them to contain unique values
console.log(a3, a4); // 1, 2

// okay, this ia a mutable data type
// arrays and objects are immutable, they can be added to, updated, but will not clone themselves on the fly

b1 = [1,2,3,4];
b2 = b1; // a pointer to b1 memory location
b1 === b2; // true

b2.push(10); // can I add an item to the end of b2, ergo clone it to a new location and then have 2 unique arrays? 
console.log(b1, b2); // (5) [1, 2, 3, 4, 10] (5) [1, 2, 3, 4, 10]
// no cannot be cloned like this... 
// updating either b1 or b2 will update the other with the same information
// this is arguably memory efficient as doesn't requre twice the memory for the same data

// so how would we take an existing array but then clone it into it's own data type so that it can be modified independent of the source data?

b3 = [].concat(b1); // read as b3 = new empty array which is a concatination of b1 (so they should have same data) 
b3; // (5) [1, 2, 3, 4, 10]

b1 === b3; // false // same values but different memory locations 

b2.pop(); // should remove last element from array
console.log(b1, b2, b3); // (4) [1, 2, 3, 4] (4) [1, 2, 3, 4] (5) [1, 2, 3, 4, 10]
// b1 and b2 are still pointing to same memory location, now containing 4 elements, whereas b3 is a unique memory object, that still contains 5 elements. 

//////////////// OBJECTS are different \\\\\\\\\\\\\\\\\\

let objC1 = {a: 1, b: 2, c: 3};
let objC2 = objC1; // pointer to the same memory location
objC1 === objC2; // true
console.log(objC1, objC2); // {a: 1, b: 2, c: 3} {a: 1, b: 2, c: 3}

objC2.c = 4; // like in the array data type, this will simply update the shared memory location, it will not clone it into a new memory location and now allow it to be unique. Instead both objC1 and objC2 are now updated with the new data: 
console.log(objC1, objC2); // {a: 1, b: 2, c: 4} {a: 1, b: 2, c: 4}

// so to clone an original object, but then allow the new object to be a new independent object, we need to: 
let objC3 = Object.assign({}, objC1); // objC3 = assign({target (empty object)}, source (objC1))
objC1 === objC3; // false
objC2.c = 'boo';
console.log(objC1, objC2, objC3); // {a: 1, b: 2, c: 'boo'} {a: 1, b: 2, c: 'boo'} {a: 1, b: 2, c: 4}

// there is a newer way of cloning objects, even cleaner code: 
let cloneObj = {...objC2};
objC2 === cloneObj; // false
console.log(objC2, cloneObj); // same contents, but again can be modified independent 

// this is sometimes known as a shallow clone. 
// the problem comes if you want to clone an object that has another object in it....
// for this we need JSON stringify, which is super odd......... 

let objC9 = {a: 1, b: 2, c: 3, d: {deep: "deep object"}};
let cloneObjC9 = {...objC9}; 
console.log(objC9, cloneObjC9);
// so they should now be two different objects: 
cloneObjC9 === objC9 // false
// but there is still a reference, if I change the original objects deep object, it will update even the clone.... 
cloneObjC9.d.deep = 'what happens when I change a deep object?';
console.log(objC9, cloneObjC9);
/*{a: 1, b: 2, c: 3, d: {…}}a: 1b: 2c: 3d: {deep: 'what happens when I change a deep object?'}[[Prototype]]: Object {a: 1, b: 2, c: 3, d: {…}}a: 1b: 2c: 3d: {deep: 'what happens when I change a deep object?'}[[Prototype]]: Object
*/ 
cloneObjC9 === objC9 // false
// so are they now linked again? 
objC9.a = 99;
console.log(objC9, cloneObjC9); // no they are not linked, but the deep objects are linked. 

// the way to deal with this is to use JSON.stringify to convert the object into strings, and then make a new object from it 
// this will give you 2 objects that are no longer connected at the deep object state, HOWEVER, if this was  large object or had a very deep object within, it would be a memory hog, a real performance killer. 
// can be done, but use with care!! 


let objC79 = {a: 1, b: 2, c: 3, d: {deep: "the new deep object"}};

let objC79Clone = JSON.parse(JSON.stringify(objC79));

objC79.d.deep = 'what happens when I change a deep object?';
console.log(objC79, objC79Clone);
/* 
{a: 1, b: 2, c: 3, d: {…}}
a: 1
b: 2
c: 3
d: {deep: 'what happens when I change a deep object?'}
[[Prototype]]: Object
 
{a: 1, b: 2, c: 3, d: {…}}
a: 1
b: 2
c: 3
d: {deep: 'the new deep object'}
[[Prototype]]: Object
*/

// they are now completely independent, so this is a GOOD TO KNOW, but it is a performance killer on big or deep objects. 




