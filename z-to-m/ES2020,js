// I think a lot of new things in ES2020

// bigInt
// nullish coalescing operation
// optional chaining operation 
// Promise.allSettled
// globalThis

// BigInt = new data type

typeof 4;       // number
typeof Infinity;        // number

typeof 1n;      // bigint
// want to know more?   https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

// used when we have a number greater than the max-safe-integer

number1 = Number.MAX_SAFE_INTEGER ;     // 9007199254740991

// essentially the most JS can hold in memory (using the integer data type) 

/*
number1 = Number.MAX_SAFE_INTEGER ; 
9007199254740991

bigNum = number1 + Number.MAX_SAFE_INTEGER;
18014398509481982

typeof bigNum; 
'number'

bigerNum = bigNum * bigNum;
3.2451855365842665e+32

typeof bigerNum
'number'

// some really unexpected answer above, mostly, why it stays as a type number tbh. 
*/

// ----------- Optional Chaining Operation ------------ \\ 
// ----------- ?. [ Questionmark period ] ------------ \\ 
// important to remember it can't check the end of the chain


// so first we assume we have 2 similar objects: 

let myPokemon = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.4,
        weight: 6.2
    }
}

let myPokemon2 = {
    raichu: {
        species: 'mouse pokemon',
        height: 0.8,
        weight: 19.2
    }
}

let weight = myPokemon.pikachu.weight;
console.log(weight);

let weight2 = myPokemon2.pikachu.weight;
console.log(weight2); // this will result in a failure, because myPokemon2 does not have the Pikachu object)

// so in the old ways, and in some old code, you will see that there are these checks that work through the object: 
if (myPokemon2.pikachu && myPokemon2.pikachu.weight) { // if myPokemon2.pikachu exists AND .....
    let weight2 = myPokemon2.pikachu.weight // then weight 2 = this
} else {
    let weight2 = undefined                 // else it is undefined 
}

// this doesn't look nice, is complicated and can add a lot of code to your program
// new way to do it... 

let weight3 = myPokemon2?.pikachu?.weight;  // the ? is saying 'is there a myPokemon2? then is there a pikachu? then return weight
                                    // again, important to remember, optional chaining doesnt check the end of the chain
console.log(weight3);   // undefined
                        // so it doesn't throw an error, it gives the undefined. 
                        // it allows you to ask if a property exists 
                        // doesn't need the long complex if statements

// ----------- Nullish Coalescing Operation ------------ \\ 
// ----------- ?? [ Double Questionmark ] ------------ \\ 

// can sometimes be used instead of the || [ OR ] operator

let myPokemon3 = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.4,
        weight: 6.2,
        power: 'lightening'       // this is a new property compared to previous examples
    }
}

let myPokemon4 = {
    pikachu: {                  // both of the new objects now have a pikachu, but one is missing power
        species: 'mouse pokemon',
        height: 0.8,
        weight: 19.2
    }
}

let myPokemon5 = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.4,
        weight: 6.2,
        power: ''       // this is now an empty string
    }
}

// in this case we want to pass optional parameters to check if power even exists

// this evaluates if this is 'truthy'  - this is how JS works... 

let power = myPokemon3?.pikachu?.power || 'no power';   // lightening
let power2 = myPokemon4?.pikachu?.power || 'no power';   // no power
let power3 = myPokemon5?.pikachu?.power || 'no power';   // no power (because the string is empty)

// but how does this relate to nullish coalescing? 

// well the output is different, so forexample, let's evaluate some new objects: 

let myPokemon6 = {
    pikachu: {                  
        species: 'mouse pokemon',
        height: 0.8,
        weight: 19.2
                        // this one is missing power
    }
}

let myPokemon7 = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.4,
        weight: 6.2,
        power: ''       // this is now an empty string
    }
}

let myPokemon8 = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.4,
        weight: 6.2,
        power: 0       // this is now a number
    }
}

let power6 = myPokemon6?.pikachu?.power ?? 'no power';   // no power (that property is actually missing)
let power7 = myPokemon7?.pikachu?.power ?? 'no power';   // '' (returns the empty string)
let power8 = myPokemon8?.pikachu?.power ?? 'no power';   // 0 (returns the numeric value)

// the output of this is quite different from the output of the || operator 