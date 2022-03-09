// OBJECTS >>> Here is a sample of using dot notation (.) to read an object's property:

const myObj75 = {
    prop1: "val1",
    prop2: "val2"
  };
  
  const prop1val = myObj75.prop1;
  const prop2val = myObj75.prop2;
  
  /*
  The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
  
  However, you can still use bracket notation on object properties without spaces.
  
  Here is a sample of using bracket notation to read an object's property: */
  
  const myObj76 = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  
  myObj76["Space Name"];
  myObj76['More Space'];
  myObj76["NoSpace"];
  
  /*
  Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
  
  Here is an example of using a variable to access a property:*/
  
  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed);
 // console.log("are you working?"); // yes it is now working...
  
 const someObj = {
    propName: "John"
  };
  
  function propPrefix(str) {
    const s = "prop";
    return s + str;
  }
  
  // Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:


  const someProp = propPrefix("Name");
  console.log(someObj[someProp]);
  
// ^^^ 100% do not get this, what is the point of this, this seems very inefficient, perhaps just a bad coding example? 

//   You can add new properties to existing JavaScript objects the same way you would modify them.
  
// we can test this using the dogs object from earlier: 

console.log(dogs);      
// { Fido: 'Mutt', Hunter: 'Doberman', Snoopie: 'Beagle' }

dogs.Scooby = "Great Dane";
console.log(dogs);
/*
{
  Fido: 'Mutt',
  Hunter: 'Doberman',
  Snoopie: 'Beagle',
  Scooby: 'Great Dane'
}
*/

/*
We can also delete properties from objects like this:

delete ourDog.bark;
*/

function phoneticLookup(val) {
    let result = "";
  
    const lookup = {
      alpha: "Adams",
       bravo: "Boston",
       charlie: "Chicago",
       delta: "Denver",
       echo: "Easy",
       foxtrot: "Frank"
    }
  
    result = lookup[val];

    return result;
  }
  
  phoneticLookup("charlie");
  console.log(phoneticLookup("charlie"))
  
  
  
  
  
  
  