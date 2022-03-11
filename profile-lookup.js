// Profile Lookup

/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

*/

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line

    // if the [name] is a firstname then {if-a}
    // if the [prop] exists for that [name] (nested if statements I'm thinking) {if-b}
    // if both {if-a && if-b} true then [return] the [value] of that property
    if (name == contacts.firstName && prop == contacts.likes) {
        return contacts.likes[prop];
    }
    else if (name != contacts.firstName) {
        return "No such contact"
    }
    else if (name == contacts.firstName && prop != contacts.likes) {
        return "No such property"
    }


    // if [name] does not correspond to any contacts then return the string [No such contact]

    // if [prop] no correspond to any valid properties, then return [No such property]


    // Only change code above this line
}

lookUpProfile("Akira", "likes");


/*

STARTING CODE >>>> 

// Setup
const contacts = [
{
  firstName: "Akira",
  lastName: "Laine",
  number: "0543236543",
  likes: ["Pizza", "Coding", "Brownie Points"],
},
{
  firstName: "Harry",
  lastName: "Potter",
  number: "0994372684",
  likes: ["Hogwarts", "Magic", "Hagrid"],
},
{
  firstName: "Sherlock",
  lastName: "Holmes",
  number: "0487345643",
  likes: ["Intriguing Cases", "Violin"],
},
{
  firstName: "Kristian",
  lastName: "Vos",
  number: "unknown",
  likes: ["JavaScript", "Gaming", "Foxes"],
},
];

function lookUpProfile(name, prop) {
// Only change code below this line

// Only change code above this line
}

lookUpProfile("Akira", "likes");

*/