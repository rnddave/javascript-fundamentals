
// variables for the data collection

var button = document.getElementById('addItemToList');
var userInput = document.getElementById('userInputBox');
var ul = document.getElementById('shoppingList');

// what do we want the button to do

// check that we're no receiving a 0 length item
function inputLengthCheck() {
    return userInput.value.length;
}

// create a new LI and add the new userInput item to the list
function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = ''; // this clears the input box after input
}

// HOW DO WE GET THOSE INPUTS?

// button click listener
button.addEventListener('click', function() {
    
    if (inputLengthCheck() > 0) {
        createListElement();
    } 
})

// listener for the enter key (so don't need mouse clicks)
userInput.addEventListener('keypress', function(event) {
    
    if (inputLengthCheck() > 0 && event.keyCode === 13) {
        createListElement();
    } 
})


